import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import FloatingLines from "@/components/ui/FloatingLines";
import SplitText from "@/components/ui/SplitText";
import Stats from "@/components/Stats";
import TechStack from "@/components/TechStack";

const BULLETS = [
  "+40 horas de conteúdo direto ao ponto",
  "Projetos com Python + IA desde o módulo 1",
  "Suporte da comunidade com +20.000 alunos",
  "Certificado reconhecido pelo mercado",
] as const;

export default function Hero() {
  return (
    <section
      aria-label="Seção inicial do curso"
      className="relative min-h-screen w-full  bg-background flex items-center justify-center overflow-hidden"
    >

      <div className="absolute inset-0 z-0">
        <FloatingLines
          linesGradient={["#1a2d6b", "#3b4fd4", "#1a2d6b"]}
          enabledWaves={["middle", "bottom"]}
          lineCount={[8, 5]}
          lineDistance={[4, 6]}
          animationSpeed={0.5}
          interactive={true}
          mixBlendMode="screen"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-background/90 via-background/40 to-background pointer-events-none z-0" />

      {/*conteudo*/}
      <div className="container max-w-5xl relative z-10 mx-auto px-6 py-12 md:px-12 flex flex-col items-center md:items-start text-center md:text-left mt-12 md:mt-8 lg:15">
        
        <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-border/50 bg-surface/40 backdrop-blur-md px-5 py-2 font-body text-xs font-semibold tracking-widest uppercase text-accent shadow-sm">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-accent"></span>
          </span>
          Asimov Academy
        </div>


        <h1 className="flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-left gap-1 w-full">
          <SplitText
            tag="span"
            text="Aprenda Python do zero e construa projetos reais com IA"
            className="font-display font-extrabold text-text-primary text-4xl sm:text-5xl lg:text-7xl leading-[1.1] tracking-tighter text-balance text-center md:text-left"
            splitType="words"
            delay={40}
            duration={0.8}
            ease="power3.out"
            from={{ opacity: 0, y: 16 }}
            to={{ opacity: 1, y: 0 }}
          />
        </h1>

        {/* Subheadline - Usando text-pretty para fluidez de leitura */}
        <p className="mt-2 md:mt-4 max-w-2xl font-body text-text-primary/80 text-lg sm:text-xl leading-relaxed text-pretty">
          O curso mais prático do Brasil para quem quer entrar em tecnologia
          sem enrolação
        </p>

        {/* Bullets - Evoluídos para Glassmorphism Pills */}
        <ul className="mt-10 flex flex-wrap justify-center md:justify-start gap-3 max-w-3xl">
          {BULLETS.map((bullet) => (
            <li 
              key={bullet} 
              className="flex items-center gap-2.5 rounded-lg border border-border/40 bg-surface/20 backdrop-blur-sm px-4 py-2.5 transition-colors hover:bg-surface/40 hover:border-border/60"
            >
              <CheckCircle className="size-4 shrink-0 text-accent" />
              <span className="font-body text-sm font-medium text-text-primary/80">
                {bullet}
              </span>
            </li>
          ))}
        </ul>

        {/* CTAs - Micro-interações de elite (scale, glows, icon transforms) */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            // Adicionado Glow na cor do accent, animação do ícone e feedback de active
            className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-accent px-8 py-4 font-body font-semibold text-sm text-white shadow-[0_0_30px_-10px_rgba(59,79,212,0.5)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_45px_-10px_rgba(59,79,212,0.7)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Quero começar agora
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            // Visual secundário com bordas sutis e fundo que reage ao contexto
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border border-border/50 bg-surface/10 backdrop-blur-md px-8 py-4 font-body font-semibold text-sm text-text-primary transition-all duration-300 hover:bg-surface/30 hover:border-border/80 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border"
          >
            Ver o que vou aprender
            <ChevronDown className="size-4 transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </div>
        <TechStack />
        <Stats />

      </div>
    </section>
  );
}