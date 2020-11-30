import React, { FC, ReactElement, SelectHTMLAttributes } from "react";
import { FormikHandlers } from "formik";
import { Option } from "@Components";
import "./SelectField.scss";

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  selectOptions: string[];
  defaultValue?: string;
  name: string;
  error: string | undefined;
  touched: boolean;
  value: string;
  onBlur: FormikHandlers["handleBlur"];
  onChange: FormikHandlers["handleChange"];
}

export const SelectField: FC<SelectFieldProps> = ({
  selectOptions,
  name,
  value,
  error,
  touched,
  onChange,
  onBlur,
}): ReactElement => {
  return (
    <div className="select-container">
      <select
        className="select-container__select"
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
      >
        {selectOptions.map((optionText, id) => {
          return (
            <Option
              key={optionText + id}
              value={optionText}
              optionText={optionText}
            />
          );
        })}
      </select>
      {touched && !!error && <p className="select-container__error">{error}</p>}
    </div>
  );
};
