import React from 'react'
import { Typography } from '@mui/material'
import styled from 'styled-components'
import Slider from '../TestimonialSlider/TestimonialSlider'

export default function Testimonials() {
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
    return (
        <div>
            <SubTitle>
                WHAT CLIENTS SAY
            </SubTitle>
            <Title>Testimonials</Title>

            <Slider />
        </div>
    )
}
