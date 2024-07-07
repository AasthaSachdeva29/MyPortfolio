// import data from "../../data/index.json";

// export default function MySkills() {
//   return (
//     <section className="skills--section" id="mySkills">
//       <div className="portfolio--container">
//         <p className="section--title">My Skills</p>
//         <h2 className="skills--section--heading">My Expertise</h2>
//       </div>
//       <div className="skills--section--container">
//         {data?.skills?.map((item, index) => (
//           <div key={index} className="skills--section--card">
//             <div className="skills--section--img">
//               <img src={item.src} alt="Product Chain" />
//             </div>
//             <div className="skills--section--card--content">
//               <h3 className="skills--section--title">{item.title}</h3>
              
//               {/* <p className="skills--section--description">{item.description[i]}</p> */}

//               <ul className="skills--section--description">
//                 {item.description.map((description, i) => (
//                   <li key={i}>{description}</li>
//                 ))}
//                 </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



import React from 'react';
import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container" style={{display:"flex",paddingRight:"50px"}}>
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt={item.title} />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              {Array.isArray(item.description) ? (
                <ul className="skills--section--description">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              ) : (
                <p className="skills--section--description">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

