import React, { useEffect, useState } from "react";
import "./Home.css";
import intro from "../../assets/intro1.mp4"
import autmo from "../../assets/autmo.jpg"
import services from "../../assets/services-bg.jpg"
import product from "../../assets/product-development.jpg"
import prototype from "../../assets/prototyping.jpg"

const Hero = () => {
  const handlescroll = (targetId) => {
    const section = document.getElementById(targetId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }


  }
  const images = [
    {

      image: autmo
    },
    {

      image: services
    },
    {

      image: product
    },
    {

      image: prototype

    }
  ]
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* <section className="hero" id="home" style={{ backgroundVideo: `url(${intro})` }}> */}
      <section className="hero" id="home">
        {/* <video
    src={intro}
    autoPlay
    muted
    loop
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: "translate(-50%, -50%)"
    }}
  ></video> */}
        {
          images.map((img, index) => (
            <div key={index}
              className={`slidee ${index === current ? "active" : ""}`}
              style={{ backgroundImage: `url(${img.image})` }}>

            </div>
          ))
        }

        <div className="overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              Driving Innovation, <br />
              Powering Possibilities
            </h1>
            <p className="hero-subtitle">
              Leading provider of embedded IoT services, automotive electronics, and cutting-edge
              technology solutions. Transforming industries through innovation, quality, and expertise.
            </p>

            <div className="stats">
              <div className="stat-box">
                <h2>4000+</h2>
                <p>Sq.ft Lab Facility</p>
              </div>
              <div className="stat-box">
                <h2>5+</h2>
                <p>Years Experience</p>
              </div>

            </div>

            <div className="hero-buttons">
              <button className="btn primary" onClick={() => handlescroll("services")}>Explore Services</button>
              <button className="btn secondary" onClick={() => handlescroll("contactus")} >Get In Touch</button>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Hero;
