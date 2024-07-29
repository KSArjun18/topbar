

export default function RequestCallbackModal() {
    return (
      <>
      
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#requestCallbackModal">
          Open Modal
        </button>
        <div className="modal fade" id="requestCallbackModal" tabIndex="-1" aria-labelledby="requestCallbackModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-4">
              <div className="modal-header border-0">
                <h5 className="modal-title" id="requestCallbackModalLabel">Request Callback</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p className="mb-4">Fill out the form below to get a callback.</p>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                  <input type="text" className="form-control" id="mobileNumber" placeholder="Enter your mobile number" />
                </div>
                <button type="button" className="btn btn-primary w-100">Request Callback</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  