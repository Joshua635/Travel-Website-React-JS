import React from 'react';



const BookNow = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="form-container">
        <h2 className="text-center mb-4">Book Your Trip Now!</h2>
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" className="form-control" placeholder="Full Name" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" className="form-control" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <label>Package</label>
            <select className="form-control">
              <option>Beach Paradise</option>
              <option>Mountain Adventure</option>
              <option>City Exploration</option>
              <option>Singapore Exploration</option>
              <option>Rome Exploration</option>
              <option>New York Exploration</option>
              <option>Maldives Exploration</option>
              <option>London Exploration</option>
            </select>
          </div>
          <button type="submit" className="btn btn-success w-100">Book Now</button>
        </form>
      </div>
    </div>
  );
}

export default BookNow;
