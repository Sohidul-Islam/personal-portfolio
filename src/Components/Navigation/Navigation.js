import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
// image section
import img1 from '../../images/me-2.png';
// Customs Components
import Home from '../Home/Home';
import Features from './../Features/Features';
import Portfolio from './../Portfolio/Portfolio';
const drawerWidth = 240;
const navItems = ['HOME',
    'FEATURES',
    'PORTFOLIO',
    'RESUME',
    'TESTIMONIAL',
    'CLIENTS',
    'PRICING',
    'BLOG',
    'CONTACTS',
];

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const theme = createTheme({
    typography: {
        brand: {
            fontSize: 20,
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '800'
        },
        body1: {
            fontWeight: 500,
        },
        button: {
            fontStyle: 'italic',
        },
    },
});


const customTheme = createTheme({
    // palette: {
    //   primary: {
    //     main: deepPurple[500],
    //   },
    // },
    palette: {
        type: "light",
        primary: {
            main: "#000",
        }
        ,
        background: {
            default: "linear-gradient(145deg, #E8ECF0, #FAFBFB)",
        },
    },
});


const StyledMenuIcon = styled(IconButton)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
})};
  &:hover {
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.1);
  }
  `}
`;

const Navigation = (props) => {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const [themeColor, setThemeColor] = useState(lightTheme);

    const drawer = (
        <ThemeProvider theme={themeColor}>
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ my: 2, mx: 2 }}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar
                            alt="Remy Sharp"
                            src={img1}
                            sx={{ width: 56, height: 56 }}
                        />
                        <Typography variant='brand' theme={theme}>
                            SOHIDUL
                        </Typography>

                    </Stack>
                </Typography>
                <Divider />
                <List>
                    {navItems.map((item) => (
                        <ListItem key={item} disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </ThemeProvider>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <ThemeProvider theme={themeColor}>
            <Box sx={{ display: 'flex' }} >
                <CssBaseline />
                <AppBar component="nav" style={{ backgroundColor: '#ECF0F3' }}>
                    <Toolbar>
                        <ThemeProvider theme={themeColor}>
                            <StyledMenuIcon theme={customTheme}
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </StyledMenuIcon>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: "#000" }}
                            >
                                <Stack direction="row" alignItems="center" spacing={2} sx={{ py: 2 }}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={img1}
                                        sx={{ width: 80, height: 80, }}
                                    />
                                    <Typography variant='brand' theme={theme}>
                                        SOHIDUL
                                    </Typography>

                                </Stack>
                            </Typography>
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                {navItems.map((item) => (
                                    <Button key={item} sx={{ color: '#000' }}>
                                        {item}
                                    </Button>
                                ))}
                            </Box>
                        </ThemeProvider>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Container maxWidth="xl">
                    <Box component="main" sx={{ py: 10 }}  >
                        <Toolbar />
                        <Home />
                        <Divider sx={{ my: 8 }} variant="middle" />
                        <Features />
                        <Divider sx={{ my: 8 }} variant="middle" />
                        <Portfolio />
                    </Box>
                </Container>
            </Box>
        </ThemeProvider >

    );
}


export default Navigation