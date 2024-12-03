import Nav from './components/Nav';
import HomePage from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';
import Footer from './components/Footer';
import ProjectModel from './components/ProjectModel';

export default function Page() {
  return (
    <div>
      <Nav />
      <main className="bg-black text-white w-full">
        <HomePage />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      {/* <Loader /> */}
      <Footer />
    </div>
  );
}
