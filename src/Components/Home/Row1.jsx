import { Paper, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import Card from './Card'
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Data1 = [
    {
        "id": "java",
        "label": "java",
        "value": 382,
        "color": "hsl(120, 70%, 50%)"
    },
    {
        "id": "scala",
        "label": "scala",
        "value": 504,
        "color": "hsl(326, 70%, 50%)"
    }]
const Data2 = [
    {
        "id": "css",
        "label": "css",
        "value": 429,
        "color": "hsl(49, 70%, 50%)"
    },
    {
        "id": "sass",
        "label": "sass",
        "value": 504,
        "color": "hsl(348, 70%, 50%)"
    }
]

const Data3 = [
    {
        "id": "php",
        "label": "php",
        "value": 118,
        "color": "hsl(126, 70%, 50%)"
    },
    {
        "id": "sass",
        "label": "sass",
        "value": 504,
        "color": "hsl(348, 70%, 50%)"
    }
]


export default function Row1() {
    const theme = useTheme();
    return <>

        <Stack direction={'row'} flexWrap={'wrap'} gap={'10px'} sx={{ marginLeft: '80px', mr: '20px', justifyContent: { xs: 'center', md: 'space-between' } }}>
            <Card scheme={'nivo'} icon={<EmailIcon sx={{ fontSize: '25px', color: theme.palette.secondary.main }} />} title={21.861} subTitle={'Emails Sent'} Data={Data1} increase={'+14%'} />
            <Card scheme={'category10'} icon={<PointOfSaleIcon sx={{ fontSize: '25px', color: theme.palette.secondary.main }} />} title={431.225} subTitle={'Salas Obtained'} Data={Data2} increase={'+21%'} />
            <Card scheme={'accent'} icon={<PersonAddIcon sx={{ fontSize: '25px', color: theme.palette.secondary.main }} />} title={32.441} subTitle={'New Clients'} Data={Data3} increase={'+5%'} />


        </Stack>


    </>
}
