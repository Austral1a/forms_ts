import React, { FC } from "react";
import { EmployeeModal } from "../../../../../../Components";
import { EmployeeResponse } from "../../../../../../Store/Employees/interfaces";
import { useEditEmployeeManagement } from "./hooks";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  employeeData: EmployeeResponse;
}
export const EditEmployeeModal: FC<Props> = ({
  employeeData,
  isOpen,
  handleClose,
}) => {
  const data = useEditEmployeeManagement({ employeeData, handleClose });

  return <>{isOpen && <EmployeeModal data={data} />}</>;
};
