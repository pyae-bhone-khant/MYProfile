import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="min-h-screen  w-screen bg-cover bg-center relative text-gray-200" 
             style={{ backgroundImage: "url('/img/bgn.png')" }}
        >
        
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full "></div>
        </div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
