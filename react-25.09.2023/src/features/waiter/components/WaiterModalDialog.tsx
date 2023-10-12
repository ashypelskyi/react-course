import WaiterForm from "./WaiterForm";
import React from "react";
import Modal from "react-bootstrap/Modal";
import {Waiter} from "../types";

interface WaiterModalProps {
    display: boolean;
    hide: () => void;
    item: Waiter | undefined
    onSubmit: (formData: Waiter) => void
}

const WaiterModalDialog = ({display, hide, item, onSubmit}: WaiterModalProps) => {
    return (
        <Modal show={display} onHide={hide}>
            <Modal.Header closeButton>
                <Modal.Title>  {item && item.id ? `Edit waiter ${item.firstName}` : `Create waiter`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <WaiterForm item={item} onSubmit={onSubmit}/>
            </Modal.Body>
        </Modal>
    )
}

export default WaiterModalDialog;