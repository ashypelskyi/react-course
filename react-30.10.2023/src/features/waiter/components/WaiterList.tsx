import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store";
import Loading from "../../../components/Loading";
import {useSearchParams} from "react-router-dom";
import WaiterItem from "./WaiterItem";
import {hasSubstring} from "../utils";
import {Waiter} from "../types";
import {fetchAllAction} from "../store/reducer";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const WaiterList = () => {
    const {list: waiters, fetchAllLoading} = useSelector((state: RootState) => state.waiters);
    const dispatch = useDispatch<AppDispatch>();
    const [searchParams] = useSearchParams();

    const filterFirstName = searchParams.get('firstName');
    const filterPhone = searchParams.get('phone');
    const filterCondition = (waiter: Waiter) => waiter && hasSubstring(waiter.firstName, filterFirstName) && hasSubstring(waiter.phone, filterPhone);

    useEffect(() => {
        dispatch(fetchAllAction());
    }, [dispatch]);

    return (
        <>
            {fetchAllLoading ?
                <Loading size={20}/> :
                <TableContainer sx={{minWidth: 650}} component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align={"center"}>#</TableCell>
                                <TableCell align={"center"}>First Name</TableCell>
                                <TableCell align={"center"}>Phone</TableCell>
                                <TableCell align={"center"}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                waiters
                                    .filter(filterCondition)
                                    .map(waiter => (<WaiterItem waiter={waiter} key={waiter.id}/>))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </>
    );
}

export default WaiterList;