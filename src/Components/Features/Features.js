import React from 'react'
import styled from 'styled-components'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import Card from '../FeatureCard/Card';
// icons
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';

export default function Features() {

    const featureData = [
        {
            title: 'Business Stratagy',
            desc: 'We’ll help you optimize your business processes to maximize profitability and eliminate unnecessary costs.',
            icon: <WorkOutlineIcon sx={{ fontSize: "60px" }} />,
        },
        {
            title: 'App Development',
            desc: 'We’ll handle everything from to app development process until it is time to make your project live.',
            icon: <AppRegistrationIcon sx={{ fontSize: "60px" }} />,
        },
        {
            title: 'UX Consulting',
            desc: 'A UX consultant is responsible for many of the same tasks as a UX designer, but they typically.',
            icon: <ViewQuiltIcon sx={{ fontSize: "60px" }} />,
        },

    ]
    const Text1 = styled(Typography)`
        color: #ff014f;
        text-transform: uppercase;
    `
    const Text2 = styled(Typography)`
        color: #3c3e41;
        font-family: 'Montserrat', sans-serif !important;
        font-weight: 600 !important;
        font-size: 60px !important;
    `
    return (
        <Box sx={{ px: 2 }} id="features">
            <Text1>
                Features
            </Text1>
            <Text2 variant='h1'>
                What I Do
            </Text2>
            <Box sx={{ pt: 3 }}>
                <Grid container spacing={8} columns={{ xs: 4, sm: 8, md: 12, xl: 12 }} >

                    {
                        featureData.map((feature, index) => <Grid item xs={4} sm={4} md={6} xl={4} ><Card keys={index} feature={feature} /></Grid>)
                    }
                </Grid>


            </Box>
        </Box >
    )
}
