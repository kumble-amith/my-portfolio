import Logo from "../../../assets/laptop-image.jpeg";
function Introduction() {
  return (
    <>
      <div className="intro" id="intro">
        <div className="text">
          <div className="intro-title">
            Hi I am <span className="my-name">Amith Kumble</span>
          </div>
          <div className="intro-content">
            I'am an 6th sem Engineering Student form JSSSTU. My Home Town is
            Shivamogga and currently in Mysuru.
          </div>
        </div>

        <img src={Logo} alt="" />
      </div>
    </>
  );
}

export default Introduction;
