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
            <Container disableGutters maxWidth={false}>


            <Container disableGutters={true} maxWidth={false} sx={{backgroundColor:`transparent`, height: "100vh", backgroundImage: background, transition: "background-image 1s ease",
                backgroundSize: "cover"}}>
                <Container maxWidth={false} sx={{width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.55)"}}>
                <Header/>
                <Fade in={checked} timeout={{enter: 500, exit: 500}}>
                <Box sx={{ml: "8%", mt: "25%", width: "60%", height: "30%", alignContent: 'flex-end', transition: "opacity 1s ease-in-out"}}>
                    <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "6rem", fontWeight: 100}}>
                        {imageTexts1[imageIdxRef.current]}
                    </Typography>
                    <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "3rem", fontWeight: 300, transition: "opacity 1s ease-in-out"}}>
                        {imageTexts2[imageIdxRef.current]}
                    </Typography>
                </Box>
                </Fade>
                </Container>
            </Container>
            <Container maxWidth={false} sx={{backgroundColor: "#DFDFDF", height: "130vh", width: "100%"}}>
                <Grid container spacing={0} sx={{height: "inherit", width: "inherit"}}>
                    <Grid item xs={12}>
                        <Box sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "3.5rem", fontWeight: 200, textTransform: "uppercase", mt: 10,  display: "flex", alignItems: "center", justifyContent: 'center'}}>
                            {t("features")}
                        </Box>
                    </Grid>
                    <Grid item xs={6} sx={{height: "inherit", width: "100%"}}>
                        <Stack spacing={0} sx={{height: "inherit", display: "flex", justifyContent: "flex-start", mt: 5}}>
                            <Box sx={{pt: 4, pb: 4, pr: 2, borderTop: 2, borderBottom: 2, borderColor: "#15616D"}}>
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <Box>
                                        <Typography sx={{pl: 2, fontFamily: "Cormorant Garamond", color: "black", fontSize: "1.5rem", fontWeight: 400, textTransform: 'uppercase'}}>
                                            {t("space")}:
                                        </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography sx={{pl: 2, fontFamily: "Cormorant Garamond", color: "black", fontSize: "1rem", fontWeight: 400}}>
                                            {t("space_text")}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{pt: 4, pb: 4, pr: 2, borderBottom: 2, borderColor: "#15616D"}}>
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <Typography sx={{pl: 2, fontFamily: "Cormorant Garamond", color: "black", fontSize: "1.5rem", fontWeight: 400, textTransform: 'uppercase'}}>
                                            {t("comfort")}:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography sx={{pl: 2, fontFamily: "Cormorant Garamond", color: "black", fontSize: "1rem", fontWeight: 400}}>
                                            {t("comfort_text")}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{pt: 4, pb: 4, pr: 2, borderBottom: 2, borderColor: "#15616D"}}> 
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <Typography sx={{pl: 2, fontFamily: "Cormorant Garamond", color: "black", fontSize: "1.5rem", fontWeight: 400, textTransform: 'uppercase'}}>
                                            {t("convenience")}:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography sx={{pl: 2, fontFamily: "Cormorant Garamond", color: "black", fontSize: "1rem", fontWeight: 400}}>
                                            {t("convenience_text")}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{pt: 5, pb: 4, pr: 2, borderBottom: 2, borderColor: "#15616D"}}>
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <Typography sx={{pl: 2, fontFamily: "Cormorant Garamond", color: "black", fontSize: "1.5rem", fontWeight: 400, textTransform: 'uppercase'}}>
                                            {t("privacy")}:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography sx={{pl: 2, pb: 2, fontFamily: "Cormorant Garamond", color: "black", fontSize: "1rem", fontWeight: 400}}>
                                            {t("privacy_text")}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} sx={{height: "inherit", display: "flex"}}>
                        <Box sx={{bgcolor: "blue", height: "60%", width: "70%", ml: 15, mt: 13}}>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
            <Footer/>
            </Container>
            
        </React.Fragment>
    );
}

export default MainPage;