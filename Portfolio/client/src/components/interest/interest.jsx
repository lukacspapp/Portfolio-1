import React from 'react'
import '../interest/interest.css'

function Interest() {
  return (
    <div className='in' id='in'>
        <div className="in-texts">
          <h1 className="in-title">Interests and Accomplishments</h1>
          <br></br>
        </div>
        <div className='in-columns'>
          <div className="in-list">Reading
            <div className="pro-title">
              <p className="in-desc">Psychology/Social Psychology</p>
              <p className="in-desc">Finance</p>
              <p className="in-desc">Blockchain</p>
              <p className="in-desc">Religion</p>
            </div>
          </div>
          <div className="in-list">Activities
            <div className="pro-title">
              <p className="in-desc">Karting</p>
              <p className="in-desc">Trampolining</p>
            </div>
          </div>
          <div className="in-list">Achievements
            <div className="pro-title">
              <p className="in-desc">Completed the Camino de Santiago</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Interest
