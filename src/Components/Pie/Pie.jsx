import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { Data } from './Data';



export default function Pie() {
  const theme = useTheme();
  const textColor = theme.palette.mode === 'dark' ? '#ffffff' : '#333333';
  const isResponsive = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box component="main" sx={{ mt: 10, ml: '100px' }}>
        <Typography sx={{ fontSize: 30, fontWeight: 700, color: theme.palette.primary.main }}>
          Pie Chart
        </Typography>
        <Typography sx={{ color: textColor }}>
          Average salaries of programmers in five Arab countries
        </Typography>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'flex' }, justifyContent: 'center' }}>
        <Box
          component="main"
          sx={{
            mt: 5,
            ml: '20px',
            height: '80vh',
            width: { xs: '100%', md: '80%' },
            padding: { xs: '100px', md: '0' },
          }}
        >
          <ResponsivePie
            data={Data}
            margin={{ top: 0, right: 0, bottom: 200, left: 0 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            colors={theme.palette.mode === 'dark' ? { scheme: 'set2' } : { scheme: 'nivo' }}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]]
            }}

            theme={{
              axis: {
                ticks: {
                  text: {
                    fill: theme.palette.text.primary,
                    fontSize: 12,
                  },
                },
                legend: {
                  text: {
                    fill: theme.palette.text.primary,
                  },
                },
              },
              grid: {
                line: {
                  stroke: theme.palette.divider,
                  strokeWidth: 1,
                },
              },
              tooltip: {
                container: {
                  background: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                },
              },
            }}



            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor={textColor}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: 'color',
              modifiers: [['darker', 2]],
            }}
            defs={[
              {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              { match: { id: 'Egypt Junior' }, id: 'dots' },
              { match: { id: 'Saudi Mid' }, id: 'dots' },
            ]}
            legends={[
              {
                anchor: 'bottom',
                direction: isResponsive ? 'column' : 'row',
                justify: false,
                translateX: 0,
                translateY: isResponsive ? 200 : 56,
                itemsSpacing: 0,
                itemWidth: isResponsive ? 60 : 100,
                itemHeight: 18,
                itemTextColor: textColor,
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: theme.palette.mode === 'dark' ? '#000000' : theme.palette.secondary.main,
                    },
                  },
                ],
              },
            ]}
          />
        </Box>
      </Box>
    </>
  );
}
