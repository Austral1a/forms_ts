import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { editEmployeeAction } from "../../../../../../../Store/Employees";
import {
  Employee
} from "../../../../../../../Store/Employees/interfaces";
import { translations } from "../../../../../../../helpers";
import { FormikProps } from "formik";
import { EmployeeModalFields } from "../../../../../../../Components";

interface EditEmployeeManagerProps {
  employeeId: string;
}

interface EditEmployeeManagerResult {
  submitButtonText: string;
  editEmployee: (props: FormikProps<EmployeeModalFields>) => void;
}

export const useEditEmployeeManager = ({ employeeId }: EditEmployeeManagerProps): EditEmployeeManagerResult => {
  const dispatch = useDispatch();

  const { button: { editText } } = translations;

  const editEmployee = useCallback(
    (props: FormikProps<EmployeeModalFields>) => {
      const { values: { firstName, lastName, email, position } } = props;
      const editActionPayload = {
        id: employeeId,
        firstName,
        lastName,
        email,
        position,
      }
      dispatch(editEmployeeAction(editActionPayload));
    },
    [dispatch, employeeId]
  );
  return {
    submitButtonText: editText,
    editEmployee,
  };
};
