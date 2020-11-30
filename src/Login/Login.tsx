import React, { FC } from "react";
import { Formik } from "formik";
import { LoginForm } from "./Components";
import "../Components/common/Form/Form.scss";
import "./Login.scss";
import { useLoginManager } from "./hooks";

export interface LoginFormFieldsValues {
  email: string;
  password: string;
}

export const Login: FC = () => {
  const { login, createText, initialLoginFieldValues } = useLoginManager();

  return (
    <Formik initialValues={initialLoginFieldValues} onSubmit={() => {}}>
      <LoginForm login={login} submitBtnText={createText} />
    </Formik>
  );
};
