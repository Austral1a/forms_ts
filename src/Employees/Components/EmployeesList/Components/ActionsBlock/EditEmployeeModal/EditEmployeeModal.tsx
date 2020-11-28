import React, { FC } from "react";
import { EmployeeModal } from "@Components";
import { EmployeeResponse } from "@StoreEmployees";
import { useEditEmployeeManager } from "./hooks";

interface EditEmployeeModalProps {
  isModalOpen: boolean;
  handleClose: () => void;
  employeeValues: EmployeeResponse;
}
export const EditEmployeeModal: FC<EditEmployeeModalProps> = ({
  employeeValues,
  isModalOpen,
  handleClose,
}) => {
  const {
    employeeFieldsValues,
    submitBtnText,
    editEmployee,
  } = useEditEmployeeManager({ employeeValues });

  return (
    <EmployeeModal
      isModalOpen={isModalOpen}
      submitBtnText={submitBtnText}
      dispatchAction={editEmployee}
      handleClose={handleClose}
      employeeFieldsValues={employeeFieldsValues}
    />
  );
};
