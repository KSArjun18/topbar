import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Subscribe = () => {
  return (
    <div className='container mt-5 mb-5'>
      <div className='row justify-content-center'>
        <div className='col-md-10'>
          <div className='card rounded-5'>
            <img
              className='card-img-top rounded-5 img-fluid'
              src='https://zameensquare.com/_next/static/media/subscribe.b5ba2647.png'
              alt=''
            />
            <div className='card-img-overlay d-flex flex-column justify-content-center text-center'>
              <div className='text-white mt-5'>
                <h3>Top Rated Agents</h3>
                <p>
                  Meet the expertise, professionalism, and commitment with our hand-picked top-rated
                  agents, to make your next real estate transaction a grand success.
                </p>
              </div>
              <div className='d-flex justify-content-center mt-4'>
                <input
                  type='text'
                  className='form-control me-2'
                  placeholder='Enter your email address'
                  aria-label='Email'
                  style={{ maxWidth: '300px' }}
                />
                <button type='button' className='btn btn-primary'>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
