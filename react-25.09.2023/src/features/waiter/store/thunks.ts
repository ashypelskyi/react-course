import {
    addWaiterActionFailed,
    addWaiterActionSuccess,
    deleteWaiterAction,
    deleteWaiterActionFailed,
    deleteWaiterActionSuccess,
    editWaiterActionFailed,
    editWaiterActionSuccess,
    fetchAllAction,
    fetchAllActionFailed,
    fetchAllActionSuccess,
    persistWaiterActionInProgress
} from "./reducer";
import {AppDispatch, ExtraPropsShape, RootState} from "../../../store";
import {Waiter} from "../types";

export const fetchAll = () => (dispatch: AppDispatch, _: RootState, {waiterClient}: ExtraPropsShape) => {
    dispatch(fetchAllAction());
    waiterClient.fetchAll()
        .then((waiters: Waiter[]) => dispatch(fetchAllActionSuccess(waiters)))
        .catch((e: Error) => dispatch(fetchAllActionFailed(e)));
};

export const persist = (waiter: Waiter) => {
    return (dispatch: AppDispatch, _: RootState, {waiterClient}: ExtraPropsShape) => {
        dispatch(persistWaiterActionInProgress());
        if (waiter.id) {
            waiterClient.update(waiter)
                .then((waiter: Waiter) => dispatch(editWaiterActionSuccess(waiter)))
                .catch((e: Error) => dispatch(editWaiterActionFailed(e as Error)));

        } else {
            waiterClient.create(waiter)
                .then((waiter: Waiter) => dispatch(addWaiterActionSuccess(waiter)))
                .catch((e: Error) => dispatch(addWaiterActionFailed(e)));
        }
    }
};

export const remove = (waiterId: number) => {
    return async (dispatch: AppDispatch, _: RootState, {waiterClient}: ExtraPropsShape) => {
        dispatch(deleteWaiterAction(waiterId));
        waiterClient.delete(waiterId)
            .then(() => dispatch(deleteWaiterActionSuccess(waiterId)))
            .catch((e: Error) => dispatch(deleteWaiterActionFailed(e)))
    }
};

