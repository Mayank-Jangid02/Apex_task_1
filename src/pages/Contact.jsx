import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your request has been received. We will contact you shortly.");
    e.target.reset();
  };

  return (
    <div className="contact page-padding">
      <div className="container">
        <div className="contact-header text-center animate-fade-up">
          <h1 className="page-title">Get in <span className="text-gradient">Touch</span></h1>
          <p className="page-subtitle">We're here to help and answer any questions you might have.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info animate-fade-up delay-200">
            <div className="info-card glass-card">
              <h3>Contact Information</h3>
              <p>Reach out to us directly or visit our main campus.</p>
              
              <ul className="info-list">
                <li>
                  <MapPin size={24} className="info-icon" />
                  <div>
                    <strong>Address</strong>
                    <p>123 Health Avenue, Medical District, NY 10001</p>
                  </div>
                </li>
                <li>
                  <Phone size={24} className="info-icon" />
                  <div>
                    <strong>Phone</strong>
                    <p>+1 (800) 123-4567</p>
                  </div>
                </li>
                <li>
                  <Mail size={24} className="info-icon" />
                  <div>
                    <strong>Email</strong>
                    <p>contact@apexhealth.com</p>
                  </div>
                </li>
                <li>
                  <Clock size={24} className="info-icon" />
                  <div>
                    <strong>Working Hours</strong>
                    <p>Mon - Fri: 8:00 AM - 8:00 PM<br/>Emergency: 24/7</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="contact-form-wrapper animate-fade-up delay-300">
            <form className="glass-card contact-form" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" className="form-input" />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" className="form-input" />
              </div>
              
              <div className="form-group">
                <label htmlFor="department">Department (Optional)</label>
                <select id="department" className="form-input">
                  <option value="">Select Department</option>
                  <option value="general">General Inquiry</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="neurology">Neurology</option>
                  <option value="pediatrics">Pediatrics</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" placeholder="How can we help you?" className="form-input"></textarea>
              </div>
              
              <button type="submit" className="btn-primary form-submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
