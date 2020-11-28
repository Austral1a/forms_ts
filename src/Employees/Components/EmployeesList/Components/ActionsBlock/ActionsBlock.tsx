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
    onDeleteModalOpen,
  } = useActionsBlockManager();
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
        isModalOpen={isEditModalOpen}
        handleClose={onEditModalClose}
      />
      {/* <DeleteEmployeeModal
        employeeId={id}
        isModalOpen={isDeleteModalOpen}
        handleClose={onDeleteModalClose}
      />*/}
    </>
  );
};
