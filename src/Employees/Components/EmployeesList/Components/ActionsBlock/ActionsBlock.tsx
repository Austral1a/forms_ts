import React, { FC, ReactElement } from "react";
import { Button } from "../../../../../Components";
import { EditEmployeeModal, DeleteEmployeeModal } from "../index";
import { useActionsBlockManagement } from "./hooks";
import { EmployeeWithId } from "../../../../../Store/Employees/interfaces";
import { translations } from "../../../../../helpers";
import "./ActionsBlock.scss";

interface Props {
  employeeData: EmployeeWithId;
}

export const ActionsBlock: FC<Props> = ({ employeeData }): ReactElement => {
  const manager = useActionsBlockManagement();

  const {
    edit: { isEditModalOpen, handleEditModalClose, handleEditModalOpen },
  } = manager;

  const {
    delete: {
      isDeleteModalOpen,
      handleDeleteModalClose,
      handleDeleteModalOpen,
    },
  } = manager;

  const {
    button: { editText, deleteText },
  } = translations;
  return (
    <>
      <div className="employees-container__body-actions-block">
        <Button text={editText} type={"button"} onClick={handleEditModalOpen} />
        <Button
          text={deleteText}
          type={"button"}
          onClick={handleDeleteModalOpen}
        />
      </div>
      <EditEmployeeModal
        employeeData={employeeData}
        isOpen={isEditModalOpen}
        handleClose={handleEditModalClose}
      />
      <DeleteEmployeeModal
        employeeId={employeeData.id}
        isOpen={isDeleteModalOpen}
        handleClose={handleDeleteModalClose}
      />
    </>
  );
};
