import React from "react";
import WaiterList from './components/WaiterList';
import {Waiter, WaitersPageConfig, WaiterSuccessOrError} from './types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonWithTooltip from "../../components/ButtonWithTooltip";
import {PersonAdd} from "react-bootstrap-icons";
import Notification from "../../components/notifiation";
import useWaiters from "./hooks/useWaiters";
import useNotification from "../../components/notifiation/hooks/useNotification";
import ModalDialog from "../../components/modal-dialog";
import WaiterForm from "./components/WaiterForm";
import useModalDialog from "../../components/modal-dialog/hooks/useModalDialog";

interface WaitersPageProps {
    config: WaitersPageConfig
}

const WaitersPage = ({config}: WaitersPageProps) => {
    const {
        waiters,
        editableWaiter,
        notificationMessage,
        notificationType,
        editWaiter,
        deleteWaiter,
        createWaiter,
        setEditableWaiter
    } = useWaiters(config);
    const {display: displayNotification, show: showNotification, hide: hideNotification} = useNotification();
    const {display: displayModalDialog, show: showModalDialog, hide: hideModalDialog} = useModalDialog();


    const formSubmitHandler = (waiter: Waiter) => {
        hideModalDialog();
        const result: Promise<WaiterSuccessOrError> = waiter.id ? editWaiter(waiter) : createWaiter(waiter);
        result.then(showNotification).catch(showNotification);
    }

    const createWaiterHandler = () => {
        showModalDialog();
    }

    const editWaiterHandler = (waiter: Waiter): void => {
        setEditableWaiter(waiter)
        showModalDialog();
    };

    const deleteWaiterHandler = async (waiterId: number) => {
        deleteWaiter(waiterId).then(showNotification).catch(showNotification);
    };

    const getTitle = () => editableWaiter && editableWaiter.id ? `Edit waiter ${editableWaiter.firstName}` : `Create waiter`;

    return (
        <Container>
            <Row>
                <Col className="text-center gy-3">
                    <h1>Waiters management</h1>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-end">
                    <ButtonWithTooltip variant='success' message={`Add waiter`} onClick={createWaiterHandler}>
                        <PersonAdd size="1.5em"/>
                    </ButtonWithTooltip>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ModalDialog display={displayModalDialog} hide={hideModalDialog} title={getTitle()}>
                        <WaiterForm item={editableWaiter} onSubmit={formSubmitHandler}/>
                    </ModalDialog>
                </Col>
            </Row>
            <Row>
                <Col className="border-start border-end">
                    <WaiterList editWaiter={editWaiterHandler} deleteWaiter={deleteWaiterHandler} items={waiters}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Notification message={notificationMessage} displaying={displayNotification} hide={hideNotification}
                                  type={notificationType}/>
                </Col>
            </Row>
        </Container>
    )
};

export default WaitersPage;