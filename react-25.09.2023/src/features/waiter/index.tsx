import React from "react";
import WaiterList from './components/WaiterList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonWithTooltip from "../../components/ButtonWithTooltip";
import Notification from "../../components/notifiation";
import {PersonAdd} from "react-bootstrap-icons";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {addWaiterAction, closeWaiterFormAction, hideNotification} from "./store/actions";
import ModalDialog from "../../components/modal-dialog";
import WaiterForm from "./components/WaiterForm";

const WaitersPage = () => {
    const {displayWaiterForm, waiterFormTitle, notificationMessage, notificationType} = useSelector((state: RootState) => state.waiters);
    const dispatch = useDispatch<AppDispatch>();

    const addBtnOnClickHandler = () => {
        dispatch(addWaiterAction());
    }

    const closeWaiterForm = () => dispatch(closeWaiterFormAction());

    return (
        <Container>
            <Row>
                <Col className="text-center gy-3">
                    <h1>Waiters management</h1>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-end">
                    <ButtonWithTooltip variant='success' message={`Add waiter`} onClick={addBtnOnClickHandler}>
                        <PersonAdd size="1.5em"/>
                    </ButtonWithTooltip>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ModalDialog display={displayWaiterForm} title={waiterFormTitle} hide={closeWaiterForm}>
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