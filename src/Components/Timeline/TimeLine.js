import React from 'react'
import './TimeLine.css';
import styled from 'styled-components';
import { Divider, Grid } from '@mui/material';
import { Box } from '@mui/system';

export default function TimeLine({ data }) {

    const Heading = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    `;

    const Title = styled.h2`
        font-size: 24px;
        font-weight: 500;
    `;
    const SubTitle = styled.h4`
    font-size: 14px;
    font-weight: 400;
    `;
    const DescripTion = styled.h4`
    font-size: 18px;
    font-weight: 300;
    `;

    const Badge = styled(Box)`
    display: block;
    font-size: 14px;
    padding: 0px 15px;
    // height: 36px;
    border-radius: 6px;
    background: #ffffff;
    box-shadow: 5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff;
    transition: all 0.4s ease-in;
    font-weight: 500;
    & p{
        color: #ff014f;
        font-weight: 600;
        // margin: 0 0;
    }
    `;

    const ResumeOverlay = styled.div`
    opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 6px;
  background: linear-gradient(145deg, #6a67ce, #fc636b);
  z-index: -1;
  transition: all 0.5s ease-in;
    
    `;

    const TimelineContainer = styled.div`
    color: #3c3e41;
    padding: 20px 30px;
    background: linear-gradient(145deg, #e2e8ec, #ffffff);
    box-shadow: 5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff;
    position: relative;
    border-radius: 6px;
    z-index: 1;
    transition: all 0.5s ease-in-out;
    &:hover{
        box-shadow: 5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff;
        color: #fff;
    }
    &:hover ${ResumeOverlay}{
        opacity: 1;
        visibility: visible;
    }
    &:hover ${Badge}{
    background: #ff014f;
    box-shadow: none;
    & p {
        color: #fff;
    }
    }
    `



    return (
        <div>
            <div className="timeline">
                {data.map(((item, index) => <div key={index} className="container right">
                    <TimelineContainer>
                        <Heading>
                            <Box>
                                <Title>{item.title}</Title>
                                <SubTitle>{item.subtitle}</SubTitle>
                            </Box>
                            <Badge sx={{ display: "flex", flexDirection: "column" }}>
                                <p>{item.badge}</p>
                            </Badge>
                        </Heading>
                        <Divider />
                        <DescripTion>{item.desc}</DescripTion>
                        <ResumeOverlay>
                        </ResumeOverlay>
                    </TimelineContainer>
                </div>))
                }

            </div>


        </div>
    )
}
