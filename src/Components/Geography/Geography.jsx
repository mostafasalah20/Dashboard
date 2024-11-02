import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import { DataGeography } from './Data.jsx';
import { GeoData } from './world_countries.jsx';






export default function GeographyChart() {
  const theme = useTheme();

  return (
    <>
      <Box component="main" sx={{ mt: 8, px: 2, textAlign: 'center' }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, color: theme.palette.primary.main }}
        >
          Lina Chart
        </Typography>
        <Typography color="textSecondary">
          Average salaries of programmers in five Arab countries
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, height: '100vh' }}>
        <Box
          sx={{
            width: '100%',
            height: '85vh',
          }}
        >
          <ResponsiveChoropleth
            data={DataGeography}
            features={GeoData.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors="nivo"
            domain={[0, 1000000]}
            unknownColor={theme.palette.mode === 'dark' ? '#333333' : '#666666'}
            label="properties.name"
            valueFormat=".2s"
            projectionScale={130} 
            projectionTranslation={[0.5, 0.5]} 
            projectionRotation={[0, 0, 0]}
            enableGraticule={false}
            borderWidth={0.5}
            borderColor={{ from: 'color', modifiers: [['darker', 1.5]] }}
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
            legends={[
              {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 120,
                translateY: -20,
                itemsSpacing: 0,
                itemWidth: 80,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: theme.palette.text.secondary,
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: theme.palette.text.primary,
                      itemOpacity: 1,
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












// import { ResponsiveChoropleth } from '@nivo/geo';
// import { DataGeography } from './Data.jsx';
// import { GeoData } from './world_countries.jsx';

//  <ResponsiveChoropleth
//             data={DataGeography}
//             features={GeoData.features}
//             margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
//             colors="nivo"
//             domain={[0, 1000000]}
//             unknownColor={theme.palette.mode === 'dark' ? '#333333' : '#666666'}
//             label="properties.name"
//             valueFormat=".2s"
//             projectionScale={130} 
//             projectionTranslation={[0.5, 0.5]} 
//             projectionRotation={[0, 0, 0]}
//             enableGraticule={false}
//             borderWidth={0.5}
//             borderColor={{ from: 'color', modifiers: [['darker', 1.5]] }}
//             theme={{
//               axis: {
//                 ticks: {
//                   text: {
//                     fill: theme.palette.text.primary,
//                     fontSize: 12,
//                   },
//                 },
//                 legend: {
//                   text: {
//                     fill: theme.palette.text.primary,
//                   },
//                 },
//               },
//               grid: {
//                 line: {
//                   stroke: theme.palette.divider,
//                   strokeWidth: 1,
//                 },
//               },
//               tooltip: {
//                 container: {
//                   background: theme.palette.background.paper,
//                   color: theme.palette.text.primary,
//                 },
//               },
//             }}
//             legends={[
//               {
//                 anchor: 'bottom-left',
//                 direction: 'column',
//                 justify: true,
//                 translateX: 120,
//                 translateY: -20,
//                 itemsSpacing: 0,
//                 itemWidth: 80,
//                 itemHeight: 18,
//                 itemDirection: 'left-to-right',
//                 itemTextColor: theme.palette.text.secondary,
//                 itemOpacity: 0.85,
//                 symbolSize: 18,
//                 effects: [
//                   {
//                     on: 'hover',
//                     style: {
//                       itemTextColor: theme.palette.text.primary,
//                       itemOpacity: 1,
//                     },
//                   },
//                 ],
//               },
//             ]}
//            /> 
