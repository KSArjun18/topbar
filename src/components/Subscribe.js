import React from 'react';
import clg_logo from "../clg_logo.png"

const Subscribe = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className='d-flex flex-column justify-content-center gap-lg-5 flex-lg-row align-items-center gap-0 mt-5 w-100'>
        <div className='d-flex justify-content-center mb-3'>
          <div className='std_logo_icon card d-flex flex-column align-items-center p-4 rounded-4'>
            <img src={clg_logo} className='object-fit-cover' style={{ width: '100px', height: '100px' }} alt='Student Icon' />
            <h6 className='mt-3 text-center'>Student</h6>
          </div>
        </div>
        <div className='d-flex justify-content-center mb-3'>
          <div className='clg_logo_icon card d-flex flex-column align-items-center p-4 rounded-4'>
            <img src={clg_logo} className='object-fit-cover' style={{ width: '100px', height: '100px' }} alt='College Icon' />
            <h6 className='mt-3 text-center'>College</h6>
          </div>
        </div>
        <div className='d-flex justify-content-center mb-3'>
          <div className='vendor_logo_icon card d-flex flex-column align-items-center p-4 rounded-4'>
            <img src={clg_logo} className='object-fit-cover' style={{ width: '100px', height: '100px' }} alt='Vendor Icon' />
            <h6 className='mt-3 text-center'>Vendor</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
