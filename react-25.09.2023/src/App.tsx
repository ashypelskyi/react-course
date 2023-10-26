import {Provider} from "react-redux";
import store from "./store";
import WaitersPage from "./features/waiter";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./features/about";
import NotFound from "./features/not-found";
import MainPage from "./features/home";
import {NavBar} from "./components/NavBar";

const App = () => (
    <Provider store={store}>
        <NavBar/>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/waiters'} element={<WaitersPage/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/*'} element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>
);

export default App;