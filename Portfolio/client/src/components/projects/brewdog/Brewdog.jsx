import React, { useContext } from 'react'
import { ThemeContext } from '../../../context'
import '../brewdog/brewdog.css'

const Brewdog = ({img, link}) => {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
    <div style={{ border: darkMode && '1px solid #333' }} className='p'>
      <div style={{ backgroundColor: darkMode && '#333' }} className="p-browser">
        <div className="p-circle red"></div>
        <div className="p-circle yellow"></div>
        <div className="p-circle green"></div>
      </div>
      <a href={link} target='_blank' rel='norefferer'>
        <img src={img} alt="" className='b-img'/>
      </a>
    </div>
    )
}

export default Brewdog
