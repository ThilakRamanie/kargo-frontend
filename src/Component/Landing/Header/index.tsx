import * as React from 'react';
// components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Text from '../../Shared/Text';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
// icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import PathIcon from '@mui/icons-material/Timeline';
import CommunityIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
// style
import './Header.scss';
// constants
import { HeaderConstants } from '../../../Constants/constants';

const settings = [
    { name: 'Dashboard', icon: <DashboardIcon /> },
    { name: 'Paths', icon: <PathIcon /> },
    { name: 'Community', icon: <CommunityIcon /> },
    { name: 'Settings', icon: <SettingsIcon /> },
];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" className='header'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Text
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 8,
                            ml: 4,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'poppins',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        className='title'
                    >
                        {HeaderConstants.title}
                    </Text>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {HeaderConstants.pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Text textAlign="center" sx={{ textTransform: 'none' }} className='menu-item'>{page}</Text>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Text
                        variant="h5"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none'
                        }}
                        className='title'
                    >
                        {HeaderConstants.title}
                    </Text>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2, ml: 6 }}>
                        {HeaderConstants.pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                className='menu-item'
                                sx={{ my: 2, color: 'white', display: 'block', pl: 2, pr: 2, textTransform: 'none' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Profile">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar sx={{ mr: 2, bgcolor: '#fff', color: '#022cda' }} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <Box sx={{ position: 'relative', p: 2, width: '14rem' }}>
                                <IconButton
                                    onClick={handleCloseUserMenu}
                                    sx={{ position: 'absolute', top: 8, right: 8 }}
                                >
                                    <CloseIcon />
                                </IconButton>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                    <Avatar sx={{ mb: 2 }}></Avatar>
                                    <Box sx={{ marginTop: '0rem' }}>
                                        <Text variant="h6">{HeaderConstants.menu.name}</Text>
                                        <Text variant="body2" color="textSecondary">{HeaderConstants.menu.email}</Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Divider />
                            {settings.map((setting) => (
                                <MenuItem key={setting.name} onClick={handleCloseUserMenu} className='profile-menu'>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        {setting.icon}
                                        <Text className='profile-menu-text' textAlign="center" sx={{ ml: 2 }}>{setting.name}</Text>
                                    </Box>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
