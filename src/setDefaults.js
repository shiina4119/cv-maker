export const setDefaults = (setPersonalDetails, setSchoolList, setExperienceList, setProjectsList) => {

    setPersonalDetails({
        fullname: "Tommy Vercetti",
        phone: "+5553223172",
        email: "vercetti@rockstargames.com",
        link: "tommyv",
    });
    
    setSchoolList([
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
            start: "August, 2014",
            end: "May, 2018",
        },
    ]);
    
    setExperienceList([
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
    
    setProjectsList([
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
};
