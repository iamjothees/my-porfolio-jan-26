import { motion } from "motion/react";

// Skill Data with "Tech Specs"
const skills = [
    { name: "PHP", level: "Lv. 95", type: "BACKEND", desc: "The ancient one. Summoner of daemons.", color: "from-purple-500 to-indigo-500", stops: ["#a855f7", "#6366f1"], shadow: "shadow-purple-500/20" },
    { name: "Laravel", level: "Lv. 88", type: "FRAMEWORK", desc: "Rapid prototyping weaponry.", color: "from-red-500 to-orange-500", stops: ["#ef4444", "#f97316"], shadow: "shadow-red-500/20" },
    { name: "SQL", level: "Lv. 90", type: "DATABASE", desc: "I yell at data until it obeys.", color: "from-blue-500 to-cyan-500", stops: ["#3b82f6", "#06b6d4"], shadow: "shadow-blue-500/20" },
    { name: "React", level: "Lv. 85", type: "FRONTEND", desc: "Hook dependency array architect.", color: "from-cyan-400 to-blue-400", stops: ["#22d3ee", "#60a5fa"], shadow: "shadow-cyan-400/20" },
    { name: "Docker", level: "Lv. 60", type: "DEVOPS", desc: "It works on my machine™.", color: "from-blue-600 to-indigo-600", stops: ["#2563eb", "#4f46e5"], shadow: "shadow-blue-600/20" },
    { name: "Go", level: "Lv. 10", type: "LOADING...", desc: "Compiling knowledge...", color: "from-teal-400 to-emerald-400", stops: ["#2dd4bf", "#34d399"], shadow: "shadow-teal-400/20" },
    { name: "Figma", level: "Lv. 40", type: "DESIGN", desc: "Rectangle mover extraordinaire.", color: "from-pink-500 to-rose-500", stops: ["#ec4899", "#f43f5e"], shadow: "shadow-pink-500/20" },
    { name: "PEST", level: "Lv. 60", type: "TESTING", desc: "The only bugs I allow.", color: "from-green-500 to-lime-500", stops: ["#22c55e", "#84cc16"], shadow: "shadow-green-500/20" },
];

const ReactorRing = ({ name, level, stops }) => {
    const radius = 20;
    const size = 52;
    const stroke = 5;
    const circumference = 2 * Math.PI * radius;
    const percentage = parseInt(level.replace('Lv. ', ''));
    const offset = circumference - (percentage / 100) * circumference;
    const gradientId = `gradient-${name}`;

    return (
        <div className="relative flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] rounded-full bg-black/40 p-1">
            <svg width={size} height={size} className="transform -rotate-90">
                <defs>
                    <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor={stops[0]} />
                    </linearGradient>
                </defs>
                {/* Glossy Track */}
                <circle
                    cx={size / 2} cy={size / 2} r={radius}
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth={stroke}
                    fill="transparent"
                />
                {/* Inner Bevel/Gloss (Subtle) */}
                <circle
                    cx={size / 2} cy={size / 2} r={radius}
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth={1}
                    fill="transparent"
                    style={{ transform: "scale(0.9)" }}
                />
                {/* Indicator */}
                <motion.circle
                    cx={size / 2} cy={size / 2} r={radius}
                    stroke={`url(#${gradientId})`}
                    strokeWidth={stroke}
                    fill="transparent"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset: offset }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{ filter: `drop-shadow(0 0 2px ${stops[0]})` }}
                />
            </svg>
            <div className="absolute text-xs font-bold font-mono text-white/90">
                {percentage}%
            </div>
        </div>
    );
};

export default function Skills() {
    return (
        <section className="py-20 px-4 relative overflow-hidden">
            {/* Background Mesh (Optional, if needed for better contrast) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-[#0a0a0a] to-[#0a0a0a] pointer-events-none" />

            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-white relative z-10">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-blue">
                    Tech Stack
                </span>
                <span className="block text-sm font-mono text-gray-500 mt-2 tracking-widest uppercase">
                    // Operational Capabilities
                </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto relative z-10">
                {skills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        className={`relative group h-64 rounded-xl bg-gray-900/40 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden ${skill.shadow} hover:shadow-2xl`}
                        whileHover={{ y: -5, scale: 1.02 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Gradient Border/Glow on Top */}
                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${skill.color}`} />

                        {/* Background Large Text (Watermark) */}
                        <div className="absolute -bottom-4 -right-4 text-8xl font-black text-white/5 select-none pointer-events-none group-hover:text-white/10 transition-colors">
                            {skill.name.substring(0, 3).toUpperCase()}
                        </div>

                        {/* Content */}
                        <div className="p-6 h-full flex flex-col justify-between relative z-10">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-white tracking-tight">{skill.name}</h3>
                                    <span className={`text-xs font-mono px-2 py-1 rounded bg-white/5 border border-white/10 ${skill.color.split(' ')[1].replace('to-', 'text-')}`}>
                                        {skill.type}
                                    </span>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed font-mono">
                                    {skill.desc}
                                </p>
                            </div>

                            {/* Reactor stats */}
                            <div className="flex items-center justify-between mt-4">
                                <div className="text-xs text-gray-500 font-mono flex flex-col">
                                    <span>OUTPUT</span>
                                    <span className="text-white text-lg">{skill.level}</span>
                                </div>
                                <ReactorRing name={skill.name} level={skill.level} stops={skill.stops} />
                            </div>
                        </div>

                        {/* Scanline Effect Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[200%] w-full z-20 pointer-events-none opacity-0 group-hover:opacity-100 animate-scan" />
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12 text-gray-600 font-mono text-xs">
                SYSTEM_STATUS: CHAOTIC_GOOD
            </div>
        </section>
    );
}
