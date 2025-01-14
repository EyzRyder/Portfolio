'use client'
export default function WorkCardBadge({ teck }: { teck: string[] }) {
  return (
    <div className="inline-block w-full animate-slide whitespace-nowrap">
      {teck &&
        teck?.map((t: string) => (
          <span
            className="badge ml-10 rounded-2xl bg-gradient-to-r from-secondary via-tertiary to-primary px-4 py-2 text-xs font-bold"
            key={t}
          >
            {t}
          </span>
        ))}
    </div>
  )
}
