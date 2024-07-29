import Image from 'next/image';

export default function Similar() {
  const cardsData = [
    {

    
      name: 'Constance Schaden',
      rating: '4.5',
      address: '32953 Norbert Green, New Ans...',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque sit a urna sollicitudin pharetra lobortis...',
      services: ['Residential Design', 'Interior Design'],
    },
    
    // Add two more cards data here
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {cardsData.map((card, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 rounded-4 shadow-sm overflow-hidden">
              <img
                className="card-img-top object-fit-cover position-relative"
                src="https://s3-alpha-sig.figma.com/img/1b63/baf4/5f2342714941ec5eb18ed7982f9d9155?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KKnqfyl68ynO7CVmNK0xTtI4y3t2ceHFwfnUGICu04toRarBVHKg1L0rAS5yPTCj2k~HlgZRDV-5nHlLWnP67uAn4Eq6PXpDqzTe44Clp3~erczlj~iAB60VNU12YwDnc2j6~S0p1jrC5nvoeBxHF-Zv~4ttnRdVbKhguDngRaxJm~Y6qSxLWtS7D9n63uw9akZnUOQbTU7-qkhLf2op2i2WKzVCRaBLW~UxIrprunxsJiJ1-EkoBojvWvET-azLoYP71rUWaEE3dIrM4gulhl1Da9mGIOn4MYyqow8sBtIQTRUKD0cbzhbfoDs3BsWbB8~sAZpB27I5iuqbwlw4rw__"
                alt="Card image cap "
                height={180}
                width={350}
              
              />
              <div className="card-body ">
              <img
                    src="https://s3-alpha-sig.figma.com/img/3c6c/680a/2154d8d677753140e768c2a11eebce17?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JJ3qRNjQi58lWe8QvB4kaGrb2D5QxB3x~0im7FZGcIjdUkvXWS9CBXE~LCbrSfiE~DW31EMzZPXY0wHWskCVdTt8Dr~RImVD8~kg8W39RhSkiJosWSU9Iydh396y9MXN-dXSNpVpiFAkoexRqDxLagEj9zsXrFoZnBXkbkU~ZHg6D5FPMEUDaitTrX7myhtWtYKhmTEnnAMkgzrsRT6Ss9i5-KmmSaPh2TOMzG3IFYrXUq~Z2TJWRMRwrAhaSkTVXeyJZigSwhpBu5oIU4uJ~gmhJeKstQLI6md~7DWgUWSk5HqPXFadJ9Y8~dEFSSoiaUcYeDcF7JUn84spRQkUXw__"
                    alt="Avatar"
                    className="rounded-4  position-absolute bottom-50"
                    height={100}
                    width={100}
                  />
                <div className="d-flex align-items-center ms-5 mb-3">
                  
                  <div className='ms-5'>
                    <h5 className="mb-0 ms-3">{card.name}</h5>
                    <p className="mb-0 text-muted">
                      <i className="bi bi-geo-alt-fill text-success me-1 ms-3"></i>
                      {card.address}
                    </p>
                  </div>
                  <div className="ms-auto">
                    <span className="badge bg-warning text-dark">
                      <i className="bi bi-star-fill me-1"></i>
                      {card.rating}
                    </span>
                  </div>
                </div>
                <p className="card-text">{card.description}</p>
                <div className="mb-3">
                  <span className="badge bg-light text-dark me-1">{card.services[0]}</span>
                  <span className="badge bg-light text-dark me-1">{card.services[1]}</span>
                  <span className="badge bg-light text-dark">More +</span>
                </div>
                <a href="#" className="btn btn-primary w-100">VIEW DETAILS</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
