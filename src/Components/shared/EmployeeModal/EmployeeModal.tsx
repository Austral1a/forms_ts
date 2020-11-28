import React, { FC } from "react";
import { Formik, FormikProps } from "formik";
import { EmployeeModalForm } from "@Components";
import { EmployeeModalFormFields } from "@Employees";
import "./EmployeeModal.scss";

interface EmployeeModalProps {
  employeeFieldsValues?: EmployeeModalFormFields;
  submitBtnText: string;
  className?: string;
  isModalOpen: boolean;
  handleClose: () => void;
  dispatchAction: (props: FormikProps<EmployeeModalFormFields>) => void;
}

export const EmployeeModal: FC<EmployeeModalProps> = ({
  employeeFieldsValues,
  submitBtnText,
  handleClose,
  dispatchAction,
  isModalOpen,
  className,
}) => {
  const employee: EmployeeModalFormFields = {
    firstName: employeeFieldsValues?.firstName || "",
    lastName: employeeFieldsValues?.lastName || "",
    email: employeeFieldsValues?.email || "",
    position: employeeFieldsValues?.position || "",
  };

  return (
    <Formik initialValues={employee} onSubmit={handleClose}>
      <EmployeeModalForm
        isModalOpen={isModalOpen}
        className={className}
        submitBtnText={submitBtnText}
        handleClose={handleClose}
        dispatchAction={dispatchAction}
      />
    </Formik>
  );
};
