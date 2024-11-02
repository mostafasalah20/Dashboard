import { backdropClasses, Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { rows } from './Data'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import GroupIcon from '@mui/icons-material/Group';
import EditIcon from '@mui/icons-material/Edit';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';





export default function ManageTeam() {

    const theme = useTheme()
    const styles = {
        '.header-cell': {
            fontSize: '1.2rem',
            fontWeight: 'bold',
            textAlign: 'center',
        }
    };
    const columns = [
        { field: 'col1', headerName: 'id', headerAlign: 'center', align: 'center' ,headerClassName: 'large-header'},
        { field: 'col2', headerName: 'Name', headerAlign: 'center', align: 'center' ,headerClassName: 'large-header' },
        { field: 'col3', headerName: 'Email', flex: 1, headerAlign: 'center', align: 'center' ,headerClassName: 'large-header' },
        { field: 'col4', headerName: 'age', flex: 1, headerAlign: 'center', align: 'center' ,headerClassName: 'large-header' },
        { field: 'col5', headerName: 'phone', flex: 1, headerAlign: 'center', align: 'center' ,headerClassName: 'large-header' },
        {
            field: 'Access', 
            headerName: 'Access', 
            renderCell: ({ row }) => {
                let bgColor = '';
                let accessText = '';
                let IconComponent;
    
                
                switch (row.col6) {
                    case 'Admin':
                        bgColor = theme.palette.primary.dark;
                        accessText = 'Admin';
                        IconComponent = AdminPanelSettingsIcon;
                        break;
                    case 'User':
                        bgColor = theme.palette.secondary.main;
                        accessText = 'User';
                        IconComponent = GroupIcon;
                        break;
                    case 'Editor':
                        bgColor = "#3da58a";
                        accessText = 'Editor';
                        IconComponent = EditIcon;
                        break;
                    default:
                        bgColor = "#3da58a";
                        accessText = 'Unknown';
                        IconComponent = HelpOutlineIcon;
                }
    
                const Icon = IconComponent; 
    
                return (
                    <Box sx={{ backgroundColor: bgColor, p: 1, borderRadius: 1, display: 'flex', alignItems: 'center'}}>
                        <Icon sx={{ color: 'white', mr: 1 }} /> 
                        <Typography sx={{ color: 'white',styles }}>{accessText}</Typography>
                    </Box>
                );
            }, 
            flex: 1, 
            headerAlign: 'center', 
            align: 'center'
        },
    ];
    
    return <>



        <Box component="main" sx={{ mt: 10, ml: 12 }}>
            <Typography sx={{fontSize:30,fontWeight:700,color:theme.palette.primary.main}} >TEAM</Typography>
            <Typography>Managing the Team Members</Typography>
        </Box>
        <Box sx={{
            width: { xs: '90%', md: '100%' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 2,
            fontSize: '1.2rem',
            fontWeight: 'bold',
            
        }}>
            <Box
                sx={{
                    width: { xs: '90%', md: '80%' },
                    marginLeft: { xs: '35px', md: '70px'},
                }}
            >
                <DataGrid rows={rows} columns={columns} />
            </Box>
        </Box>

    </>
}
