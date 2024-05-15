function About() {
  const skills = [
    " Python",
    "Java",
    "C",
    "C++",
    "Dart",
    "JavaScript",
    "SQL",
    "Sk-learn",
    "Tensorflow",
    "Keras",
    "React",
    "Node",
    "Express",
    "Flutter",
    "Django",
    "Git",
    "Linux",
  ];
  return (
    <>
      <div className="about">
        <div className="about-content">
          Passionate about AI, I specialize in ML, DL, NLP, and web development.
          Fascinated by ML's ability to mimic human intelligence, I've delved
          into DL's neural networks and NLP's language processing. Web
          development offers a canvas for crafting intuitive interfaces. My
          projects blend AI and web tech, from recommendation systems to
          chatbots. I aim to create impactful solutions and contribute to tech
          communities. Excited for AI's transformative potential, I'm committed
          to innovation and positive change.
        </div>
        <div className="skills-container">
          <div className="title">Skills</div>
          <div className="skills">
            {skills.map((skill) => (
              <span> {skill} </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
