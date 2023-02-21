import { Box } from '@mui/system'
import React from 'react'
import styled from 'styled-components'
import img1 from '../../images/me-1 compressed.png'
export default function Banner() {

    const ContainerBox = styled(Box)`
    padding-bottom:0px;
    position: relative;
    
    `;
    const OuterBox = styled(Box)`
        position: relative;
        z-index: 2;
        margin: 0px auto;
        &::before{
            position: absolute;
            z-index: -1;
            width: 100%;
            height: calc(100% - 110px);
            content: "";
            left: 50%;
            bottom: 0;
            background-image: linear-gradient(145deg, #e2e8ec, #ffffff);
            box-shadow: 5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff;
            -webkit-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            transform: translateX(-50%);
            border-radius: 6px;
        }
    `
    const InnerBox = styled(Box)`
        height:100%;
        overflow: hidden;
        z-index: 2;
    `
    const Img = styled.img`
    border: 0;
    vertical-align: middle;
    max-width: 100%;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    `

    return (
        <ContainerBox>
            <OuterBox>
                <InnerBox>
                    <Img src={img1}></Img>
                </InnerBox>
            </OuterBox>
        </ContainerBox>

    )
}
