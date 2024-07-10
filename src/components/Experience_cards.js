import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
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
  // Add more card objects as needed
];

const responsive = {
  0: { items: 1 },
  576: { items: 2 },
  768: { items: 3 },
  992: { items: 4 },
};

const ExperienceCards = () => {
  const items = cardData.map((card, index) => (
    <div className="item" key={index}>
      <div className="card col-lg-10 col-sm-10 h-100 rounded-5">
        <img src={card.imgSrc} className="card-img-top" alt={card.title} />
        <div className="card-img-overlay d-flex flex-column justify-content-end text-white">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.text}</p>
          <div className="text-white d-flex justify-content-start">
            <a href={card.link} className="text-white">Explore now →</a>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className='col-12 text-center mb-5'>
        <h2>Our Exciting Experience</h2>
      </div>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay
        autoPlayInterval={3000}
        infinite
        renderPrevButton={() => (
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
        )}
        renderNextButton={() => (
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        )}
      />
    </div>
  );
}

export default ExperienceCards;

/* .carousel-control-next-icon{
  margin-top: 385px;
}
.carousel-control-prev-icon{
  margin-top: 385px;
  margin-right: 120px;
} */