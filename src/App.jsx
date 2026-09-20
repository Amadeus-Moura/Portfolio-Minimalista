import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import AboutIdentity from './components/AboutIdentity';
import GamifiedBanner from './components/GamifiedBanner';
import Contact from './components/Contact';
import CurriculumModal from './components/CurriculumModal';
import CommandPalette from './components/CommandPalette';
import Footer from './components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isCurriculumOpen, setIsCurriculumOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 selection:bg-sky-500/20 selection:text-white font-sans antialiased">
      
      {/* Navbar with triggers */}
      <Navbar
        onOpenCurriculum={() => setIsCurriculumOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Page Flow */}
      <main>
        <Hero
          onOpenCurriculum={() => setIsCurriculumOpen(true)}
        />

        <AboutIdentity />

        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <Skills />

        <Timeline />

        <GamifiedBanner />

        <Contact
          onOpenCurriculum={() => setIsCurriculumOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenCurriculum={() => setIsCurriculumOpen(true)}
      />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CurriculumModal
        isOpen={isCurriculumOpen}
        onClose={() => setIsCurriculumOpen(false)}
      />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenCurriculum={() => setIsCurriculumOpen(true)}
        onSelectProject={(project) => setSelectedProject(project)}
      />

    </div>
  );
}
