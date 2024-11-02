import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { Data } from './Data';

export default function LinaChart({height,width,right,left}) {
  const theme = useTheme();
    return <>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Box
                component="main"
                sx={{
                    width:width,
                    height: height ,
                    marginLeft: { xs: '100px', md: '0px' },
                }}
            >
                <ResponsiveLine
                    data={Data}
                    margin={{ top: 10, right: right, bottom: 50, left: left }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true }}
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
                    colors={theme.palette.mode === 'dark' ? { scheme: 'dark2' } : { scheme: 'set2' }}
                    pointSize={8}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    useMesh={true}
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
        </Box>


    </>
}
