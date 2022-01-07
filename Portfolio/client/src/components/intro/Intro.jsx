import React  from 'react'
import '../intro/intro.css'
import profile from '../../image/IMG_5663_ccexpress.png'
import {Link} from 'react-scroll'


const Intro = () => {

  

  
  return (
      <div className='i'>
        <div className='i-left'>
          <div className="i-left-wrapper">
            <h2 className='i-intro'>Hey, My name is</h2>
            <h2 className='i-name'>Lukacs Papp</h2>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">HTML</div>
                <div className="i-title-item">CSS</div>
                <div className="i-title-item">JavaScript</div>
                <div className="i-title-item">React.js</div>
                <div className="i-title-item">Pyhton</div>
                <div className="i-title-item">Django</div>
                <div className="i-title-item">Node.js</div>
                <div className="i-title-item">MongoDB</div>
              </div>
            </div>
            <p className="i-description">
            I am a London-based Junior Full Stack Developer transitioning from the public/private health sector. My interest for coding was sparked by a couple of close friends and when I started learn and dive into it deeper in to the topic I fell in love with it.
            </p>
            <p className='i-description'>I have recently completed a Software Engineer Immersive course at General Assembely and now I am looking for my first role, where I can learn to be a better coder than yesterday.  I thrive when collaborating on forward-thinking and innovative projects with a passionate team of people.</p>
          </div>
          <div className='slidewrapper'>
            <Link className='s-link' to='a-about' smooth={true} duration={1000}><h1 className='s-link-title'>about</h1></Link>
            <Link className='s-link' to='p-pro' smooth={true} duration={1000}><h1 className='s-link-title'>projects</h1></Link>
            <Link className='s-link' to='c-contact' smooth={true} duration={1500}><h1 className='s-link-title'>contact</h1></Link>
          </div>
          <Link className='s-link' to='a-about' smooth={true}><svg xmlns="http://www.w3.org/2000/svg" className="scroll" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
          </svg></Link>
        </div>
        <div className='i-right'>
          <div className="i-clippy"></div>
          <img src={profile} alt="" className="i-img" />
        </div>
      </div>
    )
}

export default Intro


