import React, { FC, ReactElement } from "react";
import { Button } from "@Components";
import { EditEmployeeModal, DeleteEmployeeModal } from "../index";
import { useActionsBlockManager } from "./hooks";
import { EmployeeResponse } from "@StoreEmployees";
import { translations } from "@helpers";
import "./ActionsBlock.scss";

interface ActionsBlockProps {
  employeeValues: EmployeeResponse;
}

export const ActionsBlock: FC<ActionsBlockProps> = ({
  employeeValues,
}): ReactElement => {
  const {
    isEditModalOpen,
    onEditModalClose,
    onEditModalOpen,
    isDeleteModalOpen,
    onDeleteModalClose,
    onDeleteModalOpen,
  } = useActionsBlockManager();
  const { id } = employeeValues;
  const {
    button: { editText, deleteText },
  } = translations;
  return (
    <>
      <div className="employees-container__body-actions-block">
        <Button text={editText} type={"button"} onClick={onEditModalOpen} />
        <Button text={deleteText} type={"button"} onClick={onDeleteModalOpen} />
      </div>
      <EditEmployeeModal
        employeeValues={employeeValues}
        isOpen={isEditModalOpen}
        handleClose={onEditModalClose}
      />
      <DeleteEmployeeModal
        employeeId={id}
        isOpen={isDeleteModalOpen}
        handleClose={onDeleteModalClose}
      />
    </>
  );
};
