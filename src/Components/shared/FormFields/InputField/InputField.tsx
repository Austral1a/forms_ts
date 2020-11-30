import React, {
  FC,
  InputHTMLAttributes,
  ReactElement,
  SyntheticEvent,
} from "react";
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
  passwordVisibilityIcon?: string;
  handlePswdVisibilityIconMouseDown?: (
    event: SyntheticEvent<HTMLImageElement, MouseEvent>
  ) => void;
  handlePswdVisibilityIconMouseUp?: (
    event: SyntheticEvent<HTMLImageElement, MouseEvent>
  ) => void;
}

type InputFieldProps = InputProps & InputFieldMetaProps;

export const InputField: FC<InputFieldProps> = ({
  touched,
  error,
  icon,
  passwordVisibilityIcon,
  handlePswdVisibilityIconMouseDown,
  handlePswdVisibilityIconMouseUp,
  ...props
}: InputFieldProps): ReactElement => {
  const { name, onBlur, onChange, className } = props;
  const customClasses = classNames("input-container__input", className);
  return (
    <div className="input-container">
      {icon && (
        <span className="input-container__icon">
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
        <span className="input-container__pswd-visibility-icon">
          <img
            draggable={false}
            onMouseDown={handlePswdVisibilityIconMouseDown}
            onMouseUp={handlePswdVisibilityIconMouseUp}
            src={passwordVisibilityIcon}
            alt={"pswd_visibility"}
          />
        </span>
      )}
      {touched && !!error && <p className="input-container__error">{error}</p>}
    </div>
  );
};
