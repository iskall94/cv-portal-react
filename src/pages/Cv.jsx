import experienceData from "../data/cvExperience.json";

export default function Cv() {
  const education = experienceData.education;
  const workExperience = experienceData.workExperience;
  const certifications = experienceData.certifications;
  const other = experienceData.other;

  return (
    <>
      <section className="page-header">
        <h2>Mitt CV</h2>
        <p>Utbildning, erfarenhet och meriter.</p>
      </section>
      <section>
        <h2>Utbildning</h2>
        <ul className="small-box">
          {education.map((item) => (
            <li key={`${item.title}-${item.details}`}>
              <strong>{item.title}</strong> — {item.details}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Arbetslivserfarenhet</h2>
        <ul className="small-box">
          {workExperience.map((experience) => (
            <li key={`${experience.role}-${experience.company}-${experience.period}`}>
              <strong>{experience.role}</strong> — {experience.company}, {experience.period}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Certifikat</h2>
        <ul className="small-box">
          {certifications.map((item) => (
            <li key={`${item.title}-${item.issuer}-${item.year}`}>
              <strong>{item.title}</strong> — {item.issuer}, {item.year}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Övrigt</h2>
        <ul className="small-box">
          {other.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
