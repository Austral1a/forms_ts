import React, { FC } from "react";
import { EmployeeModal } from "./EmployeeModal";
import { useCreateEmployeeManagement } from "../hooks";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

export const CreateEmployeeModal: FC<Props> = ({ isOpen, handleClose }) => {
  const data = useCreateEmployeeManagement({ handleClose });
  return <>{isOpen && <EmployeeModal data={data} />}</>;
};
