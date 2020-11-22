import React, {
  FC,
  ReactElement,
  useCallback,
  useState,
  useEffect,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEmployeesAction } from "../Store/Employees";
import { Card, Button, Modal } from "../Components";
import "./Employees.scss";
import { EmployeeModal } from "./EmployeeModal";
import { createEmployeeAction } from "../Store/Employees";

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

export const Employees: FC = (): ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalToolbarOpen, setIsModalToolbarOpen] = useState(false);
  const dispatch = useDispatch();
  const dispatchGetEmployeesAction = useCallback(
    () => dispatch(getEmployeesAction()),
    [dispatch]
  );

  const dispatchCreateEmployeeAction = useCallback(
    (values, position) =>
      dispatch(
        createEmployeeAction(
          values.firstName,
          values.lastName,
          values.email,
          position
        )
      ),
    [dispatch]
  );

  const employees = useSelector(
    (state: { getEmployeesReducer: GetEmployeePayload }) =>
      state.getEmployeesReducer.employees
  );

  useEffect(() => {
    dispatchGetEmployeesAction();
  }, [dispatchGetEmployeesAction, employees]);

  return (
    <Card>
      <div className="card-header">
        <h4>First Name</h4>
        <h4>Last Name</h4>
        <h4>Email</h4>
        <h4>Position</h4>
        <h4>Actions</h4>
        <Button
          className="card-header_create-employee"
          type="button"
          text="create"
          onClick={() => setIsModalOpen(true)}
        />
        {isModalOpen && (
          <EmployeeModal
            dispatchAction={dispatchCreateEmployeeAction}
            handleClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
      <div className="card-body">
        {employees.map((employee) => {
          return (
            <div key={employee.id} className="card-body__employee">
              <h4>{employee.firstName}</h4>
              <h4>{employee.lastName}</h4>
              <h4>{employee.email}</h4>
              <h4>{employee.position}</h4>
              <div className="card-body__toolbar">
                <Button
                  onClick={() => setIsModalToolbarOpen(true)}
                  type="button"
                  text="Edit"
                />
                <Button
                  onClick={() => setIsModalToolbarOpen(true)}
                  type="button"
                  text="Delete"
                />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
