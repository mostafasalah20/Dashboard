import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { DataBar } from './Data';

export default function Bar() {
  const theme = useTheme();

  return (
    <>
      <Box component="main" sx={{ mt: 10, ml: 12 }}>
        <Typography sx={{ fontSize: 30, fontWeight: 700, color: theme.palette.primary.main }}>
          Bar Chart
        </Typography>
        <Typography>Average salaries of programmers in five Arab countries</Typography>
      </Box>

      <Box component="main" sx={{ marginLeft: { xs: 7, md: 8 }, height: '80vh' }}>
        <ResponsiveBar
          data={DataBar}
          keys={['junior', 'mid', 'senior', 'lead', 'architect']}
          indexBy="country"
          margin={{ top: 30, right: 100, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={theme.palette.mode === 'dark' ? { scheme: 'set2' } : { scheme: 'nivo' }}
          borderColor={{
            from: 'color',
            modifiers: [['darker', 1.6]]
            
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32,
          }}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              translateX: 120,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemOpacity: 1,
                    itemBackgroundColor: theme.palette.background.default,
                    color: theme.palette.secondary.main
                  }
                }
              ]
            }
          ]}
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={(e) => `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`}
          theme={{
            tooltip: {
              container: {
                background: theme.palette.background.default,
                color: theme.palette.text.primary
              }
            }
          }}
        />
      </Box>
    </>
  );
}
