import React from "react";
import {Box, CircularProgress} from "@mui/material";

interface LoadingProps {
    size?: number
}

const Loading = ({size = 40}: LoadingProps) => (
    <Box sx={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
        <CircularProgress size={size}/> <span style={{marginLeft: '3px'}}>Loading...</span>
    </Box>

);

export default Loading;