import ButtonWithTooltip from "../../../components/ButtonWithTooltip";
import {Gear, Trash} from "react-bootstrap-icons";
import React from "react";
import {Waiter} from "../types";

interface WaiterActionButtonsProps {
    editBtnLoading: boolean,
    editBtnOnClick: () => void,
    deleteBtnLoading: boolean,
    deleteBtnOnClick: () => void,
    waiter: Waiter

}

const WaiterActionButtons = ({waiter, editBtnLoading, deleteBtnLoading, editBtnOnClick, deleteBtnOnClick}: WaiterActionButtonsProps) => {
    const firstName = waiter.firstName;
    const editBtmTooltipMessage = `Edit waiter: ${firstName}`;
    const deleteBtnTooltipMessage = `Delete waiter: ${firstName}`;

    return (
        <div className="btn-group" role="group" aria-label="Waiter actions">
            <ButtonWithTooltip loading={editBtnLoading} onClick={editBtnOnClick} variant='info'
                               message={editBtmTooltipMessage}>
                <Gear/>
            </ButtonWithTooltip>
            <ButtonWithTooltip loading={deleteBtnLoading} onClick={deleteBtnOnClick} variant='danger'
                               message={deleteBtnTooltipMessage}>
                <Trash/>
            </ButtonWithTooltip>
        </div>
    )
}

export default WaiterActionButtons;