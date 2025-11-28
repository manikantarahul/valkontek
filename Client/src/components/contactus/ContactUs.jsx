import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";
import "./ContactUs.css";
import axios from "axios";
import toast from "react-hot-toast";
const services = [
  "Embedded Systems",
  "Automotive Electronics",
  "IoT Solutions",
  "Custom Software Development",
];

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    serviceInterest: "",
    message: "",
  });

  const [messageCharCount, setMessageCharCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "message") {
      setMessageCharCount(value.length);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:2020/contact", formData).then((res) => {
      console.log(res)
      if (res.data.success) {
        toast("Mail Sent successfully", {
          style: {
            backgroundColor: 'green',
            color: 'white',
            fontWeight: "bold",
            fontFamily: "cursive"
          },
        })
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          serviceInterest: "",
          message: "",
        });
      } else {
        toast("Mail Sent failed", {
          style: {
            backgroundColor: 'red',
            color: 'white',
            fontWeight: "bold",
            fontFamily: "cursive"
          },
        })
      }
    })
    setMessageCharCount(0);
  };

  return (
    <section className="get-in-touch-section" id="contactus">
      <div className="header">
        <h2>
          Get In <span className="highlight">Touch</span>
        </h2>
        <p className="subtext">
          Ready to transform your ideas into innovative embedded solutions?
          Contact our expert team to discuss your project requirements and
          discover how we can help.
        </p>
      </div>

      <div className="content-grid">
        {/* Contact Information */}
        <div className="contact-info card">
          <h3>Contact Information</h3>
          <p className="info-text">
            Reach out to us through any of the following channels. Our team is
            ready to assist you with your embedded systems and IoT solution
            requirements.
          </p>

          <div className="info-item">
            <div className="icon-bg">
              <MapPin size={20} color="#fff" />
            </div>
            <div>
              <h4>Address</h4>
              <address className="info-desc">
                #201, SM Reddy Complex, Capital Park Lane, Near Image Gardens, <br />
                Madhapur, Hyderabad, TS 500081, India  – 560001
              </address>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-bg">
              <Phone size={20} color="#fff" />
            </div>
            <div>
              <h4>Phone</h4>
              <a href="tel:+918555841414" className="info-desc" >+91 85558 41414</a>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-bg">
              <Mail size={20} color="#fff" />
            </div>
            <div>
              <h4>Email</h4>
              <a href="https://mail.google.com/" target="_blank" className="info-desc">info@valkontek.com</a>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-bg">
              <Clock size={20} color="#fff" />
            </div>
            <div>
              <h4>Business Hours</h4>
              <p className="info-desc">Mon - Sat: 9:30 AM – 6:30 PM</p>
            </div>
          </div>

          <div className="map-container">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.5594503853887!2d78.38547632834396!3d17.448328678359328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91604cb05695%3A0x5a278fb4063a33a6!2sSM%20Reddy%20Complex%2C%20Capital%20Pk%20Rd%2C%20Cyber%20Hills%20Colony%2C%20VIP%20Hills%2C%20Jaihind%20Enclave%2C%20Madhapur%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1762773540511!5m2!1sen!2sin"
              width="100%"
              height="180"
              style={{ border: 0, borderRadius: "10px", marginTop: "40px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form card" onSubmit={handleSubmit}>
          <h3>Send Us a Message</h3>

          <div className="input-row">
            <div className="input-group">
              <label htmlFor="fullName">
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">
                Email Address <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
              />
            </div>

            <div className="input-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Enter your company name"
                value={formData.company}
                onChange={handleChange}
                autoComplete="organization"
              />
            </div>
          </div>

          <div className="input-group full-width">
            <label htmlFor="serviceInterest">Service Interest</label>
            <select
              id="serviceInterest"
              name="serviceInterest"
              value={formData.serviceInterest}
              onChange={handleChange}
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="input-group full-width">
            <label htmlFor="message">
              Message <span className="required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              maxLength={500}
              placeholder="Describe your project requirements..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className="char-count">{messageCharCount}/500</div>
          </div>

          <button type="submit" className="btn-submit">
            Send Message &nbsp;<Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
