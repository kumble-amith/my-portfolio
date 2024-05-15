import AnchorLink from "react-anchor-link-smooth-scroll";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <AnchorLink href="#intro" className="link">
          Home
        </AnchorLink>
        <AnchorLink href="#projects" className="link">
          Projects
        </AnchorLink>
      </div>
    </>
  );
}

export default Navbar;
