import React from "react";
import {useDispatch} from "react-redux";
import {ReduxAction} from "../types";
import {Alert, Snackbar} from "@mui/material";
import {AlertColor} from "@mui/material/Alert/Alert";

export interface NotificationProps {
    message?: string
    hideAction: () => ReduxAction<any, any>
    type: string
}

const Notification = ({message, hideAction, type}: NotificationProps) => {
    const dispatch = useDispatch();
    const NOTIFICATION_DELAY = 1800;

    return (
        <Snackbar open={!!message}
                  autoHideDuration={NOTIFICATION_DELAY}
                  onClose={() => dispatch(hideAction())}
                  anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
            <Alert onClose={() => dispatch(hideAction())} severity={type as AlertColor} sx={{width: '100%'}}>
                {message}
            </Alert>
        </Snackbar>
    )
}

export default Notification;