import React, { useEffect } from 'react';
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

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
      title: 'Bed',
    },
    {
      img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
      title: 'Books',
    },
    {
      img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
      title: 'Sink',
    },
    {
      img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
      title: 'Kitchen',
    },
    {
      img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
      title: 'Blinds',
    },
    {
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      title: 'Chairs',
    },
    {
      img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
      title: 'Laptop',
    },
    {
      img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
      title: 'Doors',
    },
    {
      img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
      title: 'Storage',
    },
    {
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: 'Candle',
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
    },
  ];


function PhotosPage() {
    return (
        <React.Fragment>
        <CssBaseline/>
        <Container disableGutters maxWidth={false} sx={{backgroundColor:`#DFDFDF`, height: "300vh", pr: 2}}>
            <Header/>
            <ImageList variant="masonry" cols={3} gap={8}>
                {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    />
                </ImageListItem>
                ))}
            </ImageList>
        </Container>
        <Footer/>
        </React.Fragment>
    );
};

export default PhotosPage;