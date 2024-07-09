import React from 'react';
 // Ensure you create this CSS file for custom styles

const ImageCardCarousel = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex flex-column">
          <div className="flex-grow-1"></div> {/* Empty space */}
          <div className="mt-4">
            <img
              src="https://booking.webestica.com/assets/images/category/hotel/resort/05.jpg"
              alt="Left Image"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-6 position-relative">
          <img
            src="https://booking.webestica.com/assets/images/category/hotel/resort/04.jpg"
            alt="Right Image"
            className="img-fluid"
          />
          <div className="card position-absolute bottom-0 start-0 w-75 m-3 bg-light">
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <p>
                        Moonlight newspaper up its enjoyment agreeable depending.
                        Timed voice share led him to widen noisy young. At weddings
                        believed in laughing
                      </p>
                      <footer className="blockquote-footer">
                        Lori Stevens
                        <div className="star-rating">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star-half-alt checked"></span>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="carousel-item active">
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <p>
                        Moonlight newspaper up its enjoyment agreeable depending.
                        Timed voice share led him to widen noisy young. At weddings
                        believed in laughing
                      </p>
                      <footer className="blockquote-footer">
                        Lori Stevens
                        <div className="star-rating">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star-half-alt checked"></span>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                {/* Add more carousel-item divs here if needed */}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCardCarousel;
