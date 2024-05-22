import React from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Tab } from '@mui/material';
import './Tabs.css';
import jsonData from "/Users/casper.dekeijzer/Documents/react-folder/kustomer-timeline-card/src/Data/Data.json";
import Pending from "./1. Pending/Pending Tab"
import Preparing from './2. Preparing Shipment/Preparing Shipment Tab';
import Shipped from './3. Shipped/Shipped Tab';
import Delivered from './4. Delivered/Delivered Tab';



export default function Tabs() {
    let status = jsonData.status


    const [value, setValue] = React.useState(status);
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    // Button background and text colors
    // const pendingColors = {"Pending":["#0F9ED5", "white"], "Preparing Shipment":["#C1E5F5","black"], "Shipped":["#C1E5F5","black"], "Delivered":["#C1E5F5","black"]}
    // const preparingColors = {"Pending":["white","black"], "Preparing Shipment":["#A02B93","white"], "Shipped":["#F2CFEE","black"], "Delivered":["#F2CFEE","black"]}
    // const shippedColors = {"Pending":["white","black"], "Preparing Shipment":["white","black"], "Shipped":["#4EA72E", "white"], "Delivered":["#D9F2D0","black"]}
    // const deliveredColors = {"Pending":["white","black"], "Preparing Shipment":["white","black"], "Shipped":["white","black"], "Delivered":["#E97132", "white"]}

    const pendingColors = {"Pending":["#e3a4c0", "bold"], "Preparing Shipment":["#fce8f1","normal"], "Shipped":["#fce8f1","normal"], "Delivered":["#fce8f1","normal"]}
    const preparingColors = {"Pending":["#fff","normal"], "Preparing Shipment":["#e3a4c0","bold"], "Shipped":["#fce8f1","normal"], "Delivered":["#fce8f1","normal"]}
    const shippedColors = {"Pending":["#fff","normal"], "Preparing Shipment":["#fff","normal"], "Shipped":["#e3a4c0", "bold"], "Delivered":["#fce8f1","normal"]}
    const deliveredColors = {"Pending":["#fff","normal"], "Preparing Shipment":["#fff","normal"], "Shipped":["#fff","normal"], "Delivered":["#e3a4c0", "bold"]}

    const disableTabs = {
        "Pending": ["Preparing Shipment", "Shipped", "Delivered"],
        "Preparing Shipment": ["Shipped", "Delivered"],
        "Shipped": ["Delivered"],
        "Delivered": []
    };

    return (       
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Pending" value="Pending" disabled={disableTabs[status].includes("Pending")} sx={{ backgroundColor: pendingColors[status][0], color:"black", fontWeight:pendingColors[status][1] }}/>
                        <Tab label="Preparing Shipment" value="Preparing Shipment" disabled={disableTabs[status].includes("Preparing Shipment")} sx={{ backgroundColor: preparingColors[status][0], color:"black", fontWeight:preparingColors[status][1] }}/>
                        <Tab label="Shipped" value="Shipped" disabled={disableTabs[status].includes("Shipped")} sx={{ backgroundColor: shippedColors[status][0], color:"black", fontWeight:shippedColors[status][1] }}/>
                        <Tab label="Delivered" value="Delivered" disabled={disableTabs[status].includes("Delivered")} sx={{ backgroundColor: deliveredColors[status][0], color:"black", fontWeight:deliveredColors[status][1] }}/>
                    </TabList>
                </Box>

                <TabPanel value="Pending">
                    <Pending />
                </TabPanel>

                <TabPanel value="Preparing Shipment">
                    <Preparing />
                    
                </TabPanel>
                
                <TabPanel value="Shipped">
                    <Shipped />
                    
                </TabPanel>

                <TabPanel value="Delivered">
                    <Delivered />
                    
                </TabPanel>

            </TabContext>
        </Box>


        
    );
}