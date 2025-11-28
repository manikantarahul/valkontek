import React from 'react'
import yash from "../../assets/yashu.png"
import sai from "../../assets/sainadh.png"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./Testimonials.css"

function Testimonials() {
  return (
    <section className="testimonial-section">
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner text-center">
          <div className="carousel-item active">
            <p className="testimonial-text">
              We focus on steering the company toward sustainable growth and innovation.
              We strive to foster a culture of excellence, empowering our team to achieve their best.
              By aligning our vision with strategic decisions, we aim to drive long-term success
              and create value for stakeholders.
            </p>
            <div className="person-info">
              <img
                src={yash}
                alt="Yashwanth Kolli"
                className="person-image"
              />
              <h5 className="person-name">Yashwanth Kolli</h5>
              <p className="person-role">CEO, Valkontek</p>
            </div>
          </div>
          <div class="carousel-item">
            <p className="testimonial-text">
              My mission is to amplify our brand's voice and connect with our audience in meaningful ways.
              I lead with creativity and data-driven strategies, ensuring every campaign drives impact.
              By staying ahead of market trends, I aim to innovate and deliver value that aligns with our company's vision.
            </p>
            <div className="person-info">
              <img
                src={sai}
                alt="Sainadh G"
                className="person-image"
              />
              <h5 className="person-name">Sainadh G</h5>
              <p className="person-role">CMO, Valkontek</p>
            </div>
          </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    </section>
  );
}

export default Testimonials