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
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import Stack from '@mui/material/Stack';




function Footer() {

    const { t, i18n } = useTranslation();

    return (
        <React.Fragment>
        <Toolbar disableGutters sx={{ bgcolor: "black", height: "60vh"}}>
            <Grid container spacing={2} alignItems="flex-end" sx={{height: "inherit"}}>
                <Grid item xs={6}>
                    <Box sx={{p: 2}}>
                    <Box sx={{fontFamily: "Cenzel", color: "white", fontSize: "1.5rem", fontWeight: 100, pt: 1, pb: 1}}>
                        {t("contact").toUpperCase()}
                    </Box>
                    <Box sx={{fontFamily: "Cenzel", color: "white", fontSize: "1.1rem", fontWeight: 100}}>
                        {t("email_title").toUpperCase()}: {t("email").toUpperCase()}
                    </Box>
                    <Box sx={{fontFamily: "Cenzel", color: "white", fontSize: "1.1rem", fontWeight: 100}}>
                        TEL: {t("contact_number").toUpperCase()}
                    </Box>
                    <Box sx={{fontFamily: "Cenzel", color: "white", fontSize: "1.1rem", fontWeight: 100}}>
                        {t("address").toUpperCase()}: {t("full_address").toUpperCase()}
                    </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box  sx={{p: 2, display: 'flex', justifyContent:"flex-end"}}>
                        <Stack>
                            <IconButton size="large" disableRipple sx={{color: "white"}}>
                                <FacebookIcon fontSize="inherit" color="inherit"/>
                            </IconButton>
                            <IconButton size="large" disableRipple sx={{color: "white"}}>
                                <InstagramIcon fontSize="inherit" color="inherit"/>
                            </IconButton>
                            <IconButton size="large" disableRipple sx={{color: "white"}}>
                                <EmailIcon fontSize="inherit" color="inherit"/>
                            </IconButton>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{p: 2, display: "flex", justifyContent: "center", fontFamily: "Cenzel", color: "white", fontSize: "1rem", fontWeight: 100}}>
                        {t("title")} 2024
                    </Box>
                </Grid>
            </Grid>
        </Toolbar>
      </React.Fragment>
    )

}

export default Footer;