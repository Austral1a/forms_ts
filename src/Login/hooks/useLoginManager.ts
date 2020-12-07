import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { loginAction } from "@StoreLogin";
import { translations } from "@helpers";
import { LoginFormFormikProps } from "@Login";

interface LoginManagerResult {
  doLogin: (props: LoginFormFormikProps) => void;
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

  const doLogin = useCallback(
    (props) => {
      const {
        values: { email, password },
      } = props;
      dispatch(loginAction({ email, password }));
    },
    [dispatch]
  );

  const initialLoginFieldValues = {
    email: "",
    password: "",
  };

  return {
    initialLoginFieldValues,
    textCreate,
    doLogin,
  };
};
