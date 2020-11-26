import React, { FC, useCallback } from "react";
import { Button, EmployeeFormFields, Form, InputField } from "../../index";
import { Field, Formik, FormikProps } from "formik";
import { Employee } from "../../../Store/Employees/interfaces";
import { translations } from "../../../helpers";
import {
  FirstNameField,
  LastNameField,
  EmailField,
  PositionsField,
} from "../../index";
import "./EmployeeModal.scss";
import { person as personSvg } from "../../../assets";

import { useFirstNameField } from "./hooks/useFirstNameField";
import { EmployeeModalData } from "../../EmployeeModalData";

interface EmployeeModalProps {
  employeeFieldsValues?: Employee;
  btnText: string;
  handleClose: () => void;
  dispatchAction: (props: FormikProps<Employee>) => void;
}

export const EmployeeModal: FC<EmployeeModalProps> = ({
  employeeFieldsValues,
  btnText,
  handleClose,
  dispatchAction,
}) => {
  const employee: Employee = {
    firstName: employeeFieldsValues?.firstName
      ? employeeFieldsValues?.firstName
      : "",
    lastName: employeeFieldsValues?.lastName
      ? employeeFieldsValues?.lastName
      : "",
    email: employeeFieldsValues?.email ? employeeFieldsValues?.email : "",
    position: employeeFieldsValues?.position
      ? employeeFieldsValues.position
      : "",
  };

  const {
    button: { closeText },
    field: { positionText },
  } = translations;

  const onSubmit = useCallback(
    (props: FormikProps<Employee>) => {
      dispatchAction(props);
    },
    [dispatchAction]
  );

  return (
    <Formik initialValues={employee} onSubmit={handleClose}>
      <EmployeeModalData onSubmit={onSubmit} />
    </Formik>
  );
};
