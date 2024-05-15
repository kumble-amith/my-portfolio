import { Link } from "react-router-dom";
// import Logo from "../../../assets/laptop-image.jpeg";
import Github from "../../../assets/github.jpeg";

interface Props {
  project: any;
}
function SetProjects({ project }: Props) {
  const name = project.name;
  const github = project.github;
  const descriptions = project.description;
  const date = project.date;

  return (
    <>
      <div className="each-project">
        <div className="content">
          <p className="project-title">{name}</p>
          <div>
            {descriptions.map((description: string) => (
              <ul className="desc">
                <li>
                  <p className="bullet-head">&#x27A3;</p>
                  {description}
                </li>
              </ul>
            ))}
          </div>
          <div className="pfooter">
            <Link to={github}>
              <img src={Github} alt="Github" />
            </Link>
            <p>Date {date}</p>
          </div>
        </div>
        <img
          src="https://github.com/kumble-amith/my-portfolio/blob/main/assets/github.jpeg"
          alt="L"
          className="pimg"
        />
      </div>
    </>
  );
}

export default SetProjects;
