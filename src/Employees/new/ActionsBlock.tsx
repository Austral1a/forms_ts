import React, { FC, ReactElement, ReactNode, useState } from "react";
import { Button } from "../../Components";
import { EditEmployeeModal } from "./modal/EditEmployeeModal";

interface Props {
  id: number;
}

export const ActionsBlock: FC<Props> = ({ id }): ReactElement => {
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
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
          onClick={() => "show delete confirmation"}
        />
      </div>
      <EditEmployeeModal
        id={id}
        isOpen={isEditModalOpen}
        handleClose={() => setIsEditModalOpen(false)}
      />
      {/*DELETE EMPLOYEE CONFIRM*/}
    </>
  );
};
