import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';


function Header() {
    const [state, setState] = React.useState({
        sidebar: false
    });

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);


    return (
        <React.Fragment>
            <Toolbar sx={{p: "2vw"}}>
                <Box display="flex" flexGrow={1}>
                    <Typography>
                        Riverside Homes
                    </Typography>
                </Box>
                <Link sx={{mr: "2vw"}}>
                    Home
                </Link>
                <Link sx={{mr: "2vw"}}>
                    Apartments
                </Link>
                <Avatar 
                    sx={{mr: "1vw", width: 30, height: 30}} 
                    id="language-button"
                    aria-controls={open ? 'language-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={(event) => setAnchorEl(event.currentTarget)}>

                </Avatar>
                <Menu 
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    transformOrigin={{ vertical: -10, horizontal: 'center' }}
                    MenuListProps={{'aria-labelledby': 'language-button'}} 
                    open={open}
                    id="language-menu"
                    anchorEl={anchorEl}
                    onClose={() => setAnchorEl(null)}>
                    <MenuItem onClick={() => setAnchorEl(null)}>LT</MenuItem>
                    <MenuItem onClick={() => setAnchorEl(null)}>RUS</MenuItem>
                </Menu>
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