import React, { FC, useCallback } from "react";
import { Button } from "@Components";
import { useDeleteEmployeeManager } from "./hooks";
import { translations } from "@helpers";
import "./DeleteEmployeeModal.scss";
import Modal from "react-modal";

interface DeleteEmployeeProps {
  isModalOpen: boolean;
  handleClose: () => void;
  employeeId: number;
}

export const DeleteEmployeeModal: FC<DeleteEmployeeProps> = ({
  isModalOpen,
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
    <Modal
      isOpen={isModalOpen}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, .6)",
        },
        content: {
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          background: "none",
          border: "none",
        },
      }}
    >
      <div className="modal-delete-confirmation">
        <h3>{deleteConfirm}</h3>
        <div className="modal-delete-confirmation__options">
          <Button text={deleteText} onClick={onSubmit} type="button" />
          <Button text={closeText} onClick={handleClose} type="button" />
        </div>
      </div>
    </Modal>
  );
};
