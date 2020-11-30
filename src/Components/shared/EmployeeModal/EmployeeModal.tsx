import React, { FC, useEffect } from "react";
import { Formik, FormikProps } from "formik";
import { EmployeeModalForm } from "@Components";
import { EmployeeModalFormFields } from "@Employees";

interface EmployeeModalProps {
  employeeFieldsValues?: EmployeeModalFormFields;
  submitBtnText: string;
  className?: string;
  isModalOpen: boolean;
  handleClose: () => void;
  cleanFormFieldValues?: boolean;
  dispatchAction: (props: FormikProps<EmployeeModalFormFields>) => void;
}

export const EmployeeModal: FC<EmployeeModalProps> = ({
  employeeFieldsValues,
  submitBtnText,
  handleClose,
  dispatchAction,
  isModalOpen,
  className,
  cleanFormFieldValues,
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
        cleanFormFieldValues={cleanFormFieldValues}
        isModalOpen={isModalOpen}
        className={className}
        submitBtnText={submitBtnText}
        handleClose={handleClose}
        dispatchAction={dispatchAction}
      />
    </Formik>
  );
};
