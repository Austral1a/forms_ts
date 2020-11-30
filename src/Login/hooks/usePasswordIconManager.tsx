import { useCallback, useState } from "react";
import { pswd_visibility_offIcon, pswd_visibility_onIcon } from "@Assets";

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
      ? pswd_visibility_onIcon
      : pswd_visibility_offIcon,
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
