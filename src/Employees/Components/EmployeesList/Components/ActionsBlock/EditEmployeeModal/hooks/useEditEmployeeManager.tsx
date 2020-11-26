import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { editEmployeeAction } from "../../../../../../../Store/Employees";
import {
  Employee,
  EmployeeResponse,
} from "../../../../../../../Store/Employees/interfaces";
import { translations } from "../../../../../../../helpers";
import { FormikProps } from "formik";

interface EditEmployeeManagerProps {
  employeeValues: EmployeeResponse;
}

interface EditEmployeeManagerResult {
  btnText: string;
  employeeFieldsValues: Employee;
  editEmployee: (props: FormikProps<Employee>) => void;
}

export const useEditEmployeeManager = ({
  employeeValues,
}: EditEmployeeManagerProps): EditEmployeeManagerResult => {
  const dispatch = useDispatch();
  const { id } = employeeValues;
  const { firstName, lastName, email, position } = employeeValues;
  const employeeFieldsValues = { firstName, lastName, email, position };
  const {
    button: { editText },
  } = translations;
  const editEmployee = useCallback(
    (props: FormikProps<Employee>) => {
      dispatch(editEmployeeAction({ ...props.values, id }));
    },
    [dispatch, id]
  );
  return {
    btnText: editText,
    employeeFieldsValues,
    editEmployee,
  };
};
