import React, { useState } from 'react'
import addstdbtn from "../../../../Assets/Icons/addstdbtn.png"
import addstdlg from "../../../../Assets/Icons/addstdlg.png"
const StdEducation = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div className='std_profile_edu_border ms-2 me-2 mt-5 rounded-4 mb-4'>
    <div className='ms-2'>
    <h5 className='mt-3 ms-5 std_profile_wrk_titile'>College/Uni Details</h5>
    </div>
         <div className="d-lg-flex justify-content-lg-evenly">
        
        <div className="col-lg-5 mt-2 ">
          <div className="input-group w-100 mb-2 std_profile_edu_input  gap-5 mb-3">
            <input
              type="text"
              className="form-control rounded-5"
              placeholder="College/Uni"
            />
          </div>
          <div className="input-group  mb-2  std_profile_edu_input mb-3">
            <input
              type="text"
              className="form-control rounded-5"
              placeholder="Degree Type"
            />
          </div>
          <div className="input-group  mb-2  std_profile_edu_input mb-3">
            <input
              type="text"
              className="form-control rounded-5"
              placeholder="Course"
            />
          </div>
        </div>
        <div className=" std_profile_edu_col_border d-none d-lg-block "></div>
        <div className="col-lg-5 mt-2 ">
          <div className="input-group  mb-2  std_profile_edu_input mb-3">
            <input
              type="text"
              className="form-control rounded-5"
              placeholder="College ID/Roll No"
            />
          </div>
          <div className="input-group mb-2  std_profile_edu_input mb-3">
            <input
              type="text"
              className="form-control rounded-5"
              placeholder="Specialization"
            />
          </div>
          <div className="input-group  mb-2  std_profile_edu_input gap-5 mb-3">
            <input
              type="text"
              className="form-control rounded-5"
              placeholder="Start Year"
            />
            <input
              type="text"
              className="form-control rounded-5"
              placeholder="End Year"
            />
             <input
              type="text"
              className="form-control rounded-5"
              placeholder="Percentage/Grade"
            />
          </div>
        </div>
        
      </div>
      <div className='ms-2'>
    <h5 className='mt-3 ms-5 std_profile_wrk_titile'>Description</h5>
    </div>
    <div className='ms-5 me-5 std_profile_desbox mt-3 rounded-4' >
      <div className='ms-lg-5 ms-3 me-3 d-flex mt-1 std_profile_bullet_border '>
        <p><small className='std_profile_bullet rounded-5 px-lg-4 py-1 px-2 '><small>Bullet Points</small></small></p>
        <div className='ms-lg-4 ms-3 std_profile_parah '>
        <i class="fa-solid fa-align-left me-2 px-2 py-1 rounded-2"></i>
        <i class="fa-solid fa-align-justify  px-2 py-1 me-2 rounded-2"></i>
        <i class="fa-solid fa-align-right px-2 py-1 rounded-2"></i>
        </div>
        
      </div>
      <div className='ms-lg-5 mt-2 '>
        <h5 className='std_profile_wrk_des'>Description (if any)</h5>
      </div>
      
    </div>
    <div className='mt-5'>
    <div className='ms-lg-2'>
    <h5 className='mt-4 ms-lg-5 std_profile_wrk_titile'>Certificates/Attachments</h5>
    </div>
    </div>
    <div className='me-lg-5 ms-lg-5 mt-4'>
    <div className='d-lg-flex justify-content-lg-between   std_profile_attach '>
  <div className='col-lg-2 d-flex justify-content-between'>
  <h6 className=' ms-lg-2 px-3 py-2 rounded-5 '>Joining Letter <span><img  className='ms-4 mb-0' src={addstdbtn}></img></span></h6>
  </div>
  <div className='col-lg-2  d-flex justify-content-between'>
  <h6 className=' ms-lg-2 px-3 py-2 rounded-5 '>Marks Memo <span><img  className='ms-4 mb-0' src={addstdbtn}></img></span></h6>
  </div>
  <div className='col-lg-2  d-flex justify-content-between'>
  <h6 className=' ms-lg-2 px-2 py-2 rounded-5 '>Degree Certificate<span><img  className='ms-2 mb-0' src={addstdbtn}></img></span></h6>
  </div>
  <div className='col-lg-2  d-flex justify-content-between'>
  <h6 className=' ms-lg-2 px-3 py-2 rounded-5 '>Others<span><img  className='ms-5 mb-0' src={addstdbtn} ></img></span></h6>
  </div>
    </div>
    </div>
    <div className='d-lg-flex  justify-content-lg-center mt-5 mb-5 '>
  
   <h5 role='button' className='std_profile_wrk_plus  pt-2 px-5 rounded-5  ' onClick={handleShowDetails}>Add School/College Details <span className='d-flex justify-content-center mt-3'>  
    <img  className=' mb-0 object-fit-cover 'src={addstdlg}></img></span></h5>
    
    </div>
   {showDetails && (
    <>
    <div className='d-flex justify-content-center'> 
   <div className=' col-lg-5 d-lg-flex justify-content-between std_profile_edu_options'>
      <h4 role='button'>School</h4>
      <h4  role='button'> College/Uni</h4>
    </div>
   </div>
    </>
   )}
    <div className='d-flex justify-content-center mb-5'>
    <div className='std_profile_edu_save mt-5'>
       <button className='btn ms-lg-4 ms-3 me-5 mb-lg-0 rounded-5 px-4 py-2'>
       Save 
        </button>
       </div>
    </div>
    </div>
  )
}

export default StdEducation