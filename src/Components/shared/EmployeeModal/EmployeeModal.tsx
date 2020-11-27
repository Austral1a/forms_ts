import React, { FC } from "react";
import { Formik, FormikProps } from "formik";
import { EmployeeModalForm } from "../../index";
import "./EmployeeModal.scss";
import { EmployeeModalFormFields } from "../../../Employees";

interface EmployeeModalProps {
  employeeFieldsValues?: EmployeeModalFormFields;
  submitBtnText: string;
  handleClose: () => void;
  dispatchAction: (props: FormikProps<EmployeeModalFormFields>) => void;
}

export const EmployeeModal: FC<EmployeeModalProps> = ({
  employeeFieldsValues,
  submitBtnText,
  handleClose,
  dispatchAction,
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
        submitBtnText={submitBtnText}
        handleClose={handleClose}
        dispatchAction={dispatchAction}
      />
    </Formik>
  );
};
