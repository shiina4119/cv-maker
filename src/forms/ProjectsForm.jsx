import { Form } from "react-bootstrap";

export default function ProjectsForm({ project, handleChange }) {
    return (
        <Form onChange={e => e.preventDefault()}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="title">Project Title</Form.Label>
                <Form.Control
                    name="title"
                    type="text"
                    value={project.title || ''}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="Details">Details</Form.Label>
                <Form.Control
                    as="textarea"
                    name="details"
                    value={project.details || ''}
                    onChange={handleChange}
                />
                <Form.Text className="text-muted">Each line will be added as a bullet point</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="link">Project Link</Form.Label>
                <Form.Control
                    name="link"
                    type="text"
                    value={project.link || ''}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="skills">Skills</Form.Label>
                <Form.Control
                    name="skills"
                    type="text"
                    value={project.skills || ''}
                    onChange={handleChange}
                />
            </Form.Group>
        </Form>
    )
}
