import React, { FC } from "react";
import { Formik, FormikProps } from "formik";
import { Employee } from "../../../Store/Employees/interfaces";
import { EmployeeModalForm } from "../../index";
import "./EmployeeModal.scss";

interface EmployeeModalProps {
  employeeFieldsValues?: Employee;
  submitBtnText: string;
  handleClose: () => void;
  dispatchAction: (props: FormikProps<Employee>) => void;
}

export const EmployeeModal: FC<EmployeeModalProps> = ({
  employeeFieldsValues,
  submitBtnText,
  handleClose,
  dispatchAction,
}) => {
  const employee: Employee = {
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
