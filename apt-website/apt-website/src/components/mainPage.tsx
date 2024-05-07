import React, { useState, useEffect, useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from './header';
import Footer from './footer';
import pic1 from "../images/pic1.jpeg";
import pic2 from "../images/pic2.jpeg";


function MainPage() {
    const [background, setBackground] = React.useState(`url(${pic1})`);
    const imageURLs = [`url(${pic1})`, `url(${pic2})`];
    const imageIdxRef = useRef<number>(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setBackground(imageURLs[imageIdxRef.current]);
            imageIdxRef.current = (imageIdxRef.current + 1) % 2;
        }, 4000);
        return () => clearInterval(interval);
    }, [imageURLs]);

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth={false} sx={{backgroundColor:"Blue", height: "100vh", backgroundImage: background, transition: "background-image 1s ease",
                backgroundSize: "cover"}}>
                <Header/>
                <Box sx={{backgroundColor: "gray", ml: "10vw", mt: "20vh", width: "40vw", height: "30vw"}}>

                </Box>
            </Container>
            <Container maxWidth={false} sx={{backgroundColor: "white", height: "100vh"}}>

            </Container>
            <Footer/>
            
        </React.Fragment>
    );
}

export default MainPage;