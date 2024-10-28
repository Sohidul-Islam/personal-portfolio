import React from 'react'
import styled from 'styled-components'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import ecommerceImg from '../../images/moc/emajohn.png';
import doctorsPortal from '../../images/moc/doctors portal.png';
import weatherLive from '../../images/moc/weather.png';
import bookArchieve from '../../images/moc/book.png';
import calculator from '../../images/moc/calculator.png';
import kadritech from '../../images/moc/kadritech.png';
import kadrimedtech from '../../images/moc/kadrimedtech.png';
import reactScrollPagify from '../../images/moc/react-scroll-pagify-logo.png';

export default function Portfolio() {
    const PortfolioData = [
        {
            title: 'React scroll pagify',
            image: reactScrollPagify,
            live: "https://www.npmjs.com/package/react-scroll-pagify",
            files: "https://github.com/Sohidul-Islam/react-scrollify"
        },
        {
            title: 'Official Site for KadriTechAB',
            image: kadritech,
            live: "https://kadritech.se/",
            files: "https://kadritech.se/"
        },
        {
            title: 'Official Site for KadriMedTech',
            image: kadrimedtech,
            live: "https://med.kadritech.se/",
            files: "https://med.kadritech.se/"
        },
        {
            title: 'E Commerce Site',
            image: ecommerceImg,
            live: "https://ema-john-shop-2022.firebaseapp.com/",
            files: "https://github.com/Sohidul-Islam/ecommerce-clientsite"
        },
        {
            title: 'Doctors Portal',
            image: doctorsPortal,
            live: "https://doctors-portal-7a86b.web.app",
            files: "https://github.com/Sohidul-Islam/doctorsPortal"
        },
        {
            title: 'Weather Live',
            image: weatherLive,
            live: "https://sohidul-islam.github.io/weatherlive",
            files: "https://github.com/Sohidul-Islam/weatherlive"
        },
        {
            title: 'Book archieve page',
            image: bookArchieve,
            live: "https://sohidul-islam.github.io/booklibrary",
            files: "https://github.com/Sohidul-Islam/booklibrary"
        },
        {
            title: 'Calculator',
            image: calculator,
            live: "https://sohidul-islam.github.io/calculator",
            files: "https://github.com/Sohidul-Islam/calculator"
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
    
    @media (max-width: 600px) {
        font-weight: 600 !important;
        font-size: 32px !important;
    }
    `
    return (
        <Box sx={{ px: 2 }} id="portfolio" >
            <Text1>
                VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
            </Text1>
            <Text2 variant='h1'>
                My Portfolio
            </Text2>
            <Box sx={{ pt: 3 }}>
                <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12, xl: 12 }} >
                    {
                        PortfolioData.map((portfolio, index) =>
                            <Grid item xs={4} sm={4} md={6} xl={4} key={index}>
                                <PortfolioCard data={portfolio} />
                            </Grid>
                        )
                    }
                </Grid>
            </Box>
        </Box >
    )
}
