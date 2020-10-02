
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Faizan Khan",
  title: "Hi all, I'm Faizan Khan",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs  and some other cool libraries and frameworks."),
  resumeLink: "https://1drv.ms/b/s!Ap6IVQCXVSslk0SZ3PS3ynvwPWvq?e=a6OjoF"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/faizankhan1995",
  linkedin: "https://www.linkedin.com/in/faizan-khan-4b8775b0/",
  gmail: "faizankhan247@live.com",
  facebook: "https://www.facebook.com/faizankhan1995/",
  stackoverflow: "https://stackoverflow.com/users/3261186/faizan-khan"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Develop Desktop Applicatiosn using Electron or WPF"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Cloudinary/ Azure / Netlify")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "National University Of Computer And Emerging Sciences",
      logo: require("./assets/images/fastLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "June 2013 - June 2017",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "TextLytics , Semantic Textual Similarity Tools [Python, nltk]",
        "Chat Application - [Java, Java-FX, Oracle DB]",
        "Automated Timetable Scheduler - [Python]",
        "User Activity Recognition - [Python, sklearn]",
        "Peer-Peer (UDP) File Sharing Application - [C++]",
        "Games - [C++, OpenGL]",
        "Web Application - [C#.Net MVC, MySQL]"
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend APIs",
      progressPercentage: "100%"
    },
    {
      Stack: "Desktop Applications",
      progressPercentage: "80%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer I",
      company: "Bentley Systems",
      companylogo: require("./assets/images/bentleyLogo.jpg"),
      date: "June 2017 – Sep 2020",
      desc: "Part of Strategic Technology Advancement Team where we work on projects involving latest and cutting edge technologies. I have experience of working on various projects, writing test cases and deploying to production environment following scrum principles. ",
      // descBullets: []
    },
    {
      role: "FullStack Developer",
      company: "AllStar BPO",
      companylogo: require("./assets/images/allStarLogo.jpg"),
      date: "Oct 2020 – Present",
      desc: "Working as a Lead Full Stack software developer. I am responsible for developing frontend dashboards and backedn API's and deploying to production environment."
    },
    {
      role: "Software Engineer (Intern)",
      company: "Abbasi Distributors",
      companylogo: require("./assets/images/abbasiLogo.png"),
      date: "Feb 2020 – Aug 2020",
      desc: "Developed a web application for managing inventory, distributors, accounts and Reports/Invoice generation. Frontend was developed using React and Redux while Backed API .Net core Web API."
    },
    {
      role: "Software Engineer (Intern)",
      company: "SMR Law Firm",
      companylogo: require("./assets/images/smrLogo.PNG"),
      date: "Feb 2019 – Jun 2019",
      desc: " Developed a desktop legal diary application for managing documents and legal cases."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "faizankhan1995", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-331-5890467",
  email_address: "faizankhan247@live.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, contactInfo , twitterDetails};
