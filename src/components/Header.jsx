import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Input } from '@mui/material';

export default function Header({ addPair, setNewContractSize, setNewPair }) {
  return (
    <AppBar component="nav" position="fixed" sx={{ backgroundColor: 'white' }}>
      <Toolbar>
          <Box display={'flex'}>
              <Typography color='black' variant="h6" sx={{ mr: 4 }}>
                  Sizer
              </Typography>
              <form onSubmit={() => addPair()}>
                <Input disabled sx={{ mr: 2 }} placeholder='Pair name' onChange={(e) => setNewPair(e.target.value)} />
                <Input disabled placeholder='Contract size' onChange={(e) => setNewContractSize(e.target.value)} />
                <Button disabled type='submit'>Add</Button>
              </form>
          </Box>
      </Toolbar>
    </AppBar>
  );
}