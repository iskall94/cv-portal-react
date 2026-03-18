export default function Skills() {

  return (
    <>
      <section className="page-header">
        <h2>Kompetenser</h2>
        <p>Tekniker och verktyg jag arbetar med.</p>
      </section>
      <section>
        <h2>Backend</h2>
        <ul className="skills-list">
          <li>C#</li>
          <li>.NET</li>
          <li>ASP.NET Core</li>
          <li>Minimal REST APIs</li>
        </ul>
      </section>
      <section>
        <h2>Frontend</h2>
        <ul className="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </section>
      <section>
        <h2>Verktyg & Övrigt</h2>
        <ul className="skills-list">
          <li>Git</li>
          <li>SQL Server</li>
        </ul>
      </section>
    </>
  );
}
