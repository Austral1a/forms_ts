import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getEmployeesAction } from "../../Store/Employees";

export const useGetEmployees = () => {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(getEmployeesAction()), [dispatch]);
};
