import React, { FC, useCallback } from "react";
import { Formik, Form, FormikProps } from "formik";
import { Button } from "../Components";
import { useValidations } from "./hooks";
import "./Login.scss";
import "../Components/Form/Form.scss";
import { email } from "../assets";
import { TextField } from "./index";
import { usePasswordIconManagement } from "./hooks";
import { useDispatch } from "react-redux";
import { loginAction } from "../Store/Login";
import { translations } from "../helpers";

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
  const dispatchLoginAction = useCallback(
    (values) => dispatch(loginAction(values.email, values.password)),
    [dispatch]
  );

  const {
    field: { emailVal, emailHolder, pswdHolder, psdwVal },
    button: { textType },
  } = translations;

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={() => console.log("submitted")}
      validate={useValidations}
    >
      {(props: FormikProps<Values>) => (
        <Form className="form form-login login">
          <TextField
            name={emailVal}
            type={textType}
            placeholder={emailHolder}
            icon={email}
          />
          <TextField
            name={psdwVal}
            type={pswdInputType}
            placeholder={pswdHolder}
            icon={setPswdIcon}
            handleIconMouseDown={handlePswdIconMouseDown}
            handleIconMouseUp={handlePswdIconMouseUp}
          />
          <Button
            type="submit"
            text="Login"
            onClick={() => dispatchLoginAction(props.values)}
            disabled={!!props.errors.email || !!props.errors.password}
          />
        </Form>
      )}
    </Formik>
  );
};
