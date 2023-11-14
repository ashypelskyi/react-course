import {Provider} from "react-redux";
import store from "./store";
import WaitersPage from "./features/waiter";
import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./features/about";
import NotFound from "./features/not-found";
import MainPage from "./features/home";
import NavBar from "./components/nav-bar";

const App = () => {
    const [title, setTitle] = useState("");
    return (
        <Provider store={store}>
            <BrowserRouter>
                <NavBar title={title}/>
                <Routes>
                    <Route path={'/'} element={<MainPage setTitle={setTitle}/>}/>
                    <Route path={'/waiters'} element={<WaitersPage setTitle={setTitle}/>}/>
                    <Route path={'/about'} element={<About setTitle={setTitle}/>}/>
                    <Route path={'/*'} element={<NotFound setTitle={setTitle}/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;