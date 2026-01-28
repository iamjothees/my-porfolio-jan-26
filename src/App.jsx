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
        <Projects />
        <Contact />

        <footer className="py-8 text-center text-gray-600 text-xs font-mono">
          &copy; {new Date().getFullYear()} Jotheeswaran. Use at your own risk. <br />
          Powered by Caffeine and StackOverflow.
        </footer>
      </div>
    </main>
  );
}

export default App;
