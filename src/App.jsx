import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackgroundGradient from './components/BackgroundGradient';

function App() {
  const [language, setLanguage] = useState('pt');

  return (
    <div className="relative bg-black text-white min-h-screen overflow-x-hidden">
      {/* Fundo animado */}
      <BackgroundGradient />

      {/* Cabeçalho com menu centralizado */}
      <Header language={language} setLanguage={setLanguage} />

      {/* Seções principais */}
      <main className="pt-32 pb-20">
        <Hero language={language} />
        <About language={language} />
        <Projects language={language} />
        <Contact language={language} />
      </main>
    </div>
  );
}

export default App;
