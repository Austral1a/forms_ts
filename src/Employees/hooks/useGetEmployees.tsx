import { useState, useEffect, useCallback } from "react";
import { getEmployees } from "../../API";

interface EmployeeResponse {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  id: number;
}

export const useGetEmployees = () => {
  const [employees, setEmployees] = useState<EmployeeResponse[]>([]);
  const newEmployees = useCallback((data) => setEmployees(data), []);
  useEffect(() => {
    getEmployees().then((data) => newEmployees(data));
  }, []);
  console.log(employees);
  return employees;
};
