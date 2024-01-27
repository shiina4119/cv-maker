import { useState } from "react";
import { Accordion, Button, Container, Row, Col, Stack } from "react-bootstrap";
import AboutForm from "./forms/AboutForm";
import AboutSection from "./sections/AboutSection";
import EducationForm from "./forms/EducationForm";
import EducationSection from "./sections/EducationSection";
import ProjectsForm from "./forms/ProjectsForm";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceForm from "./forms/ExperienceForm";
import ExperienceSection from "./sections/ExperienceSection";
import { setDefaults } from "./setDefaults.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
    const [personalDetails, setPersonalDetails] = useState({});
    const handlePersonalDetailsChange = (e) => {
        let newPersonalDetails = { ...personalDetails };
        newPersonalDetails[e.target.name] = e.target.value;
        setPersonalDetails(newPersonalDetails);
    };

    const [schoolList, setSchoolList] = useState([]);
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

    const [experienceList, setExperienceList] = useState([]);
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

    const [projectList, setProjectList] = useState([]);
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
        <Container fluid>
            <br />
            <Row>
                <Col xs={3}>
                    <Stack gap={3}>
                        <Button
                            variant="warning"
                            onClick={() =>
                                setDefaults(
                                    setPersonalDetails,
                                    setSchoolList,
                                    setExperienceList,
                                    setProjectList
                                )
                            }
                        >
                            Fill with default values
                        </Button>
                        <h5>About</h5>
                        <AboutForm
                            data={personalDetails}
                            handleChange={(e) => handlePersonalDetailsChange(e)}
                        />
                    </Stack>
                    <br />
                    <Stack gap={3}>
                        <h5>Education: {schoolList.length}</h5>
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
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => deleteSchoolButton(index)}
                                            >
                                                Delete
                                            </Button>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                );
                            })}
                        </Accordion>
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={() => addNewSchoolButton()}
                        >
                            Add School
                        </Button>
                    </Stack>
                    <br />
                    <Stack gap={3}>
                        <h5>Experience: {experienceList.length}</h5>
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
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => deleteExperienceButton(index)}
                                            >
                                                Delete
                                            </Button>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                );
                            })}
                        </Accordion>
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={() => addNewExperienceButton()}
                        >
                            Add Experience
                        </Button>
                    </Stack>
                    <br />
                    <Stack gap={3}>
                        <h5>Projects: {projectList.length}</h5>
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
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => deleteProjectButton(index)}
                                            >
                                                Delete
                                            </Button>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                );
                            })}
                        </Accordion>
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={() => addNewProjectButton()}
                        >
                            Add Project
                        </Button>
                    </Stack>
                </Col>

                <Col id="resume">
                    <AboutSection data={personalDetails} />
                    <h3 className="mb-0">Education</h3>
                    <hr className="mt-0" />
                    {schoolList.map((school, index) => (
                        <EducationSection key={index} school={school} />
                    ))}
                    <h3 className="mb-0">Experience</h3>
                    <hr className="mt-0" />
                    {experienceList.map((experience, index) => (
                        <ExperienceSection key={index} experience={experience} />
                    ))}
                    <h3 className="mb-0">Projects</h3>
                    <hr className="mt-0" />
                    {projectList.map((project, index) => (
                        <ProjectsSection key={index} project={project} />
                    ))}
                    <h3 className="mb-0">Skills</h3>
                    <hr className="mt-0" />
                </Col>
            </Row>
            <br />
        </Container>
    );
}
