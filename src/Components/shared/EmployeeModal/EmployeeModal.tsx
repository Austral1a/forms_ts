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

import {useModalFields} from './hooks/useModalFields'

interface EmployeeModalProps {
  fieldsValues?: EmployeeModalFields;
  btnText: string;
  handleClose: () => void;
  onSubmit: (props: FormikProps<EmployeeModalFields>) => void;
}

export interface EmployeeModalFields {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
}

export const EmployeeModal: FC<EmployeeModalProps> = ({
  fieldsValues,
  btnText,
  handleClose,
  onSubmit,
}) => {
  const initialValues: EmployeeModalFields = {
    firstName: fieldsValues?.firstName || "",
    lastName: fieldsValues?.lastName || "",
    email: fieldsValues?.email || "",
    position: fieldsValues?.position || "",
  };

  const {firstNameField} = useModalFields();

  const { button: { closeText } } = translations;

  return (
    <Formik initialValues={initialValues} onSubmit={handleClose}>
      {(props: FormikProps<EmployeeModalFields>) => {
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
              <InputField
      placeholder={firstNameText}
      icon={personSvg}
      name={EmployeeFormFields.FIRST_NAME}
      value={firstNameField.value}
      touched={firstNameField.touched}
      error={firstNameField.error}
      handleBlur={firstNameField.onBlur}
      handleChange={firstNameField.onChange}
    />
              <LastNameField />
              <EmailField />
              <PositionsField />
              <Button
                text={btnText}
                // TODO: remove onClick
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
