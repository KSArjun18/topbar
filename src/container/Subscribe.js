const Subscribe = () => {
    return (
      <div className='container mt-5 mb-5'>
        <div className='row justify-content-center'>
          <div className='col-md-12'>
            <div className='card rounded-5 overflow-hidden position-relative'>
              <img
                className='card-img-top rounded-5'
                src='https://zameensquare.com/_next/static/media/subscribe.b5ba2647.png'
                alt='Subscribe'
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              />
              <div className='card-img-overlay d-flex flex-column justify-content-center align-items-start p-4'>
                <div className='col-lg-6 col-md-8 col-sm-10 text-white mt-5'>
                  <h3>Please Subscribe</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
                  </p>
                </div>
                <div className='mt-4'>
                  <div className='col-lg-12 col-md-8 col-sm-10 d-flex'>
                    <input
                      type='text'
                      className='form-control me-2'
                      placeholder='Enter your email address'
                      aria-label='Email address'
                    />
                    <button type='button' className='btn btn-primary'>
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Subscribe;
  