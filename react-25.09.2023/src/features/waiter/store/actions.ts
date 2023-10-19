import {ReduxAction} from "../../../types";
import {Waiter} from "../types";

/*export const FETCH_WAITERS_ACTION = 'FETCH_WAITERS_ACTION';
export const FETCH_WAITERS_ACTION_SUCCESS = 'FETCH_WAITERS_ACTION_SUCCESS';
export const FETCH_WAITERS_ACTION_FAILED = 'FETCH_WAITERS_ACTION_FAILED';
export const ADD_WAITER_ACTION = 'ADD_WAITER_ACTION';
export const ADD_WAITER_ACTION_SUCCESS = 'ADD_WAITER_ACTION_SUCCESS';
export const ADD_WAITER_ACTION_FAILED = 'ADD_WAITER_ACTION_FAILED';
export const DELETE_WAITER_ACTION = 'DELETE_WAITER_ACTION';
export const DELETE_WAITER_ACTION_SUCCESS = 'DELETE_WAITER_ACTION_SUCCESS';
export const DELETE_WAITER_ACTION_FAILED = 'DELETE_WAITER_ACTION_FAILED';
export const EDIT_WAITER_ACTION = 'EDIT_WAITER_ACTION';
export const EDIT_WAITER_ACTION_SUCCESS = 'EDIT_WAITER_ACTION_SUCCESS';
export const EDIT_WAITER_ACTION_FAILED = 'EDIT_WAITER_ACTION_FAILED';
export const CLOSE_WAITER_FORM_ACTION = 'CLOSE_WAITER_FORM_ACTION';
export const HIDE_NOTIFICATION_ACTION = 'HIDE_NOTIFICATION_ACTION';*/

export const enum WaiterAction {
    FETCH_WAITERS_ACTION,
    FETCH_WAITERS_ACTION_SUCCESS,
    FETCH_WAITERS_ACTION_FAILED,
    ADD_WAITER_ACTION,
    ADD_WAITER_ACTION_SUCCESS,
    ADD_WAITER_ACTION_FAILED,
    DELETE_WAITER_ACTION,
    DELETE_WAITER_ACTION_SUCCESS,
    DELETE_WAITER_ACTION_FAILED,
    EDIT_WAITER_ACTION,
    EDIT_WAITER_ACTION_SUCCESS,
    EDIT_WAITER_ACTION_FAILED,
    CLOSE_WAITER_FORM_ACTION,
    HIDE_NOTIFICATION_ACTION
}

export const fetchAllAction = (): ReduxAction<WaiterAction, Waiter[]> => ({
    type: WaiterAction.FETCH_WAITERS_ACTION
});
export const fetchAllActionSuccess = (list: Waiter[]): ReduxAction<WaiterAction, Waiter[]> => ({
    type: WaiterAction.FETCH_WAITERS_ACTION_SUCCESS,
    payload: list
});
export const fetchAllActionFailed = (error: Error): ReduxAction<WaiterAction, Error> => ({
    type: WaiterAction.FETCH_WAITERS_ACTION_FAILED,
    payload: error
});

export const addWaiterAction = (): ReduxAction<WaiterAction, Waiter> => ({type: WaiterAction.ADD_WAITER_ACTION});
export const addWaiterActionSuccess = (waiter: Waiter): ReduxAction<WaiterAction, Waiter> => ({
    type: WaiterAction.ADD_WAITER_ACTION_SUCCESS,
    payload: waiter
});
export const addWaiterActionFailed = (error: Error): ReduxAction<WaiterAction, Error> => ({
    type: WaiterAction.ADD_WAITER_ACTION_FAILED,
    payload: error
});

export const editWaiterAction = (waiter: Waiter): ReduxAction<WaiterAction, Waiter> => ({type: WaiterAction.EDIT_WAITER_ACTION, payload: waiter});
export const editWaiterActionSuccess = (waiter: Waiter): ReduxAction<WaiterAction, Waiter> => ({
    type: WaiterAction.EDIT_WAITER_ACTION_SUCCESS,
    payload: waiter
});
export const editWaiterActionFailed = (error: Error): ReduxAction<WaiterAction, Error> => ({
    type: WaiterAction.EDIT_WAITER_ACTION_FAILED,
    payload: error
});

export const deleteWaiterAction = (): ReduxAction<WaiterAction, Waiter> => ({type: WaiterAction.DELETE_WAITER_ACTION});
export const deleteWaiterActionSuccess = (waiterId: number): ReduxAction<WaiterAction, number> => ({
    type: WaiterAction.DELETE_WAITER_ACTION_SUCCESS,
    payload: waiterId
});
export const deleteWaiterActionFailed = (error: Error): ReduxAction<WaiterAction, Error> => ({
    type: WaiterAction.DELETE_WAITER_ACTION_FAILED,
    payload: error
});

export const hideNotification = (): ReduxAction<WaiterAction, undefined> => ({type: WaiterAction.HIDE_NOTIFICATION_ACTION});

export const closeWaiterFormAction = (): ReduxAction<WaiterAction, undefined> => ({type: WaiterAction.CLOSE_WAITER_FORM_ACTION});