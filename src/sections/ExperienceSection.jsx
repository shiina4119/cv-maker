export default function ExperienceSection({ experience }) {
    let details = experience.description.split(".");
    details = [...details].filter((detail) => detail !== "");
    details.map(detail => detail.trim());
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-between">
                <h3 className="fw-bold">{experience.position}</h3>
                <span className="fs-5 fst-italic">
                    {experience.start} - {experience.end}
                </span>
            </div>
            <div className="d-flex justify-content-between fst-italic fs-5">
                <span>{experience.organization}</span>
                <span className="fs-6">{experience.location}</span>
            </div>
            {details.map((detail, index) => (
                <div key={index}>&nbsp;&#x2022;&nbsp;{detail}&#46;</div>
            ))}
            <br />
        </div>
    );
}
