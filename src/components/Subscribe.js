import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
      yearOfStudy: Yup.string().required('Year of Study is required'),
      collegeId: Yup.string().required('College ID is required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="container mt-5">
      <form onSubmit={formik.handleSubmit}>
        <div className="row d-flex justify-content-center">
          <div className="w-auto col-lg-6 std_border-dot std_input_item">
            <div className="d-flex gap-4">
              <div className="w-75">
                <div className="input-group mb-1">
                  <input
                    type="text"
                    className="form-control rounded-5"
                    placeholder="First Name"
                    {...formik.getFieldProps('firstName')}
                  />
                </div>
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-danger">{formik.errors.firstName}</div>
                ) : null}
              </div>
              <div className="w-75">
                <div className="input-group mb-1">
                  <input
                    type="text"
                    className="form-control rounded-5"
                    placeholder="Last Name"
                    {...formik.getFieldProps('lastName')}
                  />
                </div>
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-danger">{formik.errors.lastName}</div>
                ) : null}
              </div>
            </div>
            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control rounded-5"
                placeholder="Username"
                {...formik.getFieldProps('username')}
              />
            </div>
            {formik.touched.username && formik.errors.username ? (
              <div className="text-danger">{formik.errors.username}</div>
            ) : null}
            <div className="input-group mb-1">
              <input
                type="email"
                className="form-control rounded-5"
                placeholder="Email ID"
                {...formik.getFieldProps('email')}
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
            <div className="input-group mb-1">
              <input
                type="password"
                className="form-control rounded-5"
                placeholder="Password"
                {...formik.getFieldProps('password')}
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger">{formik.errors.password}</div>
            ) : null}
          </div>
          
          <div className="w-auto col-lg-6 std_input_item">
            <div className="d-flex gap-4">
              <div className="w-75">
                <div className="input-group mb-1">
                  <input
                    type="text"
                    className="form-control rounded-5"
                    placeholder="College"
                    {...formik.getFieldProps('college')}
                  />
                </div>
                {formik.touched.college && formik.errors.college ? (
                  <div className="text-danger">{formik.errors.college}</div>
                ) : null}
              </div>
              <div className="w-75">
                <div className="input-group mb-1">
                  <input
                    type="text"
                    className="form-control rounded-5"
                    placeholder="Course"
                    {...formik.getFieldProps('course')}
                  />
                </div>
                {formik.touched.course && formik.errors.course ? (
                  <div className="text-danger">{formik.errors.course}</div>
                ) : null}
              </div>
            </div>
            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control rounded-5"
                placeholder="Department"
                {...formik.getFieldProps('department')}
              />
            </div>
            {formik.touched.department && formik.errors.department ? (
              <div className="text-danger">{formik.errors.department}</div>
            ) : null}
            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control rounded-5"
                placeholder="Year of study"
                {...formik.getFieldProps('yearOfStudy')}
              />
            </div>
            {formik.touched.yearOfStudy && formik.errors.yearOfStudy ? (
              <div className="text-danger">{formik.errors.yearOfStudy}</div>
            ) : null}
            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control rounded-5"
                placeholder="College ID"
                {...formik.getFieldProps('collegeId')}
              />
            </div>
            {formik.touched.collegeId && formik.errors.collegeId ? (
              <div className="text-danger">{formik.errors.collegeId}</div>
            ) : null}
          </div>
        </div>
        <div className='d-flex justify-content-center mt-2'>
          <p className='std_text'>
            <small>
              <small>
                <small>
                  By signing up to lobster, you are agreeing to our Privacy Policy and Terms & Conditions
                </small>
              </small>
            </small>
          </p>
        </div>
        <div className='d-flex justify-content-center'>
          <button type="submit" className="btn rounded-5 submit_button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
