 import React from 'react'
 import './services.css'
 import{BsCheck2} from "react-icons/bs"
 
 const Services = () => {
   return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className=' container services_container'>

        <article className='services'>
          <div className='service_head'>
            <h3>Mobile App Development</h3>
          </div>
          <ul className='service_list'>
                <li>
                  <BsCheck2 className='service_list_icon' />
                  <p>Lorem, ipsum dolor sit amet</p>
                </li>

                <li>
                  <BsCheck2 className='service_list_icon' />
                  <p>Lorem, ipsum dolor sit amet</p>
                </li>

                <li>
                  <BsCheck2 className='service_list_icon' />
                  <p>Lorem, ipsum dolor sit amet</p>
                </li>

                <li>
                  <BsCheck2 className='service_list_icon' />
                  <p>Lorem, ipsum dolor sit amet</p>
                </li>

                <li>
                  <BsCheck2 className='service_list_icon' />
                  <p>Lorem, ipsum dolor sit amet</p>
                </li>

                
          </ul>
        </article>
        {/* End of UI/UX */}

        <article className='services'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
                <li>
                  <BsCheck2 className='service_list_icon' />
                  <p>Lorem, ipsum dolor sit amet</p>
                </li>

                <li>
                  <BsCheck2 className='service_list_icon' />
                  <p>Lorem, ipsum dolor sit amet</p>
                </li>

                <li>
                  <BsCheck2 className='service_list_icon' />
                  <p>Lorem, ipsum dolor sit amet</p>
                </li>

                <li>
                  <BsCheck2 className='service_list_icon' />
                  <p>Lorem, ipsum dolor sit amet</p>
                </li>

                <li>
                  <BsCheck2 className='service_list_icon' />
                  <p>Lorem, ipsum dolor sit amet</p>
                </li>

                
          </ul>
        </article>
            {/* END of web Dev */}



        <article className='services'>
          <div className='service_head'>
            <h3>Database Management</h3>
          </div>
          <ul className='service_list'>
                <li>
                  <BsCheck2 className='service_list_icon' />
                  <p>Lorem, ipsum dolor sit amet</p>
                </li>

                <li>
                  <BsCheck2 className='service_list_icon' />
                  <p>Lorem, ipsum dolor sit amet</p>
                </li>

                <li>
                  <BsCheck2 className='service_list_icon' />
                  <p>Lorem, ipsum dolor sit amet</p>
                </li>

                <li>
                  <BsCheck2 className='service_list_icon' />
                  <p>Lorem, ipsum dolor sit amet</p>
                </li>

                <li>
                  <BsCheck2 className='service_list_icon' />
                  <p>Lorem, ipsum dolor sit amet</p>
                </li>

                
          </ul>
        </article>
      </div>
   </section>
   )
 }
 
 export default Services