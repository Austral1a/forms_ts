import React, { FC } from "react";
import { EmployeeModal, EmployeeModalFields } from "@Components";
import { EmployeeResponse } from "../../../../../../Store/Employees/interfaces";
import { useEditEmployeeManager } from "./hooks";

interface EditEmployeeModalProps {
  isOpen: boolean;
  handleClose: () => void;
  employeeFieldsValues: EmployeeModalFields;
}
export const EditEmployeeModal: FC<EditEmployeeModalProps> = ({
  employeeFieldsValues,
  isOpen,
  handleClose,
}) => {
  const { employeeId } = employeeFieldsValues;

  const {
    submitButtonText,
    editEmployee,
  } = useEditEmployeeManager({ employeeId });

  return (
    <>
      {isOpen && (
        <EmployeeModal
          submitButtonText={submitButtonText}
          dispatchAction={editEmployee}
          handleClose={handleClose}
          employeeFieldsValues={employeeFieldsValues}
        />
      )}
    </>
  );
};
