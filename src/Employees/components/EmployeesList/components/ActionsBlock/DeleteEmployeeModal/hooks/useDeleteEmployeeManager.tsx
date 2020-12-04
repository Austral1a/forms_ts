import { deleteEmployeeAction } from "@StoreEmployees";
import { useDispatch } from "react-redux";
import { useCallback } from "react";

interface DeleteEmployeeManagerResult {
  deleteEmployee: (id: number) => void;
}

export const useDeleteEmployeeManager = (): DeleteEmployeeManagerResult => {
  const dispatch = useDispatch();

  const deleteEmployee = useCallback(
    (id: number) => dispatch(deleteEmployeeAction({ id })),
    [dispatch]
  );

  return { deleteEmployee };
};
