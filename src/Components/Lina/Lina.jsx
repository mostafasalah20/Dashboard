import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { Data } from './Data';
import LinaChart from './LinaChart';



export default function Lina() {
  const theme = useTheme();

  return (
    <>
      <Box component="main" sx={{ mt: 10, ml: '100px', px: 2 }}>
        <Typography 
          sx={{ fontSize: 30, fontWeight: 700, color: theme.palette.primary.main }}
        >
          Lina Chart
        </Typography>
        <Typography color="textSecondary">
          Average salaries of programmers in five Arab countries
        </Typography>
      </Box>



      <LinaChart height={'80vh'} width={{ xs: '95%', md: '85%' }} left={45} right={20} />
     
    </>
  );
}
