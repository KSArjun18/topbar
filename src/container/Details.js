import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faProjectDiagram, faLaptopHouse, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export default function Details() {
    return (
        <div className="container mt-4">
            <h4 className="mb-4">Work Details</h4>
            <div className="row row-cols-2 row-cols-md-6 row-cols-lg-4 g-4">
                <div className="col">
                    <div className="card h-100 text-center p-3">
                        <FontAwesomeIcon icon={faBriefcase} size="2x" className="mb-3 text-primary"/>
                        <div className="card-body">
                            <h5 className="card-title">5 Years Experienced</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-center p-3">
                        <FontAwesomeIcon icon={faProjectDiagram} size="2x" className="mb-3 text-success"/>
                        <div className="card-body">
                            <h5 className="card-title">29 Projects Completed</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-center p-3">
                        <FontAwesomeIcon icon={faLaptopHouse} size="2x" className="mb-3 text-warning"/>
                        <div className="card-body">
                            <h5 className="card-title">Available for Online Consultation</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-center p-3">
                        <FontAwesomeIcon icon={faCalendarAlt} size="2x" className="mb-3 text-danger"/>
                        <div className="card-body">
                            <h5 className="card-title">Mon to Sat 9:00 AM to 5:00 PM</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
