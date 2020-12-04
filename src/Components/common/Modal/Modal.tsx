import React, { FC, ReactElement } from "react";
import Modal from "react-modal";
import classNames from "classnames";
import ReactModal from "react-modal";
import classes from "./Modal.module.scss";

interface CustomModalProps extends ReactModal.Props {
  isOpen: boolean;
  className?: string;
  children?: ReactElement;
  onModalOpen?: () => void;
}

export const CustomModal: FC<CustomModalProps> = ({
  isOpen,
  className,
  children,
  onModalOpen,
}): ReactElement => {
  const customClasses = classNames(classes["employee-modal"], className);

  return (
    <Modal onAfterOpen={onModalOpen} className={customClasses} isOpen={isOpen}>
      {children}
    </Modal>
  );
};
