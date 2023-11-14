import {SyntheticEvent} from "react";
import {AppBar, Box, Container, Grid, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import {NavLink} from 'react-router-dom';
import useTab from "./useTab";

interface NavBarProps {
    title?: string
}

export const NavBar = ({title}: NavBarProps) => {
    const {tabIndex, setTabIndex} = useTab();
    const handleChange = (_: SyntheticEvent, nextTabIndex: number) => {
        setTabIndex(nextTabIndex);
    };

    return (
        <AppBar color="transparent" position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1}}>
                        <Grid container>
                            <Grid item={true} xs={3}>
                                <Tabs value={tabIndex} onChange={handleChange} centered>
                                    <Tab color="primary" label="home"
                                         to="/" component={NavLink}/>
                                    <Tab color="primary" label="waiters"
                                         to="waiters" component={NavLink}/>
                                    <Tab color="primary" label="about"
                                         to="about" component={NavLink}/>
                                </Tabs>
                            </Grid>
                            <Grid item={true} xs={6}>
                                <Typography className={"MuiTab-textColorPrimary"}
                                            align="center"
                                            variant="h4" component="h1">
                                    {title || ""}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}></Grid>
                        </Grid>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;