import { Box } from '@mui/system';
import React from 'react'
import styled from 'styled-components';



const Loader = ({ label, percentage }) => {
    const LoaderContainer = styled(Box)`
position: relative;
top:0;
left: 0;
z-index: 1;
// background-color: red;
height: 20px;
width: 100%;
margin-bottom: 32px;
`
    const TextBox = styled(Box)`
display: flex;
justify-content: space-between;
`
    const LeftText = styled(Box)`
font-size: 16px;
`
    const RightText = styled(Box)`
font-size: 16px;
`
    const LoaderBox = styled(Box)`
position: relative;
top:0;
left: 0;
background-color: #dce1e4;
height: 100%;
width: 100%;
border-radius: 16px;
`
    const LoaderPercentage = styled(Box)`
position: absolute;
top:4px;
left:4px;
bottom:4px;
background: linear-gradient(145deg, #fff 0%, #ff014f 100%);
box-shadow: rgb(255 255 255) -10px -5px 15px,rgb(209 217 230) 10px 5px 15px;
// height: 80%;
width: ${percentage};
border-radius: 16px;
animation: ${"loader-animation-" + percentage.substring(0, percentage.length - 1)} 5s 1;

@keyframes ${"loader-animation-" + percentage.substring(0, percentage.length - 1)} {
    from {width: 0%;}
    to {width: ${percentage};}
  }
`
    return (
        <div>
            <TextBox>
                <LeftText>{label}</LeftText>
                <RightText>{percentage}</RightText>
            </TextBox>
            <LoaderContainer>

                <LoaderBox>
                    <LoaderPercentage>
                    </LoaderPercentage>
                </LoaderBox>
            </LoaderContainer>
        </div>
    )
}
export default Loader;