import { FormikHandlers, useField } from "formik";
import { EmployeeFormFields } from "@Components";

interface PositionFieldResult {
  positionField: {
    value: string;
    setValue: (value: string, shouldValidate?: boolean) => void;
    touched: boolean;
    error: string | undefined;
    onBlur: FormikHandlers["handleBlur"];
    onChange: FormikHandlers["handleChange"];
  };
}

export const usePositionModalField = (): PositionFieldResult => {
  const [fieldPosition, metaPosition, helpersPosition] = useField<string>({
    id: EmployeeFormFields.POSITION,
    name: EmployeeFormFields.POSITION,
  });
  return {
    positionField: {
      value: fieldPosition.value,
      setValue: helpersPosition.setValue,
      touched: metaPosition.touched,
      error: metaPosition.error,
      onBlur: fieldPosition.onBlur,
      onChange: fieldPosition.onChange,
    },
  };
};
