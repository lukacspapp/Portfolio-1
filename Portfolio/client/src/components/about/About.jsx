import React from 'react'
import './about.css'
// import { ThemeContext } from '../../context'






const About = () => {



  



  return (
    <div className='about' id='a-about'>
      <div className="a-left">
        <div className="a-card">
          <div className="c-info-item">
            <i class="devicon-html5-plain icon-style"></i>
            <p className='i-p'>HTML</p>
          </div>
          <div className="c-info-item">
            <i class="devicon-css3-plain-wordmark"></i>
            <p className='i-p'>CSS</p>
          </div>
          <div className="c-info-item">
            <i class="devicon-express-original"></i>
            <p className='i-p'>Express</p>
          </div>
          <div className="c-info-item">
            <i class="devicon-python-plain"></i>
            <p className='i-p'>Python</p>
          </div>
          <div className="c-info-item">
            <i class="devicon-django-plain"></i>
            <p className='i-p'>Django</p>
          </div>
          <div className="c-info-item">
            <i class="devicon-postgresql-plain"></i>
            <p className='i-p'>PostgreSQL</p>
          </div>
          <div className="c-info-item">
            <i class="devicon-javascript-plain"></i> 
            <p className='i-p'>JavaScript</p>        
          </div>
          <div className="c-info-item">
            <i class="devicon-react-original"></i>
            <p className='i-p'>React</p>
          </div>
          <div className="c-info-item">
            <i class="devicon-bulma-plain"></i>
            <p className='i-p'>Bulma</p>
          </div>
          <div className="c-info-item">
            <i class="devicon-bootstrap-plain"></i>
            <p className='i-p'>Bootstrap</p>
          </div>
          <div className="c-info-item">
            <i class="devicon-mongodb-plain"></i>
            <p className='i-p'>MongoDB</p>
          </div>
          <div className="c-info-item">
            <i class="devicon-git-plain"></i>
            <p className='i-p'>Git</p>
          </div>
          <div className="c-info-item">
            <i class="devicon-yarn-plain"></i>
            <p className='i-p'>Yarn</p>
          </div>
          <div className="c-info-item">
            <i class="devicon-heroku-original"></i>
            <p className='i-p'>Heroku</p>
          </div>

        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">I am originally from Budapest, Hungary and my interest for coding was sparked by a couple of close friends and when I started learn and dive into it deeper in to the topic I fell in love with it.
        I have recently completed a Software Engineer Immersive course at General Assembely and now I am looking for my first role. 
        
        </p>
        <p className="a-sub">
        I believe that a person should work on improving their own self-development, skills and learning new things all the time 
        and I thrive when collaborating on forward-thinking and innovative projects with a passionate team of people.
        </p>
      </div>
  
    </div>
  )
}

export default About
