import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import Insta from "../../../assets/insta.png";
import Mail from "../../../assets/gmail.png";
import Github from "../../../assets/github.jpeg";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="contact">
          <Link to="https://github.com/kumble-amith">
            <img src={Github} alt="IG" />
          </Link>
          <Link to="mailto:amithk2003@gmail.com">
            <img src={Mail} alt="IG" />
          </Link>
          <Link to="https://www.instagram.com/kumble_amith/">
            <img src={Insta} alt="IG" />
          </Link>
        </div>
        <div className="nav-links">
          <AnchorLink href="#intro" className="link">
            Home
          </AnchorLink>
          <AnchorLink href="#projects" className="link">
            Projects
          </AnchorLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
