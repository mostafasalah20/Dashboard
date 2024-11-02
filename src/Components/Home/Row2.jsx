import { Box, Button, Paper, Stack, Typography, useTheme } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import React from 'react';
import { Data, Transfers } from '../Lina/Data';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default function Row2() {
  const theme = useTheme();

  return (
    <Stack direction="row" flexWrap="wrap" gap={0} sx={{ marginLeft: { xs: '50px', md: '70px' }, mr: '15px',my:'30px' }}>
    
      <Paper
        sx={{
          border: '2px solid',
          borderColor: theme.palette.divider,
          height: { xs: '450px', md: '450px' },
          width: { xs: '100%', md: '60%' },
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          bgcolor: theme.palette.background.default,
        }}
      >
        <Stack flexDirection="row" justifyContent="space-between" alignItems="center" p={2}>
          <Box>
            <Typography color={theme.palette.secondary.main} fontWeight="bold" variant="h6">
              Revenue Generated
            </Typography>
            <Typography color={theme.palette.secondary.main} fontWeight="bold" variant="h6">
              $59,352.29
            </Typography>
          </Box>
          <Button
            sx={{
              color: theme.palette.text.primary,
              textTransform: 'capitalize',
              width: '40px',
              height: '50px',
            }}
          >
            <FileDownloadIcon />
          </Button>
        </Stack>
        <Box sx={{ flexGrow: 1, height: { xs: '250px', md: '300px' }, padding: 2 }}>
          <ResponsiveLine
            data={Data}
            margin={{ top: 10, right: 10, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendOffset: 36,
              legendPosition: 'middle',
            }}
            theme={{
              axis: {
                ticks: {
                  text: {
                    fill: theme.palette.text.primary,
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
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendOffset: -40,
              legendPosition: 'middle',
            }}
            colors={theme.palette.mode === 'dark' ? { scheme: 'dark2' } : { scheme: 'set2' }}
            pointSize={8}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="data.yFormatted"
            pointLabelYOffset={-12}
            enableTouchCrosshair
            useMesh
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 50,
                translateX: 40,
                itemWidth: 90,
                itemHeight: 20,
                itemTextColor: theme.palette.text.primary,
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        </Box>
      </Paper>

     
      <Paper
        sx={{
          height: { xs: '450px', md: '450px' },
          width: { xs: '100%', md: '35%' },
          marginLeft:{xs: '0px', md: '0'},
          overflowY: 'auto',
          p: 2,
          bgcolor: theme.palette.background.paper,
          boxShadow: 3,
        }}
      >
        <Typography sx={{ textAlign: 'center' }} color={theme.palette.secondary.main} fontWeight="bold" variant="h6">
          Recent Transactions
        </Typography>
        {Transfers.map((item) => (
          <Paper
            key={item.TextId}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 1,
              mt: 1,
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Box>
              <Typography color={theme.palette.text.primary} fontWeight="bold">
                {item.User}
              </Typography>
              <Typography color="textSecondary" variant="caption">
                {item.TextId}
              </Typography>
            </Box>
            <Typography color="textSecondary">{item.Date}</Typography>
            <Button variant="contained" color="error" sx={{ padding: '6px 8px', textTransform: 'capitalize' }}>
              ${item.cost}
            </Button>
          </Paper>
        ))}
      </Paper>
    </Stack>
  );
}
