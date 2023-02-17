import { Box } from '@mui/system';
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Responsive from '../../Utilities/Responsive';

export default function Navigation({ item, isActiveFunction }) {
    // console.log(item);
    const [size, device, device2] = Responsive;

    // console.log("Responsive: ", device2);
    // style={{ color: isActive ? "#ff014f" : "#1e212", boxShadow: isActive ? "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff" : "#1e212", }}

    let activeStyle = {
        textDecoration: "underline",
    };

    let activeClassName = "underline";

    const NavContainer = styled(Box)`
    display: flex;
    background: linear-gradient(145deg, #e2e8ec, #ffffff);
    box-shadow: 5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff;
    @media ${device2.mobileL}{
        width: 100%;
        flex-direction: column;
    }
    `;
    const NavItemBox = styled(Box)`
    display: flex;
    flex-basis: 25%;
    background: linear-gradient(145deg, #e2e8ec, #ffffff);
    
    `;
    const NavItem = styled(NavLink)`
    // color: #1e212;
    text-decoration: none;
    width:100%;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    text-align: center;
    padding: 30px 10px;
    margin-bottom: -1px
    transition: all 0.4s ease-in-out;
    &:hover,&:active{
    color: #ff014f;
    margin-bottom: -2px
    }
    &:hover,&:active ${NavItemBox}{
    color: #ff014f;
    box-shadow: 5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff;
    }
    `;

    // onClick={() => { isActiveFunction(key) }}
    return (
        <NavContainer>
            {item.map((data, key) => (
                <NavItemBox key={key}>
                    <NavItem style={({ isActive }) => ({
                        color: isActive ? 'greenyellow' : 'white'
                    })} to={data.path}>{data.itemName}</NavItem>
                </NavItemBox>

            ))
            }
        </NavContainer >
    )
}
