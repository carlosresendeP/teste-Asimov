import CountUp from '@/components/ui/CountUp'

const STATS = [
  { value: 40, suffix: '+', label: 'horas de conteúdo' },
  { value: 20, suffix: 'k+', label: 'alunos na comunidade' },
  { value: 4, suffix: '+', label: 'projetos com IA' },
  { value: 100, suffix: '%', label: 'online e no seu ritmo' },
] as const

export default function Stats() {
  return (
    <div className="w-full border-t border-border/30 py-10 grid grid-cols-2 justify-items-center md:grid-cols-4 gap-8">
      {STATS.map(({ value, suffix, label }) => (
        <div key={label} className="flex flex-col gap-1">
          <p className="font-display font-extrabold text-3xl md:text-4xl text-text-primary tabular-nums">
            <CountUp to={value} duration={2} delay={0.2} separator="" />
            <span>{suffix}</span>
          </p>
          <p className="font-body text-sm text-text-secondary">{label}</p>
        </div>
      ))}
    </div>
  )
}
