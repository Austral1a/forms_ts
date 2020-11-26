import React, { FC, ReactElement } from "react";
import { Button } from "../../../../../Components";
import { EditEmployeeModal, DeleteEmployeeModal } from "../index";
import { useActionsBlockManager } from "./hooks";
import { EmployeeResponse } from "../../../../../Store/Employees/interfaces";
import { translations } from "../../../../../helpers";
import "./ActionsBlock.scss";

interface ActionsBlockProps {
  employeeData: EmployeeResponse;
}

export const ActionsBlock: FC<ActionsBlockProps> = ({
  employeeData,
}): ReactElement => {
  const {
    isEditModalOpen,
    onEditModalClose,
    onEditModalOpen,
    isDeleteModalOpen,
    onDeleteModalClose,
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
        employeeData={employeeData}
        isOpen={isEditModalOpen}
        handleClose={onEditModalClose}
      />
      <DeleteEmployeeModal
        employeeId={employeeData.id}
        isOpen={isDeleteModalOpen}
        handleClose={onDeleteModalClose}
      />
    </>
  );
};
