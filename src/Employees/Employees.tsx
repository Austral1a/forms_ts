import React, { FC } from "react";
import { Card } from "../Components";
import { EmployeesList } from "./Components";
import "./Employees.scss";

export const Employees: FC = () => {
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
