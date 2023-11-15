import React, {PropsWithChildren} from "react";
import {Dialog, DialogContent, DialogTitle} from "@mui/material";

interface ModalDialogProps {
    display: boolean
    hide: () => void
    title: string
}

const ModalDialog = ({display, hide, title, children}: PropsWithChildren<ModalDialogProps>) => (
    <Dialog open={display} onClose={hide} fullWidth={true}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent dividers={true}>
            {children}
        </DialogContent>
    </Dialog>
);

export default ModalDialog;