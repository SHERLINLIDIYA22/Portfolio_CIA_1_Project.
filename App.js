import React from 'react'
import About from './About/About'
import './App.css'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Home from './Home/Home'
import Skill from './Skill/Skill'

function App() {
  return (
    <div>
      <div><Header/></div>
      <div id="home"><Home/></div>
      <div id="about"><About/></div>
      <div id="skill"><Skill/></div>
      <div id="contact"><Contact/></div>
      <div><Footer/></div>
    </div>
  )
}

export default App