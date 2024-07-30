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
import headerLogo from "../images/LOGO-cropped.png"
import CssBaseline from '@mui/material/CssBaseline';
import ImageListItem from '@mui/material/ImageListItem';
import { styled } from "@mui/material/styles";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { Style } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import CallIcon from '@mui/icons-material/Call';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Popover from '@mui/material/Popover';


const API_KEY = "AIzaSyBt14sZmtw0fTY3wW4bE1euB5L9IoZw9KQ";


const Wrapper = styled(Toolbar)(({ theme }) => ({
    height: "100px",
    [theme.breakpoints.down("md")]: {
        height: "70px",
    },
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
    height: "inherit",
}));

const StyledBox = styled(Box)(({ theme }) => ({
    height: "inherit",
    width: "240px",
    display: "flex",
    alignItems: 'flex-start',
    [theme.breakpoints.down("md")]: {
        width: "170px",
    },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: "white",
    fontSize: "50px",
    [theme.breakpoints.down("md")]: {
        fontSize: "30px",
    },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    color: "white",
    fontFamily: "Cormorant Garamond",
    minWidth: "auto",
    fontWeight: 600,
    fontSize: "1.3rem",
    [theme.breakpoints.down("md")]: {
        fontSize: "30px",
    },
}));

const StyledDrawer = styled(Box)(({ theme }) => ({
    background: "#001524",
    height: "100vh",
    width: "500px",
    display: "flex",
    flexDirection: 'column',
    p: "10px",
    [theme.breakpoints.down("md")]: {
        width: "170px",
    },
}));




function Header() {
    const [state, setState] = React.useState({
        sidebar: false
    });
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = React.useState(i18n.language);
    const [open, setOpen] = React.useState(false);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [apartmentsAnchorEl, setApartmentsAnchorEl] = React.useState<null | HTMLElement>(null);
    const [sidebarAnchorEl, setSidebarAnchorEl] = React.useState<null | HTMLElement>(null);
    const apartmentOpen = Boolean(apartmentsAnchorEl);
    const theme = useTheme();
    const isSmDown = useMediaQuery(theme.breakpoints.down('md'));




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

    const onSidebarOpen = (event: React.MouseEvent<HTMLElement>) => {
        setState({sidebar: true})
        setSidebarAnchorEl(event.currentTarget)
            
    };

    const onSidebarClose = () => {
        setSidebarAnchorEl(null)
        setState({sidebar: false})
    };

    const onMobileApartmentClick = () => {
        setMobileOpen(!mobileOpen)
    }

    return (
        <Wrapper disableGutters>
            <StyledGrid container spacing={0}>
                <StyledGrid item xs={isSmDown ? 7 : 4}>
                    <StyledBox>
                        <img src={headerLogo} style={{width:"100%", height:"100%"}}/>
                    </StyledBox>
                </StyledGrid>
                {
                    !isSmDown ? (
                        <StyledGrid item xs={2} sx={{display: "flex", justifyContent: "center"}}>
                            <StyledButton href={"/"} sx={{'&.MuiButton-root:hover':{bgcolor: 'transparent'}}} disableRipple> {t("home")} </StyledButton>
                        </StyledGrid>
                    ) : undefined
                }
                    {
                        isSmDown ? undefined : (
                            <StyledGrid item xs={2} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <StyledButton sx={{'&.MuiButton-root:hover':{bgcolor: 'transparent'}, height: "50px"}} disableRipple
                            id="apartments-button"
                            aria-controls={apartmentOpen ? "apartments-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={apartmentOpen ? 'true' : undefined}
                            onMouseOver={onMouseEnterApartments}> {t("apartments")} 
                            </StyledButton>
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
                                MenuListProps={{ onMouseLeave: onMouseLeaveApartments, sx: {bgcolor: "#001524", p: 0, textAlign: "center", width: "180px"}}}
                            >
                                <MenuItem sx={{fontFamily: "Cormorant Garamond", color: "white", fontWeight: 600}}><Link href="/photos" sx={{ textDecoration: 'none', color: "inherit"}}>{t("photos").toUpperCase()}</Link></MenuItem>
                                <MenuItem sx={{fontFamily: "Cormorant Garamond", color: "white", fontWeight: 600}}><Link href="/services" sx={{ textDecoration: 'none', color: "inherit"}}>{t("services").toUpperCase()}</Link>  </MenuItem>
                                <MenuItem sx={{fontFamily: "Cormorant Garamond", color: "white", fontWeight: 600}}><Link href="/homebook" sx={{ textDecoration: 'none', color: "inherit"}}>{t("homebook").toUpperCase()}</Link></MenuItem>
                            </Menu>
                            </StyledGrid>
                        )
                    }
                
                <StyledGrid item xs={2} sx={{ display: "flex", justifyContent: "center"}}>
                    {
                        isSmDown ? (
                            undefined
                        ) : (
                            <StyledButton disableRipple onClick={() => setState({sidebar: !state.sidebar})} sx={{'&.MuiButton-root:hover':{bgcolor: 'transparent'}}}> {t("contact")} </StyledButton>
                        )
                    }
                </StyledGrid>
                <StyledGrid item xs={1} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    {
                        isSmDown ? (
                            undefined
                        ) : (
                            <FormControl variant="standard" sx={{minWidth: 70}}>
                                <Select IconComponent={() => { return null; }} open={open} onMouseEnter={handleOpen} onMouseLeave={handleClose}
                                MenuProps={{PaperProps: {onMouseLeave: handleClose, sx: {bgcolor: "#001524", p: 0, textAlign: "center"}}}}
                                value={language}
                                onChange={onChangeLanguage}
                                sx={{bgcolor: "transparent", 
                                    textAlign: "right",
                                    fontFamily: "Cormorant Garamond", 
                                    color: "white",
                                    ':before': { borderBottomColor: 'white' },
                                    ':after': { borderBottomColor: 'white' },
                                    fontWeight: 600,
                                    fontSize: "1.3rem"
                                }}>
                                    <MenuItem value="en" sx={{fontFamily: "Cormorant Garamond", color: "white", fontWeight: 600}}>ENG</MenuItem>
                                    <MenuItem value="lt" sx={{fontFamily: "Cormorant Garamond", color: "white", fontWeight: 600}}>LT</MenuItem>
                                </Select>
                            </FormControl>
                        )
                    }
                </StyledGrid>
            
                <StyledGrid item xs={isSmDown ? 2 : 1} sx={{display: "flex", justifyContent: "center"}} >
                    <StyledIconButton  disableRipple onClick={onSidebarOpen}
                    aria-describedby={state.sidebar ? "simple-popover" : undefined}
                    >
                        <DragHandleIcon fontSize='inherit' fontWeight={300}/>
                    </StyledIconButton>
                    {
                        !isSmDown ? (
                            <Drawer anchor={"right"} open={state.sidebar} onClose={onSidebarClose}>
                                <StyledDrawer>
                                    <Stack spacing={1}>
                                        <Box sx={{width: "inherit", display: "flex", justifyContent: "flex-end"}}>
                                            <IconButton size="large" disableRipple sx={{color: "white", m: "20px"}} onClick={() => setState({sidebar: false})}>
                                                <CloseIcon fontSize="inherit" color="inherit"/>
                                            </IconButton>
                                        </Box>
                                        <Box sx={{width: "inherit", display: "flex", justifyContent: "center"}}>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "2.2rem", fontWeight: 500, textTransform: "uppercase"}} align="center">
                                                {t("title")}
                                            </Typography>
                                        </Box>
                                        <Box sx={{width: "inherit",  display: "flex", justifyContent: "center"}}>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 500, textTransform: "uppercase"}} align="center">
                                                {t("sidebar_reservations")}
                                            </Typography>
                                        </Box>
                                        <Box sx={{width: "inherit", display: "flex", justifyContent: "center"}}>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 500, textTransform: "uppercase"}} align="center">
                                                {t("time")}
                                            </Typography>
                                        </Box>
                                        <Box sx={{width: "inherit", display: "flex", justifyContent: "center"}}>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 500, textTransform: "uppercase"}} align="center">
                                                {t("contact_number")}
                                            </Typography>
                                        </Box>
                                        <Box sx={{width: "inherit", display: "flex", justifyContent: "center"}}>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 500, textTransform: "uppercase"}} align="center">
                                                {t("email")}
                                            </Typography>
                                        </Box>
                                        <Box sx={{width: "inherit", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 500, textTransform: "uppercase"}} align="center">
                                                {t("address_line_1")}
                                            </Typography>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 500, textTransform: "uppercase"}} align="center">
                                                {t("address_line_2")}
                                            </Typography>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 500, textTransform: "uppercase"}} align="center">
                                                {t("address_line_3")}
                                            </Typography>
                                        </Box>
                                        <Box sx={{width: "inherit", height: "360px", display: "flex", justifyContent: "center"}}>
                                            <iframe width="450px" height="100%" style={{"border": 0}} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBt14sZmtw0fTY3wW4bE1euB5L9IoZw9KQ&q=Marvelės+Gatvė+33A+Kaunas"/>
                                        </Box>
                                        
                                    </Stack>
                                </StyledDrawer>
                            </Drawer>
                        ) : (
                            <Popover sx={{
                                '& .MuiPaper-root': {
                                  width: '100vw',
                                  overflow: "hidden" // Ensure it spans the full viewport width
                                },
                                position: "absolute",
                              }}
                            id={state.sidebar ? "simple-popover" : undefined}
                            open={state.sidebar}
                            anchorEl={sidebarAnchorEl}
                            onClose={onSidebarClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: "left",
                              }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                              }}
                            >
                                <List component="nav" disablePadding sx={{width: "auto", minHeight: "auto", bgcolor: "#001524"}} >
                                    <ListItemButton>
                                    <Link href="/" sx={{ textDecoration: 'none', color: "inherit"}}>
                                        <Typography  sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1rem", fontWeight: 500, textTransform: "uppercase"}} align="center">
                                            {t("home")}
                                        </Typography>
                                    </Link>
                                    </ListItemButton>
                                    <ListItemButton onClick={onMobileApartmentClick} sx={{color: "white"}}>
                                        <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1rem", fontWeight: 500, textTransform: "uppercase"}} align="center">
                                            {t("apartments")}
                                        </Typography>
                                        {mobileOpen ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />}
                                    </ListItemButton>
                                    <Collapse in={mobileOpen} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItemButton>
                                            <Link href="/photos" sx={{ textDecoration: 'none', color: "inherit"}}>
                                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1rem", fontWeight: 500, textTransform: "uppercase"}} align="center">
                                                    {t("photos")}
                                                </Typography>
                                            </Link>
                                            </ListItemButton>
                                            <ListItemButton>
                                                <Link href="/services" sx={{ textDecoration: 'none', color: "inherit"}}>
                                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1rem", fontWeight: 500, textTransform: "uppercase"}} align="center">
                                                    {t("services")}
                                                </Typography>
                                                </Link>
                                            </ListItemButton>
                                            <ListItemButton>
                                            <Link href="/homebook" sx={{ textDecoration: 'none', color: "inherit"}}>
                                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1rem", fontWeight: 500, textTransform: "uppercase"}} align="center">
                                                    {t("homebook")}
                                                </Typography>
                                            </Link>
                                            </ListItemButton>
                                        </List>
                                    </Collapse>
                                    <ListItemButton>
                                        <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1rem", fontWeight: 500, textTransform: "uppercase"}} align="center">
                                            {t("contact")}
                                        </Typography>
                                    </ListItemButton>
                                    <ListItemButton>
                                    <FormControl variant="standard" sx={{minWidth: 70}}>
                                        <Select IconComponent={() => { return null; }} open={open} onClick={() => setOpen(!open)} 
                                        MenuProps={{PaperProps: {sx: {bgcolor: "#001524", p: 0, textAlign: "center"}}}}
                                        value={language}
                                        onChange={onChangeLanguage}
                                        sx={{bgcolor: "transparent", 
                                            textAlign: "right",
                                            fontFamily: "Cormorant Garamond", 
                                            color: "white",
                                            ':before': { borderBottomColor: 'white' },
                                            ':after': { borderBottomColor: 'white' },
                                            fontWeight: 600,
                                            fontSize: "1rem"
                                        }}>
                                            <MenuItem value="en" sx={{fontFamily: "Cormorant Garamond", color: "white", fontWeight: 600}}>ENG</MenuItem>
                                            <MenuItem value="lt" sx={{fontFamily: "Cormorant Garamond", color: "white", fontWeight: 600}}>LT</MenuItem>
                                        </Select>
                                    </FormControl>
                                    </ListItemButton>
                                </List>
                            </Popover>
                        )
                    }
                </StyledGrid>
            </StyledGrid>
        </Wrapper>
    );
}


export default Header;