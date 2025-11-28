import React from "react";
import {
  Award,
  ShieldCheck,
  FileText,
  Lightbulb,
  Headphones,
  Clock,
  CheckCircle2,
} from "lucide-react";
import "./WhyChoose.css";
const whychoose = [
  {
    icon: <Award size={20}  />,
    title: "Proven Expertise",
    description:
      "Over 10 years of experience in embedded systems, automotive electronics, and IoT solutions with a track record of successful project deliveries.",
    points: [
      "10+ Years Experience",
      "Expert Engineering Team",
      "Industry Recognition",
      "Technical Leadership",
    ],
  },
  {
    icon: <ShieldCheck size={20}  />,
    title: "Quality Assurance",
    description:
      "Rigorous quality control processes, comprehensive testing protocols, and adherence to international standards ensure reliable and robust solutions.",
    points: [
      "ISO Certified Processes",
      "Comprehensive Testing",
      "Quality Standards",
      "Reliability Focus",
    ],
  },
  {
    icon: <FileText size={20}  />,
    title: "Compliance & Standards",
    description:
      "Full compliance with automotive, medical, and industrial standards including ISO 26262, IEC 61508, and other safety-critical requirements.",
    points: [
      "ISO 26262 Compliance",
      "Safety Standards",
      "Regulatory Approval",
      "Certification Support",
    ],
  },
  {
    icon: <Lightbulb size={20}  />,
    title: "Innovation Focus",
    description:
      "Cutting-edge research and development capabilities with state-of-the-art laboratory facilities and continuous technology advancement.",
    points: [
      "R&D Excellence",
      "Latest Technologies",
      "Innovation Lab",
      "Future-Ready Solutions",
    ],
  },
  {
    icon: <Headphones size={20}  />,
    title: "Customer Support",
    description:
      "Dedicated customer support with comprehensive documentation, training, and ongoing technical assistance throughout the product lifecycle.",
    points: ["24/7 Support", "Technical Training"],
  },
  {
    icon: <Clock size={20}  />,
    title: "Timely Delivery",
    description:
      "Proven project management methodologies and efficient development processes ensure on-time delivery without compromising quality.",
    points: ["On-Time Delivery", "Project Management"],
  },
];

 function WhyChooseUs () {
  return (
    <section className="why-choose-container"id="why-choose-us">
      <header className="wc-head-section">
        <h2>
          Why Choose <span className="highlight">Valkontek</span>
        </h2>
        <p>
          Partner with us for innovative embedded solutions backed by expertise,
          quality, and commitment to excellence in every project we deliver.
        </p>
      </header>

      <div className="why-choose-cards-grid">
        {whychoose.map((card, idx) => (
          <article key={idx} className="wc-card">
            <div className="wc-icon-box">{card.icon}</div>
            <h3 className="wc-card-title">{card.title}</h3>
            <p className="wc-card-desc">{card.description}</p>
            <div className="wc-points-grid">
              {card.points.map((point, i) => (
                <div key={i} className="wc-point">
                  <CheckCircle2 size={20} className="wc-check-icon" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div className="wc-bottom-line"></div>
          </article>
        ))}
        
      </div>
      
    </section>
  );
}
export default WhyChooseUs  ;