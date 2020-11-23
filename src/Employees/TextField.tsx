import React, { FC } from "react";
import { useField } from "formik";

interface Props {
  name: string;
  type: string;
  placeholder: string;
  icon: string;
}

export const TextField: FC<Props> = ({ icon, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div className="input-container">
      {icon && (
        <span className="input-container__icon">
          <img src={icon} />
        </span>
      )}
      <input className="input-container__input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <p className="input-container__error">{meta.error}</p>
      ) : null}
    </div>
  );
};
