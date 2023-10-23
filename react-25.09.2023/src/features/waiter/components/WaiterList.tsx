import React, {useEffect} from "react";
import WaiterItem from "./WaiterItem";
import Table from 'react-bootstrap/Table';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store";
import {fetchAll} from "../store/thunks";
import Loading from "../../../components/Loading";

const WaiterList = () => {
    const {list: waiters, fetchAllLoading} = useSelector((state: RootState) => state.waiters);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchAll());
    }, [dispatch]);

    return (
        <>
            {fetchAllLoading ?
                <Loading/> :
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
                        waiters.map(waiter => (
                            <WaiterItem waiter={waiter} key={waiter.id}/>))
                    }
                    </tbody>
                </Table>
            }
        </>
    );
}

export default WaiterList;