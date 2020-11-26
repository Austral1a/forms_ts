import React, { FC } from "react";
import { EmployeeModal } from "../../../../../../Components";
import { EmployeeResponse } from "../../../../../../Store/Employees/interfaces";
import { useEditEmployeeManager } from "./hooks";

interface EditEmployeeModalProps {
  isOpen: boolean;
  handleClose: () => void;
  employeeData: EmployeeResponse;
}
export const EditEmployeeModal: FC<EditEmployeeModalProps> = ({
  employeeData,
  isOpen,
  handleClose,
}) => {
  const data = useEditEmployeeManager({ employeeData, handleClose });

  return <>{isOpen && <EmployeeModal data={data} />}</>;
};
