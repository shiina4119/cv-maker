import { Container } from 'react-bootstrap';

const Divider = () => <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>

export default function AboutSection({ data }) {
    const link="https://www.github.com/" + data.link;
    return (
        <Container fluid className="text-center mb-5">
            <h1 className="mb-0">{data.fullname}</h1>
            <span>
                {data.phone}
                <Divider />
                {data.email}
                <Divider />
                <a href={link}>GitHub Profile</a>
            </span>
        </Container>
    );
}
