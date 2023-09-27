import {Waiter} from "../types";
import React, {FormEvent} from "react";
import Button from 'react-bootstrap/Button';
import {Form, InputGroup} from "react-bootstrap";

export interface WaiterFormProps {
    item: Waiter | undefined
    onSubmit: (formData: Waiter) => void
}

interface WaiterFormInputs {
    firstName: { value: string },
    phone: { value: string }
}

export const WaiterForm = ({item, onSubmit}: WaiterFormProps) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {firstName, phone} = e.target as typeof e.target & WaiterFormInputs;
        if (!firstName || !phone) {
            return;
        }
        onSubmit({id: item && item.id || undefined, firstName: firstName.value, phone: phone.value})
    };
    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
                <InputGroup.Text>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-person" viewBox="0 0 16 16">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z">
                        </path>
                    </svg>
                </InputGroup.Text>
                <Form.Control
                    id='firstName'
                    required={true}
                    placeholder="First name" aria-label="First name"
                    aria-describedby="Waiter first name"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-telephone" viewBox="0 0 16 16">
                        <path
                            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z">
                        </path>
                    </svg>
                </InputGroup.Text>
                <Form.Control
                    id="phone"
                    required={true}
                    placeholder="Phone xxx-xx-xx" aria-label="Phone"
                    aria-describedby="Waiter phone"
                />
            </InputGroup>

            <Button variant="primary" type="submit">Save</Button>
        </Form>
    )
}