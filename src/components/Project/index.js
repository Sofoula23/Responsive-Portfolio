import "./Project.css";

function Project(props) {
  return (
    <div className="card mx-3 project">
      <div className="card-body">
        <img className="card-img-top" src={props.image} alt={props.imageAlt} />
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.liveUrl} className="btn btn-dark liveUrlBtn">
          Deployed
        </a>
        <a href={props.githubUrl} className="btn btn-primary">
          Github
        </a>
      </div>
    </div>

  );
}
export default Project;
