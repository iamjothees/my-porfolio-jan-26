import { motion } from "motion/react";

const projects = [
    {
        title: "Tinder for Cats",
        desc: "Swipe right to meow. 99% match rate with laser pointers.",
        tech: ["React", "Catnip.js"],
        link: "#",
        status: "Production (My cat uses it)"
    },
    {
        title: "Uber for Introverts",
        desc: "You request a ride, and nobody shows up. It's perfect.",
        tech: ["Laravel", "Silence"],
        link: "#",
        status: "Beta"
    },
    {
        title: "StackOverflow Copy-Paster Pro",
        desc: "Automates CTRL+C / CTRL+V from StackOverflow answers with 0 votes.",
        tech: ["Python", "Selenium"],
        link: "#",
        status: "Deprecated (Too effective)"
    },
    {
        title: "Is It Friday Yet?",
        desc: "A simple app that just says 'No' unless it's Friday.",
        tech: ["HTML", "Time API"],
        link: "#",
        status: "Live"
    }
];

export default function Projects() {
    return (
        <section className="py-20 px-4 bg-gray-800">
            <h2 className="text-4xl font-bold mb-12 text-center text-neon-pink">
                Projects (That "Work")
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-900 border border-gray-600 p-6 rounded-lg shadow-lg hover:shadow-neon-pink/50 transition-shadow"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                            <span className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300">
                                {project.status}
                            </span>
                        </div>
                        <p className="text-gray-400 mb-4">{project.desc}</p>
                        <div className="flex gap-2 mb-4">
                            {project.tech.map(t => (
                                <span key={t} className="text-xs font-mono text-neon-green border border-neon-green px-2 py-1 rounded">
                                    {t}
                                </span>
                            ))}
                        </div>
                        <button className="w-full py-2 bg-gray-700 hover:bg-gray-600 rounded text-center cursor-not-allowed" disabled>
                            View Code (Coming Soon™)
                        </button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
