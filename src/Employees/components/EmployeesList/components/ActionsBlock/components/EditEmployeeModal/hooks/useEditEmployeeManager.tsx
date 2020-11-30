import { editEmployeeAction } from "@StoreEmployees";
import { EmployeeModalFormFields } from "@Employees";
import { useDispatch } from "react-redux";
import { translations } from "@helpers";
import { FormikProps } from "formik";
import { useCallback } from "react";

interface EditEmployeeManagerResult {
  submitBtnText: string;
  editEmployee: (props: FormikProps<EmployeeModalFormFields>) => void;
}

export const useEditEmployeeManager = (employeeId: number): EditEmployeeManagerResult => {
  const dispatch = useDispatch();
  const { button: { editText } } = translations;

  const editEmployee = useCallback(
    (props: FormikProps<EmployeeModalFormFields>) => {
      const { firstName, lastName, email, position } = props.values;
      const editActionPayload = {
        firstName,
        lastName,
        email,
        position,
        id: employeeId,
      };
      dispatch(editEmployeeAction(editActionPayload));
    },
    [dispatch, employeeId]
  );
  return {
    submitBtnText: editText,
    editEmployee,
  };
};
