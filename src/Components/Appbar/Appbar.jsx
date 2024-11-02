import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import { alpha, Avatar, InputBase, Stack } from '@mui/material';
import Delete from '@mui/icons-material/Delete';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';

import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { CalendarMonth } from '@mui/icons-material';

import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import { dark } from '@mui/material/styles/createPalette';


const drawerWidth = 240;



const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),

    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                marginLeft: drawerWidth,
                width: `calc(100% - ${drawerWidth}px)`,
                transition: theme.transitions.create(['width', 'margin'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    ...openedMixin(theme),
                    '& .MuiDrawer-paper': openedMixin(theme),
                },
            },
            {
                props: ({ open }) => !open,
                style: {
                    ...closedMixin(theme),
                    '& .MuiDrawer-paper': closedMixin(theme),
                },
            },
        ],
    }),
);



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
       
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const Array1 = [{
    "text": 'Home',
    "icon": <HomeOutlinedIcon />,
    "path": '/'
}, {
    "text": 'Manage Team',
    "icon": <PeopleAltOutlinedIcon />,
    "path": '/Team'
}, {
    "text": 'Contact Information',
    "icon": <ContactPhoneOutlinedIcon />,
    "path": '/Contact'
}, {
    "text": 'Invoices Balances',
    "icon": <ReceiptOutlinedIcon />,
    "path": '/invoices'
}
]

const Array2 = [{
    "text": 'profile form',
    "icon": <Person3OutlinedIcon />,
    "path": '/form'
}, {
    "text": 'Calendar',
    "icon": <CalendarMonth />,
    "path": '/Calendar'
}, {
    "text": 'FAQ gage',
    "icon": <HelpOutlineOutlinedIcon />,
    "path": '/faq'
}
]

const Array3 = [{
    "text": 'Bar Chart',
    "icon": <BarChartOutlinedIcon />,
    "path": '/Bar'
}, {
    "text": 'Pie Chart',
    "icon": <PieChartOutlinedIcon />,
    "path": '/Pie'
}, {
    "text": 'lina Chart',
    "icon": <TimelineOutlinedIcon />,
    "path": '/lina'
}, {
    "text": 'geography Chart',
    "icon": <MapOutlinedIcon />,
    "path": '/geography'
}
]



export default function Appbar({ mode, setMode }) {
    let navigate = useNavigate();
    let location = useLocation();

    const theme = useTheme();


    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };




    return <>

        <Box sx={{ display: 'flex' }}>

            <CssBaseline />

            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={[
                            {
                                marginRight: 5,
                            },
                            open && { display: 'none' },
                        ]}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Typography>
                    <Box flexGrow={1} />

                    <Stack direction={'row'}>

                        {theme.palette.mode === 'light' ? <IconButton onClick={() => {
                            localStorage.setItem("currentMode", theme.palette.mode === 'dark' ? 'light' : 'dark')
                            setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'))
                        }} color='inherit' aria-label="delete">
                            <LightModeOutlinedIcon />
                        </IconButton> : <IconButton onClick={() => {
                            localStorage.setItem("currentMode", theme.palette.mode === 'dark' ? 'light' : 'dark')
                            setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'))
                        }} color='inherit' aria-label="delete">
                            <ModeNightOutlinedIcon />
                        </IconButton>}






                        <IconButton color='inherit' aria-label="delete">
                            <NotificationsOutlinedIcon />
                        </IconButton>

                        <IconButton color='inherit' aria-label="delete">
                            <SettingsOutlinedIcon />
                        </IconButton>

                        <IconButton color='inherit' aria-label="delete">
                            <PersonOutlinedIcon />
                        </IconButton>

                    </Stack>




                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>



                <Avatar sx={{ mx: "auto", height: 50, width: 50 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Typography align='center' variant='body1' sx={{ fontSize: open ? 17 : 0, transition: "0.5s" }}>
                    Mostafa
                </Typography>
                <Typography align='center' variant='body1' sx={{ fontSize: open ? 17 : 0, transition: "0.5s", color: theme.palette.info.main }}>
                    Admin
                </Typography>






                <Divider />
                <List>
                    {Array1.map((item) => (
                        <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                onClick={() => {
                                    navigate(item.path)
                                }}
                                sx={[
                                    {
                                        minHeight: 48,
                                        px: 2.5,
                                    },
                                    open
                                        ? {
                                            justifyContent: 'initial',
                                        }
                                        : {
                                            justifyContent: 'center',
                                        },
                                    { bgcolor: location.pathname === item.path ? theme.palette.mode === 'dark' ? grey[800] : grey[300] : null },
                                ]}
                            >
                                {item.icon}
                                <ListItemText
                                    primary={item.text}
                                    sx={[
                                        open
                                            ? {
                                                opacity: 1,
                                            }
                                            : {
                                                opacity: 0,
                                            },


                                    ]}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {Array2.map((item) => (
                        <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                onClick={() => {
                                    navigate(item.path)
                                }}
                                sx={[
                                    { bgcolor: location.pathname === item.path ? theme.palette.mode === 'dark' ? grey[800] : grey[300] : null },
                                    {
                                        minHeight: 48,
                                        px: 2.5,
                                    },
                                    open
                                        ? {
                                            justifyContent: 'initial',
                                        }
                                        : {
                                            justifyContent: 'center',
                                        },
                                ]}
                            >
                                {item.icon}
                                <ListItemText
                                    primary={item.text}
                                    sx={[
                                        open
                                            ? {
                                                opacity: 1,
                                            }
                                            : {
                                                opacity: 0,
                                            },
                                    ]}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                <Divider />
                <List>
                    {Array3.map((item) => (
                        <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                onClick={() => {
                                    navigate(item.path)
                                }}
                                sx={[
                                    { bgcolor: location.pathname === item.path ? theme.palette.mode === 'dark' ? grey[800] : grey[300] : null },
                                    {
                                        minHeight: 48,
                                        px: 2.5,
                                    },
                                    open
                                        ? {
                                            justifyContent: 'initial',
                                        }
                                        : {
                                            justifyContent: 'center',
                                        },
                                ]}
                            >
                                {item.icon}
                                <ListItemText
                                    primary={item.text}
                                    sx={[
                                        open
                                            ? {
                                                opacity: 1,
                                            }
                                            : {
                                                opacity: 0,
                                            },
                                    ]}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>

    </>
}
