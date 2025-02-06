import data from "../../data/index.json";

export default function Testimonial() {
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box pcb">
        <div className="portfolio--container pc">
          <h2 className="sections--heading">Experience</h2>
        </div>
      </div>
      <div className="portfolio--section--container psc">
        {data?.testimonial?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <div className="testimonial--section--card--author--detail">
              <img src={item.src} alt="Avatar" className="avatar" style={{height:"40px",width:"40px"}}/> 
              <div className="text-container">
                <p className="text-md">
                  {item.description} 
                  <i className="date" style={{marginLeft:"40%"}}>May 2024 - Sep 2024</i>
                </p>
                <ul>
                  <li>Developing and maintaining web applications using Next.js, React.js</li>
                </ul>
              </div>
            </div> 
          </div>
        ))}
      </div>
    </section>
  );
}

