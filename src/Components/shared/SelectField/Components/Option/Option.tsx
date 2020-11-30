import React, { FC, OptionHTMLAttributes, ReactElement } from "react";

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  value: string;
}

interface OptionMetaProps {
  optionText: string;
}

type OptionFieldProps = OptionProps & OptionMetaProps;

export const Option: FC<OptionFieldProps> = ({
  value,
  optionText,
  ...props
}): ReactElement => {
  return (
    <option {...props} value={value}>
      {optionText}
    </option>
  );
};
