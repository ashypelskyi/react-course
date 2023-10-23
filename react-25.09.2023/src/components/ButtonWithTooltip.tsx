import {OverlayTrigger, Tooltip} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, {PropsWithChildren} from "react";
import {ButtonVariant} from "react-bootstrap/types";
import Loading, {LoadingSize} from "./Loading";

interface ButtonWithTooltipProps {
    onClick: () => void,
    variant?: ButtonVariant,
    message: string,
    loading: boolean
}

const ButtonWithTooltip = ({onClick, children, variant, message, loading}: PropsWithChildren<ButtonWithTooltipProps>) => (
    <OverlayTrigger placement="bottom" overlay={<Tooltip>{message}</Tooltip>}>
        <Button disabled={loading} variant={variant} onClick={onClick}>
            {loading ?
                <Loading size={LoadingSize.SMALL}/> :
                children
            }
        </Button>
    </OverlayTrigger>
);

export default ButtonWithTooltip;