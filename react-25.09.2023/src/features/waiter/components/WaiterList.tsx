import React from "react";
import WaiterItem from "./WaiterItem";
import {Waiter as WaiterType} from '../types';
import Table from 'react-bootstrap/Table';

interface WaitersProps {
    items: WaiterType[]
    editWaiter: (waiter: WaiterType) => void;
    deleteWaiter: (waiterId: number) => void;
}

const WaiterList = ({items, editWaiter, deleteWaiter}: WaitersProps) => (
    <Table className="table text-center">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        {
            items.map((waiter: WaiterType) => (
                <WaiterItem editWaiter={editWaiter} deleteWaiter={deleteWaiter} key={waiter.id} waiter={waiter}/>))
        }
        </tbody>
    </Table>
);

export default WaiterList;