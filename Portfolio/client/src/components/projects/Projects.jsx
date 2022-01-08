import React from 'react'
import Cicero from './cicero/Cicero'
import '../projects/projects.css'
import Tokenizer from './tokenizer/Tokenizer'
import Brewdog from './brewdog/Brewdog'
import Space from './space/Space'
import tokenizerData  from '../../tokenizerData'
import brewdogData from '../../brewdogData'
import ciceroData from '../../ciceroData'
import SpaceData from '../../spaceData'



const Projects = () => {
    return (
      <div className='pro' id='p-pro'>
        <div className="pro-texts">
          <h1 className="project-title">Projects</h1>
          <p className="project-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rerum nihil, temporibus adipisci consectetur iure blanditiis dicta. Iure sapiente dignissimos deleniti non repellendus ad dicta temporibus, vero nobis fugit aliquam.
          </p>
          <br></br>
          <hr/>
        </div>
        
        <div className='columns'>
          <div className="pro-list column">CICERO<button><a className='readme' href='https://github.com/lukacspapp/SEI-Project-4-Cicero'>ReadMe</a></button>
            <div className="pro-title">
              <p className="pro-desc">Full-stack e-commerce app built with React, Python, and Django. I created my own RESTful APIs, had authentication as part of our back-end, and also used Bootstrap. I focused more on the back-end part of the project.</p>
            </div>
            {ciceroData.map((item) => (
              <Cicero key={item.id} img={item.img} link={item.link}/>
            ))}
          </div>
          <div className="pro-list column">TOKENIZER<button><a href='https://github.com/lukacspapp/SEI-Project-3-Tokenizer'>ReadMe</a></button>
            <div className="pro-title">
              <p className="pro-desc">Built a full-stack MERN e-commerce application using our own RESTful APIs, where users can create, sell and buy their own or existing NFTs. I particularly focused on the back-end and the design.</p>
            </div>
            {tokenizerData.map((item) => (
              <Tokenizer key={item.id} img={item.img} link={item.link}/>
            ))}
          </div>
        </div>
        <div className='columns'>
        <div className="pro-list column">BREWDOG API<button><a href='https://github.com/lukacspapp/SEI-Project-2-Brewdog'>ReadMe</a></button>
            <div className="pro-title">
              <p className="pro-desc">Used React, JavaScript, CSS with Bulma and Brewdog's external public API, where we built an application to showcase Brewdog beers and compare them with a filter.</p>
            </div>
            {brewdogData.map((item) => (
              <Brewdog key={item.id} img={item.img} link={item.link}/>
            ))}
          </div>
          <div className="pro-list column">SPACE INVADERS<button><a href='https://github.com/lukacspapp/SEI-Project-1-Space-Invaders'>ReadMe</a></button>
            <div className="pro-title">
              <p className="pro-desc">I recreated a similar version of the retro Space Invaders game using HTML, CSS, and JavaScript.</p>
            </div>
            {SpaceData.map((item) => (
              <Space key={item.id} img={item.img} link={item.link}/>
            ))}
          </div>
        </div>
      </div>   
    )
}

export default Projects

