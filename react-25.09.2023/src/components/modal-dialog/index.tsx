import React, {PropsWithChildren} from "react";
import Modal from "react-bootstrap/Modal";

interface ModalDialogProps {
    display: boolean
    hide: () => void
    title: string
}

const ModalDialog = ({display, hide, title, children}: PropsWithChildren<ModalDialogProps>) => (
    <Modal show={display} onHide={hide}>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
    </Modal>
);

export default ModalDialog;