import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="animated-bg"></div>
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-8 lg:pt-20 md:px-16 ">
        <section id="home" className="scroll-mt-24">
        <Navbar />
        <Hero />
        </section>
        <div className="border w-full border-gray-800"></div>
        <section id="about" className="scroll-mt-24">
        <About />
        </section>
        <div className="border w-full border-gray-800"></div>
        <section id="technologies" className="scroll-mt-24">
        <Technologies />
        </section>
        <div className="border w-full border-gray-800"></div>
        <section id="projects" className="scroll-mt-24">
        <Projects />
        </section>
        <section id="contact" className="scroll-mt-24">
        <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
