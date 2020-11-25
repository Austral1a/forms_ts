import React, { FC } from "react";
import { Button, Modal, Form, TextField } from "../../index";
import { email as emailSvg, person } from "../../../assets";
import { Field, Formik, FormikProps } from "formik";
import { useValidations } from "./hooks";
import { Employee } from "../../../Store/Employees/interfaces";
import { translations } from "../../../helpers";

export interface FormikData {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
}

export interface Data extends FormikData {
  btnText: string;
  handleClose: () => void;
  dispatchAction: (props: FormikProps<FormikData>) => void;
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

  const {
    button: { closeText, textType },
    field: {
      emailHolder,
      emailVal,
      firstNameHolder,
      firstNameVal,
      lastNameHolder,
      lastNameVal,
      positionVal,
    },
  } = translations;

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
        const isFormValid = !isBtnDisabled;
        return (
          <Modal>
            <Form
              onSubmit={() => ""}
              isValid={isFormValid}
              className="modal-container__modal form "
            >
              <Button
                text={closeText}
                type="button"
                className="modal-container_close"
                onClick={data.handleClose}
              />
              <TextField
                icon={person}
                name={firstNameVal}
                placeholder={firstNameHolder}
                type={textType}
              />
              <TextField
                icon={person}
                name={lastNameVal}
                placeholder={lastNameHolder}
                type={textType}
              />
              <TextField
                icon={emailSvg}
                name={emailVal}
                placeholder={emailHolder}
                type={textType}
              />
              <Field as="select" name={positionVal}>
                <option value="qa">QA</option>
                <option value="dev">Developer</option>
                <option value="manager">Manager</option>
              </Field>
              <Button
                text={data.btnText}
                onClick={() => {
                  data.dispatchAction(props);
                  data.handleClose();
                }}
                type="button"
                disabled={isBtnDisabled}
              />
            </Form>
          </Modal>
        );
      }}
    </Formik>
  );
};
