import React from "react";
import TextField from "@mui/material/TextField";

interface TextInputFilterProps {
    value: string | undefined | null,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    name: string,
    id: string
}

const TextInputFilter = ({value, name, id, onChange}: TextInputFilterProps) => (
    <TextField fullWidth label={name} id={id} value={value} onChange={onChange} />


    // <InputGroup className="mb-3">
    //     <InputGroup.Text id="basic-addon3">{`${name}:`}</InputGroup.Text>
    //     <Form.Control id={id}
    //                   aria-describedby="basic-addon3"
    //                   value={value || ""}
    //                   onChange={onChange}/>
    // </InputGroup>
);

export default TextInputFilter;