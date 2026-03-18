export default function ProjectModal({ project, isOpen, onClose }) {
  return (
    <div
      id={project.id}
      className={`modal-overlay${isOpen ? " open" : ""}`}
      onClick={(event) => {
        if (event.target.id === project.id) {
          onClose();
        }
      }}
    >
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>
          &#x2715;
        </button>
        <h3>{project.title}</h3>
        <p>{project.modalText}</p>
        <div className="project-card-tags">
          {project.tags.map((tag) => (
            <span key={`modal-${project.id}-${tag}`}>{tag}</span>
          ))}
        </div>
        {project.repo ? (
          <a href={`https://github.com/${project.repo}`} target="_blank" rel="noreferrer" className="card-github">GitHub</a>
        ) : (
          <span className="card-github-placeholder">Placeholder GitHub link</span>
        )}
      </div>
    </div>
  );
}
