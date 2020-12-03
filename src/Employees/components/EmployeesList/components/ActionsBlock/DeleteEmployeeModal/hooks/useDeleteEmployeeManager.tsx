import { deleteEmployeeAction } from "@StoreEmployees";
import { useDispatch } from "react-redux";
import { useCallback } from "react";

interface DeleteEmployeeManagerResult {
  deleteEmployee: () => void;
}

export const useDeleteEmployeeManager = (
  id: number
): DeleteEmployeeManagerResult => {
  const dispatch = useDispatch();
  const deleteEmployee = useCallback(() => {
    dispatch(deleteEmployeeAction({ id }));
  }, [dispatch, id]);
  return { deleteEmployee };
};
