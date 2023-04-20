import React from 'react'
import './Header.css'
import Logo from './Logo.png'
import { Paper } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'

function Header() {
  return (
    <div>
        <BrowserRouter>
            <div style={{marginTop:"0px"}}>
            <div className="header"> 
                <Paper elevation={24} style={{background:"transparent"}}>
                    <nav>
                        <img src={Logo} alt="Logo"/>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skill">Skill</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </Paper>
            </div>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default Header