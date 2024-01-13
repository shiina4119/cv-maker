import { Form } from "react-bootstrap";

export default function ExperienceForm({ experience, handleChange }) {
    return (
        <Form onChange={e => e.preventDefault()}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="position">Position</Form.Label>
                <Form.Control
                    name="position"
                    type="text"
                    value={experience.position}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="organization">Organization</Form.Label>
                <Form.Control
                    name="organization"
                    type="text"
                    value={experience.organization}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="description">Description</Form.Label>
                <Form.Control
                    name="description"
                    type="text"
                    value={experience.description}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="location">Location</Form.Label>
                <Form.Control
                    name="location"
                    type="text"
                    value={experience.location}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="start">Start</Form.Label>
                <Form.Control
                    name="start"
                    type="text"
                    value={experience.start}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="end">End</Form.Label>
                <Form.Control
                    name="end"
                    type="text"
                    value={experience.end}
                    onChange={handleChange}
                />
            </Form.Group>
        </Form>
    )
    /* return (
        <form onChange={(e) => e.preventDefault()}>
            <label htmlFor="position">Position</label>
            <input
                name="position"
                type="text"
                value={experience.position}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="organization">Organization</label>
            <input
                name="organization"
                type="text"
                value={experience.organization}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="description">Description</label>
            <textarea
                name="description"
                value={experience.description}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="location">Location</label>
            <input
                name="location"
                type="text"
                value={experience.location}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="start">Start</label>
            <input
                name="start"
                type="text"
                value={experience.start}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="end">End</label>
            <input
                name="end"
                type="text"
                value={experience.end}
                onChange={handleChange}
            />
            <br />
        </form>
    ); */
}
