import React from 'react';
import './Contact.css';  // Import custom CSS for additional styling

const Contact = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="contact-form-box p-4">
        <h2 className="text-center mb-4">Contact Us</h2>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
