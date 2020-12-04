import { createEmployeeAction } from "@StoreEmployees";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { translations } from "@helpers";
import { EmployeeModalFormFormikProps } from "@Components";

interface CreateEmployeeManagerResult {
  createEmployee: (props: EmployeeModalFormFormikProps) => void;
  submitBtnText: string;
  isModalOpen: boolean;
  handleClose: () => void;
  handleOpen: () => void;
}

export const useCreateEmployeeManager = (): CreateEmployeeManagerResult => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleClose = useCallback(() => setIsModalOpen(false), []);
  const handleOpen = useCallback(() => setIsModalOpen(true), []);

  const {
    button: { createText },
  } = translations;

  return {
    createEmployee,
    submitBtnText: createText,
    isModalOpen,
    handleClose,
    handleOpen,
  };
};
