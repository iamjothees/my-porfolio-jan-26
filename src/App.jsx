import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white overflow-hidden">
      {/* Background absurdities can go here later */}
      <div className="fixed inset-0 pointer-events-none opacity-5 bg-[url('https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif')] bg-cover z-0"></div>

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        {/* Shipped Code & MVPs hidden */}
        {/* <Projects /> */}
        <Contact />

        <footer className="py-10 px-4 border-t border-gray-900/80 bg-[#070707] text-center text-gray-500 text-xs font-mono">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span className="w-2 h-2 rounded-full bg-neon-green inline-block animate-pulse" />
              <span>KERNEL_VERSION: 2026.1 // JOECODES.IN</span>
            </div>
            <div>
              &copy; {new Date().getFullYear()} Jotheeswaran. Built for high performance & functional chaos.
            </div>
            <div className="text-gray-500">
              Powered by PHP, React & 30km/h Burgman rides.
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;
