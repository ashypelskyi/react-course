import {Waiter} from "../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AlertColor} from "@mui/material/Alert/Alert";

export interface WaitersState {
    list: Waiter[],
    fetchAllLoading: boolean,
    processingLoading: boolean,
    editableWaiter?: Waiter,
    deletableWaiterId?: number,
    waiterFormTitle: string,
    displayWaiterForm: boolean,
    notificationMessage?: string,
    notificationType: AlertColor
}

const INIT_STATE: WaitersState = {
    list: [],
    fetchAllLoading: false,
    processingLoading: false,
    editableWaiter: undefined,
    deletableWaiterId: undefined,
    waiterFormTitle: "Undefined",
    displayWaiterForm: false,
    notificationMessage: undefined,
    notificationType: 'info'
};

const getWaiterFormTitle = (waiter?: Waiter) => waiter && waiter.id ? `Edit waiter ${waiter.firstName}` : `Create waiter`;
const errorNotification = (state: WaitersState, error: Error, msg?: string) => {
    state.notificationMessage = msg ? `${msg}: ${error.message}` : error.message;
    state.notificationType = 'error';
};
const successNotification = (state: WaitersState, msg: string = 'Successful') => {
    state.notificationMessage = msg;
    state.notificationType = 'success';
}

const waiterReducer = createSlice({
    name: 'waiter',
    initialState: INIT_STATE,
    reducers: {
        fetchAllAction: (state: WaitersState) => {
            state.fetchAllLoading = true;
        },
        fetchAllActionSuccess: (state: WaitersState, {payload}: PayloadAction<Waiter[]>) => {
            state.list = payload;
            state.fetchAllLoading = false;
        },
        fetchAllActionFailed: (state: WaitersState, {payload}: PayloadAction<Error>) => {
            state.fetchAllLoading = false;
            errorNotification(state, payload, 'Fetch all waiters failed.')
        },
        addWaiterActionSuccess: (state: WaitersState, {payload}: PayloadAction<Waiter>) => {
            state.displayWaiterForm = false;
            state.processingLoading = false;
            state.list.push(payload);
            successNotification(state, 'Waiter created');
        },
        addWaiterActionFailed: (state: WaitersState, {payload}: PayloadAction<Error>) => {
            state.displayWaiterForm = false;
            state.processingLoading = false;
            errorNotification(state, payload, `Waiter creation failed`);
        },
        persistWaiterAction: (state: WaitersState, {payload}: PayloadAction<Waiter>) => {
        },
        editWaiterActionSuccess: (state: WaitersState, {payload}: PayloadAction<Waiter>) => {
            state.list = state.list.map(waiter => waiter.id === payload.id ? payload : waiter);
            state.displayWaiterForm = false;
            state.processingLoading = false;
            successNotification(state, `Waiter ${payload.firstName} edited`)

        },
        editWaiterActionFailed: (state: WaitersState, {payload}: PayloadAction<Error>) => {
            state.displayWaiterForm = false;
            state.processingLoading = false;
            errorNotification(state, payload, `Edit waiter failed.`);
        },
        deleteWaiterAction: (state: WaitersState, {payload}: PayloadAction<number>) => {
            state.processingLoading = true;
            state.deletableWaiterId = payload;
            state.editableWaiter = undefined;
        },
        deleteWaiterActionSuccess: (state: WaitersState, {payload}: PayloadAction<number>) => {
            state.list = state.list.filter(waiter => waiter.id !== payload);
            state.processingLoading = false;
            const deleted: Waiter = state.list.filter(waiter => waiter.id !== payload)[0];
            successNotification(state, `Waiter ${deleted.firstName} deleted`)
        },
        deleteWaiterActionFailed: (state: WaitersState, {payload}: PayloadAction<Error>) => {
            state.processingLoading = false;
            state.deletableWaiterId = undefined;
            errorNotification(state, payload, `Delete waiter failed.`);
        },
        persistWaiterActionInProgress: (state: WaitersState) => {
            state.processingLoading = true;

        },
        hideNotification: (state: WaitersState) => {
            state.notificationMessage = undefined;
        },
        closeWaiterFormAction: (state: WaitersState) => {
            state.displayWaiterForm = false;
            state.processingLoading = false;
            state.processingLoading = false;
        }
        ,
        openWaiterFormAction: (state: WaitersState, {payload}: PayloadAction<Waiter | undefined>) => {
            state.displayWaiterForm = true;
            state.editableWaiter = payload;
            state.processingLoading = false;
            state.waiterFormTitle = getWaiterFormTitle(payload)
        }
    }
});

export const {reducer, actions} = waiterReducer;
export const {
    hideNotification,
    deleteWaiterActionFailed,
    deleteWaiterActionSuccess,
    addWaiterActionSuccess,
    editWaiterActionSuccess,
    closeWaiterFormAction,
    deleteWaiterAction,
    persistWaiterActionInProgress,
    editWaiterActionFailed,
    addWaiterActionFailed,
    fetchAllActionFailed,
    fetchAllActionSuccess,
    fetchAllAction,
    openWaiterFormAction,
    persistWaiterAction
} = actions;