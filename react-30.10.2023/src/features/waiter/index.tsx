import React, {useEffect} from "react";
import WaiterList from './components/WaiterList';
import ButtonWithTooltip from "../../components/ButtonWithTooltip";
import Notification from "../../components/Notification";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {closeWaiterFormAction, hideNotification, openWaiterFormAction} from "./store/reducer";
import ModalDialog from "../../components/ModalDialog";
import WaiterForm from "./components/WaiterForm";
import {useSearchParams} from "react-router-dom";
import TextInputFilter from "../filter/components/TextInputFilter";
import Filters from "../filter";
import FilterItem from "../filter/components/FilterItem";
import {Box, Container, Divider, Stack} from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

interface WaitersPageProps {
    setTitle: (title: string) => void;
}

const WaitersPage = ({setTitle}: WaitersPageProps) => {
    const [searchParams, setSearchParams] = useSearchParams();
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

    useEffect(() => {
        setTitle("Waiters management");
    }, [setTitle]);

    const addBtnLoading = editableWaiter === undefined && deletableWaiterId === undefined && processingLoading;

    const updateNameSearchParams = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        searchParams.set('firstName', e.target.value)
        setSearchParams(searchParams);
    };

    const updatePhoneSearchParams = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        searchParams.set('phone', e.target.value)
        setSearchParams(searchParams);
    };

    return (
        <Box sx={{marginTop: "25px"}}>
            <Container maxWidth="xl">
                <Stack spacing={2} useFlexGap>
                    <Filters sections={[{label: "Filters", value: "1"}]}>
                        <FilterItem section={"1"}>
                            <TextInputFilter
                                id="filter-first-name"
                                name="First Name"
                                value={searchParams.get("firstName")}
                                onChange={updateNameSearchParams}/>
                        </FilterItem>
                        <FilterItem section={"1"}>
                        <TextInputFilter
                            id="filter-phone"
                            name="Phone"
                            value={searchParams.get("phone")}
                            onChange={updatePhoneSearchParams}/>
                        </FilterItem>
                    </Filters>
                    <Divider variant="fullWidth"/>
                    <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                        <ButtonWithTooltip loading={addBtnLoading} color={'success'}
                                           message={`Add waiter`} onClick={() => dispatch(openWaiterFormAction())}>
                            <PersonAddIcon fontSize="large"/>
                        </ButtonWithTooltip>
                    </Box>
                    <ModalDialog display={displayWaiterForm} title={waiterFormTitle}
                                 hide={() => dispatch(closeWaiterFormAction())}>
                        <WaiterForm/>
                    </ModalDialog>

                    <WaiterList/>

                    <Notification message={notificationMessage} hideAction={hideNotification} type={notificationType}/>

                </Stack>
            </Container>
        </Box>
    )
};

export default WaitersPage;