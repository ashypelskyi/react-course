import React, {PropsWithChildren} from "react";
import {Tab} from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

interface FiltersProps {
    sections: { label: string, value: string }[]
}

const Filters = ({sections, children}: PropsWithChildren<FiltersProps>) => (
    <TabContext value="1">
        <TabList>
            {
                sections.map(section => (
                    <Tab key={section.label} color="primary" label={section.label} value={section.value}/>))
            }
        </TabList>
        {children}
    </TabContext>
);

export default Filters;