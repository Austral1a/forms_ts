import { useField } from "formik";
import { EmployeeFormFields } from "../../common";
import { nameValidationRule } from "../../../Validations";
import { useMemo } from "react";

export const useModalFields = () => {
  const firstNameValidator = useMemo(() => nameValidationRule(), []);


  const [fieldFirstName, metaFirstName, helpersFirstName] = useField<string>({
    id: EmployeeFormFields.FIRST_NAME,
    name: EmployeeFormFields.FIRST_NAME,
    validate: firstNameValidator,
  });

  return {
      firstNameField: {
        value: fieldFirstName.value,
        setValue: helpersFirstName.setValue,
        touched: metaFirstName.touched,
        error: metaFirstName.error,
        onBlur: fieldFirstName.onBlur,
        onChange: fieldFirstName.onChange,
      }
  }
};
