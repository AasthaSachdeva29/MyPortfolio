import data from "../../data/index.json";

export default function Achievments() {
  return (
    <section className="testimonial--section" id="achievments">
      <div className="portfolio--container-box">
        <div className="portfolio--container">

          <h2 className="sections--heading">Achievments</h2>
        </div>
      </div>
      <div className="portfolio--section--container ach-big" style={{display:"flex",boxShadow:"10px"}}>
        {data?.ach?.map((item, index) => (
            <a href={item.link} target="_blank" style={{textDecoration:"none"}}>
          <div key={index} className="testimonial--section--card ach-card" style={{padding:"20px",display:"flex"}}>
               <h1 className="text-lg ach-t">{item.description}</h1>
              
          </div>
          </a>
        ))}

       
      </div>
    </section>
  );
}
