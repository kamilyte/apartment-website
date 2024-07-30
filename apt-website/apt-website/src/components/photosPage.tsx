import React, { useState, useEffect, useRef } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import Link from '@mui/material/Link';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material';
import Stack from '@mui/material/Stack';
import GoogleMapReact from "google-map-react";
import headerLogo from "../images/LOGO-cropped.jpeg"
import CssBaseline from '@mui/material/CssBaseline';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Container from '@mui/material/Container';
import Header from './header';
import Footer from './footer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from "@mui/material/styles";
import Slide from '@mui/material/Slide';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import pic1 from '../pictures/1.jpg';
import pic2 from "../pictures/2.jpg";
import pic3 from "../pictures/3.jpg";
import pic4 from '../pictures/4.jpg';
import pic5 from "../pictures/5.jpg";
import pic6 from "../pictures/6.jpg";
import pic7 from '../pictures/7.jpg';
import pic8 from "../pictures/8.jpg";
import pic9 from "../pictures/9.jpg";
import pic10 from '../pictures/10.jpg';
import pic11 from "../pictures/11.jpg";
import pic12 from "../pictures/12.jpg";
import pic13 from '../pictures/13.jpg';
import pic14 from "../pictures/14.jpg";
import pic15 from "../pictures/15.jpg";
import pic16 from '../pictures/16.jpg';
import pic17 from "../pictures/17.jpg";
import pic18 from "../pictures/18.jpg";
import pic19 from '../pictures/19.jpg';
import pic20 from "../pictures/20.jpg";
import pic21 from "../pictures/21.jpg";
import pic22 from '../pictures/22.jpg';
import pic23 from "../pictures/23.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath:
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bird',
      imgPath:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bali, Indonesia',
      imgPath:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
      label: 'Goč, Serbia',
      imgPath:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
  ];

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];

const pictures = {pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20, pic21, pic22, pic23};


const PictureBox = styled(Box)(({ theme }) => ({
    background: "blue", 
    height: "450px", 
    width: "400px",
    [theme.breakpoints.down("md")]: {
        height: "400px",
        width: "300px",
    },
}));

const PictureBoxSmall = styled(Box)(({ theme }) => ({
  background: "blue", 
  height: "400px", 
  width: "300px",
  [theme.breakpoints.down("md")]: {
  },
}));



function PhotosPage() {
    const theme = useTheme();
    const isSmDown = useMediaQuery(theme.breakpoints.down('md'));
    const { t, i18n } = useTranslation();
    const imageIdxRef = useRef<number>(0);
    const imageIdxRef2 = useRef<number>(1);
    const [slideDirection, setSlideDirection] = useState('translateX(0)');
    const [inTransition, setInTransition] = useState(false);
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = 23;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % (maxSteps));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      if (prevActiveStep === 0) {
        return maxSteps - 1;
      } else {
        return prevActiveStep - 1
      }
      
    });
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };


  const [checked, setChecked] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true)
  };
  const handleClose = () => setOpen(false);




    
  const handleLeftClick = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current as NodeJS.Timeout); // Cast to NodeJS.Timeout
      intervalRef.current = null; // Reset the interval ref
    }
  };






    const headerFontSize = isSmDown ? "3rem" : "4rem";
    const photoWidth = isSmDown ? "400px" : "600px";
    const photoHeight = isSmDown ? "500px" : "700px";
    const carouselHeight = isSmDown ? "300px" : "400px";
    const carouselWidth = isSmDown ? "270px" : "500px";
    const boxHeight = isSmDown ? "400px" : "500px";
    const boxWidth = isSmDown ? "400px" : "600px";
    const modalHeight = isSmDown ? "400px" : "900px";
    const modalWidth = isSmDown ? "400px" : "1000px";
    const modalImageHeight = isSmDown ? "300px" : "700px";
    const modalImageWidth = isSmDown ? "270px" : "900px";
    const numCols = isSmDown ? 2 : 4;
    return (
        <Container disableGutters maxWidth={false} sx={{minHeight: "auto", bgcolor: "grey", maxWidth: "100%"}}>
          <Container disableGutters maxWidth={false} sx={{width: "inherit", backgroundColor:`#DFDFDF`, minHeight: "auto", display: "flex", flexDirection: "column"}}>
          <Header/>
          <Box sx={{width: "90%", fontFamily: "Cormorant Garamond", color: "black", fontSize: headerFontSize, fontWeight: 400, textTransform: "uppercase", pt: 5,  display: "flex", alignItems: "center", justifyContent: 'center', alignSelf:"center", borderBottom: 5, borderColor: "#001524"}}>
                        {t("photos")}
          </Box>
            <Box sx={{pt: 10, pb: 0}}>
              <Grid container spacing={2}>
                <Grid item xs={isSmDown ? 12 : 6} sx={{display: "flex", justifyContent: "center"}}>
                  <Box sx={{bgcolor: "blue", width: photoWidth, height: photoHeight}}>

                  </Box>
                </Grid>
                <Grid item xs={isSmDown ? 12 : 6} sx={{display: "flex", justifyContent: "center"}}>
                  <Box sx={{bgcolor: "blue", width: photoWidth, height: photoHeight}}>
                  
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box>
          </Box>
          <Box sx={{pt: 0, pb: 10, display: "flex", justifyContent: "center", minHeight: "auto"}}>
              
              <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" sx={{display: "flex", justifyContent: "center", alignItems: "center", '& .MuiBackdrop-root': { backgroundColor: 'rgba(0, 0, 0, 0.8)' }}}>
              <Box sx={{width: modalWidth, height: modalImageHeight, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
              <Button sx={{fontSize: "5rem", color: "white", '&.MuiButton-root:hover':{bgcolor: 'transparent'}}} onClick={handleBack} disableRipple>
                <KeyboardArrowLeft fontSize="inherit"/>
              </Button>
              <AutoPlaySwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents interval={3000}>
              {Object.values(pictures).map((step, index) => (
                <div key={index}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box onClick={handleOpen} component="img" sx={{height: modalImageHeight, display: 'block', overflow: 'hidden', width: modalImageWidth, objectFit: "contain"}} src={step} />
                    ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <Button sx={{fontSize: "5rem", color: "white", '&.MuiButton-root:hover':{bgcolor: 'transparent'}}} onClick={handleNext} disableRipple >
                <KeyboardArrowRight fontSize="inherit"/>
              </Button>
              </Box>
            </Modal>
            
          </Box>
         
          <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", pt: 5, pb: 5, pl: 2, pr: 2}}>
          <ImageList variant="masonry" cols={numCols} gap={8}>
          {Object.values(pictures).map((url, index) => (
          <ImageListItem key={index}>
            <img
              src={url}
              loading="lazy"
              onClick={handleOpen}
            />
          </ImageListItem>
        ))}
      </ImageList>
          </Box>
          <Footer/>
          </Container>
        </Container>
    );
};

export default PhotosPage;

