import Header from '@/components/Header'
import { lazy, Suspense } from 'react'

const Hero = lazy(() => import('@/components/Hero'))

export default function App() {
  return (
    <main className="bg-background">
      <Header />
      <Suspense fallback={null}>
        <Hero />
      </Suspense>
    </main>
  )
}
