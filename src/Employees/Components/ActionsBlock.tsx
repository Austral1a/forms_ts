import React, { FC, ReactElement, useState } from "react";
import { Button } from "../../Components";
import { EditEmployeeModal, DeleteEmployeeModal } from "./index";
import { GetEmployee } from "../../Interfaces/Employees";

interface Props {
  employeeData: GetEmployee;
}

export const ActionsBlock: FC<Props> = ({ employeeData }): ReactElement => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  return (
    <>
      <div className="employees__actions-block">
        <Button
          text="Edit"
          type="button"
          onClick={() => setIsEditModalOpen(true)}
        />
        <Button
          text="Delete"
          type="button"
          onClick={() => setIsDeleteModalOpen(true)}
        />
      </div>
      <EditEmployeeModal
        employeeData={employeeData}
        isOpen={isEditModalOpen}
        handleClose={() => setIsEditModalOpen(false)}
      />
      <DeleteEmployeeModal
        employeeId={employeeData.id}
        isOpen={isDeleteModalOpen}
        handleClose={() => setIsDeleteModalOpen(false)}
      />
    </>
  );
};
