import React, { useContext } from 'react'
import '../toggle/toggle.css'
import sun from '../../image/sun.png'
import night from '../../image/night-mode.png'
import { ThemeContext } from '../../context'

const Toggle = () => {

  const theme = useContext(ThemeContext)

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" })
  }

  return (
    <div className='toggle'>
      <img src={sun} alt=""  className='n-icon'/>
      <img src={night} alt="" className='n-icon'/>
      <div className="toggle-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 50 }}></div>
    </div>
    
  )
}

export default Toggle
