import React, { FC, ReactElement, SelectHTMLAttributes } from "react";
import { FormikHandlers } from "formik";
import { Option } from "@Components";
import classes from "./SelectField.module.scss";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  onBlur: FormikHandlers["handleBlur"];
  onChange: FormikHandlers["handleChange"];
  name: string;
  value: string;
}

interface SelectFieldMetaProps {
  selectOptions: string[];
  error: string | undefined;
  touched: boolean;
}

type SelectFieldProps = SelectProps & SelectFieldMetaProps;

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
    <div className={classes["select-container"]}>
      <select
        className={classes["select-container__select"]}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
      >
        <option value="">Chose Position</option>
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
      {touched && !!error && (
        <p className={classes["select-container__error"]}>{error}</p>
      )}
    </div>
  );
};
