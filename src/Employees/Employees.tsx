import React, {
  FC,
  ReactElement,
  useCallback,
  useState,
  useEffect,
} from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getEmployeesAction } from "../Store/Employees";
import { Card, Button, Modal } from "../Components";
import "./Employees.scss";
import { EmployeeModal } from "./EmployeeModal";
import { getEmployeeAction } from "../Store/Employees";
import { useCreateEmployee, useGetEmployees, useEditEmployee } from "./hooks";

import { EmployeesList } from "./new/EmployeesList";

import { delEmployee } from "../API";

interface Employee {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  id: number;
}

interface GetEmployeePayload {
  employees: Employee[];
  errorMessage: string;
}

export const Employees: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const dispatchGetEmployeeAction = useCallback(
    (id: number) => dispatch(getEmployeeAction(id)),
    [dispatch]
  );

  const createEmployee = useCreateEmployee();
  const getEmployees = useGetEmployees();
  const editEmployee = useEditEmployee();

  const employees = useSelector(
    (state: { getEmployeesReducer: GetEmployeePayload }) =>
      state.getEmployeesReducer.employees
  );

  useEffect(() => {
    getEmployees();
  }, [getEmployees, employees]);

  const [modalData, setModalData] = useState({});
  return (
    <Card>
      <div className="card-header">
        <h4>First Name</h4>
        <h4>Last Name</h4>
        <h4>Email</h4>
        <h4>Position</h4>
        <h4>Actions</h4>
      </div>
      <EmployeesList />
    </Card>
  );
};
