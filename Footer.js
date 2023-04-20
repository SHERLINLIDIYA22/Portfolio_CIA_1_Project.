import React from 'react'
import { IconButton, Paper } from '@mui/material'
import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() { 
  return (
    <div>
        <Paper className="papr" elevation={24} style={{backgroundColor:"transparent",marginTop:"0px"}}>
            <br/>
            <br/>
            <IconButton className="icon" href='https://github.com/SHERLINLIDIYA22'><GitHubIcon/></IconButton>
            <IconButton className="icon" href='https://www.instagram.com/_._sherlin_2217_/'><InstagramIcon/></IconButton>
            <IconButton className="icon" href='https://www.linkedin.com/in/sherlin-lidiya-a-376910258'><LinkedInIcon/></IconButton>
            <br/>
            <br/>
                <h5>Info - Support - Marketing</h5>
                <h5>Terms of Use - Privacy Policy</h5>
                <p>@ 2023 created by lidiya</p>
        </Paper>
    </div>
  )
}

export default Footer