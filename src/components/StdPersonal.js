import React from 'react'
import otparrow from "../../../../Assets/Icons/otparrow.png"
import stdweb from "../../../../Assets/Icons/stdweb.png"
import stdcl from "../../../../Assets/Icons/stdcal.png"
const StdPersonal = () => {
  return (
    <div className="ms-2 me-2 mt-5  std_personal_border rounded-4 mb-3">
      <div className="d-lg-flex justify-content-evenly">
        <div className="col-lg-5 mt-4 ">
          <div className="input-group w-100 mb-2  std_profile_input_item gap-5 mb-3">
            <input
              type="text"
              className="form-control rounded-5"
              placeholder="First Name"
            />
            <input
              type="text"
              className="form-control rounded-5"
              placeholder="Last Name"
            />
          </div>
          <div className="input-group  mb-2  std_profile_input_item mb-3">
            <input
              type="text"
              className="form-control rounded-5"
              placeholder="Username"
            />
          </div>
          <div className="input-group  mb-2  std_profile_input_item mb-3">
            <input
              type="text"
              className="form-control rounded-5"
              placeholder="Email ID"
            />
          </div>
          <div className="input-group  mb-2 std_profile_input_item mb-3">
            <input
              type="text"
              className="form-control rounded-5"
              placeholder="Password"
            />
          </div>
          
        </div>
        <div className=" std_profile_col_border "></div>
        <div className="col-lg-5 mt-4 ">
          <div className="input-group  mb-2  std_profile_input_item mb-3">
            <input
              type="text"
              className="form-control rounded-5"
              placeholder="College/University"
            />
          </div>
          <div className="input-group mb-2  std_profile_input_item mb-3">
            <input
              type="text"
              className="form-control rounded-5"
              placeholder="Course/Specialization"
            />
          </div>
          <div className="input-group  mb-2  std_profile_input_item gap-5 mb-3">
            <input
              type="text"
              className="form-control rounded-5"
              placeholder="Department"
            />
            <input
              type="text"
              className="form-control rounded-5"
              placeholder="Year of Study"
            />
          </div>
          <div className="input-group mb-2 std_profile_input_item mb-3">
            <input
              type="text"
              className="form-control rounded-5"
              placeholder="College ID"
            />
          </div>
        </div>
        
      </div>
     <div className='d-flex justify-content-evenly mt-5'>
     <div className='col-lg-5'>
     <div className="input-group mb-2 ms-lg-3 std_profile_input_item mb-3">
            <input
              type="text"
              className="form-control rounded-5"
              placeholder="Mobile Number"
            />
           
          </div>
          
     </div>
     <div className='mt-2'>
       <img src={otparrow}></img>
     </div>
     <div className='col-lg-2 '>
     <div className="mb-2 ms-lg-2 mb-3 std_profile_otp">
          <button className='btn ms-lg-3  rounded-5 px-lg-4 py-2'>
          Send OTP
          </button>
          </div>
     </div>
     <div className='col-lg-3'>
     <div className="input-group ms-lg- mb-2 std_profile_input_item mb-3">
            <input
              type="text"
              className="form-control me-lg-4 rounded-5"
              placeholder="Enter OTP"
            />
          </div>
     </div>

     </div>
     <div className='d-lg-flex justify-content-evenly mt-3'>
        <div className='col-lg-6 d-lg-flex justify-content-start'> 
       <div className='std_profile_gender'>
       <button className='btn ms-lg-4 ms-3 me-5 mb-lg-0 mb-3  rounded-5 px-4 py-2'>
        Gender
          </button>
       </div>
         <div className='std_profile_gender_options mb-3 mb-lg-0'>
         <button className='btn ms-lg-3 ms-3 me-3 rounded-5 px-4 py-2'>
          Male
          </button>
          <button className='btn ms-lg-3  me-3 rounded-5 px-4 py-2'>
          Female
          </button>
          <button className='btn ms-lg-3  me-3 rounded-5 px-lg-4 py-2'>
          Others
          </button>
         </div>
        </div>
        <div className='col-lg-5 me-lg-4'>
 <div className="input-group mb-2  std_profile_input_item mb-3">
            <input
              type="text"
              className="form-control rounded-5"
              placeholder="Enter OTP"
            />
          </div>
        </div>
     </div>
     <div className='d-lg-flex ms-4 mt-3'>
     <div className='std_profile_gender'>
       <button className='btn ms-lg-4 ms-3 me-5 mb-lg-0 mb-3  rounded-5 px-5 py-2'>
       Home Address
          </button>
        
       </div>
       <p className='mt-2 std_profile_locate rounded-5 text-center px-lg-3'><small><small>Locate Me
        <img className='ms-2' src={stdweb}></img>
        </small></small></p>
     </div>
     <div className='d-flex justify-content-evenly mt-3 gap-lg-4'>
     <div className='col-lg-5 me-lg-5'>
     <div className="input-group mb-2 std_profile_input_item mb-3">
            <input
              type="text"
              className="form-control rounded-5"
              placeholder="Flat No./Building No."
            />
           
          </div>
          
     </div>
     <div className='col-lg-5 me-lg-2'>
     <div className="input-group  mb-2 std_profile_input_item mb-3">
            <input
              type="text"
              className="form-control me-lg- rounded-5"
              placeholder="Society/Area"
            />
          </div>
     </div>

     </div>
     <div className='d-flex justify-content-evenly mt-3 gap-5'>
     <div className='col-lg-5'>
        
     <div className="input-group mb-2 ms-lg-3 std_profile_input_item mb-3">
            <input
              type="text"
              className="form-control rounded-5"
              placeholder="City"
            />
           
          </div>
          
     </div>
     
     
     <div className='col-lg-3'>
        
     <div className="input-group ms-lg-5 mb-2 std_profile_input_item mb-3">
            <input
              type="text"
              className="form-control ms-lg-2 rounded-5"
              placeholder="City "
            />
          </div>
     </div>
     <div className='col-lg-2 '>
     <div className="input-group ms-lg- mb-2 std_profile_input_item mb-3">
            <input
              type="text"
              className="form-control me-lg-4 rounded-5"
              placeholder="Pincode "
            />
          </div>
     </div>

     </div>
     <div className='d-flex mt-3 '>
     <div className='std_profile_gender ms-lg-4'>
       <button className='btn ms-lg-4 ms-3 me-5 mb-lg-0 mb-3  rounded-5 px-4 py-2'>
       DOB 
        </button>
       </div>
      <div className='col-lg-2'>
        
      <div class="input-group std_profile_input_item std_profile_cal ">
      <i><img src={stdcl} width={17}></img></i>
      
                <input
                  type="text"
                  class=" rounded-5 form-control py-2 std_profile_input_item border-0"
                  placeholder="dd/mm/yyyy"
               

                />
                
              </div>
      </div>
     </div>
     <div className='std_profile_gender ms-lg-4 mt-5'>
       <button className='btn ms-lg-4 ms-3 me-5 mb-lg-0 mb-3  rounded-5 px-4 py-2'>
       Portfolio 
        </button>
       </div>
       <div className='d-flex flex-column flex-lg-row justify-content-evenly mt-3 gap-3'>
  <div className='d-flex flex-column flex-lg-row col-lg-5 gap-2'>
    <div className='col-12 col-lg-3 '>
      <div className="input-group mb-2 std_profile_input_item">
        <input
          type="text"
          className="form-control rounded-5"
          placeholder="https://"
        />
      </div>
    </div>
    <div className='col-12 col-lg-9'>
      <div className="input-group mb-2 std_profile_input_item">
        <input
          type="text"
          className="form-control rounded-5"
          placeholder="Add URL"
        />
      </div>
    </div>
  </div>

  <div className='d-flex flex-column flex-lg-row col-lg-5 gap-2'>
    <div className='col-12 col-lg-3'>
      <div className="input-group mb-2 std_profile_input_item">
        <input
          type="text"
          className="form-control rounded-5"
          placeholder="https://"
        />
      </div>
    </div>
    <div className='col-12 col-lg-9'>
      <div className="input-group mb-2 std_profile_input_item">
        <input
          type="text"
          className="form-control rounded-5"
          placeholder="Add URL"
        />
      </div>
    </div>
  </div>
</div>

<div className='d-flex flex-column flex-lg-row justify-content-evenly mt-3 gap-3'>
  <div className='d-flex flex-column flex-lg-row col-lg-5 gap-2'>
    <div className='col-12 col-lg-3'>
      <div className="input-group mb-2 std_profile_input_item">
        <input
          type="text"
          className="form-control rounded-5"
          placeholder="https://"
        />
      </div>
    </div>
    <div className='col-12 col-lg-9'>
      <div className="input-group mb-2 std_profile_input_item">
        <input
          type="text"
          className="form-control rounded-5"
          placeholder="Add URL"
        />
      </div>
    </div>
  </div>

  <div className='d-flex flex-column flex-lg-row col-lg-5 gap-2'>
    <div className='col-12 col-lg-3'>
      <div className="input-group mb-2 std_profile_input_item">
        <input
          type="text"
          className="form-control rounded-5"
          placeholder="https://"
        />
      </div>
    </div>
    <div className='col-12 col-lg-9'>
      <div className="input-group mb-2 std_profile_input_item">
        <input
          type="text"
          className="form-control rounded-5"
          placeholder="Add URL"
        />
      </div>
    </div>
  </div>
</div>

<div className='d-flex flex-column flex-lg-row justify-content-evenly mt-3 gap-3'>
  <div className='d-flex flex-column flex-lg-row col-lg-5 gap-2'>
    <div className='col-12 col-lg-3'>
      <div className="input-group mb-2 std_profile_input_item">
        <input
          type="text"
          className="form-control rounded-5"
          placeholder="https://"
        />
      </div>
    </div>
    <div className='col-12 col-lg-9'>
      <div className="input-group mb-2 std_profile_input_item">
        <input
          type="text"
          className="form-control rounded-5"
          placeholder="Add URL"
        />
      </div>
    </div>
  </div>

  <div className='d-flex flex-column flex-lg-row col-lg-5 gap-2'>
    <div className='col-12 col-lg-3'>
      <div className="input-group mb-2 std_profile_input_item">
        <input
          type="text"
          className="form-control rounded-5"
          placeholder="https://"
        />
      </div>
    </div>
    <div className='col-12 col-lg-9'>
      <div className="input-group mb-2 std_profile_input_item">
        <input
          type="text"
          className="form-control rounded-5"
          placeholder="Add URL"
        />
      </div>
    </div>
  </div>
</div>

      <div className='d-flex justify-content-center mt-4 mb-5'>
      <div className='std_profile_gender'>
       <button className='btn ms-lg-4 ms-3 me-5 mb-lg-0 mb-3  rounded-5 px-4 py-2'>
       Save 
        </button>
       </div>
      </div>
    </div>
  );
}

export default StdPersonal