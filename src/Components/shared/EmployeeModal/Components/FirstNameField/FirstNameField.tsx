import React, { ReactElement, useMemo } from "react";
import { useField } from "formik";
import { EmployeeFormFields } from "../../common";
import { nameValidationRule } from "../../../Validations";
import { InputField } from "../../common";
import { person as personSvg } from "../../../../../assets";
import { translations } from "../../../../../helpers";

export const FirstNameField = (): ReactElement => {
  const firstNameValidator = useMemo(() => nameValidationRule(), []);

  const {
    field: { firstNameText },
  } = translations;

  const [fieldFirstName, metaFirstName] = useField<string>({
    id: EmployeeFormFields.FIRST_NAME,
    name: EmployeeFormFields.FIRST_NAME,
    validate: firstNameValidator,
  });
  return (
    <InputField
      placeholder={firstNameText}
      icon={personSvg}
      name={EmployeeFormFields.FIRST_NAME}
      value={fieldFirstName.value}
      touched={metaFirstName.touched}
      error={metaFirstName.error}
      handleBlur={fieldFirstName.onBlur}
      handleChange={fieldFirstName.onChange}
    />
  );
};
