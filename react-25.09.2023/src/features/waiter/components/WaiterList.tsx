import React, {useEffect} from "react";
import Table from 'react-bootstrap/Table';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store";
import {fetchAll} from "../store/thunks";
import Loading from "../../../components/Loading";
import {useSearchParams} from "react-router-dom";
import WaiterItem from "./WaiterItem";
import {hasSubstring} from "../utils";
import {Waiter} from "../types";

const WaiterList = () => {
    const {list: waiters, fetchAllLoading} = useSelector((state: RootState) => state.waiters);
    const dispatch = useDispatch<AppDispatch>();
    const [searchParams] = useSearchParams();

    const filterFirstName = searchParams.get('firstName');
    const filterPhone = searchParams.get('phone');
    const filterCondition = ({
                                 firstName,
                                 phone
                             }: Waiter) => hasSubstring(firstName, filterFirstName) && hasSubstring(phone, filterPhone);

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
                        waiters
                            .filter(filterCondition)
                            .map(waiter => (<WaiterItem waiter={waiter} key={waiter.id}/>))
                    }
                    </tbody>
                </Table>
            }
        </>
    );
}

export default WaiterList;