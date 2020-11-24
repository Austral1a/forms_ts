import React, { FC, ReactElement } from "react";
import { Button } from "../../Components";
import { EditEmployeeModal, DeleteEmployeeModal } from "./index";
import { GetEmployee } from "../../Interfaces/Employees";
import { useActionsBlockManagement } from "./hooks";

interface Props {
  employeeData: GetEmployee;
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
  return (
    <>
      <div className="employees__actions-block">
        <Button text="Edit" type="button" onClick={handleEditModalOpen} />
        <Button text="Delete" type="button" onClick={handleDeleteModalOpen} />
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
