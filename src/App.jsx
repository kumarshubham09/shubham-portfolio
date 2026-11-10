import { useTheme } from './hooks';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

// Section order reference design (resumeq.framer.website) jaisa rakha hai:
// Hero -> Numbers -> Experience -> Projects -> Education -> Skills -> Reviews -> FAQ -> Contact
export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="page-bg" aria-hidden="true" />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <About />
        <Experience>
          <Projects />
        </Experience>
        <Skills />
        <Achievements />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Cursor />
    </>
  );
}
