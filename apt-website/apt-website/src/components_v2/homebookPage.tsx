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
import { useSpring, animated, useTransition } from 'react-spring';
import Slide from '@mui/material/Slide';
import tv_1 from '../pdfFiles/pdf1.pdf';
import tv_2 from '../pdfFiles/pdf2.pdf';
import hood from '../pdfFiles/pdf3.pdf';
import dishwasher from '../pdfFiles/pdf4.pdf';
import oven from '../pdfFiles/pdf5.pdf';
import tv_3 from '../pdfFiles/pdf6.pdf';
import { BlobProvider, PDFDownloadLink } from '@react-pdf/renderer';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

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



function HomeBookPage() {
    const theme = useTheme();
    const isSmDown = useMediaQuery(theme.breakpoints.down('md'));
    const { t, i18n } = useTranslation();
    const imageIdxRef = useRef<number>(0);
    const imageIdxRef2 = useRef<number>(1);


  const [checked, setChecked] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  





    
  const handleLeftClick = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current as NodeJS.Timeout); // Cast to NodeJS.Timeout
      intervalRef.current = null; // Reset the interval ref
    }
  };

  const handleClick = (idx: number) => () => {
    const pdfUrl = `${process.env.PUBLIC_URL}/pdf1.pdf`;
    window.open(pdfUrl, '_blank')
  }






    const headerFontSize = isSmDown ? "3rem" : "4rem";
    const photoWidth = isSmDown ? "400px" : "600px";
    const photoHeight = isSmDown ? "500px" : "700px";
    const leftPadding = isSmDown ? 5 : 20;
    return (
        <Container disableGutters maxWidth={false} sx={{minHeight: "auto", bgcolor: "grey", maxWidth: "100%"}}>
            <Container disableGutters maxWidth={false} sx={{width: "inherit", backgroundColor:`#DFDFDF`, minHeight: "auto", display: "flex", flexDirection: "column"}}>
            <Header/>
            <Box sx={{width: "90%", fontFamily: "Cormorant Garamond", color: "black", fontSize: headerFontSize, fontWeight: 400, textTransform: "uppercase", pt: 5,  display: "flex", alignItems: "center", justifyContent: 'center', alignSelf:"center", borderBottom: 5, borderColor: "#001524"}}>
                {t("homebook")}
            </Box>
            <Stack>
                <Box sx={{textAlign: "center", width: "90%", fontFamily: "Cormorant Garamond", color: "black", fontSize: "2rem", fontWeight: 400, pt: 10,  display: "flex", alignItems: "center", justifyContent: 'center', alignSelf:"center"}}>
                    {t("homebook_1")}
                </Box>
                <Box sx={{textAlign: "center", width: "90%", fontFamily: "Cormorant Garamond", color: "black", fontSize: "2rem", fontWeight: 400, pt: 5,  display: "flex", alignItems: "center", justifyContent: 'center', alignSelf:"center"}}>
                    {t("homebook_2")}
                </Box>
            </Stack>
            <Box sx={{pb: 10, pt: 8, pl: leftPadding, minWidth: "auto"}}>
                        <Stack spacing={0} sx={{width: "80%"}}>
                            <Box sx={{pt: 2}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "3rem", fontWeight: 600, textTransform: "uppercase"}}>{t("1st_floor")}</Typography>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderTop: 1, borderBottom: 1, borderColor: "#15616D", display:"flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("oven_pdf")}</Typography>
                                <Button disableFocusRipple disableElevation  size="small" variant="contained" href={oven} target="_blank" sx={{fontFamily: "Cormorant Garamond", fontSize: "1rem", fontWeight: 900, backgroundColor: "#6F1F04", '&:hover': {backgroundColor: '#6F1F04',boxShadow: 'none'}}}>
                                    PDF
                                </Button>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderBottom: 1, borderColor: "#15616D", display:"flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("dishwasher_pdf")}</Typography>
                                <Button disableFocusRipple disableElevation  size="small" variant="contained" href={dishwasher} target="_blank" sx={{fontFamily: "Cormorant Garamond", fontSize: "1rem", fontWeight: 900, backgroundColor: "#6F1F04", '&:hover': {backgroundColor: '#6F1F04',boxShadow: 'none'}}}>
                                    PDF
                                </Button>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderBottom: 1, borderColor: "#15616D", display:"flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("hood_pdf")}</Typography>
                                <Button disableFocusRipple disableElevation  size="small" variant="contained" href={hood} target="_blank" sx={{fontFamily: "Cormorant Garamond", fontSize: "1rem", fontWeight: 900, backgroundColor: "#6F1F04", '&:hover': {backgroundColor: '#6F1F04',boxShadow: 'none'}}}>
                                    PDF
                                </Button>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderBottom: 1, borderColor: "#15616D", display:"flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("tv_pdf")}</Typography>
                                <Button disableFocusRipple disableElevation  size="small" variant="contained" href={tv_2} target="_blank" sx={{fontFamily: "Cormorant Garamond", fontSize: "1rem", fontWeight: 900, backgroundColor: "#6F1F04", '&:hover': {backgroundColor: '#6F1F04',boxShadow: 'none'}}}>
                                    PDF
                                </Button>
                            </Box>


                            <Box sx={{pt: 2}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "3rem", fontWeight: 600, textTransform: "uppercase"}}>{t("2nd_floor")}</Typography>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderTop: 1, borderBottom: 1, borderColor: "#15616D", display:"flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("tv_pdf")}</Typography>
                                <Button disableFocusRipple disableElevation  size="small" variant="contained" href={tv_2} target="_blank" sx={{fontFamily: "Cormorant Garamond", fontSize: "1rem", fontWeight: 900, backgroundColor: "#6F1F04", '&:hover': {backgroundColor: '#6F1F04',boxShadow: 'none'}}}>
                                    PDF
                                </Button>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderBottom: 1, borderColor: "#15616D", display:"flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("speakersmirror_pdf")}</Typography>
                                <Button disableFocusRipple disableElevation  size="small" variant="contained" href={oven} target="_blank" sx={{fontFamily: "Cormorant Garamond", fontSize: "1rem", fontWeight: 900, backgroundColor: "#6F1F04", '&:hover': {backgroundColor: '#6F1F04',boxShadow: 'none'}}}>
                                    PDF
                                </Button>
                            </Box>
                            <Box sx={{pt: 2}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "3rem", fontWeight: 600, textTransform: "uppercase"}}>{t("3rd_floor")}</Typography>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderTop: 1, borderBottom: 1, borderColor: "#15616D", display:"flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("tv_pdf")}</Typography>
                                <Button disableFocusRipple disableElevation  size="small" variant="contained" href={tv_2} target="_blank" sx={{fontFamily: "Cormorant Garamond", fontSize: "1rem", fontWeight: 900, backgroundColor: "#6F1F04", '&:hover': {backgroundColor: '#6F1F04',boxShadow: 'none'}}}>
                                    PDF
                                </Button>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderBottom: 1, borderColor: "#15616D", display:"flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("mirror_pdf")}</Typography>
                                <Button disableFocusRipple disableElevation  size="small" variant="contained" href={oven} target="_blank" sx={{fontFamily: "Cormorant Garamond", fontSize: "1rem", fontWeight: 900, backgroundColor: "#6F1F04", '&:hover': {backgroundColor: '#6F1F04',boxShadow: 'none'}}}>
                                    PDF
                                </Button>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderBottom: 1, borderColor: "#15616D", display:"flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("toilet_pdf")}</Typography>
                                <Button disableFocusRipple disableElevation  size="small" variant="contained" href={oven} target="_blank" sx={{fontFamily: "Cormorant Garamond", fontSize: "1rem", fontWeight: 900, backgroundColor: "#6F1F04", '&:hover': {backgroundColor: '#6F1F04',boxShadow: 'none'}}}>
                                    PDF
                                </Button>
                            </Box>
                            
                        </Stack>
            </Box>
          
          <Footer/>
          </Container>
        </Container>
    );
};

export default HomeBookPage;