// import { ActionTranslate } from '../components/actionTranslate';
import { lazy, Suspense } from 'react';
import Contato from '../components/contato';
import Hero from '../components/hero';
import Skills from '../components/skills';

import LoadingFallback from '../components/loading/fallback';
import Sobre from '../components/sobre';
const Formacao = lazy(() => import('../components/formacao'));
const Projetos = lazy(() => import('../components/projetos'));
const Experiencia = lazy(() => import('../components/experiencia'));

function App() {
  return (
    <main className='bg-zinc-950 overflow-hidden text-white min-h-screen font-sans leading-relaxed'>
      {/* <ActionTranslate /> */}

      {/* Hero */}
      <Hero />

      {/* Sobre */}
      <Sobre />

      {/* Skills */}
      <Skills />

      <Suspense fallback={<LoadingFallback />}>
        {/* Projetos */}
        <Projetos />
      </Suspense>

      {/* Experiência */}
      <Suspense fallback={<LoadingFallback />}>
        <Experiencia />
      </Suspense>

      {/* Formação */}
      <Suspense fallback={<LoadingFallback />}>
        <Formacao />
      </Suspense>

      {/* Contato */}
      <Contato />
    </main>
  );
}

export default App;
