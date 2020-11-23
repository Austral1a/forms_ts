import React, { FC, MouseEvent } from "react";
import { useField } from "formik";

interface Props {
  name: string;
  type: string;
  placeholder: string;
  icon: string;
  handleIconMouseUp?: (e: MouseEvent<HTMLSpanElement>) => void;
  handleIconMouseDown?: (e: MouseEvent<HTMLSpanElement>) => void;
}

export const TextField: FC<Props> = ({
  icon,
  handleIconMouseUp,
  handleIconMouseDown,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <div className="input-container">
      {icon && (
        <span
          onMouseDown={handleIconMouseDown}
          onMouseUp={handleIconMouseUp}
          className="input-container__icon"
        >
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
