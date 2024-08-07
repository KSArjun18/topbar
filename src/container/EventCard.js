// import React, { useState } from 'react';

// const Subscribe = () => {
//   const [expandedCard, setExpandedCard] = useState(null);

//   const handleCardClick = (index) => {
//     setExpandedCard(expandedCard === index ? null : index);
//   };

//   const events = ['Event1', 'Event2', 'Event3'];

//   return (
//     <div className='container'>
//       <div className='row d-flex justify-content-center mt-5'>
//         <div className='col-lg-3 col-9 py-2 rounded-4 std_pop_head'>
//           <h2 className='text-center'>Popular Events</h2>
//         </div>
//       </div>
//       <div className='row d-flex justify-content-center mt-5'>
//         <div className='col-lg-8 col-11'>
//           {events.map((event, index) => (
//             <div
//               key={index}
//               className={`std_event_card${index + 1} col-12 rounded-4 text-center mb-3 ${
//                 expandedCard === index ? 'p-5' : 'p-3'
//               }`}
//               style={{
//                 backgroundColor: 'green',
//                 cursor: 'pointer',
//                 transition: 'all 0.3s ease-in-out',
//               }}
//               onClick={() => handleCardClick(index)}
//             >
//               <p className={expandedCard === index ? 'mt-5' : 'mt-2'}>{event}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Subscribe;



// ------------------this is satatic card---------------------------

// import React, { useState } from 'react';

// const Subscribe = () => {
//     const [expandedCard, setExpandedCard] = useState(null);
  
//     const handleCardClick = (index) => {
//       setExpandedCard(expandedCard === index ? null : index);
//     };
  
//     return (
//       <div className='container'>
//         <div className='row d-flex justify-content-center mt-5'>
//           <div className='col-lg-3 col-9 py-2 rounded-4 std_pop_head'>
//             <h2 className='text-center'>Popular Events</h2>
//           </div>
//         </div>
//         <div className='row d-flex justify-content-center mt-5'>
//           <div className='col-lg-8 col-11'>
//             {['Event1', 'Event2', 'Event3'].map((event, index) => (
//               <div
//                 key={index}
//                 className={`std_event_card${index + 1} col-12 rounded-4 text-center mb-3 ${
//                   expandedCard === index ? 'p-5' : 'p-3'
//                 }`}
//                 style={{
//                   backgroundColor: 'green',
//                   cursor: 'pointer',
//                   transition: 'all 0.3s ease-in-out',
//                 }}
//                 onClick={() => handleCardClick(index)}
//               >
//                 <p className={expandedCard === index ? 'mt-5' : 'mt-2'}>{event}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Subscribe;
  


// Explaination 


// {
// const handleCardClick = (index) => {
//     setExpandedCard(expandedCard === index ? null : index);
//   };
// This function, handleCardClick,
//  takes an index as an argument. 
//  It toggles the state of expandedCard between null
//   (no card expanded) and the index of the clicked card.
//  If the clicked card is already expanded, 
//  it will collapse it (set to null), otherwise, it will expand it.

// }

// {
//     <div
//     key={index}
//     className={`std_event_card${index + 1} col-12 rounded-4 text-center mb-3 ${
//       expandedCard === index ? 'p-5' : 'p-3'
//     }`}
//     style={{
//       backgroundColor: 'green',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease-in-out',
//     }}
//     onClick={() => handleCardClick(index)}
//   >
//     <p className={expandedCard === index ? 'mt-5' : 'mt-2'}>{event}</p>
//   </div>
// ))}


// explantion:
// This block generates each event card. Each card is a div with several attributes:

// key={index}: A unique key for React to identify each element.
// className: Sets the CSS class for styling. It uses template literals to dynamically apply classes based on whether the card is expanded (expandedCard === index).
// style: Inline styles for additional styling, including background color, cursor, and transition effects.
// onClick: An event handler that calls handleCardClick with the card's index when the card is clicked.
// The inner p element contains the event name and adjusts its top margin based on whether the card is expanded.
// }
