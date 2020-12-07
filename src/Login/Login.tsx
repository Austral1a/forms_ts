import React, { FC, ReactElement } from "react";
import { Formik } from "formik";
import { LoginForm } from "./components";
import { useLoginManager } from "./hooks";

export const Login: FC = (): ReactElement => {
  const { doLogin, textCreate, initialLoginFieldValues } = useLoginManager();

  return (
    <Formik initialValues={initialLoginFieldValues} onSubmit={() => {}}>
      <LoginForm doLogin={doLogin} submitBtnText={textCreate} />
    </Formik>
  );
};
