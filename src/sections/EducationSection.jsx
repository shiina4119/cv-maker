import { Container } from 'react-bootstrap';

export default function EducationSection({ school }) {
    return (
        <Container fluid>
            <div className="d-flex justify-content-between">
                <h3 className="fw-bold">{school.name}</h3>
                <span className="fs-5">{school.location}</span>
            </div>
            <div className="d-flex justify-content-between fst-italic">
                <span className="fs-5">{school.details}</span>
                <span>
                    {school.start} - {school.end}
                </span>
            </div>
            <br />
        </Container>
    );
}
