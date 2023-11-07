import ToastContainer from "react-bootstrap/ToastContainer";
import {Toast} from "react-bootstrap";
import React from "react";
import {Variant} from "react-bootstrap/types";
import _ from "lodash";
import {useDispatch} from "react-redux";
import {ReduxAction} from "../types";

export interface NotificationProps {
    message?: string
    hideAction: () => ReduxAction<any, any>
    type: Variant
}

const Notification = ({message, hideAction, type}: NotificationProps) => {
    const dispatch = useDispatch();
    const NOTIFICATION_DELAY = 1800;

    return (
        <ToastContainer className="p-3" position="bottom-end" style={{zIndex: 1}}>
            <Toast className="d-inline-block m-1 text-center"
                   onClose={() => dispatch(hideAction())}
                   bg={type}
                   show={!!message}
                   delay={NOTIFICATION_DELAY}
                   autohide>
                <Toast.Body className={_.capitalize(type)}>{message}</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default Notification;