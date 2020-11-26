import React, { FC, useCallback } from "react";
import { Button, Form } from "../../index";
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
      {(props: FormikProps<Employee>) => {
        return (
          <div className="employee-modal-container">
            <Form
              // TODO: remove onSubmit
              onSubmit={() => ""}
              isValid={props.isValid}
              className="modal-container__modal form"
            >
              <Button
                text={closeText}
                type="button"
                className="modal-container_close"
                onClick={handleClose}
              />
              <FirstNameField />
              <LastNameField />
              <EmailField />
              <PositionsField />
              <Button
                text={btnText}
                // TODO: remove onClick
                onClick={() => onSubmit(props)}
                type="submit"
                disabled={false}
              />
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};
