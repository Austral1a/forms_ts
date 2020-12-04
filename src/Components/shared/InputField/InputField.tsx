import React, {
  FC,
  InputHTMLAttributes,
  ReactElement,
  SyntheticEvent,
} from "react";
import classNames from "classnames";
import { FormikHandlers } from "formik";
import InputFieldStyles from "./InputField.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onBlur: FormikHandlers["handleBlur"];
  onChange: FormikHandlers["handleChange"];
}

interface InputFieldMetaProps {
  touched: boolean;
  error: string | undefined;
  icon: string;
  passwordVisibilityIcon?: string;
  handlePasswordHide?: (
    event: SyntheticEvent<HTMLImageElement, MouseEvent>
  ) => void;
  handlePasswordShow?: (
    event: SyntheticEvent<HTMLImageElement, MouseEvent>
  ) => void;
}

type InputFieldProps = InputProps & InputFieldMetaProps;

export const InputField: FC<InputFieldProps> = ({
  touched,
  error,
  icon,
  passwordVisibilityIcon,
  handlePasswordHide,
  handlePasswordShow,
  ...props
}: InputFieldProps): ReactElement => {
  const { name, onBlur, onChange, className } = props;

  const customClasses = classNames(
    InputFieldStyles["input-container__input"],
    className
  );

  return (
    <div className={InputFieldStyles["input-container"]}>
      {icon && (
        <span className={InputFieldStyles["input-container__icon"]}>
          <img draggable={false} alt={name} src={icon} />
        </span>
      )}
      <input
        {...props}
        name={name}
        className={customClasses}
        onBlur={onBlur}
        onChange={onChange}
      />
      {passwordVisibilityIcon && (
        <span
          className={InputFieldStyles["input-container__pswd-visibility-icon"]}
        >
          <img
            draggable={false}
            onMouseDown={handlePasswordShow}
            onMouseUp={handlePasswordHide}
            src={passwordVisibilityIcon}
            alt={"pswd_visibility"}
          />
        </span>
      )}
      {touched && !!error && (
        <p className={InputFieldStyles["input-container__error"]}>{error}</p>
      )}
    </div>
  );
};
