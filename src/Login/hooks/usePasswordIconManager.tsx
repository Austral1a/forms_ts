import { useCallback, useState } from "react";
import { pswd_visibility_off, pswd_visibility_on } from "../../assets";

interface Result {
  setPswdIcon: string;
  pswdInputType: string;
  handlePswdIconMouseDown: () => void;
  handlePswdIconMouseUp: () => void;
}

export const usePasswordIconManager = (): Result => {
  const [isPswdMouseDown, setIsPsdwMouseDown] = useState(false);

  return {
    setPswdIcon: isPswdMouseDown ? pswd_visibility_on : pswd_visibility_off,
    pswdInputType: isPswdMouseDown ? "text" : "password",
    handlePswdIconMouseDown: useCallback(() => setIsPsdwMouseDown(true), [
      setIsPsdwMouseDown,
    ]),
    handlePswdIconMouseUp: useCallback(() => setIsPsdwMouseDown(false), [
      setIsPsdwMouseDown,
    ]),
  };
};
