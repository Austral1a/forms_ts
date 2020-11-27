import React, { FC, ReactElement } from "react";

interface OptionProps {
  value: string;
  optionText: string;
}

export const Option: FC<OptionProps> = ({
  value,
  optionText,
}): ReactElement => {
  return <option value={value}>{optionText}</option>;
};
