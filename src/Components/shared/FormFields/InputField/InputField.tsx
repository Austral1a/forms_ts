import React, { FC, InputHTMLAttributes, ReactElement } from "react";
import classNames from "classnames";
import { FormikHandlers } from "formik";
import "./InputField.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onBlur: FormikHandlers["handleBlur"];
  onChange: FormikHandlers["handleChange"];
}

interface InputFieldMetaProps {
  touched: boolean;
  error: string | undefined;
  icon: string;
}

type InputFieldProps = InputProps & InputFieldMetaProps;

export const InputField: FC<InputFieldProps> = ({
  touched,
  error,
  icon,
  ...props
}: InputFieldProps): ReactElement => {
  const { name, onBlur, onChange, className } = props;
  const customClasses = classNames("input-container__input", className);
  return (
    <div className="input-container">
      {icon && (
        <span className="input-container__icon">
          <img alt={name} src={icon} />
        </span>
      )}
      {/*TODO: Extract input as Input*/}
      <input
        {...props}
        name={name}
        className={customClasses}
        onBlur={onBlur}
        onChange={onChange}
      />
      {touched && !!error && <p className="input-container__error">{error}</p>}
    </div>
  );
};
