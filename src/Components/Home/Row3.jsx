import { Box, Paper, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { Data } from '../Pie/Data'
import { ResponsiveBar } from '@nivo/bar'
import { DataBar } from '../Bar/Data'
import { ResponsiveChoropleth } from '@nivo/geo'
import { DataGeography } from '../Geography/Data'
import { GeoData } from '../Geography/world_countries'


export default function Row3() {
  const theme = useTheme()
  return <>

    <Stack
      direction="row"
      marginLeft={{ xs: '60px', md: '70px' }}
      marginRight={{ xs: '10px', md: '5px' }}
      sx={{ mt: '30px' }}
      justifyContent={'space-between'}
      flexWrap={'wrap'}
      gap={{ xs: '10px', md: '0px' }}
    >
      <Paper
        sx={{
          width: { xs: '100%', md: '32%' },
          height: '400px'
        }}
      >
        <Typography color={theme.palette.secondary.main} fontWeight="bold" variant="h6">
          Campaign
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '300px',
            width: '300px',
          }}
        >

          <ResponsivePie
            data={Data}
            margin={{ top: 40, right: 10, bottom: 10, left: 40 }}
            innerRadius={0.6}
            cornerRadius={1}
            activeOuterRadiusOffset={9}
            borderWidth={1}
            borderColor={{
              from: 'color',
              modifiers: [
                [
                  'darker',
                  0.2
                ]
              ]
            }}
            enableArcLinkLabels={false}
            arcLinkLabelsSkipAngle={13}
            arcLinkLabelsTextOffset={8}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: 'color',
              modifiers: [
                [
                  'darker',
                  '2'
                ]
              ]
            }}
            theme={{
              tooltip: {
                container: {
                  background: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                },
              },


            }}
            defs={[
              {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
              },
              {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
              }
            ]}
          />



        </Box>

        <Typography textAlign={'center'} fontWeight="bold" variant="h6">
          $48.352 revenue generated
        </Typography>
        <Typography textAlign={'center'} fontWeight="bold" variant="h6">
          $48.352 revenue generated
        </Typography>

      </Paper>


      <Paper
        sx={{
          width: { xs: '100%', md: '32%' },
          height: '400px',
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          fontWeight="bold"
          variant="h6"
          sx={{ mb: 2 }}
        >
          Sales Quantity
        </Typography>

        <Box
          sx={{
            height: '300px',
            width: '100%',
          }}
        >
          <ResponsiveBar
            data={DataBar}
            keys={['junior', 'mid', 'senior', 'lead', 'architect']}
            indexBy="country"
            margin={{ top: 20, right: 100, bottom: 30, left: 40 }}
            padding={0.5}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={theme.palette.mode === 'dark' ? { scheme: 'set2' } : { scheme: 'nivo' }}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            theme={{
              tooltip: {
                container: {
                  background: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                },
              },
            }}
            defs={[
              {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              { match: { id: 'fries' }, id: 'dots' },
              { match: { id: 'sandwich' }, id: 'lines' },
            ]}
            axisTop={null}
            axisRight={null}
            axisBottom={null}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendPosition: 'middle',
              legendOffset: -50,
            }}
            enableTotals
            totalsOffset={3}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
              from: 'color',
              modifiers: [['darker', 1.5]],
            }}
            legends={[
              {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 120,
                itemWidth: 100,
                itemHeight: 20,
                itemsSpacing: 2,
                symbolSize: 20,
              },
            ]}
          />
        </Box>
      </Paper>


      <Paper
        sx={{
          width: { xs: '100%', md: '32%' },
          height: '400px',
          display: 'flex',
          flexDirection: 'column',
        }}

      >
        <Typography color={theme.palette.secondary.main} fontWeight="bold" variant="h6">
          Geography Based Traffic
        </Typography>
        <Box
          sx={{
            height: '350px',
            width: '100%',
            marginTop:'10px'
          }}
        >

          <ResponsiveChoropleth
            data={DataGeography}
            features={GeoData.features}
            margin={{ top: 50, right: 0, bottom: 0, left: 0 }}
            colors="nivo"
            domain={[0, 1000000]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionTranslation={[0.5, 0.5]}
            projectionRotation={[0, 0, 0]}
            enableGraticule={false}
            graticuleLineColor="#dddddd"
            borderWidth={0.5}
            borderColor="#152538"
            theme={{
              tooltip: {
                container: {
                  background: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                },
              },
            }}
            defs={[
              {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
              },
              {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
              },
              {
                id: 'gradient',
                type: 'linearGradient',
                colors: [
                  {
                    offset: 0,
                    color: '#000'
                  },
                  {
                    offset: 100,
                    color: 'inherit'
                  }
                ]
              }
            ]}
            fill={[
              {
                match: {
                  id: 'CAN'
                },
                id: 'dots'
              },
              {
                match: {
                  id: 'CHN'
                },
                id: 'lines'
              },
              {
                match: {
                  id: 'ATA'
                },
                id: 'gradient'
              }
            ]}

          />



        </Box>


      </Paper>


    </Stack>


  </>
}
