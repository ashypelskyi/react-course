import {TodoView} from "./todo-view";
import React from "react";

export const TodosView = ({todos}) => (<ul>{todos.map(todo => <TodoView key={todo.id} todo={todo}/>)}</ul>);