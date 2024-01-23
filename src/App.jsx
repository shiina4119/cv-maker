import { useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutForm from "./forms/AboutForm";
import AboutSection from "./sections/AboutSection";
import EducationForm from "./forms/EducationForm";
import EducationSection from "./sections/EducationSection";
import ProjectsForm from "./forms/ProjectsForm";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceForm from "./forms/ExperienceForm";
import ExperienceSection from "./sections/ExperienceSection";

export default function Resume() {
    const [personalDetails, setPersonalDetails] = useState({
        fullname: "Tommy Vercetti",
        phone: "+5553223172",
        email: "vercetti@rockstargames.com",
        link: "tommyv",
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
        console.log("modifying school " + i + " " + e.target.name);
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
                "Developed a REST API using FastAPI ans PostgreSQL to store data from learning management systems.\nDeveloped a full-stack web application using Flask, React PostgreSQL and Docker to analyze GitHub data.\nExplored ways to visualize GitHub collaboration in a classroom setting.",
            location: "College Station, TX",
            start: "June, 2020",
            end: "Present",
        },
        {
            position: "Information Technology Support Specialist",
            organization: "Soutwestern University",
            description:
                "Communicate with managers to set up campus computers used on campus.\nAssess and troubleshoot computer problems brought by students, faculty and staff.\nMaintain upkeep of computers, classroom equipment, and 200 printers across campus.",
            location: "Georgetown, TX",
            start: "September, 2019",
            end: "Present",
        },
        {
            position: "Artificial Intelligence Research Assistant",
            organization: "Soutwestern University",
            description:
                "Explored methods to generate video game dungeons based off of The Legend of Zelda.\nDeveloped a game in Java to test the generated dungeons.\nContributed 50K+ lines of code to an established codebase via Git.\nConducted a human subject study to determine which video game dungeon generation technique is enjoyable.\nWrote an 8-page paper and gae multiple presentations on-campus.\nPresented virtually to the World Conference on Computation Intellegence.",
            location: "Georgetown, TX",
            start: "September, 2018",
            end: "March, 2021",
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
                "Developed a full-stack web application using Flask a REST API with React as the frontend.\nImplemented GitHub OAuth to get data from user's repositories.\nVisualised GitHub data to show collaborations.\nUsed Celery and Redis for asynchronous tasks.",
            link: "https://www.github.com/example",
            skills: "Python, Flask, React, PostgreSQL, Docker",
        },
        {
            title: "Simple Paintball",
            details:
                "Developed a minecraft server plugin to entertain kids during free time for a previous job.\nPublished plugin to websites gaining 2K+ downloads and an average 4.5/5-star reviews.\nImplemented CI/CD using TravisCI to build the plugin upon a new release.\nCollaborated with Minecraft server admins to suggest features and get feedback about the plugin",
            link: "https://www.github.com/example",
            skills: "Spigot API, Java, Maven, TravisCI, Git",
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
        };
        setProjectList([...projectList, newProject]);
    };
    const deleteProjectButton = (i) => {
        let newProjectList = [...projectList];
        newProjectList.splice(i, 1);
        setProjectList(newProjectList);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <br />
                    <AboutForm
                        data={personalDetails}
                        handleChange={(e) => handlePersonalDetailsChange(e)}
                    />
                    <br />

                    <Accordion>
                        {schoolList.map((school, index) => {
                            return (
                                <Accordion.Item key={index} eventKey={index}>
                                    <Accordion.Header>School {index + 1}</Accordion.Header>
                                    <Accordion.Body>
                                        <EducationForm
                                            school={school}
                                            handleChange={(e) => handleSchoolChange(e, index)}
                                        />
                                        <Button variant="danger" size="sm" onClick={() => deleteSchoolButton(index)}>Delete</Button>
                                    </Accordion.Body>
                                </Accordion.Item>
                            );
                        })}
                    </Accordion>
                    <br />
                    <Button variant="primary" size="sm" onClick={() => addNewSchoolButton()}>Add School</Button>
                    <br />
                    <br />
                    <Accordion>
                        {experienceList.map((experience, index) => {
                            return (
                                <Accordion.Item key={index} eventKey={index}>
                                    <Accordion.Header>Experience {index + 1}</Accordion.Header>
                                    <Accordion.Body>
                                        <ExperienceForm
                                            experience={experience}
                                            handleChange={(e) => handleExperienceChange(e, index)}
                                        />
                                        <Button variant="danger" size="sm" onClick={() => deleteExperienceButton(index)}>Delete</Button>
                                    </Accordion.Body>
                                </Accordion.Item>
                            );
                        })}
                    </Accordion>
                    <br />
                    <Button variant="primary" size="sm" onClick={() => addNewExperienceButton()}>Add Experience</Button>
                    <br />
                    <br />
                    <Accordion>
                        {projectList.map((project, index) => {
                            return (
                                <Accordion.Item key={index} eventKey={index}>
                                    <Accordion.Header>Project {index + 1}</Accordion.Header>
                                    <Accordion.Body>
                                        <ProjectsForm
                                            project={project}
                                            handleChange={(e) => handleProjectChange(e, index)}
                                        />
                                        <Button variant="danger" size="sm" onClick={() => deleteProjectButton(index)}>Delete</Button>
                                    </Accordion.Body>
                                </Accordion.Item>
                            );
                        })}
                    </Accordion>
                    <br />
                    <Button variant="primary" size="sm" onClick={() => addNewProjectButton}>Add Project</Button>
                    <br />
                </div>

                <div className="col-9" >
                    <br />
                    <AboutSection data={personalDetails} />
                    <h4 className="mb-0">EDUCATION</h4>
                    <hr className="mt-0" />
                    {schoolList.map((school, index) => (
                        <EducationSection key={index} school={school} />
                    ))}
                    <h4 className="mb-0">EXPERIENCE</h4>
                    <hr className="mt-0" />
                    {experienceList.map((experience, index) => (
                        <ExperienceSection key={index} experience={experience} />
                    ))}
                    <h4 className="mb-0">PROJECTS</h4>
                    <hr className="mt-0" />
                    {projectList.map((project, index) => (
                        <ProjectsSection key={index} project={project} />
                    ))}
                    <h4 className="mb-0">SKILLS</h4>
                    <hr className="mt-0" />
                </div>
            </div>
        </div>
    );
}
