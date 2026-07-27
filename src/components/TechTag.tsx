export default function TechTag({ label }: { label: string }) {
  return (
    <span className="rounded border border-line bg-surface px-2 py-1 font-mono text-xs text-muted">
      {label}
    </span>
  )
}
