import { Container } from 'react-bootstrap';

export default function ProjectsSection({ project }) {
    let details = project.details.split("\n");
    details = [...details].filter((detail) => detail !== "");
    details.map(detail => detail.trim());
    return (
        <Container>
            <div className="d-flex justify-content-between mb-2">
                <div className="d-flex justify-content-start">
                    <h3>
                        <span className="fw-bold">{project.title}</span>
                        <span>&nbsp;|&nbsp;</span>
                    </h3>
                    <span className="fs-4 fst-italic">{project.skills}</span>
                </div>
                <a href={project.link} className="fs-6">
                    GitHub Link
                </a>
            </div>
            {details.map((detail, index) => (
                <ul key={index} className="mb-2">
                    <li>{detail}</li>
                </ul>
            ))}
            <br />
        </Container>
    );
}
