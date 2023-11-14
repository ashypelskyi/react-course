import React, {PropsWithChildren} from "react";
import TabPanel from "@mui/lab/TabPanel";

interface FilterItemProps {
    section: string
}

const FilterItem = ({section, children}: PropsWithChildren<FilterItemProps>) => (
    <TabPanel value={section} sx={{paddingBottom: '5px', paddingTop: '5px'}}>
        {children}
    </TabPanel>
);

export default FilterItem;