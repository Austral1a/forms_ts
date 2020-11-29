import { EmployeeResponse } from "@StoreEmployees";
import { useEditEmployeeManager } from "./hooks";
import React, { FC, ReactElement } from "react";
import { EmployeeModal } from "@Components";

interface EditEmployeeModalProps {
  isModalOpen: boolean;
  handleEditModalClose: () => void;
  employeeValues: EmployeeResponse;
}
export const EditEmployeeModal: FC<EditEmployeeModalProps> = ({
  employeeValues,
  isModalOpen,
  handleEditModalClose,
}): ReactElement => {
  const {
    employeeFieldsValues,
    submitBtnText,
    editEmployee,
  } = useEditEmployeeManager({ employeeValues });

  const { firstName, lastName, position, email } = employeeValues;

  return (
    <EmployeeModal
      isModalOpen={isModalOpen}
      submitBtnText={submitBtnText}
      dispatchAction={editEmployee}
      handleClose={handleEditModalClose}
      employeeFieldsValues={{ firstName, lastName, position, email }}
    />
  );
};
