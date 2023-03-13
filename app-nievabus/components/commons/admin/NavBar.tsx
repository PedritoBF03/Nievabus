
// 
//   return (
//     <div>
//         <h2>Barra de navegacion</h2>
//     </div>
//   )
// }

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button, Link, Typography } from '@mui/material';
import NextLink from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { useUsuarios } from '@/hooks/useUsuarios';
import { AuthContext } from "@/context";
import { useContext } from "react";

export const NavBar = () => {

  const { user } =  useContext(AuthContext); 
  console.log('usuario: ', user);

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="static">
        <Toolbar>
          {/* <Image src="/DM.png" width={80} height={60}  alt="logo" /> */}
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Photos
          </Typography> */}

            <Link href='/admin' passHref component={ NextLink } sx={{ flexGrow: 1 }}>
                    <Button sx={{ color: 'white'}}>
                      Home
                    </Button>
                    {/* { user?.fullName }/{ user?.email }/{ user.roles[0] } */}
            </Link>

          {/* <Box flex={1} /> */}
          <Box component="nav" style={{color:'white'}} 
            sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1 }}>

            <Link href='/admin/viajes' component={ NextLink }>
                <Button style={{color:'white'}}>Viajes</Button>
            </Link>
            <Link href='/admin/autobuses' component={ NextLink }>
                <Button style={{color:'white'}}>Autobuses</Button>
            </Link>
            <Link href='/admin/empleados' component={ NextLink }>
                <Button style={{color:'white'}}>Empleados</Button>
            </Link>
            <Link href='/admin/usuarios' component={ NextLink }>
                <Button style={{color:'white'}}>Usuarios</Button>
            </Link>
            <Link href='/admin/clientes' component={ NextLink }>
                <Button style={{color:'white'}}>Clientes</Button>
            </Link>
          </Box>

          <Typography>User: { user?.fullName }</Typography>
          <Link href='/' passHref component={ NextLink } sx={{ flexGrow: 1 }}>
                    <Button sx={{ color: 'white'}}>
                      <LogoutIcon />
                    </Button>
                    {/* { user?.fullName }/{ user?.email }/{ user.roles[0] } */}
            </Link>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
