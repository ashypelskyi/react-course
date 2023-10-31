export interface ReduxAction<T, P>{
    type: T,
    payload?: P
}