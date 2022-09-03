import React from "react";
import { NavLink } from "react-router-dom";
import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

function NavbarDesktop() {
  return (
    <nav>
        <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit">
                    <Typography variant="h5" component="div"> 
                        <QrCodeScannerIcon sx={{width:'30px',height:'30px'}} />                  
                    </Typography>
                </IconButton>
                <Typography variant="h5" component="div" sx={{flexGrow:1}}>
                    URL-Cutter
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Button component={NavLink} to="/home" color="inherit">Home</Button>
                    <Button component={NavLink} to="/about" color="inherit">About</Button>
                </Stack>    
            </Toolbar>
        </AppBar>    
    </nav>
  );
}

export default NavbarDesktop;
