import React from "react";
import {Waiter} from '../types';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store";
import {remove} from "../store/thunks";
import {editWaiterAction} from "../store/reducer";
import WaiterActionButtons from "./WaiterActionButtons";

export interface WaiterItemProps {
    waiter: Waiter
}

const WaiterItem = ({waiter}: WaiterItemProps) => {
    const {processingLoading, deletableWaiterId, editableWaiter} = useSelector((state: RootState) => state.waiters);
    const dispatch = useDispatch<AppDispatch>();

    const editWaiter = () => {
        // @ts-ignore
        dispatch(editWaiterAction(waiter));
    }

    const deleteBtnOnClickHandler = async () => {
        const waiterId = waiter.id;
        if (waiterId) {
            // @ts-ignore
            await dispatch(remove(waiterId));
            return;
        }

        throw new Error(`Waiter id is null or undefined`);
    }

    return (
        <tr>
            <th scope="row">{waiter.id}</th>
            <td>{waiter.firstName}</td>
            <td>{waiter.phone}</td>
            <td>
                <WaiterActionButtons waiter={waiter}
                                     editBtnLoading={processingLoading && editableWaiter?.id === waiter.id}
                                     editBtnOnClick={editWaiter}
                                     deleteBtnLoading={processingLoading && waiter.id === deletableWaiterId}
                                     deleteBtnOnClick={deleteBtnOnClickHandler}/>
            </td>
        </tr>
    );
}

export default WaiterItem;