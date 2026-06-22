import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Content = () => {
  return (
    <main className="content">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Content;