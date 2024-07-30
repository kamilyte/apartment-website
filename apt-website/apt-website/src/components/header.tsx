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
import ImageListItem from '@mui/material/ImageListItem';



import { useTranslation } from 'react-i18next';

const API_KEY = "AIzaSyBt14sZmtw0fTY3wW4bE1euB5L9IoZw9KQ";


function Header() {
    const [state, setState] = React.useState({
        sidebar: false
    });
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = React.useState(i18n.language);
    const [open, setOpen] = React.useState(false);
    const [apartmentsAnchorEl, setApartmentsAnchorEl] = React.useState<null | HTMLElement>(null);
    const apartmentOpen = Boolean(apartmentsAnchorEl);




    useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
          i18n.changeLanguage(storedLanguage);
          setLanguage(storedLanguage);
        }
    }, []);

    const onChangeLanguage = (e: any) => {
        i18n.changeLanguage(e.target.value);
        setLanguage(e.target.value);
        localStorage.setItem('language', e.target.value);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onMouseEnterApartments = (event: React.MouseEvent<HTMLElement>) => {
        setApartmentsAnchorEl(event.currentTarget);
    };

    const onMouseLeaveApartments = () => {
        setApartmentsAnchorEl(null);
    };




    return (
        <React.Fragment>
            <CssBaseline />
            <Toolbar disableGutters sx={{backgroundColor: "transparent"}}>
                <Box display="flex" sx={{backgroundColor: "transparent", mr: "2px"}}>
                    <img src={headerLogo} style={{width:"25%", height:"100%"}}/>
                </Box>
                <Button href={"/"} sx={{mr: "2vw", fontFamily: "Cormorant Garamond", color: "white", minWidth: "auto", fontWeight: 600}}>
                    {t("home")}
                </Button>
                
                <Button 
                    id="apartments-button"
                    aria-controls={apartmentOpen ? "apartments-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={apartmentOpen ? 'true' : undefined}
                    onMouseOver={onMouseEnterApartments}
                    sx={{
                        mr: "2vw", 
                        fontFamily: "Cormorant Garamond", 
                        color: "white",
                        minWidth: "auto",
                        fontWeight: 600
                    }}
                    >
                    {t("apartments")}
                </Button>
                <Menu
                    id="apartments-menu"
                    aria-labelledby='apartments-button'
                    open={apartmentOpen}
                    anchorEl={apartmentsAnchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    MenuListProps={{ onMouseLeave: onMouseLeaveApartments, sx: {bgcolor: "#001524", p: 0, textAlign: "center"}}}
                >
                    <MenuItem sx={{fontFamily: "Cormorant Garamond", color: "white", fontWeight: 600}}><Link href="/photos" sx={{ textDecoration: 'none', color: "inherit"}}>{t("photos").toUpperCase()}</Link></MenuItem>
                    <MenuItem sx={{fontFamily: "Cormorant Garamond", color: "white", fontWeight: 600}}><Link href="/services" sx={{ textDecoration: 'none', color: "inherit"}}>{t("services").toUpperCase()}</Link>  </MenuItem>
                    <MenuItem sx={{fontFamily: "Cormorant Garamond", color: "white", fontWeight: 600}}>{t("homebook").toUpperCase()}</MenuItem>
                </Menu>

                <Button
                    onClick={() => setState({sidebar: !state.sidebar})}
                    sx={{
                        mr: "2vw",
                        fontFamily: "Cormorant Garamond", 
                        color: "white", 
                        minWidth: "auto", 
                        fontWeight: 600
                    }}
                >
                    {t("contact")}
                </Button>

                <FormControl variant="standard" sx={{ m: 1, minWidth: 70, bgcolor: "transparent", color: "transparent", 
              }}>
                    <Select
                        IconComponent={() => { return null; }}
                        open={open}
                        onMouseEnter={handleOpen}
                        onMouseLeave={handleClose}
                        MenuProps={{PaperProps: {onMouseLeave: handleClose, sx: {bgcolor: "#001524", p: 0, textAlign: "center"}}}}
                        value={language}
                        onChange={onChangeLanguage}
                        sx={{bgcolor: "transparent", 
                            textAlign: "right",
                            fontFamily: "Cormorant Garamond", 
                            color: "white",
                            ':before': { borderBottomColor: 'white' },
                            ':after': { borderBottomColor: 'white' },
                            fontWeight: 600
                        }}>
                        <MenuItem value="en" sx={{fontFamily: "Cormorant Garamond", color: "white", fontWeight: 600}}>ENG</MenuItem>
                        <MenuItem value="lt" sx={{fontFamily: "Cormorant Garamond", color: "white", fontWeight: 600}}>LT</MenuItem>
                    </Select>
                </FormControl>
                
                
                <IconButton onClick={() => setState({sidebar: !state.sidebar})} size="large" disableRipple sx={{color: "white"}} >
                    <DragHandleIcon fontSize="inherit" color="inherit" fontWeight="inherit"/>
                </IconButton>
                <Drawer
                    anchor={"right"}
                    open={state.sidebar}
                    onClose={(event, reason) => setState({ sidebar: false})}>
                    <Box sx={{width: "30vw", p: "2vw", flexDirection: 'column', bgcolor: "#001524", height: "100vh"}}>
                        <Stack spacing={1} sx={{}}>
                            <Box
                                sx={{
                                    width: "inherit", 
                                    height: "2vw",
                                    marginLeft: "auto"
                                }}>
                                <IconButton onClick={() => setState({sidebar: false})} size="large" disableRipple sx={{position: "fixed", top: 0, right: 0, m: "1vw", color: "white"}}>
                                    <CloseIcon fontSize="inherit" color="inherit"/>
                                </IconButton>
                            </Box>
                            <Box
                                sx={{
                                    width: "inherit", 
                                    height: "13vh",
                                    bgcolor: "transparent"
                                }}
                                alignItems="center"
                                justifyContent="center"
                                display="flex">
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "2.2rem", fontWeight: 300}} align="center">
                                    {t("title")}
                                </Typography>   
                            </Box>
                            <Box
                                sx={{
                                    width: "inherit", 
                                    height: "4vh",
                                    bgcolor: "transparent"
                                }}
                                alignItems="center"
                                justifyContent="center"
                                display="flex">
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 300}} align="center">
                                    {t("sidebar_reservations").toUpperCase()}
                                </Typography>   
                            </Box>
                            <Box
                                sx={{
                                    width: "inherit", 
                                    height: "4vh",
                                    bgcolor: "transparent"
                                }}
                                alignItems="center"
                                justifyContent="center"
                                display="flex">
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 300}} align="center">
                                    {t("time")}
                                </Typography>   
                            </Box>
                            <Box
                                sx={{
                                    width: "inherit", 
                                    height: "4vh",
                                    bgcolor: "transparent"
                                }}
                                alignItems="center"
                                justifyContent="center"
                                display="flex">
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 300}} align="center">
                                    {t("contact_number")}
                                </Typography>   
                            </Box>
                            <Box
                                sx={{
                                    width: "inherit", 
                                    height: "4vh",
                                    bgcolor: "transparent"
                                }}
                                alignItems="center"
                                justifyContent="center"
                                display="flex">
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.1rem", fontWeight: 300}} align="center">
                                    {t("email").toUpperCase()}
                                </Typography>   
                            </Box>
                            <Box
                                sx={{
                                    width: "inherit", 
                                    height: "6vw",
                                    flexDirection: "column",
                                    bgcolor: "transparent"
                                }}
                                alignItems="center"
                                justifyContent="center"
                                display="flex">
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.1rem", fontWeight: 300}} align="center">
                                    {t("address_line_1").toUpperCase()}
                                </Typography>   
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.1rem", fontWeight: 300}} align="center">
                                    {t("address_line_2").toUpperCase()}
                                </Typography>   
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.1rem", fontWeight: 300}} align="center">
                                    {t("address_line_3").toUpperCase()}
                                </Typography>   
                            </Box>
                            <Box
                                sx={{
                                    width: "inherit", 
                                    height: "43vh",
                                    bgcolor: "transparent",
                                    alignContent: 'flex-end'
                                }}>
                                <iframe
                                    width="100%"
                                    height="90%"
                                    style={{"border":0}}
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBt14sZmtw0fTY3wW4bE1euB5L9IoZw9KQ&q=Marvelės+Gatvė+33A+Kaunas">
                                </iframe>
                            </Box>
                            

                        </Stack>
                        
                        
                    </Box>
                </Drawer>
            </Toolbar>
        </React.Fragment>
    );
}

export default Header;