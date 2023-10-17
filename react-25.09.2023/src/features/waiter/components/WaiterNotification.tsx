import ToastContainer from "react-bootstrap/ToastContainer";
import {Toast} from "react-bootstrap";
import React from "react";

export interface WaiterNotificationProps {
    firstName?: string
    show: boolean
    hide: () => void
    operation: WaiterOperation
}

export enum WaiterOperation {
    CREATE, EDIT, DELETE
}

const WaiterNotification = ({firstName, show, hide, operation}: WaiterNotificationProps) => {
    const NOTIFICATION_DELAY = 1800;

    const getMessageDepOnOperation = (operation: WaiterOperation, name?: string): string => {
        let message = "";
        if (operation === WaiterOperation.EDIT) {
            message = `Waiter ${name} has been edited`
        } else if (operation === WaiterOperation.DELETE) {
            message = `Waiter ${name} has been deleted`;
        } else {
            message = `Waiter has been created`;
        }
        return message
    }

    return (
        <ToastContainer className="p-3" position="bottom-end" style={{zIndex: 1}}>
            <Toast className="d-inline-block m-1"
                   onClose={hide}
                   bg="success"
                   show={show}
                   delay={NOTIFICATION_DELAY}
                   autohide>
                <Toast.Body className="Success">
                    {getMessageDepOnOperation(operation, firstName)}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default WaiterNotification;