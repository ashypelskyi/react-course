import React, {PropsWithChildren} from "react";
import {Tabs} from "react-bootstrap";

interface FiltersProps {
    defaultActiveKey: string
}

const Filters = ({defaultActiveKey, children}: PropsWithChildren<FiltersProps>) => (
    <Tabs className="mb-3" defaultActiveKey={defaultActiveKey}>
        {children}
    </Tabs>
);

export default Filters;