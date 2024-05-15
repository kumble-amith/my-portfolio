import { Link } from "react-router-dom";
import Github from "../../../assets/github.jpeg";

interface Props {
  project: any;
}
function SetProjects({ project }: Props) {
  const name = project.name;
  const github = project.github;
  const descriptions = project.description;
  const date = project.date;
  const photo = project.photo;

  return (
    <>
      <div className="each-project">
        <div className="content">
          <p className="project-title">{name}</p>
          <div>
            {descriptions.map((description: string, i: number) => (
              <ul className="desc">
                <li>
                  <p className="bullet-head" key={i}>
                    &#x27A3;
                  </p>
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
          src={`https://github.com/kumble-amith/my-portfolio/blob/main/assets/${photo}?raw=true`}
          // alt="L"
          className="pimg"
        />
      </div>
    </>
  );
}

export default SetProjects;
