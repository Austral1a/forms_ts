import React, { FC, FormEventHandler, ReactNode } from "react";
import classNames from "classnames/dedupe";
import "./Form.scss";

interface Props {
  className?: string;
  isValid: boolean;
  action?: string;
  children: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export const Form: FC<Props> = ({
  children,
  onSubmit,
  action,
  className,
  isValid,
}) => {
  const customClasses = classNames("form", className, {
    form_success: isValid,
  });
  return (
    <form className={customClasses} action={action} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
