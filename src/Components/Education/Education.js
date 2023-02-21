import { AddBox } from '@mui/icons-material'
import { Grid, Grow, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styled from 'styled-components'
import TimeLine from '../Timeline/TimeLine'

const Education = () => {

    const EducationInfo = [
        {
            title: "BSc & Computer Science & Engineering",
            subtitle: "Port City International University (2019-2023)",
            badge: "3.92/4",
            desc: "Port City International University's BSc program offers a dynamic education with state-of-the-art facilities, experienced faculty, and diverse extracurriculars, preparing students to excel in their chosen fields and become community leaders."
        },
        {
            title: "Higher Secondary School Certificates",
            subtitle: "Moulavi Samsul Karim College (2016-2018)",
            badge: "2.92/5",
            desc: "Obtained Higher Secondary School Certificate from Moulavi Samsul Karim College. Fostered academic excellence & personal growth, gained valuable skills & extracurricular experience."
        },
        {
            title: "Secondary School Certificates",
            subtitle: "Chhagalnaiya Academy (2016)",
            badge: "4.67/5",
            desc: "At Chhagalnaiya Academy, SSC is a major academic milestone. We train students rigorously, offer a conducive learning environment, personalized attention & assessments to track academic performance."
        },
    ]
    const JobExp = [
        {
            title: "Self employed",
            subtitle: "I am a fresher in job experience",
            badge: "Seeking a job",
            desc: "Recent graduate seeking an entry-level position to apply academic knowledge and gain hands-on experience in the field. Diligent and eager to learn."
        }
    ]
    const Text1 = styled(Typography)`
    font-size: 18px !important;
    color: #ff014f;
    font-weight: 400 !important;
    font-family: "Poppins", sans-serif !important;
    `
    const Text2 = styled(Typography)`
    font-size: 32px !important;
    color: #000;
    font-weight: 800 !important;
    font-family: "Montserrat", sans-serif !important;
    `
    const TextBox = styled(Box)`
    margin: 40px 0px;
    `

    return (
        <Grow
            in={!false}
            style={{ transformOrigin: '0 0 0' }}
            {...(!false ? { timeout: 1000 } : {})}
        >
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
        </Grow>

    )
}
export default Education; 