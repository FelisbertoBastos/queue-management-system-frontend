import { ReactElement } from "react";

interface ModalProps {
  show: boolean;
  children: ReactElement | ReactElement[];
  onClose?: () => void;
}

export const Modal = ({ show, children, onClose }: ModalProps) => {
  const modalClasses = ["modal"];

  if (show) modalClasses.push("is-active");

  return (
    <div className={modalClasses.join(" ")}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box">{children}</div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={onClose}
      ></button>
    </div>
  );
};
