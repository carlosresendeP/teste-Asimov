import ScrollVelocity from '@/components/ui/ScrollVelocity'

const ROW_ONE = ['Python', 'Pandas', 'NumPy', 'Streamlit', 'Plotly', 'Django', 'PostgreSQL', 'Git']
const ROW_TWO = ['LangChain', 'CrewAI', 'OpenAI API', 'OpenCV', 'Hugging Face', 'n8n', 'Docker', 'Ollama']

function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-border/40 bg-surface/30 px-3 py-1 font-body text-xs font-medium text-text-secondary/70 backdrop-blur-sm mx-1.5">
      {label}
    </span>
  )
}

function buildRow(items: string[]) {
  return (
    <span className="inline-flex items-center gap-0">
      {items.map((item) => (
        <TechBadge key={item} label={item} />
      ))}
    </span>
  )
}

export default function TechStack() {
  return (
    <div className="w-full py-10 mt-12 overflow-hidden">
      <p className="font-body text-xs tracking-widest uppercase text-text-secondary/50 text-center mb-6">
        Tecnologias que você vai dominar
      </p>
      <ScrollVelocity
        texts={[buildRow(ROW_ONE), buildRow(ROW_TWO)]}
        velocity={35}
        numCopies={4}
        parallaxClassName="py-1.5"
      />
    </div>
  )
}
