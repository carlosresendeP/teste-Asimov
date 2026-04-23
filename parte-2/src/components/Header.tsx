import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/20 bg-background/60 backdrop-blur-md">
      <div className="container flex items-center justify-between px-6 md:px-12 h-16">
        <span className="font-display font-semibold text-lg tracking-widest text-text-primary uppercase">
          Asimov
        </span>

        <button
          type="button"
          className="inline-flex max-[458px]:hidden items-center gap-2 rounded-lg bg-accent px-5 py-2 font-body font-semibold text-xs text-white transition-opacity hover:opacity-90"
        >
          Quero começar agora
        </button>

        <button
          type="button"
          aria-label="Abrir menu"
          className="hidden max-[458px]:inline-flex items-center justify-center rounded-lg border border-border/40 bg-surface/30 p-2 text-text-primary transition-colors hover:bg-surface/60"
        >
          <Menu className="size-5" />
        </button>
      </div>
    </header>
  )
}
