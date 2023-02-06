import React from 'react'
import styled from 'styled-components'
const ButtonType1 = ({ children, ...props }) => {
    console.log("icon here ", props)
    const { link } = props;
    const Button = styled.a`
    background-image: linear-gradient(145deg, #e2e8ec, #ffffff);
    box-shadow: 5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-radius: 6px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease-in;
    font-size: 24px;
    color: #000;
    &:hover{
        background-image: linear-gradient(145deg, #6a67ce,#fc636b) !important;
        transform: translateY(-3px);
        color: #fff;
    }

    & svg{
        color: #000;
        stroke-width: 2;
        position: relative;
        z-index: 2;
        width: 30px;
        transition: all 0.4s ease-in;
    }
  
    &:hover svg{
        color: #fff;
    }
`
    const Button2 = styled.button`
    background-image: linear-gradient(145deg, #e2e8ec, #ffffff);
    box-shadow: 5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-radius: 6px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease-in;
    font-size: 24px;
    color: #000;
    border: none;
    & img{
        max-height: 23px;
        width: auto;
        padding: 0 15px;
    }
`
    return (
        <div>
            {link && <Button href={link} >{children}</Button>}
            {!link && <Button2>{children}</Button2>}
        </div>
    )
}
export default ButtonType1