import profileImage from "../assets/images/profilbild.jpeg";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <img src={profileImage} alt="Isak Erbing" className="profile-img" />
          <div className="hero-text">
            <h2>Fullstackutvecklare .NET</h2>
            <p>Studerande vid Chas Academy, blivande fullstackutvecklare .NET</p>
          </div>
        </div>
      </section>
      <section className="home-about">
        <h2>Om mig:</h2>
        <p>Hej! Jag heter Isak Erbing och studerar fullstackutveckling .NET vid Chas Academy. Välkommen till min portfolio.</p>
      </section>
      <section className="home-background">
        <h2>Min Bakgrund</h2>
        <ul className="small-box">
          <li>
            <strong>Utbildning:</strong> Fullstackutveckling .NET
          </li>
          <li>
            <strong>Kompetens:</strong> C#, ASP.NET Core, HTML, CSS, JavaScript, React
          </li>
        </ul>
      </section>
    </>
  );
}