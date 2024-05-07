import React from 'react';



import { useTranslation } from 'react-i18next';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';



function Footer() {

    return (
        <React.Fragment>
        <Toolbar sx={{ bgcolor: "black", height: "60vh"}}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Box sx={{backgroundColor: "purple"}}>
                        Hy
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{backgroundColor: "pink"}} >
                        que
                    </Box>
                </Grid>
            </Grid>
        </Toolbar>
      </React.Fragment>
    )

}

export default Footer;