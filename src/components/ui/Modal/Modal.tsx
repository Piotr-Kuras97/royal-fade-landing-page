import "./Modal.scss";

import type { ModalProps } from "./Modal.types";

function Modal({
    isOpen,
    onClose,
    children,
}: ModalProps) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">

            <div
                className="modal__overlay"
                onClick={onClose}
            />

            <div className="modal__content">
                {children}
            </div>

        </div>
    );
}

export default Modal;