import { Title } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import Navigation from '../NavigationTypeTwo/Navigation'
import ProfessionalSkills from '../ProfessionalSkills/ProfessionalSkills'
import Interveiw from '../Interveiw/Interveiw'

export default function Resume() {

    const [NavItem, setNavItem] = useState([
        {
            itemName: 'Education',
            path: '/',
            isActive: true
        },
        {
            itemName: 'Professional Skills',
            path: '/professional-skills',
            isActive: false
        },
        {
            itemName: 'Experience',
            path: '/experience',
            isActive: false
        },
        {
            itemName: 'Interveiw',
            path: '/interveiw',
            isActive: false
        },
    ]);

    const navItemActiveHandler = (id) => {
        let tmp = NavItem;

        for (let i = 0; i < tmp.length; i++) {
            if (i === id) {
                tmp[i].isActive = true;
            }
            else {
                tmp[i].isActive = false;
            }
        }
        console.log("new nav item: ", tmp);
        // setNavItem(tmp);
    }
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
                2+ YEARS OF EXPERIENCE
            </SubTitle>
            <Title>My Resume</Title>
            <BrowserRouter>
                <Navigation sx={{ display: 'flex' }} item={NavItem} isActiveFunction={navItemActiveHandler} />
                <Routes>
                    <Route exact path="/" element={<Education />}>

                    </Route>

                    <Route exact path="/professional-skills" element={<ProfessionalSkills />}>

                    </Route>

                    <Route exact path="/experience" element={<Experience />}>

                    </Route>
                    <Route exact path="/interveiw" element={<Interveiw />}>

                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}
