import React, { FC, useCallback } from "react";
import { Formik } from "formik";
import { useValidations } from "./hooks";
import "./Login.scss";
import "../Components/common/Form/Form.scss";
import { usePasswordIconManagement } from "./hooks";
import { useDispatch } from "react-redux";
import { loginAction } from "@StoreLogin";
import { translations } from "@helpers";
import { LoginForm } from "./Components";

interface Values {
  email: string;
  password: string;
}

export const Login: FC = () => {
  const {
    setPswdIcon,
    pswdInputType,
    handlePswdIconMouseUp,
    handlePswdIconMouseDown,
  } = usePasswordIconManagement();

  const dispatch = useDispatch();
  const login = useCallback(
    (formikContext) => {
      const {
        values: { email, password },
      } = formikContext;
      dispatch(loginAction(email, password));
    },
    [dispatch]
  );

  const {
    button: { createText },
  } = translations;

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={login}
      validate={useValidations}
    >
      <LoginForm submitBtnText={createText} />
    </Formik>
  );
};
