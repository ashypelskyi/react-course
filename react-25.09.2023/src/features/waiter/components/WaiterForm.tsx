import {Waiter} from "../types";
import React, {FormEvent, useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import {Form, InputGroup} from "react-bootstrap";
import {Person, Telephone} from "react-bootstrap-icons";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {persist} from "../store/thunk";

interface WaiterFormInputs {
    firstName: {
        value: string
    },
    phone: {
        value: string
    }
}

const WaiterForm = () => {
    const {editableWaiter: waiter} = useSelector((state: RootState) => state.waiters);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState<Waiter>();

    useEffect(() => {
        setFormData(waiter);
    }, [waiter]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {firstName, phone} = e.target as typeof e.target & WaiterFormInputs;
        if (!firstName || !phone) {
            return;
        }

        const nextWaiter: Waiter = {id: waiter?.id || undefined, firstName: firstName.value, phone: phone.value};
        // @ts-ignore
        dispatch(persist(nextWaiter));
    };
    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
                <InputGroup.Text>
                    <Person/>
                </InputGroup.Text>
                <Form.Control
                    id='firstName'
                    required={true}
                    placeholder="First name" aria-label="First name"
                    aria-describedby="Waiter first name"
                    defaultValue={formData?.firstName || ""}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text>
                    <Telephone/>
                </InputGroup.Text>
                <Form.Control
                    id="phone"
                    required={true}
                    placeholder="Phone xxx-xx-xx" aria-label="Phone"
                    aria-describedby="Waiter phone"
                    defaultValue={formData?.phone || ""}
                />
            </InputGroup>

            <Button variant="primary" type="submit">Save</Button>
        </Form>
    )
}

export default WaiterForm;