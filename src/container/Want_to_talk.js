import Image from "next/image";
import Talkfrom from "../../public/img/Talk.png";

export default function Want_to_talk() {
  return (
    <div className="container mt-5">
      <div className="row bg-white rounded-4 mb-4 shadow-sm position-relative p-4" style={{ border: '1px solid #e0e0e0'}}>
        <div className="col-12 col-lg-5 position-relative d-flex align-items-center justify-content-center">
          <Image
            src={Talkfrom}
            alt="Owner-Banner"
            layout="intrinsic"
            width={300}
            height={200}
            objectFit="contain"
          />
        </div>
        <div className="col-12 col-lg-7 text-center text-lg-start p-4 d-flex flex-column justify-content-center">
          <h2 className="text-primary" style={{fontSize: '24px'}}>Want to talk with Architect?</h2>
          <p className="fw-light" style={{fontSize: '16px', color: '#6c757d'}}>
            Lorem ipsum dolor sit amet consectetur. Ut dictumst hac viverra
            tincidunt porttitor. Viverra morbi eu ut nisi vivamus varius.
          </p>
          <button className="btn bg-success text-white text-nowrap rounded-pill px-5 text-uppercase">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
