import React from 'react'
import './testimonials.css'
import AVATAR1 from "../../assets/avatar1.jpg"
import AVATAR2 from "../../assets/avatar2.jpg"
import AVATAR3 from "../../assets/avatar3.jpg"
import AVATAR4 from "../../assets/avatar4.jpg"

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {

  const data =[

    {
      avatar:AVATAR1,
      name:"Damilola Daniels",
      review:"Very nice work sxnxnxnxncbxnsnnxama mahdddsisiissooskssznznzn"
    },

    {
      avatar:AVATAR2,
      name:"Boye James",
      review:"Very nice work sxnxnxnxncbxnsnnxamamahdddsisiissooskssznznzn"
    },
    {
      avatar:AVATAR3,
      name:"Damilola Daniel",
      review:"Very nice work sxnxnxnxn cbxnsnnxam mahdddsisi issooskssznznzn"
    },
    {
      avatar:AVATAR4,
      name:"Kosisochukwu Omarin",
      review:"Very nice work sxnxnxnxncbxnsnnxama mahdddsisiissooskssznznzn"
    },



  ]

  return (
    <section id='testimonials'>
        <h5>Review from Clients</h5>
        <h2>Testimonials</h2>

        <Swiper 
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className='container testimonials_container'>
          {
            data.map(({avatar,name,review}, index)=>{
              return(
                <SwiperSlide key={index} className='testimonial'>
              <div className='client_avatar'>
                <img src={avatar} alt="" />
                </div>
                <h5 className="client_name">{name}</h5>
                <small className='client_review'>
                  {review}
                </small>
            </SwiperSlide> 
              )

            })
          }



        </Swiper>
    </section>
  )
}

export default Testimonials