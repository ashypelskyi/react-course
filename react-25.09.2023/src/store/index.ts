import {configureStore} from '@reduxjs/toolkit';
import {WaiterClient} from "../features/waiter/clients/WaiterClient";
import config from '../configs/config.json';
import {WaitersPageConfig} from "../features/waiter/types";
import {reducer as waiterReducer} from "../features/waiter/store/reducer";

const waiterClient = new WaiterClient((config as WaitersPageConfig).backend.url)
const store = configureStore({
    reducer: {
        waiters: waiterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: {extraArgument: {waiterClient}}})
});

export interface ExtraPropsShape{
    waiterClient: WaiterClient
}
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;