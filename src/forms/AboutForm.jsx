import { Accordion, Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";

export default function AboutForm({ data, handleChange }) {
    return (
	<Accordion>
	    <Accordion.Item eventKey="0">
		<Accordion.Header>About</Accordion.Header>
		<Accordion.Body>
		    <Form>
			<Form.Group className="mb-3">
			    <Form.Label htmlFor="fullname">Name</Form.Label>
			    <Form.Control
				name="fullname"
				type="text"
				placeholder="John Doe"
				value={data.fullname || ''}
				onChange={handleChange}
			    />
			</Form.Group>
			<Form.Group className="mb-3">
			    <Form.Label htmlFor="phone">Phone</Form.Label>
			    <Form.Control
				name="phone"
				type="tel"
				placeholder="123456789"
				value={data.phone || ''}
				onChange={handleChange}
			    />
			</Form.Group>
			<Form.Group className="mb-3">
			    <Form.Label htmlFor="email">Email address</Form.Label>
			    <Form.Control
				name="email"
				type="email"
				placeholder="name@example.com"
				value={data.email || ''}
				onChange={handleChange}
			    />
			</Form.Group>
			<Form.Label htmlFor="link">Github profile</Form.Label>
			<InputGroup className="mb-3">
			    <InputGroup.Text>https://www.github.com/</InputGroup.Text>
				<Form.Control
				    name="link"
				    type="text"
				    placeholder="example"
				    value={data.link || ''}
				    onChange={handleChange}
				/>
			    </InputGroup>
			</Form>
		    </Accordion.Body>
		</Accordion.Item>
	    </Accordion>
    );
}
