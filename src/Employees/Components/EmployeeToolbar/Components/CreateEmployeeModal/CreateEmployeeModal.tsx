import React, { FC, ReactElement, useCallback } from "react";
import { EmployeeModal } from "@Components";
import { useCreateEmployeeManager } from "./hooks";
import { useFormikContext } from "formik";
import { EmployeeModalFormFields } from "../../../../Employees";

interface CreateEmployeeModalProps {
  isCreateModalOpen: boolean;
  handleClose: () => void;
}

export const CreateEmployeeModal: FC<CreateEmployeeModalProps> = ({
  handleClose,
  isCreateModalOpen,
}): ReactElement => {
  const { createEmployee, submitBtnText } = useCreateEmployeeManager();
  return (
    <EmployeeModal
      isModalOpen={isCreateModalOpen}
      submitBtnText={submitBtnText}
      dispatchAction={createEmployee}
      handleClose={handleClose}
    />
  );
};
