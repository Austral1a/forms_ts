import { getEmployeeAction } from "../../../Store/Employees";
import { Employee } from "../../../Interfaces/Employees";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const useEditEmployeeManagement = (id: number): Employee => {
  // TODO: ADD SELECTOR
  const employee: Employee = useSelector(
    (state: any) => state.getEmployeeReducer.employee
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployeeAction(id));
  }, [dispatch, id]);
  return employee;
};
