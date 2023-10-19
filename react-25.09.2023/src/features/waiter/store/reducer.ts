import {WaiterAction} from "./actions";
import {Waiter} from "../types";
import {ReduxAction} from "../../../types";
import {Variant} from "react-bootstrap/types";

export interface WaitersState {
    list: Waiter[],
    errors: Error[],
    loading: boolean,
    editableWaiter?: Waiter,
    waiterFormTitle: string,
    displayWaiterForm: boolean,
    notificationMessage?: string,
    notificationType: Variant
}

const INIT_STATE: WaitersState = {
    list: [],
    errors: [],
    loading: false,
    editableWaiter: undefined,
    waiterFormTitle: "Undefined",
    displayWaiterForm: false,
    notificationMessage: undefined,
    notificationType: 'light'
};

const getWaiterFormTitle = (waiter: Waiter) => waiter && waiter.id ? `Edit waiter ${waiter.firstName}` : `Create waiter`;
const waiterReducer = (state = INIT_STATE, {type, payload}: ReduxAction<WaiterAction, any>) => {
    switch (type) {
        case WaiterAction.FETCH_WAITERS_ACTION: {
            return {...state, loading: true}
        }
        case WaiterAction.FETCH_WAITERS_ACTION_SUCCESS: {
            return {...state, list: payload, loading: false};
        }
        case WaiterAction.FETCH_WAITERS_ACTION_FAILED: {
            return {...state,
                errors: [...state.errors, payload],
                loading: false,
                notificationMessage: `Fetch all waiters failed. ${payload}`,
                notificationType: 'danger'
            };
        }

        case WaiterAction.EDIT_WAITER_ACTION: {
            return {...state, editableWaiter: payload, displayWaiterForm: true, waiterFormTitle: getWaiterFormTitle(payload as Waiter)};
        }
        case WaiterAction.EDIT_WAITER_ACTION_SUCCESS: {
            const list = state.list.map(waiter => waiter.id === (payload as Waiter).id ? payload : waiter);
            return {
                ...state,
                list,
                editableWaiter: undefined,
                displayWaiterForm: false,
                notificationMessage: `Waiter ${(payload as Waiter).firstName} edit success`,
                notificationType: 'success'
            };
        }
        case WaiterAction.EDIT_WAITER_ACTION_FAILED: {
            return {...state,
                displayWaiterForm: false,
                errors: [...state.errors, payload],
                notificationMessage: `Edit waiter failed. ${payload}`,
                notificationType: 'danger'
            };
        }

        case WaiterAction.ADD_WAITER_ACTION: {
            return {...state, displayWaiterForm: true, waiterFormTitle: getWaiterFormTitle(payload as Waiter)};
        }
        case WaiterAction.ADD_WAITER_ACTION_SUCCESS: {
            return {
                ...state,
                displayWaiterForm: false,
                list: [...state.list, payload],
                notificationMessage: 'Waiter created',
                notificationType: 'success'
            }
        }
        case WaiterAction.ADD_WAITER_ACTION_FAILED: {
            return {...state, displayWaiterForm: false, errors: [...state.errors, payload]}
        }

        case WaiterAction.DELETE_WAITER_ACTION: {
            return {...state};
        }
        case WaiterAction.DELETE_WAITER_ACTION_SUCCESS: {
            const list = state.list.filter(waiter => waiter.id !== payload);
            return {
                ...state,
                list,
                notificationMessage: `Waiter ${state.list.filter(waiter => waiter.id === payload)[0].firstName} deleted`,
                notificationType: 'success'
            };
        }
        case WaiterAction.DELETE_WAITER_ACTION_FAILED: {
            return {...state,
                errors: [...state.errors, payload],
                notificationMessage: `Delete waiter failed. ${payload}`,
                notificationType: 'danger'
            };
        }

        case WaiterAction.CLOSE_WAITER_FORM_ACTION: {
            return {...state, displayWaiterForm: false};
        }
        case WaiterAction.HIDE_NOTIFICATION_ACTION: {
            return {...state, notificationMessage: undefined};
        }
        default: {
            return state;
        }
    }
};

export default waiterReducer;