import React from 'react';
import "./ContactNews.css";

const ContactNews = () => {
  return (
    <div>
      <section className="quote-section">
        <div className="quote-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur consequat faucibus porttitor enim et.</p>
          <h3>John Doe</h3>
        </div>
      </section>

      <section className="news-section">
        <h2>BETTER INFORMATION, BETTER HEALTH</h2>
        <h3>News</h3>
        <div className="news-wrapper">
          <div className="news-container">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="news-card">
                <img src="https://via.placeholder.com/150" alt="news" />
                <div className="news-info">
                  <p>Monday 05, September 2021 | By Author</p>
                  <h4>This Article's Title goes Here, but not too long.</h4>
                  <div className="news-stats">
                    <span>👁️ 68</span>
                    <span>❤️ 86</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>GET IN TOUCH</h2>
        <h3>Contact</h3>
        <div className="contact-container">
          <div className="contact-card">
            <h4>EMERGENCY</h4>
            <p>(237) 681-812-255</p>
            <p>(237) 666-331-894</p>
          </div>
          <div className="contact-card">
            <h4>LOCATION</h4>
            <p>0123 Some place</p>
            <p>9876 Some country</p>
          </div>
          <div className="contact-card">
            <h4>EMAIL</h4>
            <p>fidelineeseo@gmail.com</p>
            <p>myebstudios@gmail.com</p>
          </div>
          <div className="contact-card">
            <h4>WORKING HOURS</h4>
            <p>Mon-Sat 09:00-20:00</p>
            <p>Sunday Emergency only</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactNews;
