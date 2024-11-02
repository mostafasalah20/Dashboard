import { Box, Paper, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import { ResponsivePie } from '@nivo/pie'

export default function Card({ icon, title, subTitle, Data, increase,scheme }) {
    const theme=useTheme()
    return <>

        <Paper sx={{ minWidth: '333px', p: 1.5, display: 'flex', justifyContent: 'space-between', flexGrow: 1 }}>
            <Stack direction={'column'} gap={1}>
                {icon}
                <Typography>{title}</Typography>
                <Typography>{subTitle}</Typography>
            </Stack>
            <Stack direction={'column'} alignItems={'center'}>
                <Box height={'70px'} width={'70px'}>
                    <ResponsivePie
                        data={Data}
                        margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
                        innerRadius={0.7}
                        padAngle={0.7}
                        colors={{ scheme: scheme }}
                        cornerRadius={3}
                        activeOuterRadiusOffset={8}
                        borderWidth={1}
                        enableArcLinkLabels={false}
                        borderColor={{
                            from: 'color',
                            modifiers: [
                                [
                                    'darker',
                                    0.2
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
                       
                        
                        fill={[
                            {
                                match: {
                                    id: 'ruby'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'c'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'go'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'python'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'scala'
                                },
                                id: 'lines'
                            },
                            {
                                match: {
                                    id: 'lisp'
                                },
                                id: 'lines'
                            },
                            {
                                match: {
                                    id: 'elixir'
                                },
                                id: 'lines'
                            },
                            {
                                match: {
                                    id: 'javascript'
                                },
                                id: 'lines'
                            }
                        ]}

                    />

                </Box>
                <Typography>{increase}</Typography>
            </Stack>
        </Paper>


    </>
}
