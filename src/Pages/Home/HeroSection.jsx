export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Aastha</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">MERN Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            A passionate and enthusisatic developer ready to
            <br /> apply my skills in solving real-world problems.
          </p>
        </div>
        <a href="https://drive.google.com/file/d/1AOfO2rXeFPKyxFCQzE53e9BqeV0qC342/view?usp=sharing">
        <button className="btn btn-primary" style={{marginTop:"20px"}}>Get My Resume</button>
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/myp.png" alt="Hero Section"  style={{height:"500px",width:"450px",borderRadius:"100px"}}/>
      </div>
    </section>
  );
}
