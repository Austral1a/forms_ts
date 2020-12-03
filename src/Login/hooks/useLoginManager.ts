import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { loginAction } from "@StoreLogin";
import { translations } from "@helpers";
import { LoginFormFormikProps } from "@Login";

interface LoginManagerResult {
  login: (props: LoginFormFormikProps) => void;
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
