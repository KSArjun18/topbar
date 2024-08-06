import React from 'react'

const Form = () => {
  return (
    <>
     
     

      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className=" w-auto col-lg-6 std_border-dot std_input_item">
            <div className="">
              <div className="d-flex gap-4">
                <div class="input-group mb-3  w-75">
                  <input
                    type="text"
                    class="form-control   rounded-5"
                    placeholder="First Name"
                    aria-label="First Name"
                    aria-describedby="basic-addon1"
                  
                  />
                </div>
                <div class="input-group mb-3 w-75" >
                  <input
                    type="text"
                    class="form-control  rounded-5"
                    placeholder="Last Name"
                    aria-label="Last Name"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control  rounded-5"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control  rounded-5"
                  placeholder="Email ID"
                  aria-label="Email ID"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control  rounded-5"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
          
          <div className=" w-auto col-lg-6  std_input_item">
            <div className="">
              <div className="d-flex gap-4">
                <div class="input-group mb-3  w-75">
                  <input
                    type="text"
                    class="form-control   rounded-5"
                    placeholder="College"
                    aria-label="College"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div class="input-group mb-3 w-75" >
                  <input
                    type="text"
                    class="form-control  rounded-5"
                    placeholder="Course"
                    aria-label="Course"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control  rounded-5"
                  placeholder="Department"
                  aria-label="Department"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control  rounded-5"
                  placeholder="Year of study"
                  aria-label="Year of study"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control  rounded-5"
                  placeholder="College ID"
                  aria-label="College ID"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
        <div className='d-flex justify-content-center mt-2 '>
        <p className='std_text'><small><small><small>By signing up to lobster, you are agreeing to our Privacy Policy and Terms & Conditions</small></small></small></p>
        
        </div>
        <div className='d-flex justify-content-center'>
        <button type="button" class="btn rounded-5 submit_button">Submit</button>
        </div>

        </div>
      </div>
    </>
  );
}

export default Form