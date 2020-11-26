import React, { ReactElement, useMemo } from "react";
import { useField } from "formik";
import { EmployeeFormFields } from "../../common";

import { translations } from "../../../../../helpers";

export const PositionsField = (): ReactElement => {
  const [fieldPositions, metaPositions] = useField({
    id: EmployeeFormFields.POSITION,
    name: EmployeeFormFields.POSITION,
  });

  const {
    field: { qa, dev, manager },
  } = translations;
  return (
    <select
      value={fieldPositions.value || "qa"}
      onBlur={fieldPositions.onBlur}
      onChange={fieldPositions.onChange}
      name={EmployeeFormFields.POSITION}
    >
      <option value="Qa">{qa}</option>
      <option value="Developer">{dev}</option>
      <option value="Manager">{manager}</option>
    </select>
  );
};
