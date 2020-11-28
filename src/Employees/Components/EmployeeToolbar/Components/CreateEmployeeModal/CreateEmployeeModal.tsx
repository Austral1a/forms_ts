import React, { FC } from "react";
import { EmployeeModal } from "@Components";
import { useCreateEmployeeManager } from "./hooks";

interface CreateEmployeeModalProps {
  isModalOpen: boolean;
  handleClose: () => void;
  className?: string;
}

export const CreateEmployeeModal: FC<CreateEmployeeModalProps> = ({
  isModalOpen,
  handleClose,
  className,
}) => {
  const { createEmployee, submitBtnText } = useCreateEmployeeManager();
  return (
    <EmployeeModal
      isModalOpen={isModalOpen}
      className={className}
      submitBtnText={submitBtnText}
      dispatchAction={createEmployee}
      handleClose={handleClose}
    />
  );
};
