import React from "react";
import WaiterList from './components/WaiterList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonWithTooltip from "../../components/ButtonWithTooltip";
import Notification from "../../components/Notification";
import {PersonAdd} from "react-bootstrap-icons";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {addWaiterAction, closeWaiterFormAction, hideNotification} from "./store/reducer";
import ModalDialog from "../../components/ModalDialog";
import WaiterForm from "./components/WaiterForm";

const WaitersPage = () => {
    const {
        displayWaiterForm,
        waiterFormTitle,
        notificationMessage,
        notificationType,
        processingLoading,
        editableWaiter,
        deletableWaiterId
    } = useSelector((state: RootState) => state.waiters);
    const dispatch = useDispatch<AppDispatch>();

    const addBtnLoading = editableWaiter === undefined && deletableWaiterId === undefined && processingLoading;

    return (
        <Container>
            <Row>
                <Col className="text-center gy-3">
                    <h1>Waiters management</h1>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-end">
                    <ButtonWithTooltip loading={addBtnLoading} variant='success'
                                       message={`Add waiter`} onClick={() => dispatch(addWaiterAction())}>
                        <PersonAdd size="1.5em"/>
                    </ButtonWithTooltip>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ModalDialog display={displayWaiterForm} title={waiterFormTitle}
                                 hide={() => dispatch(closeWaiterFormAction())}>
                        <WaiterForm/>
                    </ModalDialog>
                </Col>
            </Row>
            <Row>
                <Col className="border-start border-end">
                    <WaiterList/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Notification message={notificationMessage} hideAction={hideNotification} type={notificationType}/>
                </Col>
            </Row>
        </Container>
    )
};

export default WaitersPage;