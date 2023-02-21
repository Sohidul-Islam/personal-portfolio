import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styled from 'styled-components'
import Responsive from '../../Utilities/Responsive'
import ContactCard from '../ContactCard/ContactCard'
import ContactForm from '../ContactForm/ContactForm'

const Contact = () => {

    const [size, device, device2] = Responsive
    const Title = styled(Typography)`
    color: #3c3e41;
        text-align: center;
        font-family: 'Montserrat', sans-serif !important;
        font-weight: 600 !important;
        font-size: 60px !important;
    `

    const SubTitle = styled(Typography)`
    color: #ff014f;
    text-align: center;
    text-transform: uppercase;
    `

    const ContactContentBox = styled(Box)`
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        @media ${device2.tablet}{
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    `
    const ContactContentBox1 = styled(Box)`
        width: 40%;
        @media ${device2.tablet}{
            width: 100%;
            margin-bottom: 40px;
        }
    `
    const ContactContentBox2 = styled(Box)`
        width: 57%;
        @media ${device2.tablet}{
            width: 100%;
            margin-bottom: 40px;
        }
    `


    return (
        <div id="contacts">
            <SubTitle>
                Contacts
            </SubTitle>
            <Title>Contact With Me</Title>

            <ContactContentBox>
                {/* <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12, xl: 12 }} >

                    <Grid item xs={4} sm={3} md={5} xl={5}>
                        <Box sx={{ width: "100%" }}>
                            <ContactCard />
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={5} md={7} xl={7}>
                        <Box sx={{ width: "100%" }}>
                            <ContactForm />
                        </Box>
                    </Grid>
                </Grid> */}
                <ContactContentBox1>
                    <ContactCard />
                </ContactContentBox1>
                <ContactContentBox2>
                    <ContactForm />
                </ContactContentBox2>
            </ContactContentBox>
        </div>

    )
}

export default Contact;