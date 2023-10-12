import {OverlayTrigger, Tooltip} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, {PropsWithChildren} from "react";
import {ButtonVariant} from "react-bootstrap/types";

interface ButtonWithTooltipProps {
    onClick: () => void,
    variant?: ButtonVariant,
    message: string
}

const ButtonWithTooltip = ({onClick, children, variant, message}: PropsWithChildren<ButtonWithTooltipProps>) => (
    <OverlayTrigger placement="bottom" overlay={<Tooltip>{message}</Tooltip>}>
        <Button variant={variant} onClick={onClick}>{children}</Button>
    </OverlayTrigger>
);

export default ButtonWithTooltip;