import React, { FC, ReactElement } from "react";
import { Button } from "@Components";
import { CreateEmployeeModal, useCreateEmployeeManager } from "./components";
import { translations } from "@helpers";
import EmployeesStyles from "../../Employees.module.scss";

export const EmployeeToolbar: FC = (): ReactElement => {
  const {
    //TODO: rename
    isCreateModalOpen,
    handleClose,
    handleOpen,
  } = useCreateEmployeeManager();

  const {
    button: { createText },
  } = translations;

  return (
    <div className={EmployeesStyles["employees-container__toolbar"]}>
      <Button
        className={
          EmployeesStyles["employees-container__toolbar_create-employee"]
        }
        onClick={handleOpen}
        type="button"
        text={createText}
      />
      <CreateEmployeeModal
        handleClose={handleClose}
        isCreateModalOpen={isCreateModalOpen}
      />
    </div>
  );
};
