import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { loginAction } from "@StoreLogin";
import { translations } from "@helpers";
import { LoginFormFormikProps } from "@Login";

interface LoginManagerResult {
  login: (props: LoginFormFormikProps) => void;
  textCreate: string;
  initialLoginFieldValues: {
    email: string;
    password: string;
  };
}

export const useLoginManager = (): LoginManagerResult => {
  const dispatch = useDispatch();

  const {
    button: { textCreate },
  } = translations;

  // TODO: rename doLogin
  const login = useCallback(
    (props) => {
      const {
        values: { email, password },
      } = props;
      dispatch(loginAction({ email, password }));
    },
    [dispatch]
  );

  return {
    initialLoginFieldValues: {
      email: "",
      password: "",
    },
    textCreate,
    login,
  };
};
