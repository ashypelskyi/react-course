import ButtonWithTooltip from "../../../components/ButtonWithTooltip";
import React from "react";
import {Waiter} from "../types";
import SettingsIcon from '@mui/icons-material/Settings';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import {ButtonGroup} from "@mui/material";

interface WaiterActionButtonsProps {
    editBtnLoading: boolean,
    editBtnOnClick: () => void,
    deleteBtnLoading: boolean,
    deleteBtnOnClick: () => void,
    waiter: Waiter

}

const WaiterActionButtons = ({
                                 waiter,
                                 editBtnLoading,
                                 deleteBtnLoading,
                                 editBtnOnClick,
                                 deleteBtnOnClick
                             }: WaiterActionButtonsProps) => {
    const firstName = waiter.firstName;
    const editBtmTooltipMessage = `Edit waiter: ${firstName}`;
    const deleteBtnTooltipMessage = `Delete waiter: ${firstName}`;

    return (
        <ButtonGroup variant="text" aria-label="outlined primary button group">
            <ButtonWithTooltip loading={editBtnLoading} onClick={editBtnOnClick} color={'info'}
                               message={editBtmTooltipMessage}>
                <SettingsIcon/>
            </ButtonWithTooltip>
            <ButtonWithTooltip loading={deleteBtnLoading} onClick={deleteBtnOnClick} color={'error'}
                               message={deleteBtnTooltipMessage}>
                <RemoveCircleIcon/>
            </ButtonWithTooltip>
        </ButtonGroup>
    )
}

export default WaiterActionButtons;