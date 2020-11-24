import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { editEmployeeAction } from "../../../../../../../Store/Employees";
import {
  Employee,
  GetEmployee,
} from "../../../../../../../Interfaces/Employees";
import { FormikProps } from "formik";

interface Props {
  employeeData: GetEmployee;
  handleClose: () => void;
}

export const useEditEmployeeManagement = ({
  employeeData,
  handleClose,
}: Props) => {
  const dispatch = useDispatch();
  const { id } = employeeData;

  const dispatchAction = useCallback(
    (props: FormikProps<Employee>) =>
      dispatch(editEmployeeAction({ ...props.values, id })),
    [dispatch, id]
  );

  return {
    ...employeeData,
    btnText: "Edit",
    handleClose,
    dispatchAction,
  };
};
