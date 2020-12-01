import { editEmployeeAction } from "@StoreEmployees";
import { EmployeeModalFormFields } from "@Employees";
import { useDispatch } from "react-redux";
import { translations } from "@helpers";
import { FormikProps } from "formik";
import { useCallback } from "react";
import { EmployeeModalFormFormikProps } from "@Components";

interface EditEmployeeManagerResult {
  submitBtnText: string;
  editEmployee: (props: EmployeeModalFormFormikProps) => void;
}
export const useEditEmployeeManager = (
  employeeId: number
): EditEmployeeManagerResult => {
  const dispatch = useDispatch();
  const {
    button: { editText },
  } = translations;

  const editEmployee = useCallback(
    (props: EmployeeModalFormFormikProps) => {
      const { firstName, lastName, email, position } = props.values;
      const id = employeeId;
      const editActionPayload = {
        firstName,
        lastName,
        email,
        position,
        id,
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
