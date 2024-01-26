import { Container } from 'react-bootstrap';

export default function ExperienceSection({ experience }) {
    let details = experience.description.split("\n");
    details = [...details].filter((detail) => detail !== "");
    details.map(detail => detail.trim());
    return (
        <Container fluid>
            <div className="d-flex justify-content-between">
                <h3 className="fw-bold">{experience.position}</h3>
                <span className="fs-5 fst-italic">
                    {experience.start} - {experience.end}
                </span>
            </div>
            <div className="d-flex justify-content-between fst-italic fs-5 mb-2">
                <span>{experience.organization}</span>
                <span className="fs-6">{experience.location}</span>
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
