import React, { FC } from "react";
import { Button } from "../../../Components";
import { CreateEmployeeModal } from "./Components";
import { useCreateEmployeeBlockManagement } from "./Components";

export const EmployeeToolbar: FC = () => {
  const manager = useCreateEmployeeBlockManagement();

  const {
    isCreateModalOpen,
    handleCreateModalClose,
    handleCreateModalOpen,
  } = manager;
  return (
    <div className="employees-container__toolbar">
      <Button
        className="employees-container__toolbar_create-employee"
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
