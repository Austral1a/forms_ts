import React, { FC, ReactElement } from "react";
import { Button } from "../../Components/Button";

export const ActionsBlock: FC<{}> = (): ReactElement => {
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
      {/*EDIT EMPLOYEE MODAL*/}
      {/*DELETE EMPLOYEE CONFIRM*/}
    </>
  );
};
