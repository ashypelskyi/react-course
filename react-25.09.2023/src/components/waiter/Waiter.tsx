import React from "react";
import {Waiter as WaiterType} from "../types";

export interface WaiterProps {
    waiter: WaiterType
}

export const Waiter = ({waiter}: WaiterProps) => (
    <tr>
        <th scope="row">{waiter.id}</th>
        <td>{waiter.firstName}</td>
        <td>{waiter.phone}</td>
    </tr>
);