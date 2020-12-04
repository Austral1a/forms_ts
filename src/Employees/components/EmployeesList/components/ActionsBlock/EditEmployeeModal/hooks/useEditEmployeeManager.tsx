import { editEmployeeAction } from "@StoreEmployees";
import { useDispatch } from "react-redux";
import { translations } from "@helpers";
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
    button: { textEdit },
  } = translations;

  const editEmployee = useCallback(
    (props: EmployeeModalFormFormikProps) => {
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
    submitBtnText: textEdit,
    editEmployee,
  };
};
