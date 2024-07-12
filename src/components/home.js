import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faLocationDot ,faHouse,faDollarSign} from '@fortawesome/free-solid-svg-icons'
const Home = () => {
  return (
    <div className="">
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://zameensquare.com/_next/static/media/Get-Our-Mobile-App-Now-mobile(new).6ed4bcd6.gif" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://zameensquare.com/_next/static/media/Get-Our-Mobile-App-Now-mobile(new).6ed4bcd6.gif" class="d-block w-100" alt="..."/>
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      <div className="container">
        <div className="row  justify-content-sm-center">
          <div className="col-md-6">
            <div class="card border-white">
              <div className="d-flex text-dark ">
                <div class="card-header bg-white" role='button'>Buy</div>
                <div class="card-header bg-white" role='button'>Rent</div>
              </div>

              <div class="card-body">
                <div className="d-flex ">
                  <div class="dropdown ">
                    <button
                      class="btn bg-light dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ><FontAwesomeIcon icon={faLocationDot} size="sm" className=""style={{color: "#0ebe89",}} />
                     Enter city, locality, project
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                        Vidyaranyapura, Bengaluru
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                        MS Palya, Bengaluru
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                        Chikkagubbi Village, Bengaluru
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="dropdown me-3  d-none d-md-block ">
                    <button
                      class="btn bg-light dropdown-toggle "
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ><FontAwesomeIcon icon={faHouse} size="sm" className='me-2' style={{color: "#0ebe89",}} />
                    Property types
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          Flat/Apartment
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Residential House
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Plot/Land
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Villa/Bungalow
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="dropdown me-3  d-none d-md-block">
                    <button
                      class="btn bg-light dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ><FontAwesomeIcon icon={faDollarSign} size="sm"className='me-2' style={{color:"#0ebe89",}} />
                      Budget
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='px-3 py-2 rounded-3 bg-primary'>
                  <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" style={{color: "#fcfcfc",}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home