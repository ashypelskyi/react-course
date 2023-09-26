import React from "react";

export const TodoView = ({todo}) => (<li className={todo.isCompleted ? 'completed' : 'in-progress'}>{todo.text}</li>);