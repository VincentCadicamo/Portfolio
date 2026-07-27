import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import TypeWriter from "typewriter-effect"
import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectShowcase from "../components/ProjectShowcase.tsx";

function SkillList({ label, items, activeSkills }: { label: string; items: string[]; activeSkills: Set<string> }) {
  return (
    <div>
      <p className="mb-3 font-mono text-sm text-cyan">$ cat {label}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <span
            key={s}
            className={`rounded border px-2 py-1 font-mono text-xs transition-colors ${
              activeSkills.has(s)
                ? 'border-cyan/40 bg-cyan/10 text-cyan'
                : 'border-line bg-surface text-muted'
            }`}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(0)
    const activeSkills = new Set(projects[activeIndex].skills)

    return (
    <section className="py-8">
      <p className="mb-4 font-mono text-sm text-cyan">$ whoami</p>
      <h1 className="text-4xl font-normal tracking-tight text-soft sm:text-6xl">
          <TypeWriter
              options={{ cursor: "_" }}
              onInit={(typewriter) => {
                  typewriter.typeString(profile.name).start()
              }}
          /></h1>
      <p className="mt-2 text-xl font-medium text-accent">{profile.role}</p>
      <p className="mt-1 font-mono text-sm text-muted">{profile.tagline}</p>

      <p className="mt-6 text-lg max-w-2xl leading-relaxed text-muted">{profile.blurb}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/projects"
          className="rounded border border-accent/50 px-4 py-2 font-mono text-sm text-accent transition hover:bg-accent hover:text-base"
        >
          view projects →
        </Link>
      </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="max-w-sm space-y-8">
            <SkillList label="languages.txt" items={profile.languages} activeSkills={activeSkills} />
            <SkillList label="skills.txt" items={profile.skills} activeSkills={activeSkills} />
          </div>
          <ProjectShowcase activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>
    </section>
  )
}
