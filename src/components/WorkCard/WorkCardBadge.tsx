'use client'
export default function WorkCardBadge({ teck }: { teck: string[] }) {
  return (
    <div>
      {teck &&
        teck?.map((t: string) => (
          <span
            className="badge rounded-2xl bg-gradient-to-r from-secondary via-tertiary to-primary px-4 py-2 text-xs font-bold"
            key={t}
          >
            {t}
          </span>
        ))}
    </div>
  )
}
