import React, { FC, ReactElement } from "react";
import { FormikHandlers } from "formik";
import { Option } from "@Components";

interface SelectFieldProps {
  selectOptions: string[];
  defaultValue: string;
  name: string;
  error: string | undefined;
  touched: boolean;
  value: string;
  handleBlur: FormikHandlers["handleBlur"];
  handleChange: FormikHandlers["handleChange"];
}

export const SelectField: FC<SelectFieldProps> = ({
  selectOptions,
  defaultValue,
  name,
  value,
  error,
  touched,
  handleChange,
  handleBlur,
}): ReactElement => {
  return (
    <div className="select-container">
      <select
        className="select-container__select"
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
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
