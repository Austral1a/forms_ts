import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { deleteEmployeeAction } from "@StoreEmployees";

interface DeleteEmployeeManagerResult {
  deleteEmployee: () => void;
}

export const useDeleteEmployeeManager = (
  id: number
): DeleteEmployeeManagerResult => {
  const dispatch = useDispatch();
  const deleteEmployee = useCallback(() => {
    dispatch(deleteEmployeeAction(id));
  }, [dispatch, id]);
  return { deleteEmployee };
};
