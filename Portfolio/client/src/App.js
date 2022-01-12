import {React, useContext} from 'react'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Interest from '../src/components/interest/interest';
import Intro from './components/intro/Intro';
import Projects from './components/projects/Projects';
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from './context';




const App = () => {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  
  return (
    <div style={{
      backgroundColor: darkMode ? "#121212" : 'white',
      color: darkMode && "white"
    }}>
      <Toggle/>
      <Intro/>
      <About/>
      <Projects/>
      <Interest/>
      <Contact/>
    </div>
  );
}

export default App;
