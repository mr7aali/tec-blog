import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { AuthContext } from '../../contexts/AuthProvider';





const Header = () => {

    const { user, LogOut } = useContext(AuthContext);


    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };



    return (
        <AppBar sx={{ bgcolor: '#000' }} position="static">


            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Link to='/'>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"

                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                    </Link>

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

                            <Link to='/'>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography sx={{ margin: '0 auto' }} textAlign="center">Home</Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/addpost'>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography sx={{ margin: '0 auto' }} textAlign="center">Add Post</Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/blog'>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography sx={{ margin: '0 auto' }} textAlign="center">Blog</Typography>
                                </MenuItem>
                            </Link>

                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>


                        <Link to='/'><Button onClick={handleCloseUserMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Home</Button></Link>
                        <Link to='/dashboard'><Button onClick={handleCloseUserMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Add Post</Button></Link>
                        <Link to='/blog'><Button onClick={handleCloseUserMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Blog</Button></Link>


                    </Box>

                    {
                        user?.uid ? <>
                            <Box sx={{ flexGrow: 0 }}>

                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src={user?.photoURL} />
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

                                    <MenuItem onClick={LogOut}>
                                        <Typography textAlign="center">Logout</Typography>
                                    </MenuItem>

                                </Menu>
                            </Box>
                        </> :
                            <>

                                <Link to='/login'>
                                    <Box sx={{ flexGrow: 0 }}>

                                        <Button
                                            variant='text'

                                            endIcon={<LoginIcon sx={{ color: '#fff' }} />}
                                            sx={{
                                                padding: '7px 15px',
                                                margin: ['0', '0 15px'],

                                            }

                                            }

                                        >

                                            <Typography sx={{ display: ['none', 'block'] }} className='text-white'>Log In</Typography></Button>
                                    </Box>
                                </Link>


                                <Link to='register'>
                                    <Box sx={{ flexGrow: 0 }}>

                                        <Button
                                            variant='text'

                                            endIcon={<LogoutIcon sx={{ color: '#fff' }} />}
                                            sx={{
                                                padding: '7px 15px',


                                            }

                                            }

                                        >

                                            <Typography sx={{ display: ['none', 'block'] }} className='text-white'>Register</Typography></Button>
                                    </Box>
                                </Link>


                            </>
                    }

                </Toolbar>

            </Container>



        </AppBar>


    );
};

export default Header;