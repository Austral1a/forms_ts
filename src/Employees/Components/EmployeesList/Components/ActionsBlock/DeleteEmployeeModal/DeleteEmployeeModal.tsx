import React, { FC } from "react";
import { Modal, Button } from "../../../../../../Components";
import { useDeleteEmployeeManagement } from "./hooks";
import { translations } from "../../../../../../helpers";
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
  const {
    button: { deleteText, closeText },
    modal: { deleteConfirm },
  } = translations;
  return (
    <>
      {isOpen && (
        <Modal>
          <div className="modal-container__modal">
            <div className="modal-container__delete-confirmation">
              <h3>{deleteConfirm}</h3>
              <div className="modal-container__delete-options">
                <Button
                  text={deleteText}
                  onClick={dispatchAction}
                  type="button"
                />
                <Button text={closeText} onClick={handleClose} type="button" />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
