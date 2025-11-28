
import "./Services.css";

import {
  Cog,
  Cpu,
  Code,
  CircuitBoard,
  FlaskConical,
  Mail,
} from "lucide-react";

import proddev from "../../assets/product-development.jpg";
import embele from "../../assets/embedded-electronics.jpg";
import embsoft from "../../assets/embedded-software.jpg";
import pcb from "../../assets/pcb-design.jpg";
import proto from "../../assets/prototyping.jpg";

const services = [
  {
    icon: <Cog size={28} />,
    title: "Full Product Cycle Development",
    image: proddev,
    points: [
      "Consultation & Requirements Analysis",
      "Research & Development (R&D)",
      "Proof of Concept (POC)",
      "PCB & Embedded Software Creation",
      "Testing & Bug Fixing",
      "Production Documentation",
    ],
  },
  {
    icon: <Cpu size={28} />,
    title: "Embedded Electronics Design",
    image: embele,
    points: [
      "Arm Cortex-M,Cortex-R, Cortex-A ",
      "AVR & PIC Microcontrollers",
      "Nordic Semiconductor Solutions",
      "Texas Instruments & STMicroelectronics",
      "32 & 64 Bit Processors",
      "Qualified Project Estimations",
    ],
  },
  {
    icon: <Code size={28} />,
    title: "Embedded Software Development",
    image: embsoft,
    points: [
      "C/C++ Development Expertise",
      "RTOS: FreeRTOS, Zephyr, ThreadX",
      "Firmware & Device Drivers",
      "Legacy Software Migration",
      "RTEMS, LiteOS, NuttX, ROS",
      "Board Support Package Development",
    ],
  },
  {
    icon: <CircuitBoard size={28} />,
    title: "PCB Design & Layout",
    image: pcb,
    points: [
      "Up to 24-Layer Multi-Layer Layouts",
      "Altium Designer, Cadence Allegro",
      "Component Selection & Sourcing",
      "15 Years Professional Experience",
    ],
  },
  {
    icon: <FlaskConical size={28} />,
    title: "Electronic Prototyping",
    image: proto,
    points: [
      "Virtual Simulations",
      "Development Kits Testing",
      "Full Scale PCB Prototypes",
      "Fault Detection & Fixing",
    ],
  },
];

const Services = () => {

  const handleContactClick = () => {
    const contactSection = document.getElementById("contactus");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "#contact";
    }
  };

  return (
    <section className="service-section" id="services"  >
      <div className="services-header">
        <h2 className="title">
          Our <span style={{ color: "#EE8100" }}>Services</span>
        </h2>
        <p className="subtitle">
          Comprehensive technology solutions designed to drive innovation and
          accelerate your digital transformation journey with cutting-edge
          embedded systems and IoT technologies.
        </p>
      </div>

      <div className="services-grid" data-aos="zoom-in">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            {/* Top Image */}
            <div
              className="card-image"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className="icon-wrapper">{service.icon}</div>
            </div>

            {/* Content */}
            <div className="card-content">
              <h3 className="card-title">{service.title}</h3>

              <ul className="card-list">
                {service.points.map((point, i) => (
                  <li key={i} >
                    <span className="dot" />
                    <span className="point-text">{point}</span>
                  </li>
                ))}
              </ul>

              <button className="contact-btn" onClick={handleContactClick}>
                <Mail className="contact-icon" size={18} />
                Contact Us
              </button>
            </div>

            <div className="bottom-line" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
