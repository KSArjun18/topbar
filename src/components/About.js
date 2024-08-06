import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import std_logo from '../../../Assets/Icons/std_logo.png';
import clg_logo from '../../../Assets/Icons/clg_logo.png';
import vendor_logo from '../../../Assets/Icons/vendor_logo.png';

const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      college: '',
      course: '',
      department: '',
      yearOfStudy: '',
      collegeId: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      college: Yup.string().required('College is required'),
      course: Yup.string().required('Course is required'),
      department: Yup.string().required('Department is required'),
      yearOfStudy: Yup.string().required('Year of study is required'),
      collegeId: Yup.string().required('College ID is required'),
    }),
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });

  return (
    <>
      <div>
        <div className="d-flex justify-content-center mt-5">
          <div className="col-lg-4 std_card_title text-center py-3 rounded-5">
            <h2 className="lobster">
              <font color="#16FFBB">L</font>
              <font color="#16FFBB">o</font>
              <font color="#00FFF5">b</font>
              <font color="#00FFF5">s</font>
              <font color="#3EBAFF">t</font>
              <font color="#3EBAFF">e</font>
              <font color="#6074FF">r </font> 
              <span className='ms-2'>Registration</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center gap-5 mt-5">
        <div className="std_logo_icon align-items-center px-4 py-2 rounded-4">
          <img src={std_logo} className="object-fit-cover mt-1" alt="Student"></img>
          <h6 className="mb-0 std_logo_name text-center">Student</h6>
        </div>
        <div className="clg_logo_icon align-items-center px-3 py-2 rounded-4">
          <img src={clg_logo} className="object-fit-cover mt-1 mb-3" alt="College"></img>
          <h6 className="mb-0 clg_logo_name text-center">College</h6>
        </div>
        <div className="vendor_logo_icon align-items-center px-4 py-2 rounded-4">
          <img src={vendor_logo} className="object-fit-cover mt-1 mb-3" alt="Vendor"></img>
          <h6 className="mb-0 vendor_logo_name text-center">Vendor</h6>
        </div>
      </div>

      <div className="container mt-5">
        <form onSubmit={formik.handleSubmit}>
          <div className="row d-flex justify-content-center">
            <div className="w-auto col-lg-6 std_border-dot std_input_item">
              <div className="">
                <div className="d-flex gap-4 flex-wrap">
                  <div className="input-group mb-3 w-100">
                    <input
                      type="text"
                      className="form-control rounded-5"
                      placeholder="First Name"
                      aria-label="First Name"
                      {...formik.getFieldProps('firstName')}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div className="error">{formik.errors.firstName}</div>
                    ) : null}
                  </div>
                  <div className="input-group mb-3 w-100">
                    <input
                      type="text"
                      className="form-control rounded-5"
                      placeholder="Last Name"
                      aria-label="Last Name"
                      {...formik.getFieldProps('lastName')}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div className="error">{formik.errors.lastName}</div>
                    ) : null}
                  </div>
                </div>
                <div className="input-group mb-3 w-100">
                  <input
                    type="text"
                    className="form-control rounded-5"
                    placeholder="Username"
                    aria-label="Username"
                    {...formik.getFieldProps('username')}
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <div className="error">{formik.errors.username}</div>
                  ) : null}
                </div>
                <div className="input-group mb-3 w-100">
                  <input
                    type="text"
                    className="form-control rounded-5"
                    placeholder="Email ID"
                    aria-label="Email ID"
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="input-group mb-3 w-100">
                  <input
                    type="password"
                    className="form-control rounded-5"
                    placeholder="Password"
                    aria-label="Password"
                    {...formik.getFieldProps('password')}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="error">{formik.errors.password}</div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="w-auto col-lg-6 std_input_item">
              <div className="">
                <div className="d-flex gap-4 flex-wrap">
                  <div className="input-group mb-3 w-100">
                    <input
                      type="text"
                      className="form-control rounded-5"
                      placeholder="College"
                      aria-label="College"
                      {...formik.getFieldProps('college')}
                    />
                    {formik.touched.college && formik.errors.college ? (
                      <div className="error">{formik.errors.college}</div>
                    ) : null}
                  </div>
                  <div className="input-group mb-3 w-100">
                    <input
                      type="text"
                      className="form-control rounded-5"
                      placeholder="Course"
                      aria-label="Course"
                      {...formik.getFieldProps('course')}
                    />
                    {formik.touched.course && formik.errors.course ? (
                      <div className="error">{formik.errors.course}</div>
                    ) : null}
                  </div>
                </div>
                <div className="input-group mb-3 w-100">
                  <input
                    type="text"
                    className="form-control rounded-5"
                    placeholder="Department"
                    aria-label="Department"
                    {...formik.getFieldProps('department')}
                  />
                  {formik.touched.department && formik.errors.department ? (
                    <div className="error">{formik.errors.department}</div>
                  ) : null}
                </div>
                <div className="input-group mb-3 w-100">
                  <input
                    type="text"
                    className="form-control rounded-5"
                    placeholder="Year of study"
                    aria-label="Year of study"
                    {...formik.getFieldProps('yearOfStudy')}
                  />
                  {formik.touched.yearOfStudy && formik.errors.yearOfStudy ? (
                    <div className="error">{formik.errors.yearOfStudy}</div>
                  ) : null}
                </div>
                <div className="input-group mb-3 w-100">
                  <input
                    type="text"
                    className="form-control rounded-5"
                    placeholder="College ID"
                    aria-label="College ID"
                    {...formik.getFieldProps('collegeId')}
                  />
                  {formik.touched.collegeId && formik.errors.collegeId ? (
                    <div className="error">{formik.errors.collegeId}</div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-2'>
              <p className='std_text'><small><small><small>By signing up to lobster, you are agreeing to our Privacy Policy and Terms & Conditions</small></small></small></p>
            </div>
            <div className='d-flex justify-content-center'>
              <button type="submit" className="btn rounded-5 submit_button">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
.error {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.input-group {
  width: 100%;
}

.input-group .form-control {
  margin-bottom: 0;
}

.input-group .error {
  display: block;
}

@media (max-width: 768px) {
  .input-group {
    flex-direction: column;
  }

  .d-flex.gap-4 {
    flex-direction: column;
    gap: 1rem;
  }

  .std_input_item {
    margin-bottom: 1.5rem;
  }
}

                    
