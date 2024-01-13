export default function ProjectsSection({ project }) {
    let details = project.details.split(".");
    details = [...details].filter((detail) => detail !== "");
    details.map(detail => detail.trim());
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-start">
                    <h3>
                        <span className="fw-bold">{project.title}</span>
                        <span>&nbsp;|&nbsp;</span>
                        <span className="fs-5 fst-italic">{project.skills}</span>
                    </h3>
                </div>
                <a href={project.link} className="fs-6">
                    GitHub Link
                </a>
            </div>
            {details.map((detail, index) => (
                <div key={index}>&nbsp;&#x2022;&nbsp;{detail}&#46;</div>
            ))}
            <br />
        </div>
    );
}
