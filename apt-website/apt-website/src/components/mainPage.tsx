import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from './header';


function MainPage() {
    return (
        <React.Fragment>
        <CssBaseline /> 
            <Container maxWidth="lg">
                <Header/>
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}/ >
                
                
            </Container>
        </React.Fragment>
    );
}

export default MainPage;