import React, { FC, ReactElement, useCallback } from "react";
import { Form, Button, InputField } from "@Components";
import { FormikProps, useFormikContext } from "formik";
import { translations } from "@helpers";
import { LoginFormFieldsValues, usePasswordIconManager } from "@Login";
import { emailIcon, password as passwordSvg } from "@Assets";
import {useLoginFormFields} from './hooks';


enum LoginFormFields {
  PASSWORD = "password",
  EMAIL = "email",
}

export interface LoginFormProps {
  submitBtnText: string;
  login: (props: FormikProps<LoginFormFieldsValues>) => void;
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
    // fields values must presence
    !!formikContext.values.email &&
    !!formikContext.values.password &&
    // fields errors must absence
    !formikContext.errors.email &&
    !formikContext.errors.password;

  return (
    <Form className="form-login" onSubmit={onSubmit} isValid={isFormValid}>
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
        icon={passwordSvg}
        onChange={passwordField.onChange}
        onBlur={passwordField.onBlur}
      />
      <Button text={submitBtnText} type="submit" disabled={!isFormValid} />
    </Form>
  );
};