import React, { FC } from "react";
import { EmployeeModal } from "../../../../../Components";
import { useCreateEmployeeManager } from "./hooks";

interface CreateEmployeeModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

export const CreateEmployeeModal: FC<CreateEmployeeModalProps> = ({
  isOpen,
  handleClose,
}) => {
  const { createEmployee, btnText } = useCreateEmployeeManager();
  return (
    <>
      {isOpen && (
        <EmployeeModal
          btnText={btnText}
          dispatchAction={createEmployee}
          handleClose={handleClose}
        />
      )}
    </>
  );
};
