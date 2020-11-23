import React, { FC, useCallback, useEffect } from "react";
import { Button, Input, Modal, Form } from "../Components";
import { email, person } from "../assets";
import { TextField } from "./TextField";
import { Field, Formik, FormikProps } from "formik";
import { useValidations } from "./hooks";

interface FormikData {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
}

interface Data extends FormikData {
  modalType: string;
  preload?: () => void;
  handleClose: () => void;
  dispatchAction: (values: any) => void;
}

interface Props {
  data: Data;
}

export const EmployeeModal: FC<Props> = ({ data }) => {
  useEffect(() => {
    if (data.preload) {
      data.preload();
    }
  }, [data]);

  return (
    <Formik
      initialValues={{
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        position: data.position,
      }}
      validate={useValidations}
      onSubmit={() => console.log("")}
    >
      {(props: FormikProps<FormikData>) => (
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
            icon={email}
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
            text={data.modalType}
            onClick={() => data.dispatchAction(props.values)}
            type="button"
            disabled={
              !!props.errors.firstName ||
              !!props.errors.lastName ||
              !!props.errors.email
            }
          />
        </Form>
      )}
    </Formik>
  );
};
