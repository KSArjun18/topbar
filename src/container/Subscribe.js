import React from 'react'

const Subscribe = () => {
  return (
    <div className='container'>
      <div className='row d-flex justify-content-center mt-5'>
<div className='col-lg-3 col-9 py-2 rounded-4 std_pop_head'>
<h2 className='text-center'>Popular Events</h2>
</div>
      </div>
      <div className='row d-flex justify-content-center mt-5'>
      <div  className='std_event_card1 col-lg-8 col-11 rounded-4 text-center p-5 mb-3 ' >
      <p className='mt-5'>Event1</p>
      </div>
      <div  className='std_event_card2 col-lg-8 col-11 rounded-4 text-center p-3 mb-3' >
      <p className='mt-2'>Event2</p>
      </div>
      <div  className='std_event_card3 col-lg-8  col-11 rounded-4 text-center p-3 mb-3' >
      <p className='mt-2'>Event3</p>
      </div>
      </div>
    </div>
  )
}

export default Subscribe