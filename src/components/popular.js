import React, { useState } from 'react';
import { PopularData } from './Totaldata';
import 'bootstrap/dist/css/bootstrap.min.css';

const Popular = () => {
  const [filter, setFilter] = useState('All');

  const filteredData = PopularData.filter(item => {
    if (filter === 'All') return true;
    if (filter === '2 BHK' && item.title.includes('2BHK')) return true;
    if (filter === '3 BHK' && item.title.includes('3BHK')) return true;
    return false;
  });

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='d-flex flex-wrap align-items-center mb-4'>
          {/* <div className='fs-3 flex-grow-1'>
            <p>Popular Apartment in Mysuru</p>
          </div> */}
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

        {filteredData.map((item, index) => (
          <div className='col-12 col-sm-6 col-md-4 col-lg-3 mt-4' key={index}>
            <div className='card object-fit-fill border rounded-4 h-100'>
              <img src={item.image} className='card-img-top rounded-4' alt={item.title} />
              <div className='card-body'>
                <p className='card-title text-primary fw-bold fs-5'>{item.price}</p>
                <h6 className='card-title font fs-0'>{item.title}</h6>
                <p className='fw-light'>{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
