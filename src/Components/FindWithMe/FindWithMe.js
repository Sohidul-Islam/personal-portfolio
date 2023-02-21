import { Typography } from '@mui/material';
import React from 'react'
import ButtonType1 from '../ButtonType1/ButtonType1';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const FindWithMe = () => {
    return (
        <div>
            <Typography sx={{ textAlign: 'left', fontSize: "16px", fontWeight: 500, fontFamily: '"Poppins", "Sans-serif"', color: "#1e2125" }}>
                FIND WITH ME
            </Typography>
            <ul style={{ display: "flex", flexWrap: "wrap", listStyle: "none", paddingLeft: "0", width: "100%" }}>
                <li style={{ marginRight: "24px", marginBottom: "24px" }}>
                    <ButtonType1 link="https://www.facebook.com/sishufol">
                        {/* <FacebookIcon /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </ButtonType1>
                </li>
                <li style={{ marginRight: "24px", marginBottom: "24px" }}>
                    <ButtonType1 link="https://www.twitter.com/sishufol">
                        <TwitterIcon />
                    </ButtonType1>
                </li>
                <li style={{ marginRight: "24px", marginBottom: "24px" }}>
                    <ButtonType1 link="https://www.linkedin.com/in/sishufol">
                        <LinkedInIcon />
                    </ButtonType1>
                </li>
                <li style={{ marginRight: "24px", marginBottom: "24px" }}>
                    <ButtonType1 link="https://github.com/Sohidul-Islam">
                        <GitHubIcon />
                    </ButtonType1>
                </li>
                <li style={{ marginRight: "24px", marginBottom: "24px" }}>
                    <ButtonType1 link="https://leetcode.com/sishufol">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#B3B1B0" d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z" /><path fill="#E7A41F" d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z" /><path fill="#070706" d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z" /></svg>
                    </ButtonType1>
                </li>
                <li style={{ marginRight: "24px", marginBottom: "24px" }}>
                    <ButtonType1 link="https://codeforces.com/profile/CSE01806649">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path style={{ fill: "#AE0F0A" }} d="M22.5,10.5c0.8,0,1.5,0.7,1.5,1.5v7.5c0,0.8-0.7,1.5-1.5,1.5h-3c-0.8,0-1.5-0.7-1.5-1.5V12c0-0.8,0.7-1.5,1.5-1.5H22.5z" />
                            <path style={{ fill: "#4F81C1" }} d="M13.5,3C14.3,3,15,3.7,15,4.5v15c0,0.8-0.7,1.5-1.5,1.5h-3C9.7,21,9,20.3,9,19.5v-15C9,3.7,9.7,3,10.5,3H13.5z" />
                            <path style={{ fill: "#FFD400" }} d="M4.5,7.5C5.3,7.5,6,8.2,6,9v10.5C6,20.3,5.3,21,4.5,21h-3C0.7,21,0,20.3,0,19.5V9c0-0.8,0.7-1.5,1.5-1.5H4.5z" />
                        </svg>
                    </ButtonType1>
                </li>
            </ul>
        </div>
    )
}

export default FindWithMe;