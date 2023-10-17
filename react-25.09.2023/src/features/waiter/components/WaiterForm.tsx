import {Waiter} from "../types";
import React, {FormEvent, useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import {Form, InputGroup} from "react-bootstrap";
import {Person, Telephone} from "react-bootstrap-icons";

export interface WaiterFormProps {
    item: Waiter | undefined
    onSubmit: (formData: Waiter) => void
}

interface WaiterFormInputs {
    firstName: { value: string },
    phone: { value: string }
}

const WaiterForm = ({item, onSubmit}: WaiterFormProps) => {
    const [formData, setFormData] = useState<Waiter>();

    useEffect(() => {
        setFormData(item);
    }, [item]);
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {firstName, phone} = e.target as typeof e.target & WaiterFormInputs;
        if (!firstName || !phone) {
            return;
        }

        onSubmit({id: item?.id || undefined, firstName: firstName.value, phone: phone.value})
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