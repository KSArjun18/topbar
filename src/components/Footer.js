
import React, { useState } from 'react';
import { PopularData } from './Carddata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
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
    <div className='m-3'>
<div className='item ' data-value={item.id} key={item.id}>
      <div className='card object-fit-fill border rounded-4 h-50'>
        <img src={item.image} className='card-img-top rounded-4' alt={item.title} />
        
        <div className='card-body'>
          <div className='d-flex'>
          <button 
          className='btn  ' 
          style={{ color: item.liked ? 'red' : '#c2d8ff', position: 'absolute', right: '10px' }} 
          onClick={() => handleLike(item.id)}
        >
          <FontAwesomeIcon icon={faHeart} size="xl" />
        </button>
          <p className='card-title text-primary fw-bold fs-5 mt-1'>{item.price}</p>
          
          </div>
        <div>
        <h6 className='card-title font fs-0'>{item.title}</h6>
        <p className='fw-lighter'>{item.location}</p>
        </div>
         
        <div className='row fw-lighter'>
            <div className='col-12 d-flex mb-2'>
              <p className='me-3'>{item.sqft}</p>
              <p className='me-3'>{item.wash}</p>
              <p className='me-3'>{item.furnished}</p>
            </div>
            <div className='col-12'>
              <p className='mb-2'>Posted On</p>
            </div>
            <div className='col-12 d-flex justify-content-between align-items-center'>
              <p className='fw-normal mb-0'>{item.listed}</p>
              <button type="button" className="btn btn-primary mb-0 px-2">View Details</button>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
    
  ));

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3.2 },

  };

  return (
    <div className='container mt-5'>
      <div className='row'>
      <div className='d-flex flex-wrap align-items-center mb-4'>
          <div className='fs-3 flex-grow-1 d-flex'>
            <div>
            <p>Popular Apartment in Mysuru</p>
            </div>
            <div className='d-flex d-none d-md-inline ms-3'>
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
          
         
        </div>

        <AliceCarousel
          mouseTracking={true}
          // activeIndex={activeIndex}
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          disableDotsControls={true}
          showSlideInfo={true}
          renderPrevButton={() => {
            return <p className="p-4 absolute left-0 top-0"><FontAwesomeIcon icon={faCircleChevronRight} flip="horizontal" size="lg" /></p>
          }}
          renderNextButton={() => {
            return <p className="p-4 absolute right-0 top-0"><FontAwesomeIcon icon={faCircleChevronRight} size="lg" /></p>
          }}
         
        />
      </div>
    </div>
  );
};

export default Popular;
          