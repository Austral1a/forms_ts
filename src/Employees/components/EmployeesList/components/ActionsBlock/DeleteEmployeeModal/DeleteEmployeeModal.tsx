import { useDeleteEmployeeManager } from "./hooks";
import React, { FC, useCallback } from "react";
import { translations } from "@helpers";
import { Button } from "@Components";
import "./DeleteEmployeeModal.scss";
import Modal from "react-modal";

interface DeleteEmployeeProps {
  isModalOpen: boolean;
  handleDeleteModalClose: () => void;
  employeeId: number;
}

export const DeleteEmployeeModal: FC<DeleteEmployeeProps> = ({
  isModalOpen,
  handleDeleteModalClose,
  employeeId,
}) => {
  const { deleteEmployee } = useDeleteEmployeeManager(employeeId);
  const {
    button: { deleteText, closeText },
    modal: { deleteConfirm },
  } = translations;
  const onSubmit = useCallback(() => {
    deleteEmployee();
    handleDeleteModalClose();
  }, [handleDeleteModalClose, deleteEmployee]);
  return (
    <>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} className="employee-modal">
          <div className="modal-delete-confirmation">
            <h3 className="modal-delete-confirmation__text">{deleteConfirm}</h3>
            <div className="modal-delete-confirmation__options">
              <Button text={deleteText} onClick={onSubmit} type="button" />
              <Button
                text={closeText}
                onClick={handleDeleteModalClose}
                type="button"
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
