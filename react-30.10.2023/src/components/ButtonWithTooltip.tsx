import React, {PropsWithChildren} from "react";
import Loading from "./Loading";
import {IconButton, Tooltip} from "@mui/material";
import {OverridableStringUnion} from "@mui/types";
import {IconButtonPropsColorOverrides} from "@mui/material/IconButton/IconButton";

interface ButtonWithTooltipProps {
    onClick: () => void,
    color?: OverridableStringUnion<'inherit' | 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning', IconButtonPropsColorOverrides>
    message: string,
    loading: boolean
}

const ButtonWithTooltip = ({
                               onClick,
                               children,
                               color,
                               message,
                               loading
                           }: PropsWithChildren<ButtonWithTooltipProps>) => (
    <Tooltip title={message}>
        <IconButton disabled={loading} onClick={onClick} color={color}>
            {loading ?
                <Loading size={20}/> :
                children
            }
        </IconButton>
    </Tooltip>
);

export default ButtonWithTooltip;