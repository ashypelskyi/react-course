import React from "react";
import {Waiter} from '../types';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store";
import {deleteWaiterAction, openWaiterFormAction} from "../store/reducer";
import WaiterActionButtons from "./WaiterActionButtons";
import {TableCell, TableRow} from "@mui/material";

export interface WaiterItemProps {
    waiter: Waiter
}

const WaiterItem = ({waiter}: WaiterItemProps) => {
    const {processingLoading, deletableWaiterId, editableWaiter} = useSelector((state: RootState) => state.waiters);
    const dispatch = useDispatch<AppDispatch>();

    const editWaiter = () => {
        dispatch(openWaiterFormAction(waiter));
    }

    const deleteBtnOnClickHandler = async () => {
        const waiterId = waiter.id;
        if (waiterId) {
            dispatch(deleteWaiterAction(waiterId));
            return;
        }

        throw new Error(`Waiter id is null or undefined`);
    }

    return (
        <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
            <TableCell align={"center"} component="th" scope="row">{waiter.id}</TableCell>
            <TableCell align={"center"}>{waiter.firstName}</TableCell>
            <TableCell align={"center"}>{waiter.phone}</TableCell>
            <TableCell align={"center"}>
                <WaiterActionButtons waiter={waiter}
                                     editBtnLoading={processingLoading && editableWaiter?.id === waiter.id}
                                     editBtnOnClick={editWaiter}
                                     deleteBtnLoading={processingLoading && waiter.id === deletableWaiterId}
                                     deleteBtnOnClick={deleteBtnOnClickHandler}/>
            </TableCell>
        </TableRow>
    );
}

export default WaiterItem;