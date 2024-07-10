import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start d-none d-lg-block">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">
              <img src="https://zameensquare.com/_next/static/media/zameen-logo.be926326.png" alt="Zameen Square" />
            </h5>
            <p>
              Reach our team at <strong>+91 6363099125</strong> or mail us to <a href="mailto:contact@zameensquare.com">contact@zameensquare.com</a> for all enquiries
            </p>
            <form className="d-flex">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
                aria-label="Email"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-success"
                type="button"
                id="button-addon2"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="text-dark">About Us</a></li>
              <li><a href="#!" className="text-dark">Contact Us</a></li>
              <li><a href="#!" className="text-dark">Privacy Policy</a></li>
              <li><a href="#!" className="text-dark">Refund Policy</a></li>
              <li><a href="#!" className="text-dark">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Top Localities</h5>
            <div className="d-flex flex-wrap">
              <a href="#!" className="text-dark me-3">Properties in New Delhi</a>
              <a href="#!" className="text-dark me-3">Property in Mumbai</a>
              <a href="#!" className="text-dark me-3">Property in Chennai</a>
              <a href="#!" className="text-dark me-3">Property in Bengaluru</a>
              <a href="#!" className="text-dark me-3">Property in Ahmedabad</a>
              <a href="#!" className="text-dark me-3">Property in Hyderabad</a>
              <a href="#!" className="text-dark">Property in Gurgaon</a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-light">
        © 2024 All rights reserved.
        <div className="d-flex justify-content-center mt-2">
          <a href="#!" className="text-dark me-4"><i className="fab fa-facebook-f"></i></a>
          <a href="#!" className="text-dark me-4"><i className="fab fa-instagram"></i></a>
          <a href="#!" className="text-dark me-4"><i className="fab fa-twitter"></i></a>
          <a href="#!" className="text-dark"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
