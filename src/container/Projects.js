import Image from "next/image";
import Project from "../../public/img/Project.png"
export default function Projects() {
    return (
        <div className="container d-none d-lg-block ">
            <h4 className="ms-3">Projects</h4>
            <div className="row">
            <div className="d-flex justify-content-evenly gap">
            <Image className="" src={Project} height={280}></Image>
            <Image className="" src={Project} height={280}></Image>
            <Image className="" src={Project} height={280}></Image>
            </div>
            </div>
            <div className="row mt-2">
            <div className="d-flex justify-content-evenly gap">
            <Image className="" src={Project} height={280}></Image>
            <Image className="" src={Project} height={280}></Image>
            <Image className="" src={Project} height={280}></Image>
            </div>
            </div>
           <div className="mt-4 ">
           <h5>
            Ideology Behind Constance Schaden
            </h5>
            <p className="fw-light">
            Lorem ipsum dolor sit amet consectetur. Ullamcorper adipiscing a vestibulum mi quisque est nulla. Semper tortor ornare proin aliquam mauris vel aliquam magna. Tellus faucibus consequat risus velit ut dolor quis. Mattis eget purus lorem pulvinar dapibus blandit. Tempor at euismod mattis a purus interdum amet id. 
            Ac egestas etiam quis egestas morbi tincidunt lectus. Lorem amet augue condimentum scelerisque.
            </p>
           </div>
        </div>

// import Image from "next/image";
// import Project from "../../public/img/Project.png";
// import { useState } from "react";

// export default function Projects() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const projectTitle = "Project Title";

//   const imageContainerStyle = {
//     position: "relative",
//     overflow: "hidden",
//     transition: "transform 0.3s ease",
//   };

//   const overlayStyle = {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "rgba(0, 0, 0, 0.6)",
//     color: "white",
//     textAlign: "center",
//     padding: "10px",
//     opacity: 0,
//     transition: "opacity 0.3s ease",
//   };

//   const imageContainerHoverStyle = {
//     transform: "translateY(-10px)",
//   };

//   const overlayHoverStyle = {
//     opacity: 1,
//   };

//   return (
//     <div className="container">
//       <h4 className="ms-3">Projects</h4>
//       {[1, 2].map((row, rowIndex) => (
//         <div className="row mt-2" key={rowIndex}>
//           <div className="d-flex justify-content-evenly gap">
//             {[1, 2, 3].map((col, colIndex) => (
//               <div
//                 key={colIndex}
//                 style={{
//                   ...imageContainerStyle,
//                   ...(hoveredIndex === rowIndex * 3 + colIndex
//                     ? imageContainerHoverStyle
//                     : {}),
//                 }}
//                 className="image-container"
//                 onMouseEnter={() => setHoveredIndex(rowIndex * 3 + colIndex)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//               >
//                 <Image src={Project} height={280} alt="Project Image" />
//                 <div
//                   className="overlay"
//                   style={{
//                     ...overlayStyle,
//                     ...(hoveredIndex === rowIndex * 3 + colIndex
//                       ? overlayHoverStyle
//                       : {}),
//                   }}
//                 >
//                   {projectTitle}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//       <div className="mt-4">
//         <h5>Ideology Behind Constance Schaden</h5>
//         <p className="fw-light">
//           Lorem ipsum dolor sit amet consectetur. Ullamcorper adipiscing a
//           vestibulum mi quisque est nulla. Semper tortor ornare proin aliquam
//           mauris vel aliquam magna. Tellus faucibus consequat risus velit ut
//           dolor quis. Mattis eget purus lorem pulvinar dapibus blandit. Tempor
//           at euismod mattis a purus interdum amet id. Ac egestas etiam quis
//           egestas morbi tincidunt lectus. Lorem amet augue condimentum
//           scelerisque.
//         </p>
//       </div>
//       <style jsx>{`
//         .image-container:hover {
//           transform: translateY(-10px);
//         }
//         .image-container:hover .overlay {
//           opacity: 1;
//         }
//       `}</style>
//     </div>
//   );
// }

    );
}       
