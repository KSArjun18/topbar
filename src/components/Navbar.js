import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg custom-navbar">
                <a className="navbar-brand brand" href="#home">
                    <img
                        src="path-to-your-logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Booking"
                    />
                    Booking
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                >
                    {isNavOpen ? (
                        <span className="close-icon">&times;</span>
                    ) : (
                        <span className="navbar-toggler-icon"></span>
                    )}
                </button>
                <div className={`offcanvas offcanvas-top ${isNavOpen ? 'show' : ''}`} tabIndex="-1" id="navbarOffcanvas">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="navbarOffcanvasLabel">Menu</h5>
                        <button type="button" className="btn-close" onClick={toggleNavbar} aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Listings
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#action/3.1">Action</a></li>
                                    <li><a className="dropdown-item" href="#action/3.2">Another action</a></li>
                                    <li><a className="dropdown-item" href="#action/3.3">Something</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#our-story">Our Story</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#experience">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#rooms-suites">Rooms & Suites</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#offers">Offers</a></li>
                            <li className="nav-item">
                                <a className="nav-link" href="#gallery">Gallery</a></li>
                        </ul>
                    </div>
                </div>
                <button className="btn book-button" data-bs-toggle="offcanvas" data-bs-target="#bookingOffcanvas" aria-controls="bookingOffcanvas">
                    Book a Stay
                </button>
            </nav>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="bookingOffcanvas" aria-labelledby="bookingOffcanvasLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="bookingOffcanvasLabel">Book a Room</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="roomType" className="form-label">Room & Suite Type</label>
                            <input type="text" className="form-control" id="roomType" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="checkIn" className="form-label">Check in</label>
                            <input type="date" className="form-control" id="checkIn" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="checkOut" className="form-label">Check out</label>
                            <input type="date" className="form-control" id="checkOut" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="guests" className="form-label">Guests & rooms</label>
                            <input type="number" className="form-control" id="guests" defaultValue="2" />
                        </div>
                    </form>
                    <button className="btn btn-primary mt-3">Check Availability</button>
                    <div className="mt-3">
                        <p>Why Book Direct?</p>
                        <ul>
                            <li>10% discount is applied</li>
                            <li>15% off on spa treatment</li>
                            <li>Best price guaranteed</li>
                            <li>Daily complimentary sunrise yoga</li>
                            <li>Early check-in and late check-out</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
