import React from 'react'
import { Grid, Grow, Typography } from '@mui/material'
import { Box } from '@mui/system'
import TimeLine from '../Timeline/TimeLine'
import styled from 'styled-components'

const Experience = () => {
    const Experience = [
        {
            title: "No Job Experiences",
            subtitle: "Seeking a job",
            badge: "Seeking a job",
            desc: "Recent graduate seeking an entry-level position to apply academic knowledge and gain hands-on experience in the field. Diligent and eager to learn."
        },
    ]
    const TrainerExperience = [
        {
            title: "No Trainer Experiences",
            subtitle: "Seeking a job",
            badge: "Seeking a job",
            desc: "Recent graduate seeking an entry-level position to apply academic knowledge and gain hands-on experience in the field. Diligent and eager to learn."
        },
    ]
    const Text1 = styled(Typography)`
    font-size: 18px !important;
    color: #ff014f;
    font-weight: 400 !important;
    font-family: "Poppins", sans-serif;
    `
    const Text2 = styled(Typography)`
    font-size: 30px !important;
    color: #000;
    font-weight: 800 !important;
    font-family: "Montserrat", sans-serif;
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
                            <Text2>Job Experience</Text2>
                        </TextBox>

                        <TimeLine data={Experience}></TimeLine>
                    </Grid>
                    <Grid item xs={4} sm={4} md={6} xl={6} >
                        <TextBox>
                            <Text1>2023-present</Text1>
                            <Text2>Trainer Experience</Text2>
                        </TextBox>

                        <TimeLine data={TrainerExperience}></TimeLine>
                    </Grid>
                </Grid>
            </Box>
        </Grow>
    )

}

export default Experience;