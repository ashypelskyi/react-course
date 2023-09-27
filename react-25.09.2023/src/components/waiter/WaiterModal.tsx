import {WaiterForm, WaiterFormProps} from "./WaiterForm";
import Button from 'react-bootstrap/Button';
import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import {Waiter} from "../types";

export const WaiterModal = ({item, onSubmit}: WaiterFormProps) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);
    const hide = () => setShow(false);

    const submitHandler = (formData: Waiter) => {
        hide();
        onSubmit(formData);
    }

    return (
        <React.Fragment>
            <div className="d-flex justify-content-end">
                <Button variant="success" onClick={handleShow}>Add</Button>
            </div>

            <Modal show={show} onHide={hide}>
                <Modal.Header closeButton>
                    <Modal.Title>  {item && item.id ? `Edit waiter ${item.firstName}` : `Create waiter`}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <WaiterForm item={item} onSubmit={submitHandler}/>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}