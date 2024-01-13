export default function AboutSection({ data }) {
    return (
        <div className="container-fluid text-center mb-5">
            <h1 className="text-uppercase mb-0">{data.fullname}</h1>
            <span>
                phone: {data.phone} | email: {data.email} | <a href={"https://github.com/" + data.link}>GitHub</a>
            </span>
        </div>
    );
}
