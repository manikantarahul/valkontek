import React from "react";
import "./About.css";
import Counter from "./Counter";
import {
  Target,
  Lightbulb,
  Award,
  Users,
  Sparkles,
  Shield,
} from "lucide-react";


const About = () => {
  
  const values = [
    {
      icon: <Sparkles size={28} />,
      title: "Cutting-Edge Technology",
      description: "ECU, BMS, and Telematics for EVs, drones, and smart mobility",
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Edge AI Intelligence",
      description: "On-board AI for real-time diagnostics and predictive maintenance",
    },
    {
      icon: <Award size={28} />,
      title: "Custom Solutions",
      description: "Tailored designs for automotive, industrial, and UAV applications",
    },
    {
      icon: <Shield size={28} />,
      title: "Secure Systems",
      description: "Built-in cybersecurity, OTA updates, and global compliance",
    },
    {
      icon: <Target size={28} />,
      title: "Innovation with Localization",
      description: "Indigenous development for cost efficiency and adaptability",
    },
    {
      icon: <Users size={28} />,
      title: "Expert Team",
      description: "40+ professionals with 10+ years of core expertise",
    },
  ];


  return (
    <section id="about" className="about-section ">
   
      <div className="about-container">
        <div className="about-header">
          <h2>About <span style={{color:"#EE8100"}}>Valkontek</span></h2>
          <p>
            Founded in October 2020 and based in Hyderabad, India, Valkontek is
            a pioneering automotive product company dedicated to driving
            innovation and excellence in the electronics industry. We provide
            cutting-edge solutions designed to meet evolving customer needs with
            a focus on technological advancement, quality craftsmanship, and
            customer satisfaction.
          </p>
        </div>

        <div className="values-grid" data-aos="fade-right">
          {values.map((item, index) => (
            <div key={index} className="value-card">
              <div className="icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
  
        <div className="stats-container" >
          <div className="stat-item">
           <Counter targetValue={40} text={"+"}/>
            <p className="stat-title">Team Members</p>
            <p className="stat-desc">
              Hardware, Software, Firmware, PCB Layout, Mechanical CAD
            </p>
          </div>
          <div className="stat-item">
             <Counter targetValue={4000} text={"Sq.Ft"}  />
            <p className="stat-title">Assembly Unit</p>
            <p className="stat-desc">
              Autonomous assembly with ESD conveyor
            </p>
          </div>
          <div className="stat-item">
             <Counter targetValue={5}text={"+"} />
            <p className="stat-title">Core Expertise</p>
            <p className="stat-desc">
              Industry veterans leading innovation
            </p>
          </div>
        </div>
      </div>
    </section>
    
  );
  
};

export default About;
