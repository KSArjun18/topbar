import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 // Ensure you create and import this CSS file for additional styles if needed
import { Carousel } from 'react-bootstrap';

export const Favorite_Rooms = [
    {
        "id": 1,
        "title": "One Bedroom Ocean Suit",
        "carousel_image": 'https://booking.webestica.com/assets/images/category/hotel/resort/01.jpg',
        "SQ_Ft": "847-900 SQ.Ft",
        "SQ_M": "79-84 SQ.M",
        "content": "Lively use looked latter regard had. We understand that theory is important to build a solid foundation",
        "facility_one": "Ocean View",
        "facility_two": "Living Roof",
        "facility_three": "Outdoor Soaking Tub",
    },
    {
        "id": 2,
        "title": "The Penthouse Suite",
        "carousel_image": 'https://booking.webestica.com/assets/images/category/hotel/resort/02.jpg',
        "SQ_Ft": "789-850 SQ.Ft",
        "SQ_M": "78-85 SQ.M",
        "content": "Lively use looked latter regard had. We understand that theory is important to build a solid foundation",
        "facility_one": "Indoor Tub",
        "facility_two": "Private Deck",
        "facility_three": "Freestanding",
    },
    {
        "id": 3,
        "title": "The Entertainment Suite",
        "carousel_image": 'https://booking.webestica.com/assets/images/category/hotel/resort/03.jpg',
        "SQ_Ft": "847-900 SQ.Ft",
        "SQ_M": "79-84 SQ.M",
        "content": "Lively use looked latter regard had. We understand that theory is important to build a solid foundation",
        "facility_one": "Ocean View",
        "facility_two": "Private Deck",
        "facility_three": "Living Roof",
    },
];

const RoomCard = ({ room }) => {
    return (
        <div className="card mb-3" style={{ maxWidth: '540px', background: 'rgba(255, 255, 255, 0.9)', position: 'absolute', bottom: '20px', right: '20px' }}>
            <div className="card-body">
                <h5 className="card-title">{room.title}</h5>
                <p className="card-text">{room.SQ_Ft} • {room.SQ_M}</p>
                <p className="card-text">{room.content}</p>
                <ul className="list-unstyled">
                    <li>✔ {room.facility_one}</li>
                    <li>✔ {room.facility_two}</li>
                    <li>✔ {room.facility_three}</li>
                </ul>
                <a href="#" className="btn btn-primary">Reserve</a>
            </div>
        </div>
    );
};

const RoomCarousel = () => {
    return (
        <div className="container-fluid p-0">
            <Carousel controls={true} indicators={false} className="custom-carousel">
                {Favorite_Rooms.map(room => (
                    <Carousel.Item key={room.id}>
                        <div className="d-block w-100 position-relative" style={{ height: '600px', backgroundImage: `url(${room.carousel_image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <RoomCard room={room} />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default RoomCarousel;
