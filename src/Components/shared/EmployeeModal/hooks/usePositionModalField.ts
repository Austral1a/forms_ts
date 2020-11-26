import { FormikHandlers, useField } from "formik";
import { EmployeeFormFields } from "../common";

interface PositionFieldResult {
  positionField: {
    value: string;
    touched: boolean;
    error: string | undefined;
    onBlur: FormikHandlers["handleBlur"];
    onChange: FormikHandlers["handleChange"];
  };
}

export const usePositionModalField = (): PositionFieldResult => {
  const [fieldPosition, metaPosition] = useField<string>({
    id: EmployeeFormFields.EMAIL,
    name: EmployeeFormFields.EMAIL,
    // TODO: Add validator
  });
  return {
    positionField: {
      value: fieldPosition.value,
      touched: metaPosition.touched,
      error: metaPosition.error,
      onBlur: fieldPosition.onBlur,
      onChange: fieldPosition.onChange,
    },
  };
};
