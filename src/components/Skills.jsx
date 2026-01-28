import { motion } from "motion/react";

const skills = [
    { name: "PHP", desc: "The ancient language capable of summoning demons (and reliable backends).", color: "bg-purple-600" },
    { name: "Laravel", desc: "My framework of choice for rapid prototyping (and avoiding raw SQL).", color: "bg-red-500" },
    { name: "SQL", desc: "I speak the language of databases. Usually in UPPERCASE YELLING.", color: "bg-blue-500" },
    { name: "React JS", desc: "Where `useEffect` loops go to die.", color: "bg-cyan-400" },
    { name: "Docker", desc: "Works on my machine. Good luck on yours.", color: "bg-blue-600" },
    { name: "Go", desc: "Currently loading... (Learning Phase)", color: "bg-teal-400" },
    { name: "Figma", desc: "I move rectangles until they look expensive.", color: "bg-pink-500" },
    { name: "PEST", desc: "The only 'pests' allowed in this codebase.", color: "bg-green-500" },
];

export default function Skills() {
    return (
        <section className="py-20 px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-blue">
                    Tech Stack (Things I Google)
                </span>
            </h2>

            <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        className={`p-6 rounded-2xl ${skill.color} bg-opacity-20 border-2 border-transparent hover:border-white cursor-pointer w-64`}
                        whileHover={{
                            scale: 1.1,
                            rotate: Math.random() * 10 - 5,
                        }}
                        whileTap={{ scale: 0.9 }}
                        drag
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-2">{skill.name}</h3>
                        <p className="text-white/80 font-comic text-sm">
                            {skill.desc}
                        </p>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12 text-gray-500">
                (You can drag the skills around because chaos is fun)
            </div>
        </section>
    );
}
