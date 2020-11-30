import React, { FC, ReactElement } from "react";
import { Formik } from "formik";
import { LoginForm } from "./components";
import "../Components/common/Form/Form.scss";
import "./Login.scss";
import { useLoginManager } from "./hooks";

export const Login: FC = (): ReactElement => {
  const { login, createText, initialLoginFieldValues } = useLoginManager();

  return (
    <Formik initialValues={initialLoginFieldValues} onSubmit={() => {}}>
      <LoginForm login={login} submitBtnText={createText} />
    </Formik>
  );
};
