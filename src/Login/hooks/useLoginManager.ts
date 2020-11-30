import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { FormikProps } from "formik";
import { loginAction } from "@StoreLogin";
import { translations } from "@helpers";
import { LoginFormFieldsValues } from "@Login";

interface LoginManagerResult {
  login: (props: FormikProps<LoginFormFieldsValues>) => void;
  createText: string;
  initialLoginFieldValues: {
    email: string;
    password: string;
  };
}

export const useLoginManager = (): LoginManagerResult => {
  const dispatch = useDispatch();
  const {
    button: { createText },
  } = translations;
  return {
    initialLoginFieldValues: {
      email: "",
      password: "",
    },
    createText,
    login: useCallback(
      (props) => {
        const {
          values: { email, password },
        } = props;
        dispatch(loginAction({ email, password }));
      },
      [dispatch]
    ),
  };
};
