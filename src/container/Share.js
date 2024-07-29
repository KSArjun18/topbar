"use client"
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Share() {
  const [link, setLink] = useState("https://www.indiaproperty.com");

  const copyLink = () => {
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard");
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModal1Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-3">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="exampleModal1Label">
                Share Architect
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <p>Share this architect with your friends and family</p>
              <div className="d-flex justify-content-around mb-4">
                <div className="text-center">
                  <FontAwesomeIcon
                    icon={["fab", "facebook"]}
                    size="2x"
                    style={{ color: "#3b5998" }}
                  />
                  <p>Facebook</p>
                </div>
                <div className="text-center">
                  <FontAwesomeIcon
                    icon={["fab", "twitter"]}
                    size="2x"
                    style={{ color: "#00acee" }}
                  />
                  <p>Twitter</p>
                </div>
                <div className="text-center">
                  <FontAwesomeIcon
                    icon={["fab", "instagram"]}
                    size="2x"
                    style={{ color: "#e4405f" }}
                  />
                  <p>Instagram</p>
                </div>
                <div className="text-center">
                  <FontAwesomeIcon
                    icon={["fab", "whatsapp"]}
                    size="2x"
                    style={{ color: "#25D366" }}
                  />
                  <p>WhatsApp</p>
                </div>
                <div className="text-center">
                  <FontAwesomeIcon
                    icon={["fab", "telegram"]}
                    size="2x"
                    style={{ color: "#0088cc" }}
                  />
                  <p>Telegram</p>
                </div>
              </div>
              <div className="border-top pt-3">
                <p>Or copy link</p>
                <div className="input-group">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faLink} />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    value={link}
                    readOnly
                  />
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={copyLink}
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
