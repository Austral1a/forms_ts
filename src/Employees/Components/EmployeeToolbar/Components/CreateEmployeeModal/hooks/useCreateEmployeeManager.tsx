import { createEmployeeAction } from "@StoreEmployees";
import { EmployeeModalFormFields } from "@Employees";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { translations } from "@helpers";

type CreateEmployeeProps = { values: EmployeeModalFormFields };

interface CreateEmployeeManagerResult {
  createEmployee: (props: CreateEmployeeProps) => void;
  submitBtnText: string;
  isCreateModalOpen: boolean;
  handleCreateModalClose: () => void;
  handleCreateModalOpen: () => void;
}

export const useCreateEmployeeManager = (): CreateEmployeeManagerResult => {
  const dispatch = useDispatch();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const createEmployee = useCallback(
    (props: CreateEmployeeProps) => {
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
    isCreateModalOpen,
    handleCreateModalClose: useCallback(() => setIsCreateModalOpen(false), []),
    handleCreateModalOpen: useCallback(() => setIsCreateModalOpen(true), []),
  };
};
