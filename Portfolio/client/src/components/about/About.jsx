import React from 'react'
import './about.css'
import img from '../../image/aboutme.jpeg'

const About = () => {
  return (
    <div className='about'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img className='a-img' src={img} alt="" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto eos distinctio excepturi omnis aut rerum assumenda enim delectus soluta, non, fuga repellendus laborum officia. Sint libero ullam maxime aliquam omnis!</p>
      </div>
    </div>
  )
}

export default About
