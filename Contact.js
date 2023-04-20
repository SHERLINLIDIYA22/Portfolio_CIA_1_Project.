import { Button, Paper } from '@mui/material'
import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div>
      <div className="Cnt">
        <Paper className="papc" elevation={24} style={{background:"transparent"}}>
          <div>
            <center>
              <br/>
              <br/>
              <h3 style={{fontSize:"2rem"}}>Contact</h3>
              <br/>
              <form>
                <center>
                  <div>
                  <label>Full Name</label>
                  <br/>
                  <input name="name" placeholder="Enter Full Name..." type="text" />
                  <br/>
                  <label>Email</label>
                  <br/>
                  <input name="email" placeholder="Enter your Email..." type="email" />
                  <br/>
                  <label>Message</label>
                  <textarea
                  rows="6"
                  placeholder="Enter your Message"
                  name="message"
                  required
                  ></textarea>
                  <br/>
                  <br/>
                  <br/>
                  <Button type="submit" variant="contained">Send Message</Button> 
                  </div>
                </center>
              </form>
            </center>
          </div>
        </Paper>
      </div>
    </div>
  )
}

export default Contact