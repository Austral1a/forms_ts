import React, { FC } from "react";
import { EmployeeModal } from "../../EmployeeModal";
import { useEditEmployeeManagement } from "../hooks/useEditEmployeeManagement";
import { editEmployeeAction } from "../../../Store/Employees";
import { Employee, GetEmployee } from "../../../Interfaces/Employees";
import { useDispatch } from "react-redux";

interface Props {
  id: number;
  isOpen: boolean;
  handleClose: () => void;
}
export const EditEmployeeModal: FC<Props> = ({ id, isOpen, handleClose }) => {
  const dispatch = useDispatch();
  const employeeData: Employee = useEditEmployeeManagement(id);
  const data = {
    ...employeeData,
    btnText: "Edit",
    handleClose,
    dispatchAction: (props: any) => dispatch(editEmployeeAction(props.values)),
  };
  return <>{isOpen ? <EmployeeModal data={data} /> : null}</>;
};
