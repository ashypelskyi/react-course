import {useEffect, useState} from "react";
import {Waiters} from "./waiter/Waiters";
import {AppConfig, Waiter as WaiterType} from './types';
import {WaiterClient} from "./waiter/WaiterClient";
import {WaiterModal} from "./waiter/WaiterModal";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface AppProps {
    config: AppConfig
}

export const App = ({config}: AppProps) => {
    const [waiters, setWaiters] = useState<WaiterType[]>([]);
    const [client] = useState<WaiterClient>(() => new WaiterClient(config.backend.url));
    const [waiter] = useState<WaiterType>();

    useEffect(() => {
        fetchAll();
    }, []);

    const fetchAll = (): void => {
        client.fetchAll().then(waiters => setWaiters(waiters));
    }
    const addWaiter = (formData: WaiterType): void => {
        client.create(formData).then(waiter => setWaiters([...waiters, waiter]));
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Waiters management</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <WaiterModal item={waiter} onSubmit={addWaiter}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Waiters items={waiters}/>
                </Col>
            </Row>
        </Container>
    )
};