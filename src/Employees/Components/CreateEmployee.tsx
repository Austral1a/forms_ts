import React, { FC } from "react";
import { Button } from "../../Components";
import { CreateEmployeeModal } from "./index";
import { useCreateEmployeeBlockManagement } from "./hooks";

export const CreateEmployee: FC = () => {
  const manager = useCreateEmployeeBlockManagement();

  const {
    isCreateModalOpen,
    handleCreateModalClose,
    handleCreateModalOpen,
  } = manager;
  return (
    <div className="employees-container__header">
      <Button
        className="employees-container__header_create-employee"
        onClick={handleCreateModalOpen}
        type="button"
        text="Create"
      />
      <CreateEmployeeModal
        handleClose={handleCreateModalClose}
        isOpen={isCreateModalOpen}
      />
    </div>
  );
};
