import {all, fork} from 'redux-saga/effects';
import {waiterWatcher} from "../features/waiter/store/sagas";
import HttpClient from "../clients/HttpClient";
import {Waiter} from "../features/waiter/types";

function* rootSaga(client: HttpClient<number, Waiter>) {
    yield all([waiterWatcher(client)]);
}

export default rootSaga;