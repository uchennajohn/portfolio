import React,{useRef} from 'react'
import './contact.css'
import {AiOutlineMail} from "react-icons/ai"
import{BsTelegram} from "react-icons/bs"
import {ImWhatsapp} from "react-icons/im"
import emailjs from "emailjs-com"


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vdcioim', 'template_ty94qmm', form.current, 'YOUR_PUBLIC_KEY')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch </h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <AiOutlineMail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>okechukwuchenna@gmail.com</h5>
            <a href='mailto:okechukwuchenna@gmail.com' target="_blank">Send a Message</a>
          </article>

          <article className='contact_option'>
            <BsTelegram className='contact_option_icon'/>
            <h4>Telegram</h4>
            <h5>Jon</h5>
            <a href='https://telegram.me/Jon' target="_blank">Send a Message</a>
          </article>

          <article className='contact_option'>
            <ImWhatsapp className='contact_option_icon'/>
            <h4>WhatsApp</h4>
            <h5>+2349014214236</h5>
            <a href='https://api.whatsapp.com/send?phone=2349014214236' target="_blank">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Your Full Name' name="name" required />
          <input type="email" placeholder='Your Email' name='email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button className='btn btn-primary'>Send Message</button>
        </form>
      </div>
   </section>
  )
}

export default Contact