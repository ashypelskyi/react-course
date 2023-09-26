import React from 'react';
import ReactDOM from 'react-dom/client';
import {TodosView} from "./components/todos-view";

import todos from './data.json';

const Root = () => (<section>
    <h1>TODO list</h1>
    <TodosView todos={todos}/>
</section>);


ReactDOM.createRoot(document.getElementById('root')).render(<Root/>);