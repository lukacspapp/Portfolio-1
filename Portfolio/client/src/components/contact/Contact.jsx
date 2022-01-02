import React, { useContext } from 'react'
import '../contact/contact.css'
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { ThemeContext } from '../../context'


const Contact = () => {

  const [sent, setSend] = useState(false)

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode


  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      'service_74x3bli',
      'template_bvswyp8',
      form.current,
      'user_54kMBAFG3oQ1vksxbtvxs',
    )
      .then((result) => {
        console.log(result.text)
        setSend(true)
      }, (error) => {
        console.log(error.text)
      })
  }




  return (
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Get in Touch!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <svg xmlns="http://www.w3.org/2000/svg" className='phone' class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +44 7577 244977
            </div>
            <div className="c-info-item">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>papplukacs@hotmail.com</div>
            </div>
            <div className="c-info-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg><a href='https://github.com/lukacspapp' className='link'>Github Profile</a>
            </div>
            <div className="c-info-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" /><use xlinkHref='https://www.linkedin.com/in/lukacsjpapp' />
              </svg><a className='linkedin' href='https://www.linkedin.com/in/lukacsjpapp/'>LinkedIn Profile</a>
            </div>
            <div className="c-info-item">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              London, E14, United Kingdom
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className='c-desc'>
            <b>Would like to reach out?</b> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti est nostrum, voluptate alias blanditiis earum, illo repudiandae eum temporibus ab totam harum ad exercitationem cumque similique dignissimos qui numquam mollitia.
          </p>
          <form ref={form} onSubmit={handleSubmit}>
            <input style={{ backgroundColor: darkMode && '#333', borderRadius: darkMode && '10px', color: darkMode && 'white' }} type='text' required placeholder='Name' name='user_name' />
            <input style={{ backgroundColor: darkMode && '#333', borderRadius: darkMode && '10px', color: darkMode && 'white' }} type='text' required placeholder='Subject' name='user_subject' />
            <input style={{ backgroundColor: darkMode && '#333', borderRadius: darkMode && '10px', color: darkMode && 'white' }} type='text' required placeholder='Email' name='user_email' />
            <textarea style={{ backgroundColor: darkMode && '#333', color: darkMode && 'white' }} rows='5' required placeholder='Send me a Message!' name='message' />
            {sent && <h2 className='thank'>Thank you for your message.</h2>}
            <button>Send</button>
          </form>
        </div>
      </div>
    </div >
  )
}

export default Contact
