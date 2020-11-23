import React, { FC } from "react";
import { EmployeeModal } from "../../EmployeeModal";
import { useEditEmployeeManagement } from "../hooks/useEditEmployeeManagement";
import { editEmployeeAction } from "../../../Store/Employees";
import { Employee, GetEmployee } from "../../../Interfaces/Employees";
import { useDispatch } from "react-redux";

interface Props {
  id: number;
  employee: GetEmployee;
}

export const EditEmployeeModal: FC<Props> = ({ id, employee }) => {
  const dispatch = useDispatch();
  // get certain employee by id
  const employeeData: Employee = useEditEmployeeManagement(id);
  const data = {
    ...employeeData,
    btnText: "Edit",
    handleClose: () => {},
    dispatchAction: () => dispatch(editEmployeeAction(employee)),
  };
  return <EmployeeModal data={data} />;
};
