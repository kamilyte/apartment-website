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


import { useTranslation } from 'react-i18next';



function Header() {
    const [state, setState] = React.useState({
        sidebar: false
    });
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = React.useState(i18n.language);
    const [open, setOpen] = React.useState(false);


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
    }


    return (
        <React.Fragment>
            <Toolbar sx={{p: "2vw", backgroundColor: "yellow"}}>
                <Box display="flex" flexGrow={1}>
                    <Typography>
                        {t("title")}
                    </Typography>
                </Box>
                <Link href={"/"} sx={{mr: "2vw"}}>
                    {t("home")}
                </Link>
                <Link sx={{mr: "2vw"}}>
                    {t("apartments")}
                </Link>

                <FormControl variant="standard" sx={{ m: 1, minWidth: 70, bgcolor: "transparent", color: "transparent", 
              }}>
                    <Select
                        IconComponent={() => { return null; }}
                        open={open}
                        onMouseEnter={handleOpen}
                        MenuProps={{PaperProps: {onMouseLeave: handleClose}}}
                        value={language}
                        onChange={onChangeLanguage}
                        sx={{bgcolor: "transparent", textAlign: "right"}}>
                        <MenuItem value="en">ENG</MenuItem>
                        <MenuItem value="lt">LT</MenuItem>
                    </Select>
                </FormControl>
                
                




                
                <IconButton onClick={() => setState({sidebar: !state.sidebar})} size="large" disableRipple >
                    <DragHandleIcon fontSize="inherit" />
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