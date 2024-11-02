import { Box ,Button,Typography, useTheme} from '@mui/material'
import React from 'react'
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import { DownloadDoneOutlined } from '@mui/icons-material';

export default function Home() {
    const theme= useTheme();
    return <>
       <Box component="main" sx={{ mt: 10, ml: '100px', px: 2 }}>
        <Typography 
          sx={{ fontSize: 30, fontWeight: 700, color: theme.palette.primary.main }}
        >
          DashBoard
        </Typography>
        <Typography color="textSecondary">
          Welcome to your DashBoard
        </Typography>
      </Box >
      <Box sx={{ display:'flex',justifyContent:'end',mr:5}}>
        <Button variant='contained' color='primary' sx={{padding:"6px 8px",textTransform:'capitalize'}} >
            <DownloadDoneOutlined/>
            Download Reports
        </Button>
        </Box>
      <Row1/>
      <Row2/>
      <Row3/>


    </>
}
