import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Header from './header';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import pic01 from "../images/pic1.jpeg";
import pic02 from "../images/pic2.jpeg";

import pic1 from '../pictures/1.jpg';
import pic2 from "../pictures/18.jpg";
import pic3 from "../pictures/22.jpg";

import Grow from '@mui/material/Grow';
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Footer from './footer';

interface ThemeProps {
    theme: {
      breakpoints: {
        down: (key: 'xs' | 'sm' | 'md' | 'lg' | 'xl') => string;
        up: (key: 'xs' | 'sm' | 'md' | 'lg' | 'xl') => string;
      };
    };
  }

const Wrapper = styled(Container)(({ theme }: ThemeProps) => ({
    height: "105vh",
    [theme.breakpoints.down("md")]: {
    },
    [theme.breakpoints.down("sm")]: {
    },
    [theme.breakpoints.up("lg")]: {
    },
  }));

const Heading = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    color: "white",
    fontWeight: 600,
    paddingTop: "2em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
}));

const MainTextBox = styled(Box)(({ theme }) => ({
    width: "700px",
    height: "300px",
    alignContent: "flex-end",
    flexDirection: 'column',
    fontSize: "3rem",
    [theme.breakpoints.down("md")]: {
        width: "300px",
        height: "400px",
        fontSize: "2rem"
    },
}));

const MainHeaderBox = styled(Box)(({ theme }) => ({
    width: "100%",
    fontSize: "3.5rem",
    display: "flex",
    justifyContent: "center",
    color: "#15616D",
    textTransform: "uppercase",
    fontFamily: "Cormorant Garamond",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
        fontSize: "2rem"
    },
}));

const TypographyHeader = styled(Typography)(({ theme }) => ({
    fontSize: "1.5rem",
    color: "black",
    textTransform: "uppercase",
    fontFamily: "Cormorant Garamond",
    fontWeight: 600,
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
        fontSize: "1.2rem"
    },
}));

const TypographyText = styled(Typography)(({ theme }) => ({
    fontSize: "1rem",
    color: "black",
    fontFamily: "Cormorant Garamond",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
        fontSize: "0.9rem"
    },
}));

const PictureBox = styled(Box)(({ theme }) => ({
    background: "blue", 
    objectFit: "cover",
    height: "600px", 
    width: "500px",
    [theme.breakpoints.down("md")]: {
        height: "400px",
        width: "300px",
    },
}));



function MainPage() {
    const { t, i18n } = useTranslation();
    const [background, setBackground] = React.useState(`url(${pic1})`);
    const [backgroundText_1, setBackgroundText_1] = React.useState(t("welcome_line1").toUpperCase());
    const [backgroundText_2, setBackgroundText_2] = React.useState(t("welcome_line2").toUpperCase());
    const imageURLs = [`url(${pic2})`, `url(${pic1})`, `url(${pic3})`];
    const imageTexts1 = [t("welcome_line1").toUpperCase(), "", ""];
    const imageTexts2 = [t("welcome_line2").toUpperCase(), t("welcome_page2").toUpperCase(), t("welcome_page3").toUpperCase()];
    const imageIdxRef = useRef<number>(0);

    const theme = useTheme();
    const isSmDown = useMediaQuery(theme.breakpoints.down('md'));

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
    

    const headerPadding = isSmDown ? 5 : 10;
    const boxPadding = isSmDown ? 5 : 6;
    const mainPadding = isSmDown ? 3 : 10;
    const scroll = isSmDown ? "hidden" : "auto";
    return (
        <Container disableGutters maxWidth={false} sx={{minHeight: "auto"}}>
        <Wrapper disableGutters maxWidth={false} sx={{backgroundColor:`transparent`, backgroundImage: background, transition: "background-image 1s ease", backgroundSize: "cover"}}>
            <Container disableGutters maxWidth={false} sx={{width: "inherit", height: "100%", backgroundColor: "rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <Header/> 
                <Grid container sx={{alignItems: "flex-end", flexGrow: 1}}>
                    <Grid item xs={6} sx={{p: mainPadding}}>
                    <Fade in={checked} timeout={{enter: 500, exit: 500}}>
                        <MainTextBox>
                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "#001524", fontSize: "calc(2 * 1em)", fontWeight: 600}}>
                                {imageTexts1[imageIdxRef.current]}
                            </Typography>
                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "#001524", fontSize: "inherit", fontWeight: 600, transition: "opacity 1s ease-in-out"}}>
                                {imageTexts2[imageIdxRef.current]}
                            </Typography>
                        </MainTextBox>  
                        </Fade>  
                    </Grid>

                </Grid>
            </Container>
            <Container disableGutters maxWidth={false} sx={{backgroundColor: "#DFDFDF", minHeight: "auto", width: "inherit"}}>
                <Grid container sx={{width: "inherit", minHeight: "auto"}}>
                    <Grid item xs={12} sx={{p: headerPadding}}>
                        <MainHeaderBox>{t("features")}</MainHeaderBox>
                    </Grid>
                    <Grid item xs={isSmDown ? 12 : 6}>
                        <Stack>
                            <Box sx={{p: boxPadding, borderTop: 2, borderBottom: 2, borderColor: "#15616D"}}>
                                <TypographyHeader>
                                    {t("space")}
                                </TypographyHeader>
                                <TypographyText>
                                    {t("space_text")}
                                </TypographyText>
                            </Box>
                            <Box sx={{p: boxPadding, borderBottom: 2, borderColor: "#15616D"}}>
                                <TypographyHeader>
                                    {t("comfort")}
                                </TypographyHeader>
                                <TypographyText>
                                    {t("comfort_text")}
                                </TypographyText>
                            </Box>
                            <Box sx={{p: boxPadding, borderBottom: 2, borderColor: "#15616D"}}>
                                <TypographyHeader>
                                    {t("convenience")}
                                </TypographyHeader>
                                <TypographyText>
                                    {t("convenience_text")}
                                </TypographyText>
                            </Box>
                            <Box sx={{p: boxPadding, borderBottom: 2, borderColor: "#15616D"}}>
                                <TypographyHeader>
                                    {t("privacy")}
                                </TypographyHeader>
                                <TypographyText>
                                    {t("privacy_text")}
                                </TypographyText>
                            </Box>
                        </Stack>
                    </Grid>
                    {
                        isSmDown ? (
                            <Grid item xs={12}>
                                <Box sx={{width: "100vw", height: "50px"}}/>
                            </Grid>
                        ) : undefined
                    }
                    <Grid item xs={isSmDown ? 12 : 6} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <PictureBox>
                        <img
                            width="100%"
                            height="100%"
                            src={pic3}
                            loading="lazy"
                            style={{ objectFit: 'cover' }}
                        />
                        </PictureBox>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{width: "100vw", height: "100px"}}/>
                    </Grid>
                </Grid>
            </Container>
            <Footer/>
        </Wrapper>
        </Container>
    );
}

export default MainPage;