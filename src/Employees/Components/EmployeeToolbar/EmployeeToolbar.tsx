import React, { FC, ReactElement } from "react";
import { Button } from "../../../Components";
import { CreateEmployeeModal } from "./Components";
import { useCreateEmployeeBlockManager } from "./Components";
import { translations } from "../../../helpers";

export const EmployeeToolbar: FC = (): ReactElement => {
  const manager = useCreateEmployeeBlockManager();

  const {
    isCreateModalOpen,
    handleCreateModalClose,
    handleCreateModalOpen,
  } = manager;

  const {
    button: { createText },
  } = translations;
  return (
    <div className="employees-container__toolbar">
      <Button
        className="employees-container__toolbar_create-employee"
        onClick={handleCreateModalOpen}
        type="button"
        text={createText}
      />
      <CreateEmployeeModal
        handleClose={handleCreateModalClose}
        isOpen={isCreateModalOpen}
      />
    </div>
  );
};
