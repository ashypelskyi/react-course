import {
    addWaiterActionFailed,
    addWaiterActionSuccess,
    deleteWaiterAction,
    deleteWaiterActionFailed,
    deleteWaiterActionSuccess, editWaiterAction,
    editWaiterActionFailed,
    editWaiterActionSuccess,
    fetchAllAction,
    fetchAllActionFailed,
    fetchAllActionSuccess
} from "./actions";
import {AppDispatch, RootState, ThunkExtraPropsShape} from "../../../store";
import {Waiter} from "../types";

export const fetchAll = () => (dispatch: AppDispatch, _: RootState, extraArgs: ThunkExtraPropsShape) => {
    dispatch(fetchAllAction());
    const {waiterClient} = extraArgs;

    waiterClient.fetchAll()
        .then(waiters => dispatch(fetchAllActionSuccess(waiters)))
        .catch(e => dispatch(fetchAllActionFailed(e as Error)));
};

export const persist = (waiter: Waiter) => {
    return (dispatch: AppDispatch, _: RootState, extraArgs: ThunkExtraPropsShape) => {
        const {waiterClient} = extraArgs;

        if (waiter.id) {
            waiterClient.update(waiter)
                .then(waiter => dispatch(editWaiterActionSuccess(waiter)))
                .catch(e => dispatch(editWaiterActionFailed(e)));

        } else {
            waiterClient.create(waiter)
                .then(waiter => dispatch(addWaiterActionSuccess(waiter)))
                .catch(e => dispatch(addWaiterActionFailed(e)));
        }
    }
};

export const remove = (waiterId: number) => {
    return (dispatch: AppDispatch, _: RootState, extraArgs: ThunkExtraPropsShape) => {
        const {waiterClient} = extraArgs;

        dispatch(deleteWaiterAction());
        waiterClient.delete(waiterId)
            .then(() => dispatch(deleteWaiterActionSuccess(waiterId)))
            .catch(e => dispatch(deleteWaiterActionFailed(e)))

    }
};

