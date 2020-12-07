import { useDeleteEmployeeManager } from "./hooks";
import React, { FC, useCallback } from "react";
import { translations } from "@helpers";
import { Button, CustomModal } from "@Components";
import classes from "./DeleteEmployeeModal.module.scss";

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
  const { deleteEmployee } = useDeleteEmployeeManager();

  const {
    button: { textDelete, textClose },
    modal: { deleteConfirm },
  } = translations;

  const onSubmit = useCallback(() => {
    deleteEmployee(employeeId);
    handleDeleteModalClose();
  }, [handleDeleteModalClose, deleteEmployee, employeeId]);

  return (
    <>
      {isModalOpen && (
        <CustomModal isOpen={isModalOpen}>
          <div className={classes["modal-delete-confirmation"]}>
            <h3 className={classes["modal-delete-confirmation__text"]}>
              {deleteConfirm}
            </h3>
            <div className={classes["modal-delete-confirmation__options"]}>
              <Button text={textDelete} onClick={onSubmit} type="button" />
              <Button
                text={textClose}
                onClick={handleDeleteModalClose}
                type="button"
              />
            </div>
          </div>
        </CustomModal>
      )}
    </>
  );
};
