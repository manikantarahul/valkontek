import { useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Services from './components/services/Services.jsx'
import Products from './components/products/Products.jsx'
import Clients from './components/clients/Clients.jsx'
import WhyChooseUs from './components/whychooseus/WhyChoose.jsx'
import Testimonals from './components/testimonials/Testimonials.jsx'

import ContactUs from './components/contactus/ContactUs.jsx'
import Footer from './components/footer/Footer.jsx'
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import AOS from "aos";
import { Toaster } from 'react-hot-toast';
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Products />
      <Clients />
      <WhyChooseUs />

      <ContactUs />
      <Footer />
      <Toaster position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
        }}
      />
    </div>

  )
}

export default App
