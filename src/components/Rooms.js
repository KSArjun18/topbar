import React from 'react';
import { Favorite_Rooms } from './Carddata';


const Rooms = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {Favorite_Rooms.map(room => (
          <div key={room.id} className="col-md-4 mb-4">
            <div className="card bg-dark text-white h-100">
              <img src={room.carousel_image} className="card-img" alt={room.title} />
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <div className="bg-light p-3 rounded text-dark">
                  <h5 className="card-title">{room.title}</h5>
                  <p className="card-text">{room.SQ_Ft} ・ {room.SQ_M}</p>
                  <p className="card-text">{room.content}</p>
                  <ul className="list-unstyled">
                    <li>{room.facility_one}</li>
                    <li>{room.facility_two}</li>
                    <li>{room.facility_three}</li>
                  </ul>
                  <button className="btn btn-primary">Reserve</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
