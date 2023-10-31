import {Action} from "@reduxjs/toolkit";

export interface ReduxAction<T, P>{
    type: T,
    payload?: P
}

export interface SagaWorkerAction<T> extends Action{
    payload: T
}