import {configureStore} from '@reduxjs/toolkit';
import {WaiterClient} from "../features/waiter/clients/WaiterClient";
import config from '../configs/config.json';
import {WaitersPageConfig} from "../features/waiter/types";
import {reducer as waiterReducer} from "../features/waiter/store/reducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./saga";


const waiterClient = new WaiterClient((config as WaitersPageConfig).backend.url);
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        waiters: waiterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga, waiterClient);

export interface ExtraPropsShape{
    waiterClient: WaiterClient
}
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;