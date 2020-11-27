import { useCallback, useState } from "react";
import { pswd_visibility_off, pswd_visibility_on } from "../../assets";
import { translations } from "@helpers";

interface Result {
  setPswdIcon: string;
  pswdInputType: string;
  handlePswdIconMouseDown: () => void;
  handlePswdIconMouseUp: () => void;
}

export const usePasswordIconManagement = (): Result => {
  const [isPswdMouseDown, setIsPsdwMouseDown] = useState(false);

  const {
    field: { inputTypeText, inputTypePassword },
  } = translations;
  return {
    setPswdIcon: isPswdMouseDown ? pswd_visibility_on : pswd_visibility_off,
    pswdInputType: isPswdMouseDown ? inputTypeText : inputTypePassword,
    handlePswdIconMouseDown: useCallback(() => setIsPsdwMouseDown(true), [
      setIsPsdwMouseDown,
    ]),
    handlePswdIconMouseUp: useCallback(() => setIsPsdwMouseDown(false), [
      setIsPsdwMouseDown,
    ]),
  };
};
