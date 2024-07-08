import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const cardData = [
  {
    imgSrc: 'https://booking.webestica.com/assets/images/category/hotel/resort/3by4/05.jpg',
    title: 'Activities',
    text: 'Tolerably behavior may admit daughters offending effect wishes change way and any wanted.',
    link: '#',
  },
  {
    imgSrc: 'https://booking.webestica.com/assets/images/category/hotel/resort/3by4/05.jpg',
    title: 'Event Calendar',
    text: 'Praise effect wishes change way and any wanted behavioral psychology and influence.',
    link: '#',
  },
  {
    imgSrc: 'https://booking.webestica.com/assets/images/category/hotel/resort/3by4/05.jpg',
    title: 'Dining',
    text: 'Focus a great deal on the understanding of behavioral psychology and influence.',
    link: '#',
  },
  {
    imgSrc: 'https://booking.webestica.com/assets/images/category/hotel/resort/3by4/05.jpg',
    title: 'Fitness Center',
    text: 'Praise effect wishes change way and any wanted.',
    link: '#',
  },
];

const CarSlider = () => {
  return (
    <div id="cardCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <div className="row">
              {cardData.slice(0, 4).map((card, index) => (
                <div className="col-lg-3 col-sm-12 col-md-6 mb-3 position-relative" key={index}>
                  <div className="card">
                    <img src={card.imgSrc} className="card-img-top" alt={card.title} />
                    <div className="card-img-overlay d-flex flex-column justify-content-end text-white">
                      <h5 className="card-title">{card.title}</h5>
                      <p className="card-text">{card.text}</p>
                      <a href={card.link} className="btn btn-primary">Explore now →</a>
                    </div>
                  </div>
                </div>
              ))}
              <button className="carousel-control-prev" type="button" data-bs-target="#cardCarousel" data-bs-slide="prev" style={{ position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)' }}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#cardCarousel" data-bs-slide="next" style={{ position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)' }}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="row">
              {cardData.slice(0, 4).map((card, index) => (
                <div className="col-lg-3 col-sm-12 col-md-6 mb-3 position-relative" key={index}>
                  <div className="card">
                    <img src={card.imgSrc} className="card-img-top" alt={card.title} />
                    <div className="card-img-overlay d-flex flex-column justify-content-end text-white">
                      <h5 className="card-title">{card.title}</h5>
                      <p className="card-text">{card.text}</p>
                      <a href={card.link} className="btn btn-primary">Explore now →</a>
                    </div>
                  </div>
                </div>
              ))}
              <button className="carousel-control-prev" type="button" data-bs-target="#cardCarousel" data-bs-slide="prev" style={{ position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)' }}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#cardCarousel" data-bs-slide="next" style={{ position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)' }}>
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

export default CarSlider;
