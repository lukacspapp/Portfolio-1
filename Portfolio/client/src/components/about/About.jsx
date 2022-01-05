import React, { useContext} from 'react'
import './about.css'
import { ThemeContext } from '../../context'






const About = () => {



  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode




  return (
    <div className='about' id='a-about'>
      <div className="a-left">
        <div className="a-card">
          <div className="c-info-item">
            <img className='icon' alt='node' src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'></img>
          </div>
          <div className="c-info-item">
            <img className='icon' src='https://symbols.getvecta.com/stencil_79/88_expressjs-icon.54bb6035d3.svg' alt='express'></img>
          </div>
          <div className="c-info-item">
            <img className='icon-mbd' alt='mdb' src='https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg'></img>
          </div>
          <div className="c-info-item">
            <img className='python' alt='python' src='https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'></img>
          </div>
          <div className="c-info-item">
            <img className='icon-d' alt='django' src='https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg'></img>
          </div>
          <div className="c-info-item">
            <img className='icon' src='https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' alt='postgres'></img>
          </div>
          <div className="c-info-item">
            <img className='icon' alt='js' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'></img>
          </div>
          <div className="c-info-item">
            <img className='icon' src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' alt='react'></img>
          </div>
          <div className="c-info-item">
            <img className='icon' alt='html' src='https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'></img>
          </div>
          <div className="c-info-item">
            <img className='icon' alt='css' src='https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'></img>
          </div>
          <div className="c-info-item">
            <img className='icon' alt='bulma' src='https://cdn.worldvectorlogo.com/logos/bulma.svg'></img>
          </div>
          <div className="c-info-item">
            <img className='icon' alt='bootstrap' src='https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg'></img>
          </div>
          <div className="c-info-item">
            <img className='icon' alt='api' src='https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/rest-api.svg'></img>
          </div>
          <div className="c-info-item">
            <img className='icon-m' alt='mongoose' src='https://camo.githubusercontent.com/7c669e872b214571ae0b5097e8d3db369225a806dc2ce9a436cde3497164310c/687474703a2f2f6d6f6e676f64622d746f6f6c732e636f6d2f696d672f6d6f6e676f6f73652e706e67'></img>
          </div>
          <div className="c-info-item">
            <img className='icon' alt='postman' src='https://www.svgrepo.com/show/354202/postman-icon.svg'></img>
          </div>
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
