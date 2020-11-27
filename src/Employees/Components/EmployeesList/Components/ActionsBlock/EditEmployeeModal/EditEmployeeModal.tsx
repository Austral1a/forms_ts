import React, { FC } from "react";
import { EmployeeModal } from "@Components";
import { EmployeeResponse } from "@StoreEmployees";
import { useEditEmployeeManager } from "./hooks";

interface EditEmployeeModalProps {
  isOpen: boolean;
  handleClose: () => void;
  employeeValues: EmployeeResponse;
}
export const EditEmployeeModal: FC<EditEmployeeModalProps> = ({
  employeeValues,
  isOpen,
  handleClose,
}) => {
  const {
    employeeFieldsValues,
    submitBtnText,
    editEmployee,
  } = useEditEmployeeManager({ employeeValues });

  return (
    <>
      {isOpen && (
        <EmployeeModal
          submitBtnText={submitBtnText}
          dispatchAction={editEmployee}
          handleClose={handleClose}
          employeeFieldsValues={employeeFieldsValues}
        />
      )}
    </>
  );
};
