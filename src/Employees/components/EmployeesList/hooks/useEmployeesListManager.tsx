import { useDispatch, useSelector } from "react-redux";
import {
  EmployeeResponse,
  getEmployeesAction,
  selectEmployees,
} from "@StoreEmployees";
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
