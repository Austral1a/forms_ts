import React, { FC, useCallback } from "react";
import { Button } from "../../../../../../Components";
import { useDeleteEmployeeManager } from "./hooks";
import { translations } from "../../../../../../helpers";
import "./DeleteEmployeeModal.scss";

interface DeleteEmployeeProps {
  isOpen: boolean;
  handleClose: () => void;
  employeeId: number;
}

export const DeleteEmployeeModal: FC<DeleteEmployeeProps> = ({
  isOpen,
  handleClose,
  employeeId,
}) => {
  const { deleteEmployee } = useDeleteEmployeeManager(employeeId);
  const {
    button: { deleteText, closeText },
    modal: { deleteConfirm },
  } = translations;
  const onSubmit = useCallback(() => {
    deleteEmployee();
    handleClose();
  }, [handleClose, deleteEmployee]);
  return (
    <>
      {isOpen && (
        //TODO: add class
        <div>
          <div className="modal-container__modal">
            <div className="modal-container__delete-confirmation">
              <h3>{deleteConfirm}</h3>
              <div className="modal-container__delete-options">
                <Button text={deleteText} onClick={onSubmit} type="button" />
                <Button text={closeText} onClick={handleClose} type="button" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
