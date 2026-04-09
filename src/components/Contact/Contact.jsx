import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaClock, 
  FaCalendarAlt, 
  FaBolt 
} from "react-icons/fa";
import "./Contact.css";

const Contact = ({ darkMode }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_oesmsdb",
        "template_ll4z6pb",
        form.current,
        "_iFJtzWlYvFtzsv2O"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        () => {
          alert("Something went wrong!");
        }
      );
  };

  return (
    <section className={`contact-section ${darkMode ? "dark-mode" : "light-mode"}`} id="contact">
      
      {/* HEADER */}
      <div className="text-center mb-5">
        <h2 className="contact-main-title">Contact</h2>
        <p className="contact-description mx-auto">
          Let's discuss your next project or just say hello. I'm always open to connecting.
        </p>
      </div>

      <div className="contact-container">
        
        {/* LEFT - Get In Touch Grid */}
        <div className="glass-card">
          <h3 className="section-title">Get In Touch</h3>
          
          <div className="info-grid">
            <div className="info-card">
              <div className="info-header">
                <FaEnvelope className="icon" />
                Email
              </div>
              <a href="mailto:shehansamith942@gmail.com">shehansamith942@gmail.com</a>
            </div>

            <div className="info-card">
              <div className="info-header">
                <FaPhone className="icon" />
                Phone
              </div>
              <a href="tel:+94763346660">+94 76 334 6660</a>
            </div>

            <div className="info-card">
              <div className="info-header">
                <FaMapMarkerAlt className="icon" />
                Location
              </div>
              <p>Sri Lanka</p>
            </div>

            <div className="info-card">
              <div className="info-header">
                <FaCalendarAlt className="icon" />
                Availability
              </div>
              <span>Open for freelance & full-time</span>
            </div>

            <div className="info-card">
              <div className="info-header">
                <FaClock className="icon" />
                Working Hours
              </div>
              <span>Mon - Fri | 9AM - 6PM</span>
            </div>

            <div className="info-card">
              <div className="info-header">
                <FaBolt className="icon" />
                Response Time
              </div>
              <span>Within 24 hours</span>
            </div>
          </div>
        </div>

        {/* RIGHT - Form */}
        <div className="glass-card">
          <h3 className="section-title">Send Message</h3>
          <form ref={form} onSubmit={sendEmail} className="form-wrapper">
            <input type="text" name="user_name" placeholder="Full Name" required />
            <input type="email" name="user_email" placeholder="Email Address" required />
            <textarea name="message" placeholder="Your Message..." rows="6" required></textarea>
            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </div>
      </div>

      {/* CONNECT SECTION */}
      <div className="connect-section">
        <div className="glass-card">
          <h3 className="section-title">Connect with me</h3>
          <div className="connect-links">
            <a href="https://github.com/shehan4001" target="_blank" rel="noreferrer" className="connect-box">
              <FaGithub className="connect-icon" />
              <div>
                <p className="title">GitHub</p>
                <span>@Shehan-Samith-Isuranga</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/shehan-samith-isuranga-2a057736b" target="_blank" rel="noreferrer" className="connect-box">
              <FaLinkedin className="connect-icon" />
              <div>
                <p className="title">LinkedIn</p>
                <span>Shehan Samith Isuranga</span>
              </div>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;