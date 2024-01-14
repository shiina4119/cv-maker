const Divider = () => <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>

export default function AboutSection({ data }) {
    const link="https://www.github.com/" + data.link;
    return (
        <div className="container-fluid text-center mb-5">
            <h1 className="text-uppercase mb-0">{data.fullname}</h1>
            <span>
                {data.phone}
                <Divider />
                {data.email}
                <Divider />
                <a href={link}>GitHub Profile</a>
            </span>
        </div>
    );
}
