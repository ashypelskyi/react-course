import React from "react";
import {Waiter} from "./Waiter";
import {Waiter as WaiterType} from '../types';
import Table from 'react-bootstrap/Table';

interface WaitersProps {
    items: WaiterType[]
}

export const Waiters = ({items}: WaitersProps) => (
    <Table className="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Phone</th>
        </tr>
        </thead>
        <tbody>
        {
            items.map((waiter: WaiterType) => (<Waiter key={waiter.id} waiter={waiter}/>))
        }
        </tbody>
    </Table>
);