import React, {useCallback, useEffect, useRef, useState} from "react";
import WaiterList from './components/WaiterList';
import {Waiter, WaitersPageConfig} from './types';
import {WaiterClient} from './components/WaiterClient';
import WaiterModalDialog from './components/WaiterModalDialog';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WaiterNotification, {WaiterOperation} from "./components/WaiterNotification";
import ButtonWithTooltip from "../../components/ButtonWithTooltip";
import {PersonAdd} from "react-bootstrap-icons";

interface WaitersPageProps {
    config: WaitersPageConfig
}

const WaitersPage = ({config}: WaitersPageProps) => {
    const [waiters, setWaiters] = useState<Waiter[]>([]);
    const [client] = useState<WaiterClient>(() => new WaiterClient(config.backend.url));
    const [displayWaiterForm, setDisplayWaiterForm] = useState(false);
    const [displayNotification, setDisplayNotification] = useState(false);
    const [nextWaiter, setNextWaiter] = useState<Waiter>();
    const [currentWaiter, setCurrentWaiter] = useState<Waiter>();
    const [operation, setOperation] = useState<WaiterOperation>(WaiterOperation.CREATE);

    const fetchAll = useCallback(() => {
        client.fetchAll().then(waiters => setWaiters(waiters));
    }, [client]);

    useEffect(() => {
        fetchAll();
    }, [fetchAll]);

    const createWaiter = async (waiter: Waiter) => {
        const created = await client.create(waiter);
        setNextWaiter(created);
        setWaiters([...waiters, created]);
        showNotification();
    }

    const editWaiter = async (nextWaiter: Waiter) => {
        const updated = await client.edit(nextWaiter);
        setNextWaiter(updated);
        const nextWaiterList = waiters.map(waiter => waiter.id === nextWaiter.id ? updated : waiter)
        setWaiters(nextWaiterList);
        showNotification();
    }

    const formSubmitHandler = (formData: Waiter) => {
        hideModalDialog();
        operation === WaiterOperation.EDIT ? editWaiter(formData) : createWaiter(formData);
    }

    const editWaiterHandler = (waiter: Waiter): void => {
        showModalDialog();
        setCurrentWaiter(waiter)
        setOperation(WaiterOperation.EDIT);
    };

    const deleteWaiterHandler = async (waiterId: number) => {
        await client.delete(waiterId);
        const filtered = waiters.filter(waiter => waiter.id !== waiterId);
        setWaiters(filtered);
        setOperation(WaiterOperation.DELETE);
        showNotification();
    };

    const hideModalDialog = () => setDisplayWaiterForm(false);
    const showModalDialog = () => setDisplayWaiterForm(true);
    const hideNotification = () => setDisplayNotification(false);
    const showNotification = () => setDisplayNotification(true);

    return (
        <Container>
            <Row>
                <Col className="text-center gy-3">
                    <h1>Waiters management</h1>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-end">
                    <ButtonWithTooltip variant='success' message={`Add waiter`} onClick={showModalDialog}>
                        <PersonAdd size="1.5em"/>
                    </ButtonWithTooltip>
                </Col>
            </Row>
            <Row>
                <Col>
                    <WaiterModalDialog
                        hide={hideModalDialog}
                        display={displayWaiterForm}
                        item={currentWaiter}
                        onSubmit={formSubmitHandler}/>
                </Col>
            </Row>
            <Row>
                <Col className="border-start border-end">
                    <WaiterList editWaiter={editWaiterHandler} deleteWaiter={deleteWaiterHandler} items={waiters}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <WaiterNotification show={displayNotification}
                                        firstName={nextWaiter?.firstName}
                                        hide={hideNotification}
                                        operation={operation}/>
                </Col>
            </Row>
        </Container>
    )
};

export default WaitersPage;