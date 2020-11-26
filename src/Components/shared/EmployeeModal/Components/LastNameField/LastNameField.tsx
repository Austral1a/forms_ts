import React, { ReactElement, useMemo } from "react";
import { useField } from "formik";
import { EmployeeFormFields } from "../../common";
import { nameValidationRule } from "../../../Validations";
import { InputField } from "../../common";
import { person as personSvg } from "../../../../../assets";
import { translations } from "../../../../../helpers";

export const LastNameField = (): ReactElement => {
  const lastNameValidator = useMemo(() => nameValidationRule(), []);
  const {
    field: { lastNameText },
  } = translations;
  const [fieldLastName, metaLastName] = useField<string>({
    id: EmployeeFormFields.LAST_NAME,
    name: EmployeeFormFields.LAST_NAME,
    validate: lastNameValidator,
  });
  return (
    <InputField
      placeholder={lastNameText}
      icon={personSvg}
      name={EmployeeFormFields.LAST_NAME}
      value={fieldLastName.value}
      touched={metaLastName.touched}
      error={metaLastName.error}
      handleBlur={fieldLastName.onBlur}
      handleChange={fieldLastName.onChange}
    />
  );
};
