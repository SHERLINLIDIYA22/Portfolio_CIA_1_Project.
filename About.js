import { Button, Paper } from '@mui/material'
import React from 'react'
import './About.css'

function About() {
  return ( 
    <div>
        <div className="Abt">
            <Paper className="papt" elevation={24} style={{background:"transparent"}}>
                <div className="abtbox">
                    <center>
                        <br/>
                        <br/>
                    <div><h2 style={{fontSize:"3rem"}}>About me</h2></div>
                    <div className="Info">
                        <h3>I'm Sherlin Lidiya.. </h3>
                        <h6>Full Stack Developer</h6>
                        <br/>
                        <div style={{width:"500px",textAlign:"center",fontSize:"1.1rem"}}>
                            <h5>I'm  a undergraduate Engineering student from skcet. I'm interested in  different field apart from my main course.  I have acquiring the skills and knowledge necessary to make my  project a success. i am passionate in learning coding skill and developing webside</h5>
                        </div>
                        <br/>
                        <h5 style={{color:"blue",fontSize:"1rem"}}>Email:</h5>
                        <br/>
                        <h5 style={{fontSize:"1rem"}}>sherlinpkt@gmail.com</h5>
                        <br/>
                        <a href="#contact"><h4>Wanna Talk ?</h4></a>
                    </div>
                    <br/>
                    <div className="resume">
                        <a href="/"><Button variant="outlined">My Cvv</Button></a>
                    </div>
                    </center>
                </div>
            </Paper>
        </div>
    </div>
  )
}
 
export default About
 