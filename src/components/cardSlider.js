import React, { useState } from 'react';
import { PopularData } from './Totaldata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Popular = () => {
  const [filter, setFilter] = useState('All');
  const [likedItems, setLikedItems] = useState(PopularData.map(item => ({ ...item, liked: false })));

  const handleLike = (id) => {
    const newLikedItems = likedItems.map(item =>
      item.id === id ? { ...item, liked: !item.liked } : item
    );
    setLikedItems(newLikedItems);

    // Update the data as needed, for example, send a request to the server.
    console.log(newLikedItems.find(item => item.id === id));
  };

  const filteredData = likedItems.filter(item => {
    if (filter === 'All') return true;
    if (filter === '2 BHK' && item.title.includes('2BHK')) return true;
    if (filter === '3 BHK' && item.title.includes('3BHK')) return true;
    return false;
  });

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='d-flex flex-wrap align-items-center mb-4'>
          <div className='fs-3 flex-grow-1'>
            <p>Popular Apartment in Mysuru</p>
          </div>
          <div className='d-flex d-none d-md-inline'>
            <button
              className='btn btn-success text-dark px-3 py-0 me-2'
              onClick={() => setFilter('All')}
            >
              All
            </button>
            <button
              className='btn btn-success text-dark px-3 py-0 me-2'
              onClick={() => setFilter('2 BHK')}
            >
              2 BHK
            </button>
            <button
              className='btn btn-success text-dark px-3 py-0'
              onClick={() => setFilter('3 BHK')}
            >
              3 BHK
            </button>
          </div>
        </div>

        <div id="popularCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {filteredData.map((item, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={item.id}>
                <div className='col-12 col-sm-6 col-md-4 col-lg-3 mt-4'>
                  <div className='card object-fit-fill border rounded-4 h-100'>
                    <img src={item.image} className='card-img-top rounded-4' alt={item.title} />
                    <button 
                      className='btn' 
                      style={{ color: item.liked ? 'red' : '#c2d8ff', position: 'absolute', top: '10px', right: '10px' }} 
                      onClick={() => handleLike(item.id)}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <div className='card-body'>
                      <p className='card-title text-primary fw-bold fs-5'>{item.price}</p>
                      <h6 className='card-title font fs-0'>{item.title}</h6>
                      <p className='fw-light'>{item.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#popularCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#popularCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popular;


import React, { useState } from 'react';
import { PopularData } from './Totaldata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Popular = () => {
  const [filter, setFilter] = useState('All');
  const [likedItems, setLikedItems] = useState(PopularData.map(item => ({ ...item, liked: false })));

  const handleLike = (id) => {
    const newLikedItems = likedItems.map(item =>
      item.id === id ? { ...item, liked: !item.liked } : item
    );
    setLikedItems(newLikedItems);

    // Update the data as needed, for example, send a request to the server.
    console.log(newLikedItems.find(item => item.id === id));
  };

  const filteredData = likedItems.filter(item => {
    if (filter === 'All') return true;
    if (filter === '2 BHK' && item.title.includes('2BHK')) return true;
    if (filter === '3 BHK' && item.title.includes('3BHK')) return true;
    return false;
  });

  const items = filteredData.map((item) => (
    <div className='item' data-value={item.id} key={item.id}>
      <div className='card object-fit-fill border rounded-4 h-100'>
        <img src={item.image} className='card-img-top rounded-4' alt={item.title} />
        <button 
          className='btn' 
          style={{ color: item.liked ? 'red' : '#c2d8ff', position: 'absolute', top: '10px', right: '10px' }} 
          onClick={() => handleLike(item.id)}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <div className='card-body'>
          <p className='card-title text-primary fw-bold fs-5'>{item.price}</p>
          <h6 className='card-title font fs-0'>{item.title}</h6>
          <p className='fw-light'>{item.location}</p>
        </div>
      </div>
    </div>
  ));

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='d-flex flex-wrap align-items-center mb-4'>
          <div className='fs-3 flex-grow-1'>
            <p>Popular Apartment in Mysuru</p>
          </div>
          <div className='d-flex d-none d-md-inline'>
            <button
              className='btn btn-success text-dark px-3 py-0 me-2'
              onClick={() => setFilter('All')}
            >
              All
            </button>
            <button
              className='btn btn-success text-dark px-3 py-0 me-2'
              onClick={() => setFilter('2 BHK')}
            >
              2 BHK
            </button>
            <button
              className='btn btn-success text-dark px-3 py-0'
              onClick={() => setFilter('3 BHK')}
            >
              3 BHK
            </button>
          </div>
        </div>

        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </div>
    </div>
  );
};

export default Popular;
          
