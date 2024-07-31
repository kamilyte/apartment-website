import React from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from "@mui/material/styles";

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
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';

const Wrapper = styled(Container)(({ theme }) => ({
    height: "500px",
    background: "black",
    width: "100vw",
    [theme.breakpoints.down("md")]: {
        height: "500px",
    },
}));

const TypographyHeader = styled(Typography)(({ theme }) => ({
    fontSize: "1.5rem",
    color: "white",
    textTransform: "uppercase",
    fontFamily: "Cormorant Garamond",
    fontWeight: 600,
    [theme.breakpoints.down("md")]: {
    },
}));

const TypographyText = styled(Typography)(({ theme }) => ({
    fontSize: "1.2rem",
    color: "white",
    fontFamily: "Cormorant Garamond",
    textTransform: "uppercase",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
        pb: 1
    },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: "white",
    fontSize: "30px",
    [theme.breakpoints.down("md")]: {
    },
}));

const TypographyBottom = styled(Typography)(({ theme }) => ({
    fontSize: "1rem",
    color: "white",
    fontFamily: "Cormorant Garamond",
    textTransform: "uppercase",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
    },
}));


function Footer() {
    const theme = useTheme();
    const isSmDown = useMediaQuery(theme.breakpoints.down('md'));
    const { t, i18n } = useTranslation();

    const footerHeight = isSmDown ? "90px" : "70px";
    const footerPadding = isSmDown ? 1 : 1;
    return (
        <Wrapper disableGutters maxWidth={false} sx={{display:"flex", alignItems: "flex-end"}}>
            <Grid container sx={{width: "inherit", height: "inherit", display: "flex", justifyContent: "space-between"}}>
                <Grid item xs={12}>
                    <Box sx={{width: "inherit", height: footerHeight, display: "flex", alignItems: "center",}}/>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{p: 2, flexDirection: "column"}}>
                        <TypographyHeader sx={{pb: 2}}>
                            {t("contact")}
                        </TypographyHeader>
                        <TypographyText sx={{pb: footerPadding}}>
                            {t("email_title")}: {t("email")}
                        </TypographyText>
                        <TypographyText sx={{pb: footerPadding}}>
                            TEL: {t("contact_number")}
                        </TypographyText>
                        <TypographyText sx={{pb: footerPadding}}>
                            {t("address")}: {t("full_address")}
                        </TypographyText>
                        
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{display: "flex", alignItems: "stretch", justifyContent: "flex-end", pb: 2}}>
                    <Box sx={{display: "flex", alignItems: "center", p: 2}}>
                        <Stack>
                            <StyledIconButton>
                                <FacebookIcon fontSize='inherit'/>
                            </StyledIconButton> 
                            <StyledIconButton >
                                <InstagramIcon fontSize='inherit'/>
                            </StyledIconButton> 
                            <StyledIconButton >
                                <EmailIcon fontSize='inherit'/>
                            </StyledIconButton> 

                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
                    <Box sx={{display: "flex", justifyContent: "center", p: 2}}>
                        <TypographyBottom>
                            {t("title")} 2024
                        </TypographyBottom>
                    </Box>
                </Grid>
            </Grid>
        </Wrapper>
    )

}

export default Footer;