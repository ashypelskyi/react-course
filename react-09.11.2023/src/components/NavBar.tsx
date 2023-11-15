import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link} from "react-router-dom";
import { NativeRouter } from "react-router-native";

const pages = ['Products', 'Pricing', 'Blog'];
export const NavBar = () => {
    return (
        <NativeRouter>
        <AppBar position="static" sx={{flexGrow: 1}}>
            <Toolbar>
                <Typography variant="h6">
                    <Link to="/">Home</Link>
                </Typography>
                <Typography variant="h6">
                    <Link to="waiters">Waiters</Link>
                </Typography>
                <Typography variant="h6">
                    <Link to="about">About</Link>
                </Typography>
            </Toolbar>
        </AppBar>
        </NativeRouter>
    );
}
