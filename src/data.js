//Home Page
const greeting = {
  title: "Nadjib Belaribi",
  nickname: "Software Engineer | Full-Stack Developer",
  subTitle:
    " A 25 year old boy, passionate about software and latest technologies. I enjoy building sustainable and scalable systems, optimal and responsive websites.",
  resumeLink:
    "https://drive.google.com/file/d/1MNeD2tOwF2wnYb70rwfHAGTkt2u0LsKy/view?usp=sharing",
  githubProfile: "https://github.com/NadjibBelaribi",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/NadjibBelaribi",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nadjib-belaribi-ba898b13a/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
];

const skills = {
  data: [
    {
      title: "Front End Development",
      skills: [
        "♟ Building responsive website front end using React-Redux",
        "♟ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "♟ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#3a0880",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#0a0100",
          },
        },
        {
          skillName: "JEST",
          fontAwesomeClassname: "simple-icons:jest",
          style: {
            color: "#f01c05",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
      ],
    },
    {
      title: "Back End Development",
      skills: [
        "♟ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "♟ Experience of working with Computer Vision and NLP projects",
        "♟ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JEST",
          fontAwesomeClassname: "simple-icons:jest",
          style: {
            color: "#f01c05",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#e535ab",
          },
        },
        {
          skillName: "Apollo",
          fontAwesomeClassname: "simple-icons:apollographql",
          style: {
            color: "#3a0880",
          },
        },
      ],
    },
    {
      title: "Cloud Infra & Architecture",
      skills: [
        "♟ Experience working on multiple cloud platforms",
        "♟ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "♟ Deploying deep learning models on cloud to use on mobile devices",
        "♟ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#0a0100",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#0a0100",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University Of Strasbourg",
      subtitle: "Software Science and Engineering",
      logo_path: "unistra.png",
      alt_name: "University Of Strasbourg",
      duration: "2018 - 2022",
      descriptions: [
        "♟ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "♟ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "♟ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link:
        "https://mathinfo.unistra.fr/formations/master/master-informatique/science-et-ingenierie-du-logiciel-sil",
    },
    {
      title: "Higher School Of Computer Science",
      subtitle: "Software Engineering",
      logo_path: "esi.png",
      alt_name: "Higher School Of Computer Science",
      duration: "2016 - 2018",
      descriptions: [
        "♟ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "♟ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "♟ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.esi.dz/",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full Stack Developer and Operations",
          company: "Artex Stock Exchange",
          company_url: "https://www.artex-stockexchange.com/",
          logo_path: "artex.png",
          duration: "April 2021 - Now",
          location: "Paris, France",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Full Stack Developer",
          company: "Aircampus",
          company_url: "",
          logo_path: "aircampus.png",
          duration: "September 2020 - December 2020",
          location: "Strasbourg, France",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "GDG Member [Volunteer]",
          company: "GDG",
          company_url: "https://gdg.community.dev/",
          logo_path: "gdg.png",
          duration: "October 2017 - Mai 2017",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact",
    profile_image_path: "contact.png",
    description:
      "I can be reached on linkedin as well as by email or telephone on my CV below. Im always available to listen to new opportunities.",
  },
};

export {
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  contactPageData,
};
