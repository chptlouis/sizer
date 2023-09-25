import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <AppBar component="nav" position="fixed" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
          <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ my: 2, mx: 2 }}>
                  Sizer
              </Typography>
          </Box>
      </Toolbar>
    </AppBar>
  );
}