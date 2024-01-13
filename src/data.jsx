

const [personalDetails, setPersonalDetails] = useState({
    name: "Tommy Vercetti",
    phone: "+5553223172",
    email: "vercetti@cockstargames.com",
    link: "github.com/tommyv",
});
const handlePersonalDetailsChange = (e) => {
    let newPersonalDetails = { ...personalDetails };
    newPersonalDetails[e.target.name] = e.target.value;
    setPersonalDetails(newPersonalDetails);
};

const [schoolList, setSchoolList] = useState([
    {
        name: "Southwestern University",
        details: "Bachelor of Technology in Computer Science, Minor in Economics",
        location: "Georgetown, TX",
        start: "August, 2018",
        end: "May, 2022",
    },
    {
        name: "Blinn College",
        details: "Associate's in Liberal Arts",
        location: "Bryan, TX",
        start: "August 2014",
        end: "May, 2018",
    },
]);
const handleSchoolChange = (e, i) => {
    let newSchoolList = [...schoolList];
    newSchoolList[i][e.target.name] = e.target.value;
    setSchoolList(newSchoolList);
};
const addNewSchoolButton = () => {
    let newSchool = {
        name: "",
        details: "",
        location: "",
        start: "",
        end: "",
    };
    setSchoolList([...schoolList, newSchool]);
};
const deleteSchoolButton = (i) => {
    let newSchoolList = [...schoolList];
    newSchoolList.splice(i, 1);
    setSchoolList(newSchoolList);
};

const [experienceList, setExperienceList] = useState([
    {
        position: "Undergraduate Research Assistant",
        organization: "Texas A&M University",
        description:
            "Developed a REST API using FastAPI ans PostgreSQL to store data from learning management systems." +
            "Developed a full-stack web application using Flask, React PostgreSQL and Docker to analyze GitHub data." +
            "Explored ways to visualize GitHub collaboration in a classroom setting.",
        location: "College Station, TX",
        start: "June, 2020",
        end: "Present",
    },
    {
        position: "Information Technology Support Specialist",
        organization: "Soutwestern University",
        description:
            "Communicate with managers to set up campus computers used on campus." +
            "Assess and troubleshoot computer problems brought by students, faculty and staff." +
            "Maintain upkeep of computers, classroom equipment, and 200 printers across campus.",
        location: "Georgetown, TX",
        start: "Sep, 2018",
        end: "Present",
    },
    {
        position: "Artificial Intelligence Research Assistant",
        organization: "Soutwestern University",
        description:
            "Explored methods to generate video game dungeons based off of The Legend of Zelda." +
            "Developed a game in Java to test the generated dungeons." +
            "Contributed 50K+ lines of code to an established codebase via Git." +
            "Conducted a human subject study to determine which video game dungeon generation technique is enjoyable." +
            "Wrote an 8-page paper and gae multiple presentations on-campus." +
            "Presented virtually to the World Conference on Computation Intellegence.",
        location: "Georgetown, TX",
        start: "Sep, 2018",
        end: "Present",
    },
]);
const handleExperienceChange = (e, i) => {
    let newExperienceList = [...experienceList];
    newExperienceList[i][e.target.name] = e.target.value;
    setExperienceList(newExperienceList);
};
const addNewExperienceButton = () => {
    let newExperience = {
        position: "",
        organization: "",
        description: "",
        location: "",
        start: "",
        end: "",
    };
    setExperienceList([...experienceList, newExperience]);
};
const deleteExperienceButton = (i) => {
    let newExperienceList = [...experienceList];
    newExperienceList.splice(i, 1);
    setExperienceList(newExperienceList);
};


const [projectList, setProjectList] = useState([
    {
        title: "Gitlytics",
        details:
            "Developed a full-stack web application using Flask a REST API with React as the frontend." +
            "Implemented GitHub OAuth to get data from user's repositories." +
            "Visualised GitHub data to show collaborations." +
            "Used Celery and Redis for asynchronous tasks.",
        link: "https://github.com/example",
        skills: "Balls, Ass",
    },
    {
        title: "Simple Paintball",
        details:
            "Developed a minecraft server plugin to entertain kids during free time for a previous job." +
            "Published plugin to websites gaining 2K+ downloads and an average 5-star reviews." +
            "Implemented CI/CD using TravisCI to build the plugin upon a new release." +
            "Collaborated with Minecraft server admins to suggest features and get feedback about the plugin",
        link: "https://github.com/example",
        skills: "COck, Pussy",
    },
]);
const handleProjectChange = (e, i) => {
    let newProjectList = [...projectList];
    newProjectList[i][e.target.name] = e.target.value;
    setProjectList(newProjectList);
};
const addNewProjectButton = () => {
    let newProject = {
        title: "",
        details: "",
        link: "",
        skills: "",
    }
    setProjectList([...projectList, newProject]);
}
const deleteProjectButton = (i) => {
    let newProjectList = [...projectList];
    newProjectList.splice(i, 1);
    setProjectList(newProjectList);
}
