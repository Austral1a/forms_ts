import React, { FC, useCallback } from "react";
import { Formik, FormikProps } from "formik";
import { useDispatch } from "react-redux";
import { loginAction } from "@StoreLogin";
import { translations } from "@helpers";
import { LoginForm } from "./Components";
import "../Components/common/Form/Form.scss";
import "./Login.scss";

export interface LoginFormFieldsValues {
  email: string;
  password: string;
}

export const Login: FC = () => {
  const dispatch = useDispatch();
  const login = useCallback(
    (props: FormikProps<LoginFormFieldsValues>) => {
      const {
        values: { email, password },
      } = props;
      dispatch(loginAction({ email, password }));
    },
    [dispatch]
  );

  const {
    button: { createText },
  } = translations;

  const initialValues: LoginFormFieldsValues = {
    email: "",
    password: "",
  };

  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <LoginForm login={login} submitBtnText={createText} />
    </Formik>
  );
};
