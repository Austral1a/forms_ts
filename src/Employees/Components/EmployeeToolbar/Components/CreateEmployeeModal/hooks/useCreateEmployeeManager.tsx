import { createEmployeeAction } from "@StoreEmployees";
import { EmployeeModalFormFields } from "@Employees";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { translations } from "@helpers";
import { useFormikContext } from "formik";

type CreateEmployeeProps = { values: EmployeeModalFormFields };

interface CreateEmployeeManagerResult {
  createEmployee: (props: CreateEmployeeProps) => void;
  submitBtnText: string;
  isCreateModalOpen: boolean;
  handleCreateModalClose: () => void;
  handleCreateModalOpen: () => void;
}

export const useCreateEmployeeManager = (): CreateEmployeeManagerResult => {
  const dispatch = useDispatch();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const formikContext = useFormikContext<EmployeeModalFormFields>();
  const createEmployee = useCallback(
    (props: CreateEmployeeProps) => {
      const {
        values: { firstName, lastName, email, position },
      } = props;
      const employeeModalFormFieldsInitValues = {
        firstName: "",
        lastName: "",
        email: "",
        position: "",
      };
      Promise.all([
        dispatch(
          createEmployeeAction({ firstName, lastName, email, position })
        ),
        formikContext.setFormikState((prevState) => {
          prevState.values = { ...employeeModalFormFieldsInitValues };
          return prevState;
        }),
      ]);
    },
    [dispatch, formikContext]
  );
  const {
    button: { createText },
  } = translations;
  return {
    createEmployee,
    submitBtnText: createText,
    isCreateModalOpen,
    handleCreateModalClose: useCallback(() => setIsCreateModalOpen(false), []),
    handleCreateModalOpen: useCallback(() => setIsCreateModalOpen(true), []),
  };
};
