import React from 'react';
import './Packages.css';  // Import the custom CSS file

const Packages = () => {
  const travelPackages = [
    { name: "Beach Paradise", price: "$500", image: "beach.jpg" },
    { name: "Mountain Adventure", price: "$700", image: "mountain.jpg" },
    { name: "City Exploration", price: "$300", image: "city.jpeg" },
    { name: "Singapore Exploration", price: "$500", image:"singapore.jpg" },
    { name: "Rome Exploration", price: "$700", image: "rome.jpg" },
    { name: "New York Exploration", price: "$800", image: "new york.jpg" },
    { name: "Maldives Exploration", price: "$900", image: "maldives.jpeg" },
    { name: "London Exploration", price: "$1000", image: "london.jpg" }
    
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Travel Packages</h2>
      <div className="row">
        {travelPackages.map((pkg, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card transition-card">
              <img src={pkg.image} className="card-img-top" alt={pkg.name} />
              <div className="card-body">
                <h5 className="card-title">{pkg.name}</h5>
                <p className="card-text">Price: {pkg.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packages;
