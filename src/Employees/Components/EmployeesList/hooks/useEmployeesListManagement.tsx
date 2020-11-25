import { useDispatch, useSelector } from "react-redux";
import { EmployeeWithId } from "../../../../Store/Employees/interfaces";
import { getEmployeesAction } from "../../../../Store/Employees";
import { selectEmployees } from "../../../../Store/Employees";
import { useEffect } from "react";

export const useEmployeesManagement = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployeesAction());
  }, [dispatch]);
  const employees: EmployeeWithId[] = useSelector(selectEmployees);
  return employees;
};
