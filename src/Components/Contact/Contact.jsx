import React from 'react';
import { Box, Toolbar, Typography, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { columns, rows } from './Data';

export default function Contact() {
    const theme = useTheme();

    return (
        <>
            <Box component="main" sx={{ mt: 10, ml: 12 }}>
                <Typography sx={{ fontSize: 30, fontWeight: 700, color: theme.palette.primary.main }}>
                    Contact
                </Typography>
                <Typography>list of contacts for future reference</Typography>
            </Box>
            <Box
                sx={{
                    width: { xs: '90%', md: '100%' },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 2,
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                }}
            >
                <Box
                    sx={{
                        width: { xs: '90%', md: '80%' },
                        marginLeft: { xs: '35px', md: '70px' },
                    }}
                >
                    <DataGrid
                        slots={{ toolbar: GridToolbar }}
                        rows={rows}
                        columns={columns}
                        sx={{
                            '& .MuiDataGrid-columnHeader': {
                                fontSize: '1rem',
                                fontWeight: 'bold',
                            },
                            '& .MuiDataGrid-cell': {
                                fontSize: '1rem',
                            },
                        }}
                    />
                </Box>
            </Box>
        </>
    );
}
