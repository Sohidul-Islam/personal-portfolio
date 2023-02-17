import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styled from 'styled-components'
import TimeLine from '../Timeline/TimeLine'

const Interveiw = () => {

    const EducationInfo = [
        {
            title: "BSc & Computer Science & Engineering",
            subtitle: "Port City International University (2019-2023)",
            badge: "3.92/4",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem alias doloribus minima beatae eaque possimus aperiam nulla qui debitis! Deserunt voluptatum odit a aliquid tempora beatae repellat pariatur natus quia."
        },
        {
            title: "Higher Secondary School Certificates",
            subtitle: "Moulavi Samsul Karim College (2016-2018)",
            badge: "2.92/5",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem alias doloribus minima beatae eaque possimus aperiam nulla qui debitis! Deserunt voluptatum odit a aliquid tempora beatae repellat pariatur natus quia."
        },
        {
            title: "Secondary School Certificates",
            subtitle: "Moulavi Samsul Karim College",
            badge: "4.67/5",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem alias doloribus minima beatae eaque possimus aperiam nulla qui debitis! Deserunt voluptatum odit a aliquid tempora beatae repellat pariatur natus quia."
        },
    ]
    const JobExp = [
        {
            title: "Self employed",
            subtitle: "I am a fresher in job experience",
            badge: "free",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem alias doloribus minima beatae eaque possimus aperiam nulla qui debitis! Deserunt voluptatum odit a aliquid tempora beatae repellat pariatur natus quia."
        }
    ]
    const Text1 = styled(Typography)`
    font-size: 18px !important;
    color: #000;
    font-weight: 400 !important;
    font-family: "Poppins", sans-serif;
    `
    const Text2 = styled(Typography)`
    font-size: 36px !important;
    color: #000;
    font-weight: 800 !important;
    font-family: "Montserrat", sans-serif;
    `
    const TextBox = styled(Box)`
    margin: 40px 0px;
    `
    return (
        <Box sx={{ my: 4 }}>
            <Grid container spacing={8} columns={{ xs: 4, sm: 8, md: 12, xl: 12 }} >
                <Grid item xs={4} sm={4} md={6} xl={6} >
                    <TextBox>
                        <Text1>2016-2023</Text1>
                        <Text2>Education</Text2>
                    </TextBox>

                    <TimeLine data={EducationInfo}></TimeLine>
                </Grid>
                <Grid item xs={4} sm={4} md={6} xl={6} >
                    <TextBox>
                        <Text1>2023-present</Text1>
                        <Text2>Job Description</Text2>
                    </TextBox>

                    <TimeLine data={JobExp}></TimeLine>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Interveiw;