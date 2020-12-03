import { useCallback, useState } from "react";
import { pswd_visibility_offIcon, pswd_visibility_onIcon } from "@Assets";

// TODO: rename vars, isPasswordVisible,
interface PasswordIconManagerResult {
  setPswdVisibilityIcon: string;
  pswdInputType: string;
  handlePswdVisibilityIconMouseDown: () => void;
  handlePswdVisibilityIconMouseUp: () => void;
}

export const usePasswordIconManager = (): PasswordIconManagerResult => {
  const [isPswdVisibilityMouseDown, setIsPsdwVisibilityMouseDown] = useState(
    false
  );

  const setPswdVisibilityIcon = isPswdVisibilityMouseDown
    ? pswd_visibility_onIcon
    : pswd_visibility_offIcon;
  // TODO: extract logic from return into vars
  return {
    setPswdVisibilityIcon,
    pswdInputType: isPswdVisibilityMouseDown ? "text" : "password",
    // TODO: extract into var
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
