import { Link } from "react-router-dom";
import Logo from "../../../assets/laptop-image.jpeg"

interface Props{
    project : any;
}
function SetProjects({project}: Props) {
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
                    {
                        descriptions.map((description: string) => (
                            <p className="desc">
                                 {`-> ${description}`}
                            </p>
                        ))
                    }
                </div>
                <div className="pfooter"> 
                    <Link to={github}><img src="assets/github.jpeg" alt="Github"/></Link>
                    <p>Date {date}</p>
                </div>
            </div>
            <img src={Logo} alt="L" className="pimg"/>
        </div>
    </>
  )
}

export default SetProjects