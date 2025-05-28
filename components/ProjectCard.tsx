export default function ProjectCard({ project }) {
    return (
      <div className="card bg-base-100 shadow-lg hover:shadow-xl transition">
        {project.imageUrl && (
          <figure><img src={project.imageUrl} alt={project.title} /></figure>
        )}
        <div className="card-body">
          <h2 className="card-title">{project.title}</h2>
          <p className="line-clamp-3">{project.description}</p>
          <div className="card-actions justify-end">
            <a href={`/projetos/${project.id}`} className="btn btn-secondary btn-sm">
              Detalhes
            </a>
          </div>
        </div>
      </div>
    )
  }