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
        "This is a Integration of WEB and ML integrated using Django",
        "The csv is taken as an input to the algorithm.",
        "The data is read and then the model is built based on the user specified hyper-parameters.",
        "This act as a great visualizing tool for beginners as well.",
      ],
      date: "5/24",
      photo: "time-data.png",
    },
    {
      name: "Optical Character Recognition",
      github: "https://github.com/kumble-amith/OCR",
      description: [
        "It is a deep neural network based model trained on varios Hand Written Characters. If a character is given to the model then it properly predicts the English Alphabet.",
        "It is a model trained using the CNN architecture and also has a pre-processing done. The accuracy of the model is around 81%",
      ],
      date: "10/23",
      photo: "cnn.png",
    },
    {
      name: "Expense Tracker",
      github: "https://github.com/kumble-amith/expense-tracker",
      description: [
        "It is a platform where a person can handle their expenses.",
        "The current implemented features are to only add and edit the expense of a person.Supabase is used as backed database to the project.",
      ],
      date: "4/24",
      photo: "exp-tracks.png",
    },
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
