import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from '@mui/material';
import NextLink from 'next/link';
import { Style } from '@mui/icons-material';

export const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ display: { xs: 'none', sm: 'flex'}, flexGrow: 1 }}
          >
            <Typography variant="overline" component="div" sx={{ flexGrow: 1 }}>
                Página con derechos de autor reservados por Nievabus©
          </Typography>
          </Box>

          <Box>
            <Link href='https://www.instagram.com/pedrobf03/' component={ NextLink }>
                <Button style={{color:'white'}}><InstagramIcon /></Button>
            </Link>
            <Link href='https://www.facebook.com/profile.php?id=100024213947212' component={ NextLink }>
                <Button style={{color:'white'}}><FacebookIcon /></Button>
            </Link>

          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
