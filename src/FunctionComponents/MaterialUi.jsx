import React from 'react'
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
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';



const pages = ['Home', 'About', 'Shop', 'Contact'];
const settings = ['Profile', 'Cart', 'Wishlist', 'Logout'];
var items = [
    {
        pic: "assets/images/banner1.jpg"
    },
    {
        pic: "assets/images/banner2.jpg"
    },
    {
        pic: "assets/images/banner3.jpg"
    },
    {
        pic: "assets/images/banner1.jpg"
    },
    {
        pic: "assets/images/banner2.jpg"
    },
    {
        pic: "assets/images/banner3.jpg"
    },
    {
        pic: "assets/images/banner1.jpg"
    },
    {
        pic: "assets/images/banner2.jpg"
    },
    {
        pic: "assets/images/banner3.jpg"
    },
    {
        pic: "assets/images/banner1.jpg"
    },
]
function Item(props) {
    return (
        <Paper>
            <img src={props.item.pic} className="w-100" alt="" height="300px" />


        </Paper>
    )
}


export default function MaterialUi() {
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
        <>
            <AppBar position="static" className='bg-dark'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
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
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
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
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="assets/images/banner1.jpg" />
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
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Carousel>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
            <h5 className='bg-primary background text-light text-center p-2'>Latest Product Section</h5>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} xl={2} lg={3} ms={4} sm={6} xs={12}>
                    <Card sx={{ maxWidth: "100%" }} className="mt-3">
                        <CardMedia
                            sx={{ height: 200 }}
                            image="assets/images/banner1.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Product Title 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Price :&#8377;<del>7800</del><sup>6500</sup>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" className='bg-primary background text-light text-center p-2 w-100'>Add To Cart</Button>

                        </CardActions>
                    </Card>
                </Grid>
                <Grid container spacing={2} xl={2} lg={3} ms={4} sm={6} xs={12}>
                    <Card sx={{ maxWidth: "100%" }} className="mt-3">
                        <CardMedia
                            sx={{ height: 200 }}
                            image="assets/images/banner1.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Product Title 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Price :&#8377;<del>7800</del><sup>6500</sup>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" className='bg-primary background text-light text-center p-2 w-100'>Add To Cart</Button>

                        </CardActions>
                    </Card>
                </Grid>
                <Grid>
                    <Grid container spacing={2} xl={2} lg={3} ms={4} sm={6} xs={12}>
                        <Card sx={{ maxWidth: "100%" }} className="mt-3">
                            <CardMedia
                                sx={{ height: 200 }}
                                image="assets/images/banner1.jpg"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Product Title 1
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Price :&#8377;<del>7800</del><sup>6500</sup>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" className='bg-primary background text-light text-center p-2 w-100'>Add To Cart</Button>

                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid container spacing={2} xl={2} lg={3} ms={4} sm={6} xs={12}>
                        <Card sx={{ maxWidth: "100%" }} className="mt-3">
                            <CardMedia
                                sx={{ height: 200 }}
                                image="assets/images/banner1.jpg"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Product Title 1
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Price :&#8377;<del>7800</del><sup>6500</sup>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" className='bg-primary background text-light text-center p-2 w-100'>Add To Cart</Button>

                            </CardActions>
                        </Card>
                    </Grid>
                </Grid><br />

                <Grid container spacing={2} xl={2} lg={3} ms={4} sm={6} xs={12}>
                    <Card sx={{ maxWidth: "100%" }} className="mt-3">
                        <CardMedia
                            sx={{ height: 200 }}
                            image="assets/images/banner1.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Product Title 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Price :&#8377;<del>7800</del><sup>6500</sup>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" className='bg-primary background text-light text-center p-2 w-100'>Add To Cart</Button>

                        </CardActions>
                    </Card>

                </Grid>
            </Box>
        </>
    )
}
