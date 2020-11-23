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

export const Employees: FC = (): ReactElement => {
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
        <Button
          className="card-header_create-employee"
          type="button"
          text="create"
          onClick={() => {
            setModalData({
              firstName: "",
              lastName: "",
              email: "",
              position: "",
              modalType: "Create",
              handleClose: () => setIsModalOpen(false),
              dispatchAction: createEmployee,
            });
            setIsModalOpen(true);
          }}
        />
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
                  onClick={() => {
                    setModalData({
                      firstName: employee.firstName,
                      lastName: employee.lastName,
                      email: employee.email,
                      position: employee.position,
                      modalType: "Edit",
                      preload: getEmployees,
                      handleClose: () => setIsModalOpen(false),
                      dispatchAction: (values: any) => {
                        editEmployee(
                          values.firstName,
                          values.lastName,
                          values.email,
                          values.position,
                          employee.id
                        );
                        setIsModalOpen(false);
                      },
                    });
                    setIsModalOpen(true);
                  }}
                  type="button"
                  text="Edit"
                />
                <Button
                  onClick={() => {
                    delEmployee(employee.id);
                  }}
                  text="Delete"
                  type="button"
                />
              </div>
            </div>
          );
        })}
      </div>
      {isModalOpen && (
        <EmployeeModal
          dispatchAction={dispatchGetEmployeeAction}
          // @ts-ignore
          data={modalData}
        />
      )}
    </Card>
  );
};
