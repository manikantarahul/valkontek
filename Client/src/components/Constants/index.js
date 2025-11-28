import obd from  "../../assets/obd.png"
import telematic from  "../../assets/telematic.png";
import mobileapk from  "../../assets/mobile apk.png";
import Ev from  "../../assets/Ev.png";
import cloud from  "../../assets/cloud.png";
import customer  from  "../../assets/customer.png";  
import evcharger from  "../../assets/evcharger.jpg";
import vtracker from  "../../assets/vtracker.jpg";
import tcu from "../../assets/tcu.png";
import vconnectbase from "../../assets/vconnectbase.jpg";

import telephone from "../../assets/telephone.png";
import clock from "../../assets/clock.png";
import envelope from "../../assets/envelope.png";
import geo from "../../assets/geo.png";

import autm from "../../assets/autm.png";
import versatile from "../../assets/versatile.png";
import calon from "../../assets/calon.png";
import varcas from "../../assets/varcas.png";
import quantum from "../../assets/quantum.png";

import { Cpu, Wrench, FileCode, CircuitBoard, FlaskConical } from "lucide-react";


export {obd,telematic,mobileapk,Ev,cloud,customer,evcharger,tcu,vtracker,
    vconnectbase,telephone,clock,envelope,geo,autm,calon,versatile,varcas,quantum,
  };

//  const servicesData = [
//     {
//       icon: Wrench ,
//       title: "Full Product Cycle Development",
//       subtitle: "Complete journey from concept to production",
//       points: [
//         "Consultation & Requirements Analysis",
//         "Research & Development (R&D)",
//         "Proof of Concept (POC)",
//         "PCB & Embedded Software Creation",
//         "Testing & Bug Fixing",
//         "Production Documentation",
//       ],
//       image: obd,
//     },
//     {
//       icon: Cpu ,
//       title: "Embedded Electronics Design",
//       subtitle: "Expert hardware design with leading microcontrollers",
//       points: [
//         "Arm Cortex M, Cortex R, Cortex A",
//         "AVR & PIC Microcontrollers",
//         "Nordic Semiconductor Solutions",
//         "Texas Instruments & STMicroelectronics",
//         "32 Bit & 64 Bit Processors",
//         "Qualified Project Estimations",
//       ],
//       image: cloud,
//     },
//     {
//       icon: FileCode ,
//       title: "Embedded Software Development",
//       subtitle: "Reliable firmware and custom software solutions",
//       points: [
//         "C/C++ Development Expertise",
//         "RTOS: FreeRTOS, Zephyr, ThreadX",
//         "RTEMS, LinuxOS, NuttX, ROS",
//         "Firmware & Device Drivers",
//         "Legacy Software Migration",
//         "Board Support Package Development",
//       ],
//       image: telematic,
//     },
//     {
//       icon: CircuitBoard,
//       title: "PCB Design & Layout",
//       subtitle: "Professional PCB design from concept to production",
//       points: [
//         "Up to 24 Layer Multi-Layer Layouts",
//         "Rigid Board Design Expertise",
//         "Altium Designer, Cadence Allegro",
//         "Component Selection & Sourcing",
//         "15 Years Professional Experience",
//       ],
//       image: customer,
//     },
//     {
//       icon: FlaskConical ,
//       title: "Electronic Prototyping",
//       subtitle: "Comprehensive prototyping and testing services",
//       points: [
//         "Virtual Simulations",
//         "Development Kits Testing",
//         "Full-Scale PCB Prototypes",
//         "Performance Optimization",
//         "Fault Detection & Fixing",
//       ],
//       image: mobileapk,
//     },
//   ];
const workData=[
   {
        icon:vconnectbase,
        title:"Vconnect OBD-II diagnostic device ",
        description:"OBD-II is a diagnostic tool for monitoring and customizing vehicle systems via mobile app.",
        route:"vconnect"
    },
     {
        icon:tcu,
        title:"Tracker control unit",
        description:"A telematic device tracks vehicle performance, location, and driving behavior using GPS and OBD technology",
        route:"tracker"
    },
     {
        icon:vtracker,
        title:"Vehicle tracker system",
        description:"A Vehicle Tracker System is a GPS technology to monitor and manage vehicle locations and movements in real time.",
        route:"vtracker"
    },
    {
        icon:evcharger,
        title:"EVcharger",
        description:"An Electric Charge powers electric vehicles (EVs) by supplying electrical energy to recharge their batteries.",
        route:"evcharger"
    },
    
   
     
]
const DetailsData=[
    {
    icon:geo,
    title:"Address",
    info:"Flat No : 201 SM Reddy Complex, Capital Pk Rd Cyber Hills Colony, VIP Hills, Jaihind Enclave, Madhapur, Hyderabad, Telangana 500081,"
    },
    {
        icon:telephone,
        title:"Contact",
        info:"+91 8555841414"
    },
    {
        icon:envelope,
        title:"Email",
        info:"info@valkontek.com"
    },
    {
        icon:clock,
        title:"Working Hours",
        info:"Mon-Sat: 9:30am - 6:30pm"
    }
]
const ClientsData=[
    {
    icon:autm
    },
    {
        icon:versatile
    },
    {
        icon:calon
    },
    {
        icon:varcas
    },
    {
        icon:quantum
    }
]

export {servicesData,workData,DetailsData,ClientsData,};