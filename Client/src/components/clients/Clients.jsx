import React from 'react'
import "./Clients.css"
import autm from "../../assets/autm.png";
import versatile from "../../assets/versatile.png";
import calon from "../../assets/calon.png";
import varcas from "../../assets/varcas.png";
import quantum from "../../assets/quantum.png";

import Testimonials from '../testimonials/Testimonials'

function Clients() {
  const ClientsData = [
    {
      icon: autm
    },
    {
      icon: versatile
    },
    {
      icon: calon
    },
    {
      icon: varcas
    },
    {
      icon: quantum
    }
  ]
  return (
    <section className="c-container" id="clients">
      <h2 className="c-title">Our <span>Clients</span></h2>
      <div className="c-slider-wrapper">
        <div className='c-grid'>
          {
            ClientsData.concat(ClientsData).map((images, index) => (
              <div key={index} className='c-item'>
                <img src={images.icon} alt="noimages" />
              </div>
            )
            )
          }
        </div>
      </div>
      <div className="testimonial-wrapper"><Testimonials /></div>
    </section>
  )
}

export default Clients;