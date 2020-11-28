import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { createEmployeeAction } from "@StoreEmployees";
import { translations } from "@helpers";
import { EmployeeModalFormFields } from "@Employees";

interface CreateEmployeeManagerResult {
  createEmployee: (props: { values: EmployeeModalFormFields }) => void;
  submitBtnText: string;
}

export const useCreateEmployeeManager = (): CreateEmployeeManagerResult => {
  const dispatch = useDispatch();
  const createEmployee = useCallback(
    (props: { values: EmployeeModalFormFields }) => {
      const {
        values: { firstName, lastName, email, position },
      } = props;
      dispatch(createEmployeeAction({ firstName, lastName, email, position }));
    },
    [dispatch]
  );
  const {
    button: { createText },
  } = translations;
  return {
    createEmployee,
    submitBtnText: createText,
  };
};
