import { Typography } from '@mui/material';
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styled from 'styled-components';
export default function Card({ feature }) {
    // console.log("Feature: ", feature)

    const Cardbox = styled.div`
    background: linear-gradient(145deg, #e2e8ec, #ffffff);
    box-shadow: 5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff;
    padding: 40px;
    height: 100%;
    `
    const IconBox1 = styled.div`
    color: #f9004d;
    width: 80px;
    height: 80px;
    margin-bottom: 16px;
    `
    const IconBox2 = styled.div`
    color: #f9004d;
    width: 60px;
    height: 60px;
    display: none;
    `

    return (
        <Cardbox>
            <IconBox1>
                {feature.icon}
            </IconBox1>
            <Typography sx={{ fontSize: "28px", color: "#1e2125", mb: 3 }}>
                {feature.title}
            </Typography>
            <Typography sx={{ fontSize: "16px", color: "#343a40", mb: 4 }}>
                {feature.desc}
            </Typography>
            <IconBox2>
                <ArrowForwardIcon />
            </IconBox2>

            <div className='feature-overlay'>

            </div>
        </Cardbox>
    )
}
