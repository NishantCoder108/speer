import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "./common/TabPanel";
import AllCallsTab from "./AllCallsTab";
import ArchivedCallsTab from "./ArchivedCallsTab";

const CallTabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="All Calls" />
                <Tab label="Archived " />
            </Tabs>
            <TabPanel value={value} index={0}>
                <AllCallsTab />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ArchivedCallsTab />
            </TabPanel>
        </Box>
    );
};

export default CallTabs;
