import { editEmployeeAction } from "@StoreEmployees";
import { EmployeeModalFormFields } from "@Employees";
import { EmployeeResponse } from "@StoreEmployees";
import { useDispatch } from "react-redux";
import { translations } from "@helpers";
import { FormikProps } from "formik";
import { useCallback, useEffect, useState } from "react";

interface EditEmployeeManagerProps {
  employeeValues: EmployeeResponse;
}

interface EditEmployeeManagerResult {
  submitBtnText: string;
  employeeFieldsValues: EmployeeModalFormFields;
  editEmployee: (props: FormikProps<EmployeeModalFormFields>) => void;
}

export const useEditEmployeeManager = ({
  employeeValues,
}: EditEmployeeManagerProps): EditEmployeeManagerResult => {
  const dispatch = useDispatch();
  const { id } = employeeValues;
  const { firstName, lastName, email, position } = employeeValues;
  const employeeFieldsValues = { firstName, lastName, email, position };
  const {
    button: { editText },
  } = translations;

  const editEmployee = useCallback(
    (props: FormikProps<EmployeeModalFormFields>) => {
      const { firstName, lastName, email, position } = props.values;
      const editActionPayload = {
        firstName,
        lastName,
        email,
        position,
        id,
      };
      dispatch(editEmployeeAction(editActionPayload));
    },
    [dispatch, id]
  );
  return {
    submitBtnText: editText,
    employeeFieldsValues,
    editEmployee,
  };
};
