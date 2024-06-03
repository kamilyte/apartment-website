import React, { useState, useEffect, useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from './header';
import Footer from './footer';
import pic1 from "../images/pic1.jpeg";
import pic2 from "../images/pic2.jpeg";
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';


function MainPage() {
    const { t, i18n } = useTranslation();
    const [background, setBackground] = React.useState(`url(${pic1})`);
    const [backgroundText_1, setBackgroundText_1] = React.useState(t("welcome_line1").toUpperCase());
    const [backgroundText_2, setBackgroundText_2] = React.useState(t("welcome_line2").toUpperCase());
    const imageURLs = [`url(${pic1})`, `url(${pic2})`, `url(${pic2})`];
    const imageTexts1 = [t("welcome_line1").toUpperCase(), "", ""];
    const imageTexts2 = [t("welcome_line2").toUpperCase(), t("welcome_page2").toUpperCase(), t("welcome_page3").toUpperCase()];
    const imageIdxRef = useRef<number>(0);

    const [checked, setChecked] = React.useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setChecked(false);
            setTimeout(() => {
                imageIdxRef.current = (imageIdxRef.current + 1) % 3;
                setBackgroundText_1(imageTexts1[imageIdxRef.current]);
                setBackgroundText_2(imageTexts2[imageIdxRef.current]);
                setChecked(true);
              }, 2000);
            setBackground(imageURLs[imageIdxRef.current]);
            // setBackgroundText_1(imageTexts1[imageIdxRef.current]);
            // setBackgroundText_2(imageTexts2[imageIdxRef.current]);
            //imageIdxRef.current = (imageIdxRef.current + 1) % 3;
        }, 6000);
        return () => clearInterval(interval);
    }, [imageURLs, imageTexts1, imageTexts2, imageIdxRef]);

    


    return (
        <React.Fragment>
            <CssBaseline />
            <Container disableGutters={true} maxWidth={false} sx={{backgroundColor:`transparent`, height: "100vh", backgroundImage: background, transition: "background-image 1s ease",
                backgroundSize: "cover"}}>
                <Container maxWidth={false} sx={{width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.55)"}}>
                <Header/>
                <Fade in={checked} timeout={{enter: 1000, exit: 500}}>
                <Box sx={{backgroundColor: "transparent", ml: "10vw", mt: "20vh", width: "50%", height: "30vw", alignContent: 'flex-end', transition: "opacity 1s ease-in-out"}}>
                    <Typography sx={{fontFamily: "Cenzel", color: "white", fontSize: "6rem", fontWeight: 100}}>
                        {backgroundText_1}
                    </Typography>
                    <Typography sx={{fontFamily: "Cenzel", color: "white", fontSize: "3rem", fontWeight: 300, transition: "opacity 1s ease-in-out"}}>
                        {backgroundText_2}
                    </Typography>
                </Box>
                </Fade>
                </Container>
            </Container>
            <Container maxWidth={false} sx={{backgroundColor: "white", height: "130vh"}}>
                <Grid container spacing={0} sx={{height: "inherit"}}>
                    <Grid item xs={5} sx={{height: "inherit"}}>
                        <Stack spacing={2} sx={{height: "inherit", display: "flex", justifyContent: "space-around"}}>
                            <Box sx={{fontFamily: "Cenzel", color: "black", fontSize: "1.7rem", fontWeight: 200, display: "flex", justifyContent: 'center', textTransform: 'uppercase'}}>
                                {t("features")}
                            </Box>
                            <Box>
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <Typography sx={{pl: 2, fontFamily: "Cenzel", color: "black", fontSize: "1.5rem", fontWeight: 100, textTransform: 'uppercase'}}>
                                            {t("space")}:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography sx={{pl: 2, fontFamily: "Cenzel", color: "black", fontSize: "1rem", fontWeight: 100}}>
                                            {t("space_text")}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box>
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <Typography sx={{pl: 2, fontFamily: "Cenzel", color: "black", fontSize: "1.5rem", fontWeight: 100, textTransform: 'uppercase'}}>
                                            {t("comfort")}:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography sx={{pl: 2, fontFamily: "Cenzel", color: "black", fontSize: "1rem", fontWeight: 100}}>
                                            {t("comfort_text")}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box>
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <Typography sx={{pl: 2, fontFamily: "Cenzel", color: "black", fontSize: "1.5rem", fontWeight: 100, textTransform: 'uppercase'}}>
                                            {t("convenience")}:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography sx={{pl: 2, fontFamily: "Cenzel", color: "black", fontSize: "1rem", fontWeight: 100}}>
                                            {t("convenience_text")}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box>
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <Typography sx={{pl: 2, fontFamily: "Cenzel", color: "black", fontSize: "1.5rem", fontWeight: 100, textTransform: 'uppercase'}}>
                                            {t("privacy")}:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography sx={{pl: 2, pb: 2, fontFamily: "Cenzel", color: "black", fontSize: "1rem", fontWeight: 100}}>
                                            {t("privacy_text")}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={7} sx={{height: "inherit", display: "flex", alignItems: "center", justifyContent: 'center'}}>
                        <Box sx={{bgcolor: "blue", height: "60%", width: "70%"}}>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
            <Footer/>
            
        </React.Fragment>
    );
}

export default MainPage;