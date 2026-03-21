import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <div className="contact-page">

      {/* BACKGROUND VIDEO */}
      <video
        className="contact-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/food-2.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="contact-overlay"></div>

      {/* MAIN CONTENT */}
      <div className="contact-content">

        <h1 className="contact-title">Contact Us</h1>

        <div className="contact-container">

          {/* LEFT - FORM */}
          <div className="contact-form">

            <h2>Get in Touch</h2>

            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>

            {/* REVIEW BOX */}
            <textarea placeholder="Share your experience / review"></textarea>

            <button>Send Message</button>

            <p className="note">
              We’d love to hear from you. Every message and every experience you share helps us grow and serve better.
            </p>

          </div>

          {/* RIGHT - INFO */}
          <div className="contact-info">

            <h2>Contact Information</h2>

            <p><strong>Name:</strong> Sashank Parupudi</p>
            <p><strong>Email:</strong> sashankparupudi223@gmail.com</p>
            <p><strong>Support:</strong> sashankparupudi910@gmail.com</p>
            <p><strong>Phone:</strong> 7000010454</p>
            <p><strong>WhatsApp:</strong> 7000010454</p>

            <p>
              <strong>Address:</strong><br />
              Flat No-201, KNR Heights,<br />
              Opp KGK Kalyana Mandapam,<br />
              DhanalakshmiPuram, Nellore
            </p>

            <p><strong>Hours:</strong> Mon–Sun, 4 PM – 10 PM</p>

            <div className="socials">
              <a href="https://www.instagram.com/sashank233" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>

          </div>

        </div>

        {/* BOTTOM SECTION */}
        <section className="contact-bottom">

          <div className="bottom-card">
            <h2>We’re Always Here</h2>
            <p>
              Whether it’s feedback, suggestions, or just a hello — your voice matters to us. 
              Every message helps us improve and serve you better with passion and care.
            </p>
          </div>

          <div className="bottom-card">
            <h2>Visit Us</h2>
            <p>
              Experience Italian Flavors beyond the screen. Step into a world of taste, 
              aroma, and warmth where every dish tells a story worth remembering.
            </p>
          </div>

        </section>
        {/* FOOTER */}
<footer className="site-footer">
  <div className="footer-content">

    <h2>Italian Flavors</h2>

    <p>
      At Italian Flavors, every dish is crafted with passion, tradition, and a touch of elegance. 
      We believe food is more than just a meal — it’s an experience that brings people together, 
      creates memories, and celebrates the beauty of authentic taste.
    </p>

    <p className="footer-copy">
      © {new Date().getFullYear()} Italian Flavors. All rights reserved.
    </p>

  </div>
</footer>

      </div>

    </div>
  )
}

export default ContactUs