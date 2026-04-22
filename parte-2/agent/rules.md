# Regras de Desenvolvimento — carlosresende.com.br

> Documento de referência para desenvolvimento do site. Leia antes de escrever qualquer código.

---

## Persona & Role

Atue sempre como um **desenvolvedor senior full-stack**. Isso significa:

- Tomar decisões baseadas em boas práticas, performance e manutenibilidade
- Preferir soluções simples e diretas — complexidade só quando necessária
- Pensar em quem vai ler o código depois (você mesmo, em 6 meses)
- Não implementar nada além do que foi solicitado
- Questionar requisitos ambíguos antes de implementar

---

## Tecnologias

| Categoria | Tecnologia |
|-----------|-----------|
| Gerenciador de pacotes | npm |
| Bundler/Framework | React 19 + Vite |
| Linguagem | TypeScript (strict mode) |
| Estilização | Tailwind CSS v4 |
| Componentes | @react-bits/ui |

---

## Regras Gerais

- **NUNCA** rode `npm run build` — use `npm run dev` para desenvolvimento
- Siga os princípios de **Clean Code** (Uncle Bob) em todo o código
- Faça commits pequenos e descritivos — uma mudança lógica por commit
- **Não crie arquivos desnecessários** — prefira editar os existentes
- **Não adicione features além do que foi pedido** — sem "melhorias" não solicitadas
- O código deve ser autoexplicativo — evite comentários que apenas repetem o que o código diz
- Comentários são bem-vindos apenas para explicar **por quê**, não **o quê**
- Não adicione tratamento de erros para cenários impossíveis
- Não crie abstrações prematuras — três linhas similares não justificam uma função utilitária
- Não adicione `console.log` de debug no código final

---

## TypeScript

### Tipagem

- **NUNCA** use `any` — se não sabe o tipo, descubra antes de continuar
- **NUNCA** use `unknown` sem narrowing adequado logo em seguida
- Crie tipos/interfaces específicos para cada entidade do domínio
- Prefira `interface` para shapes de objetos e `type` para unions/intersections/aliases

```typescript
// ERRADO
const processUser = (user: any) => { ... }

// CERTO
interface User {
  id: string
  name: string
  email: string
  createdAt: Date
}
const processUser = (user: User) => { ... }
```

### Generics e Utilitários

- Use `Partial<T>`, `Required<T>`, `Pick<T>`, `Omit<T>` para variações de tipos existentes
- Use `Promise<Tipo>` sempre que retornar uma Promise — nunca deixe implícito

```typescript
// ERRADO
async function getUser(id: string) { ... }

// CERTO
async function getUser(id: string): Promise<User | null> { ... }
```

### Validação com Zod

- Use **Zod** para validar todos os dados externos: entradas de API, formulários, variáveis de ambiente
- Derive os tipos TypeScript dos schemas Zod — nunca duplique

```typescript
import { z } from 'zod'

const CreatePostSchema = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(1),
})

type CreatePostInput = z.infer<typeof CreatePostSchema>
```

### Regras Adicionais

- Sem cast forçado com `as Tipo` — resolva o problema na tipagem
- Strict mode está habilitado no `tsconfig.json` — mantenha assim
- Tipos globais compartilhados ficam em `types/`

---

## React + Vite

### Componentes

- Prefira **componentes funcionais** — sem class components
- `useState`, `useEffect` e outros hooks apenas quando necessário — não use estado para valores derivados
- Separe componentes por responsabilidade — um componente, uma função

```typescript
// ERRADO: componente fazendo coisas demais
const Page = () => {
  // fetch + transformação + renderização tudo junto
}

// CERTO: separe responsabilidades
const HeroSection = () => { ... }
const BulletsSection = () => { ... }
```

### Organização de Arquivos

- `src/components/` — componentes reutilizáveis
- `src/types/` — tipos TypeScript globais
- `src/hooks/` — custom hooks
- `src/lib/` — utilitários e helpers

### Imports

- Use **import absoluto** via `@/` configurado no `vite.config.ts` e `tsconfig.json`
- Nunca use caminhos relativos profundos (`../../../components/...`)

```typescript
// ERRADO
import Hero from '../../../components/Hero'

// CERTO
import Hero from '@/components/Hero'
```

---

## Tailwind CSS (v4)

### Princípios

- **Mobile-first sempre**: estilos base sem prefixo, overrides com `md:`, `lg:`, etc.
- Cores definidas em OKLCH no `index.css` via `@theme` — não use valores hardcoded
- Dark mode via classe `.dark`

```html
<!-- CERTO: mobile-first -->
<div class="w-full md:w-1/2 lg:w-1/3">

<!-- ERRADO: desktop-first -->
<div class="w-1/3 md:w-1/2 sm:w-full">
```

### Design System

- Defina tokens de design no `index.css` com `@theme`:

```css
@import "tailwindcss";

@theme {
  --color-primary: oklch(0.7 0.15 250);
  --color-surface: oklch(0.98 0 0);
}
```

### Regras de Qualidade

- Sem `!important` — resolva especificidade corretamente
- Sem `style={}` inline — use utilities do Tailwind
- Se a mesma combinação de classes aparece **3 ou mais vezes**, extraia um componente React
- Sem `@apply` excessivo — prefira componentes a classes CSS customizadas
- Sem arbitrary values excessivos — se usou `[valor-específico]` mais de duas vezes, vire um token

---

## Ícones

- Prefira **lucide-react** (já instalado) como primeira opção
- Use **react-icons** quando lucide não tiver o ícone necessário
- **NUNCA** importe a biblioteca inteira — sempre import específico

```typescript
// CERTO
import { Search, User, Settings } from 'lucide-react'

// ERRADO
import * as Icons from 'lucide-react'
```

- Defina tamanho e cor via props ou classes Tailwind

```typescript
<Search className="size-4 text-zinc-500" />
```

---

## Estrutura de Arquivos

```
parte-2/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/          # componentes reutilizáveis
│   ├── hooks/               # custom hooks
│   ├── lib/                 # utilitários e helpers
│   ├── types/               # tipos TypeScript globais
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css            # @theme Tailwind + imports de fonte
├── index.html
├── vite.config.ts
└── tsconfig.json
```

---

## Nomenclatura

| Item | Convenção | Exemplo |
|------|-----------|---------|
| Componentes React | PascalCase | `UserCard.tsx`, `PostList.tsx` |
| Funções e variáveis | camelCase | `getUserById`, `isLoading` |
| Tipos e Interfaces | PascalCase | `UserProfile`, `ApiResponse<T>` |
| Constantes globais | UPPER_SNAKE_CASE | `MAX_FILE_SIZE`, `API_BASE_URL` |
| Arquivos de componente | PascalCase | `Hero.tsx`, `NavBar.tsx` |
| Custom hooks | prefixo `use` + camelCase | `useAuthSession`, `useDebounce` |
| Schemas Zod | PascalCase + `Schema` | `CreatePostSchema`, `LoginSchema` |

---

## Performance

- Use **`React.memo`** para componentes que recebem as mesmas props frequentemente
- Use **`useMemo`** e **`useCallback`** apenas quando houver custo real — não antecipe
- Use **`React.lazy` + `Suspense`** para componentes pesados não críticos para o carregamento inicial

```typescript
const HeavyComponent = React.lazy(() => import('@/components/HeavyComponent'))

<Suspense fallback={<div>Carregando...</div>}>
  <HeavyComponent />
</Suspense>
```

- Imagens: use `loading="lazy"` para imagens abaixo da dobra
- Prefira `loading="eager"` para imagens above-the-fold

---

## Segurança

- **NUNCA** exponha variáveis de ambiente sensíveis sem o prefixo `VITE_`
  - Variáveis com `VITE_` ficam disponíveis no cliente — não coloque secrets nelas
  - Secrets (tokens, chaves) **nunca** no código — sempre em `.env.local`
- **Valide toda entrada do usuário** com Zod antes de processar
- Não confie em dados externos sem validação

---
