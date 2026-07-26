import "./Modal.scss";
import { useEffect } from "react";

import type { ModalProps } from "./Modal.types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";

import { fadeVariants, modalVariants  } from "../../../animations/variants";
import {
    DEFAULT_TRANSITION,
    SPRING_TRANSITION,
} from "../../../animations/transitions";

const Modal = ({
    isOpen,
    onClose,
    children,
}: ModalProps) => {

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal"
                    variants={fadeVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={DEFAULT_TRANSITION}
                >
                    <motion.div
                        className="modal__overlay"
                        onClick={onClose}
                        variants={fadeVariants}
                    >
                        <motion.div
                            className="modal__content"
                            onClick={(event) => event.stopPropagation()}
                            variants={modalVariants}
                            transition={SPRING_TRANSITION}
                            role="dialog"
                            aria-modal="true"
                        >
                            <button
                                type="button"
                                className="modal__close"
                                onClick={onClose}
                                aria-label="Zamknij okno"
                            >
                                <FontAwesomeIcon icon={faXmark} />
                            </button>

                            {children}
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}

export default Modal;