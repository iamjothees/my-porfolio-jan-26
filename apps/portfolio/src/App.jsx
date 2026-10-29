import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CoreTerminal from "./components/CoreTerminal";

function App() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white overflow-hidden">
      {/* Background absurdities can go here later */}
      <div className="fixed inset-0 pointer-events-none opacity-5 bg-[url('https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif')] bg-cover z-0"></div>

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <CoreTerminal />

        <footer className="py-10 px-4 border-t border-gray-900/80 bg-[#070707] text-center text-gray-400 text-xs">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-green inline-block animate-pulse" />
              <span>All systems running smoothly • joecodes.in</span>
            </div>
            <div>
              &copy; {new Date().getFullYear()} Jotheeswaran (Joe). Built with care & a touch of chaos.
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <span>Powered by tea & 30 km/h Burgman rides.</span>
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-core-terminal', { detail: { command: 'help' } }));
                }}
                className="text-[10px] text-gray-600 hover:text-gray-300 font-mono transition-colors cursor-pointer"
                title="Secret terminal easter egg (or press `~`)"
              >
                [~]
              </button>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;
