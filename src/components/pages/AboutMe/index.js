import "./AboutMe.css";
import profilePicture from '../../../images/profile-picture.jpeg'

const AboutMePage = () => {
  return (
    <div className="container p-4">
      <section className="d-flex flex-column">
        <div className="col-md-8">
          <h5>
            <strong>About Me</strong>
          </h5>
          <h2 id="heart">&hearts;</h2>

          {/* Added an hr code to add the line between the title and paragraph */}
          <hr />
        </div>
        <div className="col text-justify">
          <p>
            <img
              id="profile"
              className="img-thumbnail float-left mr-2 mb-1"
              src={profilePicture}
              
              alt="profile"
            />
          </p>
          <h4>
            <p className="introduction">
              My name is Sofia Mantas. I'm a school psychologist, a Flight
              Attendant, and currently aspiring to become a Web Developer. I was
              born and raised in Venezuela by inmigrant parents. I graduated
              with a Bachelor's Degree in School Psychology and started working
              in different school settings. I then became a Child Abuse
              Ivestigator for the State of Florida, to later become a Dependency
              Case Manager, totaling eight years working for the Child Wellfare
              System. Meanwhile, I also worked and directed the translation
              department of a local church. I became a Flight Attendant in 2019,
              and have been enjoying the skies while ensuring passanger safety,
              since then. I'm currently back in school persuing a career in Web
              Development. Life is a constant change for me, therefore taking
              this big step in my professional life will definitly bring as many
              satisfactions as challenges. I am ready for it.
            </p>
          </h4>
          <br />
          <button id="resume" className="glow-on-hover" type="button">
            <a href="https://drive.google.com/file/d/1eeq3eAx5REHAY9QnGh6DsOraCG0jd2ht/view?usp=sharing">
              Check out my Resume
            </a>
          </button>
          <br />
          <button id="linkedin" className="glow-on-hover" type="button">
            <a href="https://www.linkedin.com/in/sofia-mantas-5b7953a9/">
              Check out my Linkedin
            </a>
          </button>
          <br />
          <button id="github" className="glow-on-hover" type="button">
            <a href="https://github.com/Sofoula23">Check out my Github</a>
          </button>
        </div>
      </section>
    </div>
  );
};
export default AboutMePage;
