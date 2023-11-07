import {all, call, put, takeEvery} from "redux-saga/effects";
import HttpClient, {CREATE, DELETE, FETCH_ALL, UPDATE} from "../../../clients/HttpClient";
import {Waiter} from "../types";
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
    persistWaiterActionInProgress,
    persistWaiterAction
} from "./reducer";
import {SagaWorkerAction} from "../../../types";

function* fetchWaitersWorker(client: HttpClient<number, Waiter>) {
    try {
        const waiters: Waiter[] = yield call([client, FETCH_ALL]);
        yield put(fetchAllActionSuccess(waiters));
    } catch (e: unknown) {
        yield put(fetchAllActionFailed(e as Error));
    }
}

function* persistWaiterWorker(client: HttpClient<number, Waiter>, {payload: waiter}: SagaWorkerAction<Waiter>) {
    yield put(persistWaiterActionInProgress());
    if (waiter?.id) {
        try {
            const updated: Waiter = yield  call([client, UPDATE], waiter);
            yield put(editWaiterActionSuccess(updated))
        } catch (e: unknown) {
            yield put(editWaiterActionFailed(e as Error));
        }
    } else {
        try {
            const created: Waiter = yield  call([client, CREATE], waiter);
            yield put(addWaiterActionSuccess(created))
        } catch (e: unknown) {
            yield put(addWaiterActionFailed(e as Error));
        }
    }
}

function* removeWaiterWorker(client: HttpClient<number, Waiter>, {payload: waiterId}: SagaWorkerAction<number>) {
    yield put(persistWaiterActionInProgress());
    try {
        yield call([client, DELETE], waiterId);
        yield put(deleteWaiterActionSuccess(waiterId));
    } catch (e: unknown) {
        yield put(deleteWaiterActionFailed(e as Error));
    }
}

export function* waiterWatcher(client: HttpClient<number, Waiter>) {
    yield all([
        takeEvery(fetchAllAction, fetchWaitersWorker, client),
        takeEvery(persistWaiterAction, persistWaiterWorker, client),
        takeEvery(deleteWaiterAction, removeWaiterWorker, client)
    ]);
}