import React, { FC, ReactElement, ReactNode } from "react";
import { Button } from "../../Components/Button";
import { EditEmployeeModal } from "./modal/EditEmployeeModal";

interface Props {
  id: number;
}

export const ActionsBlock: FC<Props> = ({ id }): ReactElement => {
  return (
    <>
      <div className="employees__actions-block">
        <Button text="Edit" type="button" onClick={() => "show edit modal"} />
        <Button
          text="Delete"
          type="button"
          onClick={() => "show delete confirmation"}
        />
      </div>
      <EditEmployeeModal id={id} isOpen={} setIsOpen={} />
      {/*DELETE EMPLOYEE CONFIRM*/}
    </>
  );
};
