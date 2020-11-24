import { useDispatch, useSelector } from "react-redux";
import { GetEmployee } from "../../../../Interfaces/Employees";
import { createSelector } from "reselect";
import { getEmployeesAction } from "../../../../Store/Employees";
import { useEffect } from "react";

export const useEmployeesManagement = () => {
  const dispatch = useDispatch();

  const selectEmployees = createSelector(
    //TODO: Create state type
    (state: any) => state.getEmployeesReducer.employees,
    (employees) => employees
  );

  useEffect(() => {
    dispatch(getEmployeesAction());
  }, [dispatch]);
  const employees: GetEmployee[] = useSelector(selectEmployees);
  return employees;
};
