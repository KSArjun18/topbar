"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faStar } from '@fortawesome/free-solid-svg-icons';
import NavBar from '@/components/MyProfile/NavBar';

export default function SearchFilter() {
  const [architects, setArchitects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdowns, setDropdowns] = useState({
    Specialization: false,
    skills: false,
  });
  const [selectedSpecializations, setSelectedSpecializations] = useState([]);

  const toggleDropdown = (dropdown) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  const handleSpecializationChange = (specialization) => {
    setSelectedSpecializations((prevSelected) => {
      if (prevSelected.includes(specialization)) {
        return prevSelected.filter((item) => item !== specialization);
      } else {
        return [...prevSelected, specialization];
      }
    });
  };

  const clearFilters = () => {
    setSelectedSpecializations([]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/architects');
        setArchitects(response.data);
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };
    fetchData();
  }, []);

  const filteredArchitects = architects.filter(architect =>
    architect.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedSpecializations.length === 0 || selectedSpecializations.every(spec => architect.specialization.includes(spec)))
  );

  return (
    <>
      <NavBar/>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3 me-3 d-none d-lg-block">
            <div className="card border-white">
              <div className="card-header bg-white">
                <h5 className="fw-bolder">Filter</h5>
              </div>
              <div>
                <div className="dropdown mb-2 p-2 rounded-4 border-white">
                  <button
                    className="btn bg-white text-start col-12"
                    type="button"
                    onClick={() => toggleDropdown("Specialization")}
                  >
                    <div className="d-flex flex-wrap justify-content-between">
                      <p className="fw-medium">Specialization</p>
                      {dropdowns.Specialization ? (
                        <i className="fa-solid fa-chevron-up text-success"></i>
                      ) : (
                        <i className="fa-solid fa-chevron-down text-success"></i>
                      )}
                    </div>
                  </button>
                  {dropdowns.Specialization && (
                    <ul className="dropdown-menu border-0 drop show">
                      <li>
                        <a className="dropdown-item bg-white" href="#">
                          <div className="">
                            <div className="mt-2">
                              <div className="d-flex bg-white flex-wrap">
                                {architects[0]?.specialization?.map((item, index) => (
                                  <div className="form-check mt-1" key={index}>
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value={item}
                                      id={`flexCheckDefault${index}`}
                                      onChange={() => handleSpecializationChange(item)}
                                      checked={selectedSpecializations.includes(item)}
                                    />
                                    <label className="form-check-label" htmlFor={`flexCheckDefault${index}`}>
                                      {item}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 bg-white shadow-sm">
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by name"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className='d-block d-md-none ms-2 mt-1'>
                <button
                  className='border-white bg-white rounded-3 border-0'
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <FontAwesomeIcon icon={faFilter} className='border-white' size="xl" style={{ color: "#63E6BE" }} />
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                  <div className="offcanvas-header d-flex justify-content-between">
                    <p className="offcanvas-title fw-medium" id="offcanvasRightLabel">
                      <span>
                        <i
                          type="button"
                          className="fa-regular fa-square-caret-left me-2 mb-4"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        ></i>
                      </span>
                      Filter
                    </p>
                    <p className='text-success mt-'>
                      <small role="button" onClick={clearFilters}>Clear Filter</small>
                    </p>
                  </div>
                  <div className="offcanvas-body">
                    <p className='text-primary fw-medium'>Specialization</p>
                    {architects[0]?.specialization?.map((item, index) => (
                      <div className="form-check mt-1" key={index}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={item}
                          id={`flexCheckDefault${index}`}
                          onChange={() => handleSpecializationChange(item)}
                          checked={selectedSpecializations.includes(item)}
                        />
                        <label className="form-check-label" htmlFor={`flexCheckDefault${index}`}>
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className='d-flex justify-content-evenly mb-4'>
                    <button
                      type="button"
                      className="btn btn-secondary rounded-3 px-5"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary rounded-3 px-5"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {filteredArchitects.map((architect) => (
              <div className="card mb-3" key={architect.id}>
                <div className="position-relative">
                  <img
                    height={150}
                    src={architect.backgroundImg}
                    className="card-img-top object-fit-cover"
                    alt="background"
                  />
                  <div className="d-none d-lg-block">
                    <div className="row">
                      <div className="col-lg-1 d-flex ms-lg-2">
                        <div>
                          <img
                            className="rounded-4 position-absolute"
                            style={{ bottom: "100px" }}
                            width={100}
                            src={architect.profile}
                            alt="profile"
                          />
                        </div>
                      </div>
                      <div className="col-lg-10 ms-3">
                        <div className="card-body">
                          <div className="d-flex">
                            <h5 className="card-title mb-0">{architect.name}</h5>
                            <p className="card-text">
                              <span className="ms-2">
                                <FontAwesomeIcon
                                  icon={faStar}
                                  size="sm"
                                  style={{ color: "#FFD43B" }}
                                />{" "}
                                {architect.ratings}
                              </span>{" "}
                              | {architect.reviews} Reviews
                            </p>
                          </div>
                          <p className="card-text mb-0">
                            <small className="text-muted mb-0">{architect.location}</small>
                          </p>
                          <div className="d-flex flex justify-content-between mb-0">
                            <p className="fw-light mb-0">
                              <small>{architect.content}</small>
                            </p>
                            <Link
                              type="button"
                              className="btn btn-primary w-25 h-25"
                              href={"/architect/" + architect.id}
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-lg-none">
                    <div className="row g-0">
                      <div className="col-4">
                        <img
                          src={architect.profile}
                          className="mb-4 ms-2 rounded-4 object-fit-cover"
                          width={100}
                          alt="profile"
                        />
                      </div>
                      <div className="col-7 d-inline">
                        <div className="card-body">
                          <h5 className="card-title">{architect.name}</h5>
                          <small>{architect.location}</small>
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <p className="ms-2">
                        <small className="text-body-secondary">{architect.content}</small>
                      </p>
                    </div>
                  </div>
                  <p className="ms-3 mb-1"><small>Services Offered</small></p>
                  <div className="d-flex flex-wrap ms-2">
                    <h6>
                      <span className="badge me-1 card-badge text-dark fw-light">{architect.specialization[0]}</span>
                    </h6>
                    <h6>
                      <span className="badge me-1 card-badge text-dark fw-light">{architect.specialization[1]}</span>
                    </h6>
                    <h6>
                      <span className="badge me-1 card-badge text-dark fw-light">{architect.specialization[2]}</span>
                    </h6>
                    <h6>
                      <span className="badge me-1 card-badge text-success fw-light">More +</span>
                    </h6>
                    <Link
                      type="button"
                      className="btn btn-primary w-100 mb-3 me-1 d-lg-none py-2"
                      href={"/architect/" + architect.id}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
