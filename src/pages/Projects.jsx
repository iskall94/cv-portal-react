import { useEffect, useState } from "react";
import ProjectModal from "../components/ProjectModal";
import { fetchGithubRepoMap } from "../utils/fetchGithubRepoMap";

const projects = [
  {
    id: "modal-1",
    tags: ["HTML", "CSS", "JavaScript"],
    repo: "iskall94/CV-portal",
    modalText: "Personlig portfolio och CV-sida byggd med vanilla HTML, CSS och JavaScript. Sidan innehåller flera sidor med information om mig, mina kompetenser, CV och projekt.",
  },
  {
    id: "modal-2",
    tags: ["C#"],
    repo: "iskall94/BankApp",
    modalText: "Konsolapplikation skriven i C# med grundläggande bankfunktioner: skapa konton, sätta in och ta ut pengar, samt överföra pengar mellan konton. Projektet demonstrerar objektorienterad programmering, datastruktur och grundläggande transaktion hantering.",
  },
  {
    id: "modal-3",
    tags: ["C#", "ASP.NET Core"],
    repo: "iskall94/MyFirstAPI",
    modalText: "Minimal API-uppgift från skolan. Byggd med ASP.NET Core.",
  },
  {
    id: "modal-4",
    title: "Projektnamn",
    description: "Placeholder - en kort beskrivning.",
    tags: ["React", "JavaScript"],
    github: "https://github.com/placeholder",
    modalText: "Placeholder - lägg till en längre beskrivning här.",
  },
  {
    id: "modal-5",
    title: "Projektnamn",
    description: "Placeholder - en kort beskrivning.",
    tags: ["React", "JavaScript"],
    github: "https://github.com/placeholder",
    modalText: "Placeholder - lägg till en längre beskrivning här.",
  },
];

export default function Projects() {
  const [activeModal, setActiveModal] = useState(null);
  const [repoMap, setRepoMap] = useState({});

  useEffect(() => {
    fetchGithubRepoMap(projects).then(setRepoMap);
  }, []);

  const getProject = (project) => {
    const live = project.repo ? repoMap[project.repo] : null;
    return {
      live,
      title: project.repo ? (live?.name || "Laddar...") : project.title,
      description: project.repo ? (live?.description || "Beskrivning saknas") : project.description,
    };
  };

  const activeProject = projects.find((project) => project.id === activeModal) || null;
  const activeView = activeProject ? getProject(activeProject) : null;
  const modalProject = activeProject
    ? {
        ...activeProject,
        title: activeView?.title,
      }
    : null;

  return (
    <>
      <section className="page-header">
        <h2>Projekt</h2>
        <p>Ett urval av saker jag har byggt.</p>
      </section>
      <section className="projects-section">
        <div className="projects-grid">
          {projects.map((project) => {
            const { live, title, description } = getProject(project);
            return (
              <div className="project-card" key={project.id}>
                <h3>{title}</h3>
                <p>{description}</p>
                {live?.updatedAt && (
                  <p>Uppdaterad: {new Date(live.updatedAt).toLocaleDateString("sv-SE")}</p>
                )}
                <div className="project-card-tags">
                  {project.tags.map((tag) => (
                    <span key={`${project.id}-${tag}`}>{tag}</span>
                  ))}
                </div>
                <div className="card-actions">
                  {project.repo ? (
                    <a href={`https://github.com/${project.repo}`} target="_blank" rel="noreferrer" className="card-github">
                      GitHub
                    </a>
                  ) : (
                    <span className="card-github-placeholder">Placeholder GitHub link</span>
                  )}
                  <button type="button" className="card-more-info" onClick={() => setActiveModal(project.id)}>
                    Mer information
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {modalProject && (
        <ProjectModal
          project={modalProject}
          isOpen
          onClose={() => setActiveModal(null)}
        />
      )}
    </>
  );
}
