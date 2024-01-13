import { Form } from "react-bootstrap";

export default function EducationForm({ school, handleChange }) {
    return (
        <Form onChange={(e) => e.preventDefault()}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="name">School Name</Form.Label>
                <Form.Control
                    name="name"
                    type="text"
                    value={school.name}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="details">School details</Form.Label>
                <Form.Control
                    name="details"
                    type="text"
                    value={school.details}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="location">Location</Form.Label>
                <Form.Control
                    name="location"
                    type="text"
                    value={school.location}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="start">Start</Form.Label>
                <Form.Control
                    name="start"
                    type="text"
                    value={school.start}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="end">End</Form.Label>
                <Form.Control
                    name="end"
                    type="text"
                    value={school.end}
                    onChange={handleChange}
                />
            </Form.Group>
        </Form>
    );
}
