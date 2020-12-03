import React, { FC, ReactElement } from "react";
import { EmployeeModal } from "@Components";
import { useCreateEmployeeManager } from "./hooks";

interface CreateEmployeeModalProps {
  isCreateModalOpen: boolean;
  handleClose: () => void;
}

export const CreateEmployeeModal: FC<CreateEmployeeModalProps> = ({
  handleClose,
  isCreateModalOpen,
}): ReactElement => {
  const { createEmployee, submitBtnText } = useCreateEmployeeManager();

  return (
    <EmployeeModal
      isModalOpen={isCreateModalOpen}
      submitBtnText={submitBtnText}
      dispatchAction={createEmployee}
      handleClose={handleClose}
    />
  );
};
