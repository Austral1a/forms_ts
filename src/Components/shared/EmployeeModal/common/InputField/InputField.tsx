import React, { FC, ReactElement } from "react";
import { FormikHandlers } from "formik";

interface FirstNameFieldProps {
  icon: string;
  name: string;
  placeholder: string;
  error: string | undefined;
  touched: boolean;
  value: string;
  handleBlur: FormikHandlers["handleBlur"];
  handleChange: FormikHandlers["handleChange"];
}

export const InputField: FC<FirstNameFieldProps> = ({
  icon,
  name,
  placeholder,
  error,
  touched,
  value,
  handleChange,
  handleBlur,
}): ReactElement => {
  return (
    <div className="input-container">
      {icon && (
        <span className="input-container__icon">
          <img src={icon} />
        </span>
      )}
      <input
        placeholder={placeholder}
        name={name}
        className="input-container__input"
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {touched && error && <p className="input-container__error">{error}</p>}
    </div>
  );
};