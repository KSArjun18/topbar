import Image from "next/image";
import projectImg from "../../../public/img/projectImg.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faLocationDot, faShareNodes } from "@fortawesome/free-solid-svg-icons";

export default function Project_details() {
    return (
      <div className="">
        <div
          className="modal modal-xl fade"
          id="projectviewModal"
          tabindex="-1"
          aria-labelledby="projectviewModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content rounded-5">
              <div className="modal-header d-flex justify-content-between p-4 px-5">
                <h5
                  className="modal-title text_gray fw-semibold"
                  id="projectviewModalLabel"
                >
                  Project title goes here
                </h5>
                <i
                  role="button"
                  tabindex="0"
                  className="fa-regular fa-circle-xmark fa-xl text-end"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></i>
              </div>
              <div className="modal-body d-none d-lg-block">
                <div className="row ms-2">
                  <div className="col-lg-7 ">
                    <div className="row ">
                      <p className="fw-bold">Project Pictures </p>
                      <div className="d-flex">
                        <div className="col ">
                          <Image
                            src={projectImg}
                            height={285}
                          
                            className="object-fit-cover me-2"
                          ></Image>
                          <Image
                            src={projectImg}
                            height={285}
                           
                            className="object-fit-cover me-2"
                          ></Image>
                          <Image
                            src={projectImg}
                            height={285}
                         
                            className="object-fit-cover me-2"
                          ></Image>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/a01e/11dc/171b465c6d91390dcc8bce1cfc33f39e?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hYrR9pGUC2lceEibAxQozJWx9Ta0gQJ3TmJfHFoIOPX6ZjTYD-d54fEMUOsoAJ-XugeblWdRyzice7KigMYxynoS7y7oRV-ab09IKnVtEP9xjcuLeQLmeTzMm5OYIg-5qphgrOZHeScmNVvghAG~wsSMpAiCoDlVcOEEJd80~T8pvqGasRCj6YfId7l88CRqS4VbWDzxknOrrE7AgU6MB6mI5IP38wD4P9SAKrDA7py3N70zYo5CQtGCelRUECjUJq5gXxSv6Fjsk8HNwujitEen8aXstnrZRPi26NMrg4E2c7as8J9FMy~AB6LoWX4-n--CzSJXLG5OVvYCdqRU6Q__"
                       
                        height={250}
                        className="object-fit-cover rounded-5"
                      ></img>
                    </div>
                    <div className="row mt-2">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/0db3/518a/5e69fecfd98b5a4378508571577e0435?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ia1bIKIISgCTvA7f8a-XBjjf7Ye-zRqKC6csBoPXq7oKc5dBo8zRnkTsWf0dwt1qA1dEDS--EEEQ7qehy7qRtZm16v2jQSx-EwQfeJCNHw4MUshmYZAv5TjhKHSa9E6JBzvhg21v-h2w0U0DKb2ij7jX-~sSq27PD6-TtnpKgSF8-OnJ~E5vHqKbdDvz5q0Rx~GP3ys4IulFCIiCYtn7XMdUvrCAE12wXqZrmGqpWnhxHD3-PmV8GMiPzYezDSfGSDTlY06oNw1RXaerIEw~Sj34ADceMWiiDK28Pm2HBs3XcMOUct95Rhz2yZJQ0JAFinF-dyY5cSbkwXzb3Bmb6g__"
                
                        height={300}
                        className="object-fit-cover rounded-5"
                      ></img>
                    </div>
                  </div>
                  <div className="col-lg-5 p-5">
                    <div className="shadow-sm">
                      <p className="fw-semibold">More Information</p>
                      <div className="d-flex justify-content-between border border-black-2 rounded-3 px-3 py-2">
                        <p><FontAwesomeIcon icon={faBusinessTime} className="me-2" size="lg" style={{color: "#2591e4",}} /><small>Duration</small></p>
                        <p className="fw-semibold">3 Months</p>
                      </div>
                      <div className="d-flex mt-2 justify-content-between border border-black-2 rounded-3 px-4 py-2">
                        <p><FontAwesomeIcon icon={faLocationDot}  className="me-2" size="lg" style={{color: "#2591e4",}} /><small>Location</small></p>
                        <p className="fw-semibold">Mysore</p>
                      </div>
                    </div>
                   <div className="mt-4">
                   <p className="fw-semibold">About Project</p>
                   <p className="fw-light">Lorem ipsum dolor sit amet consectetur. Eros curabitur semper quam cursus nunc in non adipiscing sed. Proin sed aenean lacus ultricies condimentum tristique. Tristique 
                    eget semper nunc nisl egestas leo egestas. Pellentesque sollicitudin dignissim pulvinar faucibus purus.</p>
                   </div>
                   <div className="mt-4">
                    <p className="fw-semibold">Skills</p>
                    <div className="d-flex flex-wrap gap-1">
                    <p className="border border-black-3 px-2 rounded-3"><small>Skills Option 1</small></p>
                    <p className="border border-black-3 px-2 rounded-3"><small>Skills Option 1</small></p>
                    <p className="border border-black-3 px-2 rounded-3"><small>Skills Option 1</small></p>
                    <p className="border border-black-3 px-2 rounded-3"><small>Skills Option 1</small></p>
                    <p className="border border-black-3 px-2 rounded-3"><small>Skills Option 1</small></p>
                    </div>
                   </div>
                   <div className="mt-4">
                    <h6>Request Callback</h6>
                    <p className="fw-light"><small>Fill out the form below to get a callback.</small></p>
                   <div>
                   <p className="fw-semibold"><small>Name</small></p>
                   <input type="text" aria-label="First name" placeholder="Enter your name" class="form-control mb-4"/>
                   <p className="fw-semibold"><small>Mobile Number</small></p>
                   <input type="text" aria-label="First name" placeholder="Enter your mobile number" class="form-control"/>
                   </div>
                   </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer p-4 d-flex">
                <button type="button" className="btn border-black  px-3">
                  <FontAwesomeIcon
                    icon={faShareNodes}
                    className="me-3"
                    size="sm"
                  />
                  Share Project
                </button>
                <button type="button" className="btn btn-primary ms-3  px-3">
                  Request Callback
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="modal-body">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 mb-4 mb-lg-0">
            <h5>Project Title Goes Here - Lorem ipsum consectetur.</h5>
            <div className="d-flex justify-content-between mb-3">
              <div>
                <p className="mb-1"><small>Duration</small></p>
                <p className="fw-semibold">3 Months</p>
              </div>
              <div>
                <p className="mb-1"><small>Location</small></p>
                <p className="fw-semibold">Mysore</p>
              </div>
            </div>
            <p><small>About Project</small></p>
            <p>Lorem ipsum dolor sit amet consectetur. Eros curabitur semper quam cursus nunc in non adipiscing sed. Proin sed aenean lacus ultricies condimentum tristique. Tristique eget semper nunc nisl egestas leo egestas. Pellentesque sollicitudin dignissim pulvinar faucibus purus.</p>
            <p><small>Skills</small></p>
            <div className="d-flex flex-wrap gap-1 mb-4">
              <span className="badge bg-light text-dark border border-secondary">Skills Option 1</span>
              <span className="badge bg-light text-dark border border-secondary">Skills Option 2</span>
              <span className="badge bg-light text-dark border border-secondary">Skills Option 3</span>
              <span className="badge bg-light text-dark border border-secondary">Skills Option 4</span>
              <span className="badge bg-light text-dark border border-secondary">Skills Option 5</span>
            </div>
            <h6>Request Callback</h6>
            <p><small>Fill out the form below to get a callback.</small></p>
            <div className="mb-3">
              <label className="form-label"><small>Name</small></label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label className="form-label"><small>Mobile Number</small></label>
              <input type="text" className="form-control" placeholder="Enter your mobile number" />
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <h5>Project Pictures & Videos</h5>
            <div className="mb-3">
              <Image src="path-to-image-1" alt="Project Image" className="img-fluid rounded-3 mb-2" height={200} width={300} />
              <Image src="path-to-image-2" alt="Project Image" className="img-fluid rounded-3 mb-2" height={200} width={300} />
              <Image src="path-to-image-3" alt="Project Image" className="img-fluid rounded-3 mb-2" height={200} width={300} />
              <Image src="path-to-image-4" alt="Project Image" className="img-fluid rounded-3 mb-2" height={200} width={300} />
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary">Request Callback</button>
            </div>
          </div>
        </div>
      </div>
    </div> */}
      </div>
      
    );
}
