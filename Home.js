import React from 'react'
import Typical from 'react-typical'
import './Home.css'
import girl from './Lapgirl.png'

function Home() {
  return (
    <div>

        <div className="Hom">
          <div className="Box">

            <div className="Box1">
                <p>WELCOME TO MY WORLD</p>
                <h3>Hi,I'm </h3>
                <h3 style={{color:"purple"}}>Sherlin Lidiya</h3>
                <Typical
                loop={Infinity}
                wrapper="h3"
                steps={[
                  'a Web Developer',4000,
                  'a Designer',4000
                ]}
                />
                <p>I'm a web developing student who is studying to become a professional web developer.
                I'm also gaining knowledge in areas such as web design, user experience, and website optimization.
                </p>
            </div>

            <div className="Box2">
              <img src={girl} alt='girl'/>
            </div>
             
          </div>
        </div>

    </div>
  )
}

export default Home