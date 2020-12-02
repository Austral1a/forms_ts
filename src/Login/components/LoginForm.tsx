import React, { FC, ReactElement, useCallback } from "react";
import { Form, Button, InputField } from "@Components";
import { useLoginFormFields, usePasswordIconManager } from "@Login";
import { FormikProps, useFormikContext } from "formik";
import { translations } from "@helpers";
import { emailIcon, passwordIcon } from "@Assets";
import LoginStyles from "./LoginForm.module.scss";

export enum LoginFormFields {
  PASSWORD = "password",
  EMAIL = "email",
}

export type LoginFormFormikProps = FormikProps<LoginFormFieldsValues>;

export interface LoginFormFieldsValues {
  email: string;
  password: string;
}

export interface LoginFormProps {
  submitBtnText: string;
  login: (props: LoginFormFormikProps) => void;
}

export const LoginForm: FC<LoginFormProps> = ({
  submitBtnText,
  login,
}): ReactElement => {
  const formikContext = useFormikContext<LoginFormFieldsValues>();

  const { passwordField, emailField } = useLoginFormFields();

  const {
    field: { passwordText, emailText },
  } = translations;

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      login(formikContext);
    },
    [login, formikContext]
  );

  const {
    handlePswdVisibilityIconMouseDown,
    handlePswdVisibilityIconMouseUp,
    pswdInputType,
    setPswdVisibilityIcon,
  } = usePasswordIconManager();
  const isFormValid =
    !Object.values(formikContext.values).includes("") &&
    !Object.keys(formikContext.errors).length;

  return (
    <Form
      className={LoginStyles["form-login"]}
      onSubmit={onSubmit}
      isValid={isFormValid}
    >
      <h3>Login</h3>
      <InputField
        name={LoginFormFields.EMAIL}
        touched={emailField.touched}
        error={emailField.error}
        value={emailField.value}
        placeholder={emailText}
        icon={emailIcon}
        onChange={emailField.onChange}
        onBlur={emailField.onBlur}
      />
      <InputField
        type={pswdInputType}
        passwordVisibilityIcon={setPswdVisibilityIcon}
        handlePswdVisibilityIconMouseDown={handlePswdVisibilityIconMouseDown}
        handlePswdVisibilityIconMouseUp={handlePswdVisibilityIconMouseUp}
        name={LoginFormFields.PASSWORD}
        touched={passwordField.touched}
        error={passwordField.error}
        value={passwordField.value}
        placeholder={passwordText}
        icon={passwordIcon}
        onChange={passwordField.onChange}
        onBlur={passwordField.onBlur}
      />
      <Button text={submitBtnText} type="submit" disabled={!isFormValid} />
    </Form>
  );
};
