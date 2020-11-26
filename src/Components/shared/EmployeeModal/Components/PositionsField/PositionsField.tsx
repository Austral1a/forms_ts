import React, { ReactElement, useMemo } from "react";
import { useField } from "formik";
import { EmployeeFormFields } from "../../common";
import { SelectField } from "../../common";
import { translations } from "../../../../../helpers";

export const PositionsField = (): ReactElement => {
  const [fieldPositions, metaPositions] = useField({
    id: EmployeeFormFields.POSITION,
    name: EmployeeFormFields.POSITION,
    // TODO: add validation
  });

  const {
    field: { qa, dev, manager },
  } = translations;
  return (
    <SelectField
      defaultValue={qa}
      error={metaPositions.error}
      touched={metaPositions.touched}
      value={fieldPositions.value}
      handleBlur={fieldPositions.onBlur}
      handleChange={fieldPositions.onChange}
      name={EmployeeFormFields.POSITION}
      selectOptions={["Chose position", qa, dev, manager]}
    />
  );
};
