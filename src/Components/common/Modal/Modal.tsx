import React, { FC, ReactElement, ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

const appRoot = document.querySelector("#root") as HTMLDivElement;
const modalRoot = document.querySelector("#modal-root") as HTMLDivElement;

interface Props {
  children: ReactNode;
}

export const Modal: FC<Props> = ({ children }): ReactElement => {
  const modal = document.createElement("div") as HTMLDivElement;
  modal.setAttribute("class", "modal-container");
  useEffect(() => {
    modalRoot.appendChild(modal);

    return () => {
      modalRoot.removeChild(modal);
    };
  }, [modal]);
  return ReactDOM.createPortal(children, modal);
};
