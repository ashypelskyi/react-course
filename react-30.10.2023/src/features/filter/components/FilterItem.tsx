import {Tab} from "react-bootstrap";
import React, {PropsWithChildren} from "react";

interface FilterItemProps {
    eventKey: string,
    title: string
}

const FilterItem = ({eventKey, title, children}: PropsWithChildren<FilterItemProps>) => (
    <Tab eventKey={eventKey} title={title}>
        {children}
    </Tab>
);

export default FilterItem;