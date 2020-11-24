import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { deleteEmployeeAction } from "../../../../../../../Store/Employees";

export const useDeleteEmployeeManagement = (id: number) => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(deleteEmployeeAction(id));
  }, [dispatch, id]);
};
