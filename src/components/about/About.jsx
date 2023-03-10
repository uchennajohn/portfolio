import React from 'react'
import './about.css'
import ME from "../../assets/me-about.jpg"
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'


const About = () => {
  return (
   <section id="about">
   <h5>Get To Know</h5>
   <h2>About Me</h2>

   <div className='container about__container'>
    <div className='about__me'>
      <div className='about__me-image'>
        <img src={ME} alt="portfolio owner passport" />
      </div>
    </div>


    <div className='about__content'>
      <div className='about__cards'>
        <article  className='about__card'>
          <BsAward className='about__icon' />

          <h5>Experience</h5>
          <small>3+ Years Working</small>
         </article>
      </div>

      <div className='about__cards'>
        <article  className='about__card'>
          <FiUsers className='about__icon' />

          <h5>Clients</h5>
          <small>worldwide</small>
         </article>
      </div>

      <div className='about__cards'>
        <article  className='about__card'>
          <BsAward className='about__icon' />

          <h5>Projects</h5>
          <small>10+ completed</small>
         </article>
      </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores magnam dolorum ducimus nobis amet
            error hic rem repellendus, deleniti, aspernatur 
            accusantium in voluptatum labore rerum a explicabo 
            ratione, maiores dolores?
          </p>

          <a href='#content' className='btn btn-primary'>Let's Talk</a>


    </div>
   </div>
   </section>
  )
}

export default About