import React, { useState } from "react";
import "./Products.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {Eye} from "lucide-react"
import ProductModal from "./ProductModal";
import obd from "../../assets/OBD.PNG"
import sae from "../../assets/SAE.PNG";
import telematic from "../../assets/Telematic.PNG";
import battery from "../../assets/edgeaibattery.PNG";
import vcu from "../../assets/VCU.PNG"
import cluster from "../../assets/edgeaicluster.PNG";




// import telematics from "../assets/telematics.jpg";
const productData = [
  {
    id: 1,
    title: "OBD-II Diagnostic Interface",
    description:
      "Advanced OBD-II diagnostic interface for comprehensive vehicle diagnostics and real-time monitoring.",
    image: obd,
    // category: "Automotive Diagnostics",
    variants:"Vconnect Lite|Vconnect|Vconnect Pro",
    keys:["Remote Vehicle Diagnostics",
          " Fault Code Reading and Clearing",
          "ECU Flashing through CAN and K-Line Protocols",
          " Data Logging",
          " OTA (Over-the-Air) Flashing"
        ]

  },
  {
    id: 2,
    title: " SAE-J2534 Diagnostic Interface",
    description:
      "SAE J2534 compliant pass-through interface for ECU programming and reflashing applications.",
    image: sae,
    // category: "ECU Reprogramming",
    keys:[ "IP-based Communication (TCP/IP, UDP/IP)",
 "High-speed USB, Wi-Fi & BLE",
 "Cloud Connectivity: IPv4 / IPv6 / HTTP / HTTPS / MQTT",
 "OTA updates and Cybersecurity Compliance"]
  },
  {
    id: 3,
    title: "Telematics Control Unit",
    description:
      "Comprehensive telematics solution for fleet management and connected vehicle applications.",
    image: telematic,
    // category: "Vehicle Connectivity",
    keys:[ "Driver and Vehicle Behavior Analytics",
 "Mobilization / Immobilization Control",
 "Crash & Fall Detection",
 "Fault Code Monitoring",
 "OTA Flashing and Data Loggin"]
  },
  {
    id:4,
    title:" Edge-AI Battery Management System (BMS)",
    description:"The Edge-AI BMS combines traditional battery monitoring with on-device artificial intelligence for predictive energy management",
    image:battery,
    keys:[
 "Hybrid SoC / SoH / SoE / RUL Estimation",
 "Predictive Thermal Safety",
 "Adaptive Charge Optimization & Smart Balancing",
 "Prognostic Trouble Codes (pDTCs)",
 "OTA updates for firmware and AI model",
    ]
  },
  {
    id:5,
    title:" Vehicle Control Unit (VCU)",
    description:" The Vehicle Control Unit (VCU) acts as the central intelligence of an electric vehicle — coordinating all major subsystems including powertrain, battery management, motor control, and vehicle diagnostics",
    image:vcu,
    keys:[
        " Powertrain Management",
        " Drive Mode Logic",
        "Torque & Speed Control",
        "Regenerative Braking",
        " Vehicle Diagnostics & Fault Handling",
    ]
  },
  {
    id:6,
    title:" Edge-AI Instrument Clusters",
    description:" The Edge-AI Instrument Cluster redefines vehicle intelligence by combining real-time data visualization with on-device AI analytics",
    image:cluster,
    keys:[
       " Real-time Vehicle Data Display",
 "AI-driven Predictive Insights" ,
 "Seamless ECU Integration",
 "Customizable UI/UX ",
 "Smart Connectivity & OTA Updates "
    ]
  }
];


const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShow = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };
 
  return (
    <section className="products-section" id="products">
      <h2 className="products-title">Our <span>Products</span></h2>
      <div className="products-grid" data-aos="zoom-in">
        {productData.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>

            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.description}</p>

              <button
                className="view-btn"
                onClick={() => handleShow(product)}
              >
                <Eye size={22} /> View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <ProductModal
        show={showModal}
        handleClose={handleClose}
        product={selectedProduct}
      />
    </section>
  );
};

export default Products;
