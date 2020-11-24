import React, { FC } from "react";
import { EmployeeModal } from "./EmployeeModal";
import { GetEmployee } from "../../Interfaces/Employees";
import { useEditEmployeeManagement } from "./hooks";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  employeeData: GetEmployee;
}
export const EditEmployeeModal: FC<Props> = ({
  employeeData,
  isOpen,
  handleClose,
}) => {
  const data = useEditEmployeeManagement({ employeeData, handleClose });

  return <>{isOpen ? <EmployeeModal data={data} /> : null}</>;
};
