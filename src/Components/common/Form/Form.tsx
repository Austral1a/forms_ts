import React, { FormHTMLAttributes, FC, ReactNode } from "react";
import classNames from "classnames";
import FormStyles from "./Form.module.scss";

interface FormHTMLElementProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: string;
  children: ReactNode;
}

interface FormMetaProps {
  isValid: boolean;
}

type FormProps = FormHTMLElementProps & FormMetaProps;

export const Form: FC<FormProps> = ({ isValid, ...props }: FormProps) => {
  const { className, children } = props;

  const customClasses = classNames(FormStyles["form"], className, {
    form_success: isValid,
  });

  return (
    <form {...props} className={customClasses}>
      {children}
    </form>
  );
};
