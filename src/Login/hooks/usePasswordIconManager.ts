import { useCallback, useState } from "react";
import { passwordInvisibleIcon, passwordVisibleIcon } from "@Assets";

interface PasswordIconManagerResult {
  passwordIconName: string;
  passwordInputType: string;
  showPassword: () => void;
  hidePassword: () => void;
}

export const usePasswordIconManager = (): PasswordIconManagerResult => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const passwordIconName = isPasswordVisible
    ? passwordVisibleIcon
    : passwordInvisibleIcon;

  const passwordInputType = isPasswordVisible ? "text" : "password";

  const showPassword = useCallback(() => setIsPasswordVisible(true), [
    setIsPasswordVisible,
  ]);

  const hidePassword = useCallback(() => setIsPasswordVisible(false), [
    setIsPasswordVisible,
  ]);

  return {
    passwordIconName,
    passwordInputType,
    showPassword,
    hidePassword,
  };
};
