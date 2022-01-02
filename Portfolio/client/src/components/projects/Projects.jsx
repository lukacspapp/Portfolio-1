import React from 'react'
import Cicero from './cicero/Cicero'
import '../projects/projects.css'
import Tokenizer from './tokenizer/Tokenizer'
import Brewdog from './brewdog/Brewdog'
import Space from './space/Space'
import tokenizerData  from '../../tokenizerData'
import brewdogData from '../../brewdogData'
import ciceroData from '../../ciceroData'

// import 'bulma'

const Projects = () => {
    return (
      <div className='pro'>
        <div className="pro-texts">
          <h1 className="project-title">Projects</h1>
          <p className="project-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rerum nihil, temporibus adipisci consectetur iure blanditiis dicta. Iure sapiente dignissimos deleniti non repellendus ad dicta temporibus, vero nobis fugit aliquam.
          </p>
          <br></br>
          <hr/>
        </div>
        
        <div className='columns'>
          <div className="pro-list column">Cicero
            <div className="pro-title">
              <p className="pro-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit rerum saepe nostrum natus tempore corporis autem accusantium excepturi maiores. Esse a error laudantium unde quis ullam reiciendis blanditiis accusantium.</p>
            </div>
            {ciceroData.map((item) => (
              <Cicero key={item.id} img={item.img} link={item.link}/>
            ))}
          </div>
          <div className="pro-list column">Tokenizer
            <div className="pro-title">
              <p className="pro-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit rerum saepe nostrum natus tempore corporis autem accusantium excepturi maiores. Esse a error laudantium unde quis ullam reiciendis blanditiis accusantium.</p>
            </div>
            {tokenizerData.map((item) => (
              <Tokenizer key={item.id} img={item.img} link={item.link}/>
            ))}
          </div>
        </div>
        <div className='columns'>
        <div className="pro-list column">Brewdog API
            <div className="pro-title">
              <p className="pro-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit rerum saepe nostrum natus tempore corporis autem accusantium excepturi maiores. Esse a error laudantium unde quis ullam reiciendis blanditiis accusantium.</p>
            </div>
            {brewdogData.map((item) => (
              <Brewdog key={item.id} img={item.img} link={item.link}/>
            ))}
          </div>
          <div className="pro-list column">Tokenizer
            <div className="pro-title">
              <p className="pro-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit rerum saepe nostrum natus tempore corporis autem accusantium excepturi maiores. Esse a error laudantium unde quis ullam reiciendis blanditiis accusantium.</p>
            </div>
            {tokenizerData.map((item) => (
              <Tokenizer key={item.id} img={item.img} link={item.link}/>
            ))}
          </div>
        </div>
      </div>   
    )
}

export default Projects
