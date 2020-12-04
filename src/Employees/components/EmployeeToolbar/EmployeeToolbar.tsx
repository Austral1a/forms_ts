import React, { FC, ReactElement } from "react";
import { Button } from "@Components";
import { CreateEmployeeModal, useCreateEmployeeManager } from "./components";
import { translations } from "@helpers";
import classes from "../../Employees.module.scss";

export const EmployeeToolbar: FC = (): ReactElement => {
  const { isModalOpen, handleClose, handleOpen } = useCreateEmployeeManager();

  const {
    button: { textCreate },
  } = translations;

  return (
    <div className={classes["employees-container__toolbar"]}>
      <Button
        className={classes["employees-container__toolbar_create-employee"]}
        onClick={handleOpen}
        type="button"
        text={textCreate}
      />
      <CreateEmployeeModal
        handleClose={handleClose}
        isCreateModalOpen={isModalOpen}
      />
    </div>
  );
};
