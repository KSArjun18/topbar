import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Subscribe = () => {
  // Validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Required!'),
  });

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ touched, errors }) => (
        <Form>
          <div className="form-group mb-3">
            <label htmlFor="email">Email Address</label>
            <Field
              name="email"
              type="email"
              className={`form-control ${
                touched.email && errors.email ? 'is-invalid' : ''
              }`}
              placeholder="Enter your email address"
            />
            
            <ErrorMessage
              component="div"
              name="email"
              className="invalid-feedback"
            />
            
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email Address</label>
            <Field
              name="email"
              type="email"
              className={`form-control ${
                touched.email && errors.email ? 'is-invalid' : ''
              }`}
              placeholder="Enter your email address"
            />
            
            <ErrorMessage
              component="div"
              name="email"
              className="invalid-feedback"
            />
            
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Subscribe;
