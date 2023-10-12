import React from "react";
import {Waiter as WaiterType} from '../types';
import {Gear, Trash} from "react-bootstrap-icons";
import ButtonWithTooltip from "../../../components/ButtonWithTooltip";

export interface WaiterProps {
    waiter: WaiterType
    editWaiter: (waiter: WaiterType) => void;
    deleteWaiter: (waiterId: number) => void;
}

const WaiterItem = ({waiter, editWaiter, deleteWaiter}: WaiterProps) => {
    return (
        <tr>
            <th scope="row">{waiter.id}</th>
            <td>{waiter.firstName}</td>
            <td>{waiter.phone}</td>
            <td>
                <div className="btn-group" role="group" aria-label="Waiter actions">
                    <ButtonWithTooltip onClick={() => editWaiter(waiter)} variant='info'
                                  message={`Edit waiter: ${waiter.firstName}`}>
                        <Gear/>
                    </ButtonWithTooltip>
                    <ButtonWithTooltip onClick={() => deleteWaiter(waiter.id || -1)} variant='danger'
                                  message={`Delete waiter: ${waiter.firstName}`}>
                        <Trash/>
                    </ButtonWithTooltip>
                </div>
            </td>
        </tr>
    );
}

export default WaiterItem;