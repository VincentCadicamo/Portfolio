import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import { useSeo } from '../lib/seo'

export default function Projects() {
  useSeo({
    title: 'Projects · Vincent Cadicamo',
    description: 'Robotics, embedded, and full-stack projects built by Vincent Cadicamo — including URC rover systems, custom PCBs, and mobile apps.',
    ogDescription: 'Rover systems, custom PCBs, and apps — things I’ve designed and built.',
    path: '/projects',
  })

  return (
    <section>
      <p className="mb-2 font-mono text-sm text-cyan">$ ls ~/projects</p>
      <h1 className="font-display text-6xl font-normal text-soft">Projects</h1>
      <p className="mt-2 text-muted">Projects I&apos;ve worked on and built! Click on one to see the Github Repository!</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}
