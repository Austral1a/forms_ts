import { createEmployeeAction } from "@StoreEmployees";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { translations } from "@helpers";
import { EmployeeModalFormFormikProps } from "@Components";

interface CreateEmployeeManagerResult {
  createEmployee: (props: EmployeeModalFormFormikProps) => void;
  submitBtnText: string;
  isCreateModalOpen: boolean;
  handleClose: () => void;
  handleOpen: () => void;
}

export const useCreateEmployeeManager = (): CreateEmployeeManagerResult => {
  const dispatch = useDispatch();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const createEmployee = useCallback(
    (props: EmployeeModalFormFormikProps) => {
      const { values } = props;

      dispatch(createEmployeeAction({ employee: values }));
      props.resetForm({
        values: { ...props.initialValues },
      });
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
    handleClose: useCallback(() => setIsCreateModalOpen(false), []),
    handleOpen: useCallback(() => setIsCreateModalOpen(true), []),
  };
};
