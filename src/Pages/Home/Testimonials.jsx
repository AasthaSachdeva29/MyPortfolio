import data from "../../data/index.json";

export default function Testimonial() {
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">

          <h2 className="sections--heading">Experience</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.testimonial?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            {/* <div className="testimonial--section--card--review">
              {Array.from({ length: 5 }, (reviews, index) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                >
                  <path
                    d="M12.0945 0.953177C12.5528 -0.135435 14.1138 -0.135434 14.5722 0.95318L17.2772 7.37836C17.4705 7.8373 17.9074 8.15087 18.4089 8.19059L25.4302 8.74669C26.6199 8.84091 27.1022 10.3076 26.1959 11.0746L20.8464 15.6016C20.4643 15.925 20.2973 16.4324 20.4141 16.9158L22.0484 23.6847C22.3253 24.8315 21.0625 25.7381 20.044 25.1235L14.0327 21.4961C13.6033 21.237 13.0633 21.237 12.634 21.4961L6.62265 25.1235C5.60415 25.7381 4.34127 24.8315 4.61818 23.6847L6.25256 16.9158C6.3693 16.4324 6.20243 15.925 5.82034 15.6016L0.47075 11.0746C-0.435624 10.3076 0.0467572 8.84091 1.23639 8.74669L8.25781 8.19059C8.75933 8.15087 9.19621 7.8373 9.38942 7.37836L12.0945 0.953177Z"
                    fill="#006B6A"
                  />
                </svg>
              ))}
            </div> */}
            {/* <img src="data:image/png;base64,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"/>
            <p className="text-md">{item.description}</p> */}
            <div className="testimonial--section--card--author--detail">
              <img src={item.src} alt="Avatar" style={{height:"40px",width:"40px"}}/> 
               <div>
                {/* <p className="text-md testimonial--author--name">
                  {item.author_name}
                </p>
                <p className="text-md testimonial--author--designation">
                  {item.author_designation}
                </p> */}
               <div>
               <p className="text-md">{item.description}   <i style={{marginLeft:"230px"}}>May 2024-present</i></p>
               <ul>
                <li>Developing and maintaining web applications using Next.js, React.js</li>
                
               </ul>
               
               </div>
              </div>
             </div> 
          </div>
        ))}

       
      </div>
    </section>
  );
}
