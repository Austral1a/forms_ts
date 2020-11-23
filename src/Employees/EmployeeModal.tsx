import React, { FC, useCallback, useEffect } from "react";
import { Button, Input, Modal, Form } from "../Components";
import { email as emailSvg, person } from "../assets";
import { TextField } from "./TextField";
import { Field, Formik, FormikProps } from "formik";
import { useValidations } from "./hooks";
import { Employee } from "../Interfaces/Employees";

export interface FormikData {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
}

export interface Data extends FormikData {
  btnText: string;
  handleClose: () => void;
  dispatchAction: (values: any) => void;
}

interface Props {
  data: Data;
}

export const EmployeeModal: FC<Props> = ({ data }) => {
  const employee: Employee = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    position: data.position,
  };

  return (
    <Formik
      initialValues={employee}
      validate={useValidations}
      onSubmit={() => console.log("")}
    >
      {(props: FormikProps<FormikData>) => {
        const {
          errors: { firstName, lastName, email },
        } = props;
        const isBtnDisabled = !!firstName || !!lastName || !!email;
        return (
          <Form className="modal-container__modal form ">
            <Button
              text="close"
              type="button"
              className="modal-container_close"
              onClick={data.handleClose}
            />
            <TextField
              icon={person}
              name="firstName"
              placeholder="First Name"
              type="text"
            />
            <TextField
              icon={person}
              name="lastName"
              placeholder="Last Name"
              type="text"
            />
            <TextField
              icon={emailSvg}
              name="email"
              placeholder="Email"
              type="text"
            />
            <Field as="select" name="position">
              <option value="qa">QA</option>
              <option value="dev">Developer</option>
              <option value="manager">Manager</option>
            </Field>
            <Button
              text={data.btnText}
              onClick={() => data.dispatchAction(props.values)}
              type="button"
              disabled={isBtnDisabled}
            />
          </Form>
        );
      }}
    </Formik>
  );
};
