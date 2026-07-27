import { useEffect, useState } from 'react'
import { projects } from '../data/projects'
import TechTag from './TechTag'

type Props = {
    activeIndex: number
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>
}

// This is 10 comet tails stacked on top of each other to give the card a bit of fade
const TRAIL = [
    { delay: -0.5, opacity: 1 },
    { delay: -0.45, opacity: 0.75 },
    { delay: -0.4, opacity: 0.55 },
    { delay: -0.35, opacity: 0.4 },
    { delay: -0.3, opacity: 0.29 },
    { delay: -0.25, opacity: 0.2 },
    { delay: -0.2, opacity: 0.14 },
    { delay: -0.15, opacity: 0.09 },
    { delay: -0.1, opacity: 0.05 },
    { delay: -0.05, opacity: 0.03 },
]

export default function ProjectShowcase({ activeIndex,
                                            setActiveIndex }: Props) {
    const project = projects[activeIndex]
    const [expanded, setExpanded] = useState(false)
    const [paused, setPaused] = useState(false)

    useEffect(() => {
        if (paused) return
        const id = setInterval(() => {
            setActiveIndex((i) => (i + 1) % projects.length)
        }, 6000)
        return () => clearInterval(id)
    }, [paused, setActiveIndex])

    // Collapse again whenever the showcase moves to a different project.
    useEffect(() => {
        setExpanded(false)
    }, [activeIndex])

    return (
        <div
            className="group relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* content box with a dim resting border */}
            <div className="rounded-lg border border-cyan/40 bg-surface p-5">
                <p className="mb-3 font-mono text-xs text-muted">
                    // {activeIndex + 1}/{projects.length}
                </p>
                <h3 className="font-display text-lg font-normal text-soft">{project.title}</h3>
                <p className="mt-1 font-mono text-xs text-cyan">{project.context}</p>
                <div className="relative">
                    <p className={`mt-3 text-sm leading-relaxed text-muted ${expanded ? '' : 'line-clamp-2'}`}>
                        {project.description}
                    </p>
                    {!expanded && (
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-surface to-transparent" />
                    )}
                </div>
                <button
                    onClick={() => setExpanded((e) => !e)}
                    className="mt-1 font-mono text-xs text-cyan hover:underline"
                >
                    {expanded ? 'read less' : 'read more'}
                </button>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                        <TechTag key={t} label={t} />
                    ))}
                </div>
            </div>
            <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full overflow-visible rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
                {TRAIL.map(({ delay, opacity }, i) => (
                    <rect
                        key={i}
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        rx="8"
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth="2"
                        strokeOpacity={opacity}
                        pathLength={100}
                        strokeDasharray="4 21"
                        className="[animation:borderDash_3s_linear_infinite]"
                        style={{ animationDelay: `${delay}s` }}
                    />
                ))}
            </svg>
        </div>
    )
}