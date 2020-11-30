import React, { FC, ReactElement } from "react";
import { Button } from "@Components";
import { CreateEmployeeModal, useCreateEmployeeManager } from "./components";

import { translations } from "@helpers";

export const EmployeeToolbar: FC = (): ReactElement => {
  const {
    isCreateModalOpen,
    handleCreateModalClose,
    handleCreateModalOpen,
  } = useCreateEmployeeManager();
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
        isCreateModalOpen={isCreateModalOpen}
      />
    </div>
  );
};
