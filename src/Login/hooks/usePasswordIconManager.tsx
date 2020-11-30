import { useCallback, useState } from "react";
import { pswd_visibility_off, pswd_visibility_on } from "../../assets";

interface Result {
  setPswdVisibilityIcon: string;
  pswdInputType: string;
  handlePswdVisibilityIconMouseDown: () => void;
  handlePswdVisibilityIconMouseUp: () => void;
}

export const usePasswordIconManager = (): Result => {
  const [isPswdVisibilityMouseDown, setIsPsdwVisibilityMouseDown] = useState(
    false
  );

  return {
    setPswdVisibilityIcon: isPswdVisibilityMouseDown
      ? pswd_visibility_on
      : pswd_visibility_off,
    pswdInputType: isPswdVisibilityMouseDown ? "text" : "password",
    handlePswdVisibilityIconMouseDown: useCallback(
      () => setIsPsdwVisibilityMouseDown(true),
      [setIsPsdwVisibilityMouseDown]
    ),
    handlePswdVisibilityIconMouseUp: useCallback(
      () => setIsPsdwVisibilityMouseDown(false),
      [setIsPsdwVisibilityMouseDown]
    ),
  };
};
