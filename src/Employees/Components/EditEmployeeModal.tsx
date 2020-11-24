import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { EmployeeModal } from "./EmployeeModal";
import { editEmployeeAction } from "../../Store/Employees";
import { GetEmployee } from "../../Interfaces/Employees";

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
  const dispatch = useDispatch();
  const { id } = employeeData;
  const data = {
    ...employeeData,
    btnText: "Edit",
    handleClose,
    dispatchAction: (props: any) =>
      dispatch(editEmployeeAction({ ...props.values, id })),
  };
  return <>{isOpen ? <EmployeeModal data={data} /> : null}</>;
};
