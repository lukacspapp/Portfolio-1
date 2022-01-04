import React from 'react'
import '../intro/intro.css'
import profile from '../../image/IMG_5663_ccexpress.png'
import me from '../../image/profile avatar_ccexpress.png'

const Intro = () => {
  return (
      <div className='i'>
        <div className='i-left'>
          <div className="i-left-wrapper">
            <h2 className='i-intro'>Hey There, My name is</h2>
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
              I am junior full stack developer who recently graduated from General Assembely London. I am looking for a Junior Postion at wheqoifhaspmanq;fnqnavjksb
            </p>
          </div>
          {/* <div className='slidewrapper'>
            <h1>about</h1>
            <h1>projects</h1>
            <h1>contact</h1>
          </div> */}
          <svg xmlns="http://www.w3.org/2000/svg" className="scroll" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
          </svg>
        </div>
        <div className='i-right'>
          <div className="i-clippy"></div>
          <img src={profile} alt="" className="i-img" />
        </div>
      </div>
    )
}

export default Intro


