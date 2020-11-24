import React, { FC } from "react";
import { Modal, Button } from "../../../../Components";
import { useDeleteEmployeeManagement } from "../../hooks";
import "./DeleteEmployeeModal.scss";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  employeeId: number;
}

export const DeleteEmployeeModal: FC<Props> = ({
  isOpen,
  handleClose,
  employeeId,
}) => {
  const dispatchAction = useDeleteEmployeeManagement(employeeId);
  return (
    <>
      {isOpen && (
        <Modal>
          <div className="modal-container__modal">
            <div className="modal-container__delete-confirmation">
              <h3>Are you sure you wanna delete that user?</h3>
              <div className="modal-container__delete-options">
                <Button text="Delete" onClick={dispatchAction} type="button" />
                <Button text="Close" onClick={handleClose} type="button" />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
