import React, { FC } from "react";
import { EmployeeModal } from "../../../../../../Components";
import { EmployeeResponse } from "../../../../../../Store/Employees/interfaces";
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
    btnText,
    editEmployee,
  } = useEditEmployeeManager({ employeeValues });

  return (
    <>
      {isOpen && (
        <EmployeeModal
          submitBtnText={btnText}
          dispatchAction={editEmployee}
          handleClose={handleClose}
          employeeFieldsValues={employeeFieldsValues}
        />
      )}
    </>
  );
};
