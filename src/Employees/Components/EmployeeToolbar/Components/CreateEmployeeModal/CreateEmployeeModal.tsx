import React, { FC } from "react";
import { EmployeeModal } from "@Components";
import { useCreateEmployeeManager } from "./hooks";

interface CreateEmployeeModalProps {
  isOpen: boolean;
  handleClose: () => void;
  className?: string;
}

export const CreateEmployeeModal: FC<CreateEmployeeModalProps> = ({
  isOpen,
  handleClose,
  className,
}) => {
  const { createEmployee, submitBtnText } = useCreateEmployeeManager();
  return (
    <>
      {isOpen && (
        <EmployeeModal
          className={className}
          submitBtnText={submitBtnText}
          dispatchAction={createEmployee}
          handleClose={handleClose}
        />
      )}
    </>
  );
};
