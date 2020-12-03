import { EditEmployeeModal, DeleteEmployeeModal } from "../index";
import { EmployeeResponse } from "@StoreEmployees";
import { useActionsBlockManager } from "./hooks";
import React, { FC, ReactElement } from "react";
import { translations } from "@helpers";
import { Button } from "@Components";
import ActionsBlockStyles from "./ActionsBlock.module.scss";

interface ActionsBlockProps {
  employeeValues: EmployeeResponse;
}

export const ActionsBlock: FC<ActionsBlockProps> = ({
  employeeValues,
}): ReactElement => {
  const {
    isEditModalOpen,
    isDeleteModalOpen,
    onDeleteModalClose,
    onEditModalClose,
    onEditModalOpen,
    onDeleteModalOpen,
  } = useActionsBlockManager();

  const { id } = employeeValues;

  const {
    button: { editText, deleteText },
  } = translations;

  return (
    <>
      <div
        className={
          ActionsBlockStyles["employees-container__body-actions-block"]
        }
      >
        <Button
          className={
            ActionsBlockStyles["employees-container__body_edit-employee"]
          }
          text={editText}
          type="button"
          onClick={onEditModalOpen}
        />
        <Button
          className={
            ActionsBlockStyles["employees-container__body_delete-employee"]
          }
          text={deleteText}
          type="button"
          onClick={onDeleteModalOpen}
        />
      </div>
      <EditEmployeeModal
        employeeValues={employeeValues}
        isModalOpen={isEditModalOpen}
        handleEditModalClose={onEditModalClose}
      />
      <DeleteEmployeeModal
        employeeId={id}
        isModalOpen={isDeleteModalOpen}
        handleDeleteModalClose={onDeleteModalClose}
      />
    </>
  );
};
