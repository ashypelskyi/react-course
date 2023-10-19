import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import rootReducer from "./reducer";
import {WaiterClient} from "../features/waiter/clients/WaiterClient";
import config from '../configs/config.json';
import {WaitersPageConfig} from "../features/waiter/types";
import logger from 'redux-logger';

const waiterClient = new WaiterClient((config as WaitersPageConfig).backend.url)

export interface ThunkExtraPropsShape {
    waiterClient: WaiterClient
}

const clients: ThunkExtraPropsShape = {
    waiterClient
};

const thunk = thunkMiddleware.withExtraArgument(clients);
const middlewares = (config as WaitersPageConfig).logger.reduxLogEnable ? applyMiddleware(thunk, logger) : applyMiddleware(thunk);

const store = createStore(rootReducer, middlewares);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;