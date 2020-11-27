import { useDispatch, useSelector } from "react-redux";
import { EmployeeResponse } from "../../../../Store/Employees/interfaces";
import { getEmployeesAction } from "../../../../Store/Employees";
import { selectEmployees } from "../../../../Store/Employees";
import { useEffect } from "react";

interface EmployeeManagerResult {
  employeesList: EmployeeResponse[];
}

export const useEmployeesManager = (): EmployeeManagerResult => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployeesAction());
  }, [dispatch]);

  const employeesList: EmployeeResponse[] = useSelector(selectEmployees);
  
  return { employeesList };
};
