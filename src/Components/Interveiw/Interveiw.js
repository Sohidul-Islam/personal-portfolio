import { Grid, Grow, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styled from 'styled-components'
import TimeLine from '../Timeline/TimeLine'

const Text1 = styled(Typography)`
font-size: 18px !important;
color: #ff014f;
font-weight: 400 !important;
font-family: "Poppins", sans-serif !important;
`
const Text2 = styled(Typography)`
font-size: 30px !important;
color: #000;
font-weight: 800 !important;
font-family: "Montserrat", sans-serif !important;
`
const TextBox = styled(Box)`
margin: 40px 0px;
`

const Interveiw = () => {

    const CompanyExp = [
        {
            title: "Interview at MEDIUSWARE as a Fullstack Developer",
            subtitle: "at Shemoli, Dhaka, Bangladesh",
            badge: "Not confirmed yet",
            desc: "It was December, 2023 when I was geting chance in  there interview board"
        },
        {
            title: "Interview at HUBSPOT as a Fullstack Developer",
            subtitle: "at Dhanmandi, Dhaka, Bangladesh",
            badge: "Not confirmed yet",
            desc: "It was October, 2023 when I was geting chance in  there interview board"
        },
        {
            title: "Interview at KadriTech as a Frontend Developer",
            subtitle: "at Gulshan Niketon, Dhaka, Bangladesh",
            badge: "Confirmed",
            desc: "It was March 27, 2023 when I was geting chance in  there interview board"
        },
        {
            title: "Interview at AgainSoft as a Digital Marketing",
            subtitle: "at Agargaon, Dhaka, Bangladesh",
            badge: "Not Confirmed",
            desc: "It was February 6, 2023 when I was geting chance in there interview board"
        },
     
       
    ]
    const JobExp = [
        {
            title: "Frontend developer at KadriTechAB",
            subtitle: "Septembar 2023 - Current",
            badge: "Full Time",
            desc: `Successfully implemented complex features for the featured project, Lyxa , an e-commerce site for food, grocery, and pharmaceutical products.
            Versatile feature management: zones, sales, accounts, admin.
            Collaborated for tailored solutions with stakeholders.
            Translated business needs into enhanced UX.
            Proficient in web dev, UX design, project management.
            Gained real-world business insights at KadriTech AB.
            Ready to apply skills and experience in future roles.`
        },
        {
            title: "Frontend developer at KadriTechAB",
            subtitle: "Apr 2023 - September 2023",
            badge: "Intern",
            desc: `Created two official websites: kadritech.se and med.kadritech.se, serving as the primary online platforms for KadriTech and their business partner.
            Played a key role in the design and development of the websites, ensuring intuitive user interfaces and responsive design elements.
            Successfully implemented complex features for the featured project, Lyxa , an e-commerce site for food, grocery, and pharmaceutical products.
            Versatile feature management: zones, sales, accounts, admin.
            Collaborated for tailored solutions with stakeholders.
            Translated business needs into enhanced UX.
            Proficient in web dev, UX design, project management.
            Gained real-world business insights at KadriTech AB.
            Ready to apply skills and experience in future roles.`
        }
    ]

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
                            <Text2>Company Experience</Text2>
                        </TextBox>

                        <TimeLine data={CompanyExp}></TimeLine>
                    </Grid>
                    <Grid item xs={4} sm={4} md={6} xl={6} >
                        <TextBox>
                            <Text1>2023-present</Text1>
                            <Text2>Job Experience</Text2>
                        </TextBox>

                        <TimeLine data={JobExp}></TimeLine>
                    </Grid>
                </Grid>
            </Box>
        </Grow>
    )
}

export default Interveiw;