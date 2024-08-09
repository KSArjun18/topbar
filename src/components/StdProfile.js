import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import addBtn from "../../../Assets/Icons/addBtn.png";
import shareBtn from "../../../Assets/Icons/shareBtn.png";
import { Link, Outlet } from 'react-router-dom';

const StdProfile = () => {

  const [sectionClicked, setSectionClicked] = useState(false);


  const handleLinkClick = () => {
    setSectionClicked(true);
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="">
          <div className="d-lg-flex justify-content-evenly std_profile_borrder ms-2 me-2">
            <p role="button" className="std_cricle_img d-felx align-content-center">
              image
            </p>
            <div className="mt-3 std_name_profile">
              <p className="text-center px-5 py-1 rounded-5">Full Name</p>
              <p className="text-center px-5 py-1 rounded-5">College/Uni</p>
            </div>
            <div className="col-lg-5 mb-4 mt-3 std_about_profile rounded-4">
              <p role="button" className="d-flex flex-column text-center mt-1">
                About
                <span>
                  <img src={addBtn} className="" alt="Add" />
                </span>
              </p>
            </div>
            <div className="mt-5 d-flex justify-content-center">
              <p>
                <small>
                  <small className="std_share_profile px-3 rounded-5 py-1">
                    Share with Recruiters
                  </small>
                </small>
                <span>
                  <small>
                    <img className="object-fit-cover ms-2" src={shareBtn} alt="Share" />
                  </small>
                </span>
              </p>
            </div>
          </div>

          <div className="d-flex flex-wrap justify-content-center justify-content-lg-evenly mt-4">
            <p className="m-2">
              <Link
                to="personaldetails"
                className="text-center rounded-3 std_profile_per px-4 py-2 text-decoration-none"
                onClick={handleLinkClick}
              >
                Personal Details
              </Link>
            </p>
            <p className="m-2">
              <Link
                to="education"
                className="text-center rounded-3 std_profile_edu px-5 py-2 text-decoration-none"
                onClick={handleLinkClick}
              >
                Education
              </Link>
            </p>
            <p className="m-2">
              <Link
                to="work"
                className="text-center rounded-3 std_profile_wrk px-4 py-2 text-decoration-none"
                onClick={handleLinkClick}
              >
                Work & Skills
              </Link>
            </p>
            <p className="m-2">
              <Link
                to="certifications"
                className="text-center rounded-3 std_profile_certi px-4 py-2 text-decoration-none"
                onClick={handleLinkClick}
              >
                Certifications
              </Link>
            </p>
            <p className="m-2">
              <Link
                to="activities"
                className="text-center rounded-3 std_profile_event px-4 py-2 text-decoration-none"
                onClick={handleLinkClick}
              >
                Event Activities
              </Link>
            </p>
            <p className="m-2">
              <Link
                to="resume"
                className="text-center rounded-3 std_profile_build px-4 py-2 text-decoration-none"
                onClick={handleLinkClick}
              >
                Build Resume
              </Link>
            </p>
          </div>

          {!sectionClicked && (
            <div className="d-flex justify-content-center mt-5">
              <div className="d-flex justify-content-center col-lg-4 std_profile_click px-5 rounded-4 py-3">
                <h2 className="std_profile_clicktext mt-3">
                  Click on any section to
                  <h2 className="text-center std_profile_clickedit mt-4">View & Edit</h2>
                </h2>
              </div>
            </div>
          )}

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default StdProfile;
