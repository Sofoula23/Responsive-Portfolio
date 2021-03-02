import "./Projects.css";
import burgerLogImage from "../../../images/burger.png";
import weatherImage from "../../../images/weatherman.png";
import moodImage from "../../../images/mood.png";
import omgImage from "../../../images/omg-homepage.png";
import dayPlannerImage from "../../../images/day-planner.png";
import employeeDirImage from "../../../images/emp-dir.png";
import Project from "../../Project";

const ProjectsPage = () => {
  return (
    <div className="container projects-container p-4">
      <section className="d-flex flex-column">
        <div className="col-md-8">
          <h5>
            <strong>Portfolio</strong>
          </h5>
          <h2 id="heart">&hearts;</h2>

          <hr />
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Project
              title="Burger-Logger"
              description={
                <span>
                  Eat-Da-Burger! is a restaurant app that lets users input the
                  names of burgers they'd like to eat and then, once they eat
                  it, it passes the burger to a devoured list.
                </span>
              } 
              image={burgerLogImage}
              imageAlt="Burger app"
              liveUrl="https://intense-ocean-47136.herokuapp.com/"
              githubUrl="https://github.com/Sofoula23/Burger-Logger.git"
            />

          </div>
          <div className="col-sm-6">
          <Project
              title="Weather Man"
              description={
                <span>
                  This app displays a five day weather forecast based on the
                  user's input. The app shows the current weather for that city
                  in addition to the temperature, humidity, UV index, and an
                  image of the forecast.
                </span>
              } 
              image={weatherImage}
              imageAlt="Weatherman app"
              liveUrl="https://sofoula23.github.io/Weather-Man/"
              githubUrl="https://github.com/Sofoula23/Weather-Man"
            />

          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
          <Project
              title="Project: Mood"
              description={
                <span>
                    An application that helps users pull up relevant music videos
                  according to their mood and based on their text input. It also
                  provides the current weather in their city.
                </span>
              } 
              image={moodImage}
              imageAlt="Mood app"
              liveUrl="https://bokosyk.github.io/Mood/"
              githubUrl="https://github.com/Bokosyk/Mood"
            />


          </div>
          <div className="col-sm-6">
          <Project
              title="Project: Oh My Gift!"
              description={
                <span>
                  Oh-My-Gift is a "find a gift" application that assist Users to
                  find the perfect gift for that special someone. 
                </span>
              } 
              image={omgImage}
              imageAlt="OMG"
              liveUrl="https://peaceful-depths-70768.herokuapp.com/"
              githubUrl="https://github.com/JRLaro/Oh-My-Gift.git"
            />  

        </div>
        </div>

        <div className="row">
          <div className="col-sm-6">

          <Project
              title="Day Planner"
              description={
                <span>
                   This is a Day Planner that allows the user to plan their day
                  by inputing information and saving it into the local storage.
                  he application uses Moment js for the timeblock and changes
                  color based on the time (past, present, future).
                </span>
              } 
              image={dayPlannerImage}
              imageAlt="Day planner"
              liveUrl="https://github.com/Sofoula23/calendar"
              githubUrl="https://sofoula23.github.io/calendar/"
            />   

          </div>
          <div className="col-sm-6">
          <Project
              title="Employee Directory"
              description={
                <span>
                  This a React based App that uses the random user API to render a list of employees. 
                </span>
              } 
              image={employeeDirImage}
              imageAlt="Employee Directory"
              liveUrl="https://sofoula23.github.io/employee_directory/"
              githubUrl="https://github.com/Sofoula23/employee_directory"
            />   

          </div>
        
        </div>
      </section>
    </div>
  );
};
export default ProjectsPage;
