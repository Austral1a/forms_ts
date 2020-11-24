import React, { FC } from "react";
import { Table } from "../Components";
import { EmployeesList, CreateEmployee } from "./Components";
import "./Employees.scss";

export const Employees: FC = () => {
  return (
    <div className="employees-container">
      <CreateEmployee />
      <Table>
        <div className="employees-header">
          <h4>First Name</h4>
          <h4>Last Name</h4>
          <h4>Email</h4>
          <h4>Position</h4>
          <h4>Actions</h4>
        </div>
        <EmployeesList />
      </Table>
    </div>
  );
};
