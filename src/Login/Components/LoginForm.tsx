import React, { FC, ReactElement } from "react";
import { Form, Button, InputField, useFields } from "@Components";
import { useFormikContext } from "formik";
import { translations } from "@helpers";
import {
  email as emailSvg,
  pswd_visibility_off,
  pswd_visibility_on,
} from "@Assets";

enum LoginFormFields {
  PASSWORD = "password",
  EMAIL = "email",
}

export interface LoginFormProps {
  submitBtnText: string;
}

export const LoginForm: FC<LoginFormProps> = ({
  submitBtnText,
}): ReactElement => {
  const formikContext = useFormikContext();

  const { passwordField, emailField } = useFields();

  const {
    field: { passwordText, emailText },
  } = translations;

  return (
    <Form isValid={formikContext.isValid}>
      <InputField
        name={LoginFormFields.EMAIL}
        touched={emailField.touched}
        error={emailField.error}
        value={emailField.value}
        placeholder={emailText}
        // TODO: Create visibility switcher
        icon={emailSvg}
        handleChange={emailField.onChange}
        handleBlur={emailField.onBlur}
      />
      <InputField
        name={LoginFormFields.PASSWORD}
        touched={passwordField.touched}
        error={passwordField.error}
        value={passwordField.value}
        placeholder={passwordText}
        // TODO: Create visibility switcher
        icon={pswd_visibility_off}
        handleChange={passwordField.onChange}
        handleBlur={passwordField.onBlur}
      />
      <Button
        text={submitBtnText}
        type="submit"
        disabled={!formikContext.isValid}
      />
    </Form>
  );
};
