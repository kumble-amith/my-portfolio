import SetProjects from "./SetProjects";

function Projects() {
  const porjects = [
    {
      name: "Audio Transcription",
      github: "https://github.com/kumble-amith/Speech-to-Text",
      description: [
        "It is deep neural network model with a high pre-processing. The data in the form of amplitude values areconverted into machine readable form with the help of ”Fourier Series”.",
        " The prepossessed wav files are fed into the model which consists of CNN , RNN , Dense layers which are in the same order.",
        "An interactive user-interface is being developed using Django HTML and CSS.",
      ],
      date: "04/24",
      photo: "stt.png",
    },
    {
      name: "Brain Tumor Classification",
      github: "https://github.com/kumble-amith/Brain-Tumor-Classification",
      description: [
        "MRI scans of the brain are fed along with labeled data for the model and the results are generated accordingly using CNN.",
        "Django is used to build a interactive front-end to the project with the help of HTML and CSS",
      ],
      date: "10/23",
      photo: "brain-tumor.png",
    },
    {
      name: "Time Series Data Analysis",
      github: "",
      description: [
        " This is a Integration of WEB and ML integrated using Django",
        "The csv is taken as an input to the algorithm.",
        "The data is read and then the model is built based on the user specified hyper-parameters.",
        "This act as a great visualizing tool for beginners as well.",
      ],
      date: "5/24",
      photo: "time-data.png",
    },
    // {

    // }
  ];
  return (
    <>
      <div className="projects" id="projects">
        <p className="title">Projects</p>
        {porjects.map((project, i) => (
          <SetProjects key={i} project={project} />
        ))}
      </div>
    </>
  );
}

export default Projects;
