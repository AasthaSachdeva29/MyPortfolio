export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/myp2.png" alt="About Me" style={{height:"600px",width:"450px",borderRadius:"100px"}}/>
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">Aastha Sachdeva</h1>
          <p className="hero--section-description">
          I am currently a 4th year student at UIET Kurukshetra, Kurukshetra University in Computer Science and Engineering. 
          </p>
          <p className="hero--section-description">
            My academic background, combined with hands-on experience in software development, makes me confident in my ability to contribute effectively to your team.
          </p>
        </div>
      </div>
    </section>
  );
}
