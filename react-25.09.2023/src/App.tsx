import {Provider} from "react-redux";
import store from "./store";
import WaitersPage from "./features/waiter";
import React from "react";

const App = () => (
    <Provider store={store}>
        <WaitersPage/>
    </Provider>
);

export default App;