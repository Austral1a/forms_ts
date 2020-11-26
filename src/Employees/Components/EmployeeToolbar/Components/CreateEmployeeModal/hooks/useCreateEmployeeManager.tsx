import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { createEmployeeAction } from "../../../../../../Store/Employees";
import { Employee } from "../../../../../../Store/Employees/interfaces";
import { translations } from "../../../../../../helpers";

interface CreateEmployeeManagerResult {
  createEmployee: (props: { values: Employee }) => void;
  btnText: string;
}

export const useCreateEmployeeManager = (): CreateEmployeeManagerResult => {
  const dispatch = useDispatch();
  const createEmployee = useCallback(
    (props: { values: Employee }) => {
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
    btnText: createText,
  };
};
