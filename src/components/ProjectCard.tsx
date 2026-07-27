import TechTag from './TechTag'
import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-lg border border-line bg-surface/60 p-5 transition hover:border-accent/60 hover:bg-surface"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-soft transition group-hover:text-accent">
            {project.title}
          </h3>
          <p className="mt-1 font-mono text-xs text-cyan">{project.context}</p>
        </div>
        {project.award && (
          <span className="shrink-0 rounded border border-accent/40 px-2 py-1 font-mono text-xs text-accent">
            🏆 winner
          </span>
        )}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <TechTag key={t} label={t} />
        ))}
      </div>
    </a>
  )
}
