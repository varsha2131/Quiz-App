import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const HomePage = () => {

  return (
    <>
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#f7f7f7' }}>
        <div className="container">
          <NavLink className="navbar-brand" to="/" style={{ fontSize: '1.8rem', color: '#000' }}>QuizMaster</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" style={{ color: '#000' }}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login" style={{ color: '#000' }}>Login</NavLink>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-dark">Register</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Hero Section */}
      <div className="hero-section text-center text-dark py-5" style={{ background: 'linear-gradient(135deg, #e0e0e0, #f1f5f8)', minHeight: '60vh' }}>
        <div className="container">
          <h1 className="display-4 mb-3" style={{ color: '#000' }}>Unlock Your Knowledge with QuizMaster</h1>
          <p className="lead mb-4" style={{ color: '#333' }}>Join now to start testing your skills, learning new things, and having fun! Ready to challenge yourself?</p>
          <Link to="/QuizApp">
            <button className="btn btn-dark btn-lg">Start Your Journey</button>
          </Link>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container text-center my-5">
        <h2 className="text-dark mb-4">Why Choose QuizMaster?</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm mb-4" style={{ borderRadius: '10px', backgroundColor: '#f7f7f7' }}>
              <div className="card-body">
                <h5 className="card-title text-dark">Interactive Quizzes</h5>
                <p className="card-text" style={{ color: '#333' }}>Engage with dynamic quizzes designed to test and expand your knowledge in a fun, interactive way.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm mb-4" style={{ borderRadius: '10px', backgroundColor: '#f7f7f7' }}>
              <div className="card-body">
                <h5 className="card-title text-dark">Instant Feedback</h5>
                <p className="card-text" style={{ color: '#333' }}>Get instant feedback and track your progress, helping you focus on areas that need improvement.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm mb-4" style={{ borderRadius: '10px', backgroundColor: '#f7f7f7' }}>
              <div className="card-body">
                <h5 className="card-title text-dark">Skill Development</h5>
                <p className="card-text" style={{ color: '#333' }}>Sharpen your problem-solving skills and critical thinking with every quiz you take.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section position-relative">
        <img src="https://images.unsplash.com/photo-1532635264-75b5978b8a9b" alt="cta" className="img-fluid w-100" style={{ height: '60vh', objectFit: 'cover' }} />
        <div className="cta-overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100" style={{ top: 0, left: 0, background: 'rgba(240, 240, 240, 0.7)' }}>
          <Link to="/QuizApp">
            <button className="btn btn-dark btn-lg">Start Now</button>
          </Link>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-light text-dark py-5">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4 mb-3">
              <h5>About QuizMaster</h5>
              <p>Your go-to platform for interactive learning through fun quizzes. Test your knowledge, earn rewards, and grow your skills!</p>
            </div>
            <div className="col-md-4 mb-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><NavLink to="/" className="text-dark">Home</NavLink></li>
                <li><NavLink to="/login" className="text-dark">Login</NavLink></li>
                <li><NavLink to="/contact" className="text-dark">Contact Us</NavLink></li>
              </ul>
            </div>
            <div className="col-md-4 mb-3">
              <h5>Follow Us</h5>
              <a href="#" className="text-dark me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-dark me-3"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-dark me-3"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-dark"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
          <hr className="border-dark" />
          <p className="mb-0">&copy; 2024 QuizMaster. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
