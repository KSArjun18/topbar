import Image from "next/image";
import Project_details from '@/components/architect/modals/Project_details';
import Request_project from "../../public/img/Request_project.png";
import { useState } from "react";

export default function Projects({ architect }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const imageContainerStyle = {
    position: "relative",
    overflow: "hidden",
    transition: "transform 0.3s ease",
  };

  const overlayStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    color: "black",
    textAlign: "center",
    padding: "10px",
    opacity: 0,
    transition: "opacity 0.3s ease",
  };

  const imageContainerHoverStyle = {
    transform: "translateY(-10px)",
  };

  const overlayHoverStyle = {
    opacity: 1,
  };

  return (
    <>
      <div className="container d-none d-lg-block">
        <h4 className="ms-3">Projects</h4>
        {architect.projectImages ? (
          <div>
            {Array.from({ length: 2 }).map((_, rowIndex) => (
              <div
                className="row mt-2"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#projectviewModal"
                data-bs-whatever="@mdo"
                key={rowIndex}
              >
                <div className="d-flex flex-wrap justify-content-evenly mb-1">
                  {architect.projectImages
                    .slice(rowIndex * 3, rowIndex * 3 + 3)
                    .map((col, colIndex) => (
                      <div
                        key={colIndex}
                        style={{
                          ...imageContainerStyle,
                          ...(hoveredIndex === rowIndex * 3 + colIndex
                            ? imageContainerHoverStyle
                            : {}),
                        }}
                        className="image-container"
                        onMouseEnter={() =>
                          setHoveredIndex(rowIndex * 3 + colIndex)
                        }
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <img
                          className="rounded-3"
                          src={col.projectImg}
                          height={280}
                          alt="Project Image"
                        />
                        <div
                          className="overlay"
                          style={{
                            ...overlayStyle,
                            ...(hoveredIndex === rowIndex * 3 + colIndex
                              ? overlayHoverStyle
                              : {}),
                          }}
                        >
                          <h5 className="mb-0">{col.projectTitle}</h5>
                          <div className="text-success">{col.date}</div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="container d-none d-lg-block mt-5">
            <div className="row">
              <div className="d-flex justify-content-center">
                <Image src={Request_project} alt="Request Project" />
              </div>
              <div className="text-center mt-2">
                <h5 className="mb-1 mt-2">Request to upload a project</h5>
                <p className="">
                  <small>
                    Lorem ipsum dolor sit amet consectetur. Ullamcorper
                    adipiscing a vestibulum mi quisque est nulla.
                  </small>
                </p>
                <button
                  type="button"
                  className="btn btn-success bg-success px-4 rounded-3 mb-5"
                >
                  I’m Looking for your projects
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-4">
          <h5>Ideology Behind Constance Schaden</h5>
          <p className="fw-light">
            Lorem ipsum dolor sit amet consectetur. Ullamcorper adipiscing a
            vestibulum mi quisque est nulla. Semper tortor ornare proin aliquam
            mauris vel aliquam magna. Tellus faucibus consequat risus velit ut
            dolor quis. Mattis eget purus lorem pulvinar dapibus blandit. Tempor
            at euismod mattis a purus interdum amet id. Ac egestas etiam quis
            egestas morbi tincidunt lectus. Lorem amet augue condimentum
            scelerisque.
          </p>
        </div>
        <style jsx>{`
          .image-container:hover {
            transform: translateY(-10px);
          }
          .image-container:hover .overlay {
            opacity: 1;
          }
        `}</style>
      </div>

      <div className="container d-lg-none">
        <div className="row">
          {architect.projectImages?.map((value, index) => (
            <div className="mb-4" key={index}>
              <div className="card rounded-5 mb-3">
                <img
                  className="card-img-top"
                  src={value.projectImg}
                  height={280}
                  alt="Project Image"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">{value.projectTitle}</h5>
                  <p className="card-text fw-light text-success">
                    <small>{value.date}</small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Project_details />
    </>
  );
}
