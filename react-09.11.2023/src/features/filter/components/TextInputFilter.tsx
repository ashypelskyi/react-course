import {Form, InputGroup} from "react-bootstrap";
import React from "react";

interface TextInputFilterProps {
    value: string | undefined | null,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    name: string,
    id: string
}

const TextInputFilter = ({value, name, id, onChange}: TextInputFilterProps) => (
    <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">{`${name}:`}</InputGroup.Text>
        <Form.Control id={id}
                      aria-describedby="basic-addon3"
                      value={value || ""}
                      onChange={onChange}/>
    </InputGroup>
);

export default TextInputFilter;