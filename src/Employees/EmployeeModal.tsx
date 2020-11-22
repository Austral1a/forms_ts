import React, { FC, useCallback } from "react";
import { Button, Input, Modal, Form } from "../Components";
import { email, person } from "../assets";
import { TextField } from "./TextField";
import { Formik, FormikProps } from "formik";
import { useValidations } from "./hooks";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
}

interface Props {
  data?: Values;
  dispatchAction: (values: object, position: string) => void;
  handleClose: () => void;
}

export const EmployeeModal: FC<Props> = ({
  handleClose,
  data,
  dispatchAction,
}) => {
  return (
    <Formik
      initialValues={{
        firstName: data?.firstName ? data.firstName : "",
        lastName: data?.lastName ? data.lastName : "",
        email: data?.email ? data.email : "",
        position: data?.position ? data.position : "",
      }}
      validate={useValidations}
      onSubmit={() => console.log("")}
    >
      {(props: FormikProps<Values>) => (
        <Form className="modal-container__modal form ">
          <Button
            text="close"
            type="button"
            className="modal-container_close"
            onClick={handleClose}
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
          <select name="position">
            <option value="dev">dev</option>
            <option value="qa">qa</option>
          </select>
          <Button
            text="Create"
            onClick={() => dispatchAction(props.values, "Developer")}
            type="button"
          />
        </Form>
      )}
    </Formik>
  );
};
