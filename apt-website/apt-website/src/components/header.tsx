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


import { useTranslation } from 'react-i18next';



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
            <Toolbar sx={{p: "2vw", backgroundColor: "blue"}}>
                <Box display="flex" flexGrow={1}>
                    <Typography sx={{fontFamily: "Montserrat", color: "white", fontSize: "2.2rem", fontWeight: 300}}>
                        {t("title")}
                    </Typography>
                </Box>
                <Button href={"/"} sx={{mr: "2vw", fontFamily: "Montserrat", color: "white",}}>
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
                        fontFamily: "Montserrat", 
                        color: "white"
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
                    MenuListProps={{ onMouseLeave: onMouseLeaveApartments, sx: {bgcolor: "black", p: 0, textAlign: "center"}}}
                >
                    <MenuItem sx={{fontFamily: "Montserrat", color: "white"}}>{t("photos").toUpperCase()}</MenuItem>
                    <MenuItem sx={{fontFamily: "Montserrat", color: "white"}}>{t("services").toUpperCase()}</MenuItem>
                    <MenuItem sx={{fontFamily: "Montserrat", color: "white"}}>{t("homebook").toUpperCase()}</MenuItem>
                </Menu>

                <Button
                    sx={{
                        mr: "2vw",
                        fontFamily: "Montserrat", 
                        color: "white"
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
                        MenuProps={{PaperProps: {onMouseLeave: handleClose, sx: {}}}}
                        value={language}
                        onChange={onChangeLanguage}
                        sx={{bgcolor: "transparent", 
                            textAlign: "right",
                            fontFamily: "Montserrat", 
                            color: "white",
                            ':before': { borderBottomColor: 'white' },
                            ':after': { borderBottomColor: 'white' },
                        }}>
                        <MenuItem value="en">ENG</MenuItem>
                        <MenuItem value="lt">LT</MenuItem>
                    </Select>
                </FormControl>
                
                
                <IconButton onClick={() => setState({sidebar: !state.sidebar})} size="large" disableRipple sx={{color: "white"}} >
                    <DragHandleIcon fontSize="inherit" color="inherit" fontWeight="inherit"/>
                </IconButton>
                <Drawer
                    anchor={"right"}
                    open={state.sidebar}
                    onClose={(event, reason) => setState({ sidebar: false})}>
                    <Box sx={{width: "30vw", p: "2vw" }} display="flex" justifyContent="flex-end">
                        <IconButton onClick={() => setState({sidebar: false})}   size="large" disableRipple>
                            <CloseIcon fontSize="inherit"/>
                        </IconButton>
                    </Box>
                </Drawer>
            </Toolbar>
        </React.Fragment>
    );
}

export default Header;