import React from "react";
import {Waiter} from '../types';
import {Gear, Trash} from "react-bootstrap-icons";
import ButtonWithTooltip from "../../../components/ButtonWithTooltip";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../store";
import {remove} from "../store/thunk";
import {editWaiterAction} from "../store/actions";

export interface WaiterItemProps {
    waiter: Waiter
}

const WaiterItem = ({waiter}: WaiterItemProps) => {
    const dispatch = useDispatch<AppDispatch>();

    const editBtmTooltipMessage = `Edit waiter: ${waiter.firstName}`;
    const deleteBtnTooltipMessage = `Delete waiter: ${waiter.firstName}`;

    const editWaiter = () => {
        // @ts-ignore
        dispatch(editWaiterAction(waiter));
    }

    const deleteBtnOnClickHandler = () => {
        const waiterId = waiter.id;
        if (waiterId) {
            // @ts-ignore
            dispatch(remove(waiterId));
        } else {
            throw new Error(`Waiter id is null or undefined`);
        }
    }

    return (
        <tr>
            <th scope="row">{waiter.id}</th>
            <td>{waiter.firstName}</td>
            <td>{waiter.phone}</td>
            <td>
                <div className="btn-group" role="group" aria-label="Waiter actions">
                    <ButtonWithTooltip onClick={editWaiter} variant='info' message={editBtmTooltipMessage}>
                        <Gear/>
                    </ButtonWithTooltip>
                    <ButtonWithTooltip onClick={deleteBtnOnClickHandler} variant='danger'
                                       message={deleteBtnTooltipMessage}>
                        <Trash/>
                    </ButtonWithTooltip>
                </div>
            </td>
        </tr>
    );
}

export default WaiterItem;