import React from 'react';
import './Home.css'; // Import the custom CSS for video background


const Home = () => {
  return (
    <div className="home-container">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/giphy.webp" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="jumbotron text-center text-white">
        <h1 className="display-4">Welcome to Our Travel Website</h1>
        <p className="lead">Explore the world with our exciting travel packages.</p>
        <a className="btn btn-primary btn-lg" href="/packages" role="button">View Packages</a>
      </div>
    </div>
    </div>
  );
}

export default Home;
