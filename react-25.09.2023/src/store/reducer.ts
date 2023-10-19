import {combineReducers} from "redux";
import waiterReducer, {WaitersState} from "../features/waiter/store/reducer";

interface RootReducerShape{
    waiters: WaitersState
}

const rootReducer = combineReducers<RootReducerShape>({
    waiters: waiterReducer
});

export default rootReducer;