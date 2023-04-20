import { Paper } from '@mui/material'
import React from 'react'
import './Skill.css'

function Skill() {
  return (
    <div>
        <div className="Skl">
        <Paper className="paps" elevation={24} style={{background:"transparent"}}>
          <div className="cont">
            <center>
              <h3>My Skills</h3>

              <div className="skil">
                <div style={{display:"flex"}}>
                    <div style={{padding:"20px"}}>
                        <h6 style={{fontSize:"1rem"}}>HTML : 70%</h6>
                        <div style={{display:"flex",marginTop:"10px"}}>
                        <div className="scr" style={{width:"140px"}}></div>
                        <div className="blk" style={{width:"60px"}}></div>
                        </div>
                    </div>
                    <div style={{padding:"20px"}}>
                        <h6 style={{fontSize:"1rem"}}>CSS : 60%</h6>
                        <div style={{display:"flex",marginTop:"10px"}}>
                        <div className="scr" style={{width:"120px"}}></div>
                        <div className="blk" style={{width:"80px"}}></div>
                        </div>
                    </div>
                    <div style={{padding:"20px"}}>
                        <h6 style={{fontSize:"1rem"}}>JAVASCRIPT : 30%</h6>
                        <div style={{display:"flex",marginTop:"10px"}}>
                        <div className="scr" style={{width:"60px"}}></div>
                        <div className="blk" style={{width:"140px"}}></div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div style={{display:"flex"}}>
                    <div style={{padding:"20px"}}>
                        <h6 style={{fontSize:"1rem"}}>REACT : 70%</h6>
                        <div style={{display:"flex",marginTop:"10px"}}>
                        <div className="scr" style={{width:"140px"}}></div>
                        <div className="blk" style={{width:"60px"}}></div>
                        </div>
                    </div>
                    <div style={{padding:"20px"}}>
                        <h6 style={{fontSize:"1rem"}}>C++ : 80%</h6>
                        <div style={{display:"flex",marginTop:"10px"}}>
                        <div className="scr" style={{width:"160px"}}></div>
                        <div className="blk" style={{width:"40px"}}></div>
                        </div>
                    </div>
                    <div style={{padding:"20px"}}>
                        <h6 style={{fontSize:"1rem"}}>JAVA : 50%</h6>
                        <div style={{display:"flex",marginTop:"10px"}}>
                        <div className="scr" style={{width:"100px"}}></div>
                        <div className="blk" style={{width:"100px"}}></div>
                        </div>
                    </div>
                </div>
              </div>
            </center>
          </div>
        </Paper>
        </div>
    </div>
  ) 
}

export default Skill