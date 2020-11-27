import React, { FC, ReactElement, useCallback } from "react";
import { Button, Form, SelectField, InputField, useFields } from "@Components";
import { FormikProps, useFormikContext } from "formik";

import { person as personSvg, email as emailSvg } from "@Assets";
import { translations } from "@helpers";
import { EmployeeModalFormFields } from "@Employees";

export enum EmployeeFormFields {
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName",
  EMAIL = "email",
  POSITION = "position",
  PASSWORD = "password",
}

interface EmployeeModalFormProps {
  handleClose: () => void;
  submitBtnText: string;
  dispatchAction: (props: FormikProps<EmployeeModalFormFields>) => void;
}

export const EmployeeModalForm: FC<EmployeeModalFormProps> = ({
  handleClose,
  dispatchAction,
  submitBtnText,
}): ReactElement => {
  const formikContext = useFormikContext<EmployeeModalFormFields>();

  const {
    emailField,
    firstNameField,
    lastNameField,
    positionField,
  } = useFields();

  const {
    field: { firstNameText, lastNameText, emailText, qa, dev, manager },
    button: { closeText },
  } = translations;

  const onSubmit = useCallback(() => {
    dispatchAction(formikContext);
  }, [dispatchAction, formikContext]);

  return (
    <div className="employee-modal-overlay">
      <div className="employee-modal-overlay__container">
        <Form
          onSubmit={onSubmit}
          isValid={formikContext.isValid}
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
          <InputField
            placeholder={lastNameText}
            icon={personSvg}
            name={EmployeeFormFields.LAST_NAME}
            value={lastNameField.value}
            touched={lastNameField.touched}
            error={lastNameField.error}
            handleBlur={lastNameField.onBlur}
            handleChange={lastNameField.onChange}
          />
          <InputField
            placeholder={emailText}
            icon={emailSvg}
            name={EmployeeFormFields.EMAIL}
            value={emailField.value}
            touched={emailField.touched}
            error={emailField.error}
            handleBlur={emailField.onBlur}
            handleChange={emailField.onChange}
          />
          <SelectField
            name={EmployeeFormFields.POSITION}
            value={positionField.value}
            touched={positionField.touched}
            error={positionField.error}
            handleBlur={positionField.onBlur}
            handleChange={positionField.onChange}
            defaultValue={qa}
            selectOptions={[qa, dev, manager]}
          />
          <Button
            text={submitBtnText}
            type="submit"
            disabled={!formikContext.isValid}
          />
        </Form>
      </div>
    </div>
  );
};
