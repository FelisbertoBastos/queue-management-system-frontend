import { ReactElement } from "react";

interface ModalProps {
  show: boolean;
  children: ReactElement | ReactElement[];
}

export const Modal = ({ show, children }: ModalProps) => {
  const modalClasses = ["modal"];

  if (show) modalClasses.push("is-active");

  return (
    <div className={modalClasses.join(" ")}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box">{children}</div>
      </div>
      <button className="modal-close is-large" aria-label="close"></button>
    </div>
  );
};
