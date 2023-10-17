import ToastContainer from "react-bootstrap/ToastContainer";
import {Toast} from "react-bootstrap";
import React from "react";
import {Variant} from "react-bootstrap/types";
import _ from "lodash";

export interface NotificationProps {
    message: string
    displaying: boolean
    hide: () => void,
    type: Variant
}

const Notification = ({message, displaying, hide, type}: NotificationProps) => {
    const NOTIFICATION_DELAY = 1800;

    return (
        <ToastContainer className="p-3" position="bottom-end" style={{zIndex: 1}}>
            <Toast className="d-inline-block m-1"
                   onClose={hide}
                   bg={type}
                   show={displaying}
                   delay={NOTIFICATION_DELAY}
                   autohide>
                <Toast.Body className={_.capitalize(type)}>{message}</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default Notification;