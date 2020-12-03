import { useDeleteEmployeeManager } from "./hooks";
import React, { FC, useCallback } from "react";
import { translations } from "@helpers";
import { Button } from "@Components";
import Modal from "react-modal";
import DeleteEmployeeModalStyles from "./DeleteEmployeeModal.module.scss";
import EmployeeModalFormStyles from "../../../../../../Components/shared/EmployeeModal/components/EmployeeModalForm/EmployeeModalForm.module.scss";

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
    // TODO: id in here rather than in useDeleteEmployeeModal
    deleteEmployee();
    handleDeleteModalClose();
  }, [handleDeleteModalClose, deleteEmployee]);

  return (
    <>
      {isModalOpen && (
        // TODO: wrap Modal
        <Modal
          isOpen={isModalOpen}
          className={EmployeeModalFormStyles["employee-modal"]}
        >
          <div
            className={DeleteEmployeeModalStyles["modal-delete-confirmation"]}
          >
            <h3
              className={
                DeleteEmployeeModalStyles["modal-delete-confirmation__text"]
              }
            >
              {deleteConfirm}
            </h3>
            <div
              className={
                DeleteEmployeeModalStyles["modal-delete-confirmation__options"]
              }
            >
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
