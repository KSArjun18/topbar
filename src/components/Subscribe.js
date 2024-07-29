// ProfileCard.js
import React from 'react';

const ProfileCard = () => {
  return (
    <div className="card mb-3" style={{ maxWidth: '100%' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="profile-image-url.jpg" // Replace with your image URL or import
            alt="Profile"
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title d-flex align-items-center">
              <span>Constance Schaden</span>
              <span className="ms-2 badge bg-warning text-dark">
                <i className="bi bi-star-fill"></i> 4.5
              </span>
              <span className="ms-2 text-muted">| 29 Reviews</span>
            </h5>
            <p className="card-text">
              32953 Norbert Green, New Ansel 59134
            </p>
            <p className="card-text">
              <small className="text-muted">
                Lorem ipsum dolor sit amet consectetur. Id eleifend amet ut elementum Sana...
                <a href="#">Readmore</a>
              </small>
            </p>
            <div className="d-flex flex-wrap mb-2">
              <span className="badge bg-light text-dark me-2 mb-2">Residential Design Planning</span>
              <span className="badge bg-light text-dark me-2 mb-2">Commercial Design Planning</span>
              <span className="badge bg-light text-dark me-2 mb-2">Industrial Design Planning</span>
              <span className="badge bg-light text-dark me-2 mb-2">Interior Design</span>
              <span className="badge bg-light text-dark me-2 mb-2">Renovation Projects</span>
              <span className="badge bg-light text-dark me-2 mb-2">More +</span>
            </div>
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
