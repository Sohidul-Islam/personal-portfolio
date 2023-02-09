import React from 'react'
import styled from 'styled-components'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';

export default function Portfolio() {
    const PortfolioData = [
        {
            title: 'Business Stratagy',
            desc: 'We’ll help you optimize your business processes to maximize profitability and eliminate unnecessary costs.',

        },
        {
            title: 'App Development',
            desc: 'We’ll handle everything from to app development process until it is time to make your project live.',

        },
        {
            title: 'UX Consulting',
            desc: 'A UX consultant is responsible for many of the same tasks as a UX designer, but they typically.',

        },

    ]
    const Text1 = styled(Typography)`
        color: #ff014f;
        text-align: center;
        text-transform: uppercase;
    `
    const Text2 = styled(Typography)`
        color: #3c3e41;
        text-align: center;
        font-family: 'Montserrat', sans-serif !important;
        font-weight: 600 !important;
        font-size: 60px !important;
    `

    return (
        <Box sx={{ px: 2 }}>
            <Text1>
                VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
            </Text1>
            <Text2 variant='h1'>
                My Portfolio
            </Text2>
            <Box sx={{ pt: 3 }}>
                <Grid container spacing={8} columns={{ xs: 4, sm: 8, md: 12 }} >

                    <Grid item>
                        <h1>Gallery 1</h1>
                    </Grid>
                </Grid>


            </Box>
        </Box >
    )
}
