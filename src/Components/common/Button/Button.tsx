import React, { ButtonHTMLAttributes, FC } from "react";
import classNames from "classnames/dedupe";
import ButtonStyles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { text, className } = props;
  const customClasses: string = classNames(ButtonStyles["button"], className);
  return (
    <button {...props} className={customClasses}>
      {text}
    </button>
  );
};
