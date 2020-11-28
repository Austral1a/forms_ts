import React, { FC, ReactElement, useCallback } from "react";
import { Form, Button, InputField, useFields } from "@Components";
import { FormikProps, useFormikContext } from "formik";
import { translations } from "@helpers";
import {
  email as emailSvg,
  pswd_visibility_off,
  pswd_visibility_on,
} from "@Assets";
import { loginAction } from "@StoreLogin";
import { useDispatch } from "react-redux";
import { LoginFormFieldsValues } from "../Login";

enum LoginFormFields {
  PASSWORD = "password",
  EMAIL = "email",
}

export interface LoginFormProps {
  submitBtnText: string;
  dispatchAction: (props: FormikProps<LoginFormFieldsValues>) => void;
}

export const LoginForm: FC<LoginFormProps> = ({
  submitBtnText,
  dispatchAction,
}): ReactElement => {
  const formikContext = useFormikContext<LoginFormFieldsValues>();

  const { passwordField, emailField } = useFields();

  const {
    field: { passwordText, emailText },
  } = translations;

  const onSubmit = useCallback(() => dispatchAction(formikContext), [
    dispatchAction,
    formikContext,
  ]);

  return (
    <Form onSubmit={onSubmit} isValid={formikContext.isValid}>
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
        type={"password"}
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
      <Button text={submitBtnText} type="submit" disabled={false} />
    </Form>
  );
};
