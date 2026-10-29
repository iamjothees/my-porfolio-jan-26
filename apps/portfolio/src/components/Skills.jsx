import { motion } from "motion/react";

// Skill Data with Everyday, Understandable Descriptions
const skills = [
    {
        name: "PHP",
        tier: "Go-To Favorite",
        rank: "A+",
        type: "CORE ENGINE",
        desc: "The reliable workhorse that powers most of the web. Handles accounts, orders, and business logic smoothly behind the scenes.",
        benchmark: 95,
        color: "from-purple-500 to-indigo-500",
        stops: ["#a855f7", "#6366f1"],
        shadow: "shadow-purple-500/20"
    },
    {
        name: "Laravel",
        tier: "Fast-Track",
        rank: "S",
        type: "APP BUILDER",
        desc: "Helps me build complete websites, member dashboards, and custom business tools in days instead of months.",
        benchmark: 90,
        color: "from-red-500 to-orange-500",
        stops: ["#ef4444", "#f97316"],
        shadow: "shadow-red-500/20"
    },
    {
        name: "SQL",
        tier: "Rock Solid",
        rank: "S",
        type: "SAFE STORAGE",
        desc: "The digital filing cabinet. Keeps customer accounts, orders, and product catalogs tidy, fast, and safely protected.",
        benchmark: 92,
        color: "from-blue-500 to-cyan-500",
        stops: ["#3b82f6", "#06b6d4"],
        shadow: "shadow-blue-500/20"
    },
    {
        name: "React",
        tier: "Smooth & Snappy",
        rank: "A",
        type: "INTERACTIVE UI",
        desc: "Makes websites feel as responsive as an iPhone app. Click buttons, open carts, and browse without slow page reloads.",
        benchmark: 86,
        color: "from-cyan-400 to-blue-400",
        stops: ["#22d3ee", "#60a5fa"],
        shadow: "shadow-cyan-400/20"
    },
    {
        name: "Tailwind CSS",
        tier: "Pixel Perfect",
        rank: "A+",
        type: "DESIGN & LAYOUT",
        desc: "Crafting modern layouts that look sharp, readable, and fit automatically whether you are on a laptop or a small phone.",
        benchmark: 88,
        color: "from-teal-400 to-cyan-400",
        stops: ["#2dd4bf", "#06b6d4"],
        shadow: "shadow-teal-400/20"
    },
    {
        name: "Docker",
        tier: "Zero Surprises",
        rank: "A",
        type: "PACKAGING",
        desc: "Packs up the entire project neatly so 'it works on my computer' guarantees that it works on live servers too.",
        benchmark: 75,
        color: "from-blue-600 to-indigo-600",
        stops: ["#2563eb", "#4f46e5"],
        shadow: "shadow-blue-600/20"
    },
    {
        name: "Figma",
        tier: "Visual Blueprints",
        rank: "B+",
        type: "DESIGN",
        desc: "Where website layouts and ideas get sketched out and agreed upon before writing a single line of code.",
        benchmark: 65,
        color: "from-pink-500 to-rose-500",
        stops: ["#ec4899", "#f43f5e"],
        shadow: "shadow-pink-500/20"
    },
    {
        name: "Burgman & Coffee",
        tier: "Daily Fuel",
        rank: "S+",
        type: "ESSENTIALS",
        desc: "Morning coffee to get the creativity flowing, and an evening 30 km/h scooter ride with Dad to clear the head.",
        benchmark: 99,
        color: "from-amber-400 to-yellow-500",
        stops: ["#fbbf24", "#eab308"],
        shadow: "shadow-yellow-500/20"
    },
];

const ReactorRing = ({ name, benchmark, rank, stops }) => {
    const radius = 20;
    const size = 52;
    const stroke = 5;
    const circumference = 2 * Math.PI * radius;
    // Qualitative benchmark mapping for visual progress filling state
    const offset = circumference - (benchmark / 100) * circumference;
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
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{ filter: `drop-shadow(0 0 2px ${stops[0]})` }}
                />
            </svg>
            <div className="absolute text-[11px] font-black font-mono tracking-tighter text-white/90">
                {rank}
            </div>
        </div>
    );
};

export default function Skills() {
    return (
        <section className="py-20 px-4 relative overflow-hidden">
            {/* Background Mesh */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-[#0a0a0a] to-[#0a0a0a] pointer-events-none" />

            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-white relative z-10">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-blue">
                    Tools of the Trade
                </span>
                <span className="block text-sm text-gray-400 mt-2 font-normal">
                    What I use to turn ideas into working websites & web apps
                </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto relative z-10">
                {skills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        className={`relative group h-72 rounded-xl bg-gray-900/40 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden ${skill.shadow} hover:shadow-2xl flex flex-col justify-between`}
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
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-2xl font-bold text-white tracking-tight">{skill.name}</h3>
                                    <span className={`text-[11px] font-medium px-2 py-1 rounded bg-white/5 border border-white/10 ${skill.color.split(' ')[1].replace('to-', 'text-')}`}>
                                        {skill.type}
                                    </span>
                                </div>

                                <p className="text-gray-300 text-sm leading-relaxed font-normal">
                                    {skill.desc}
                                </p>
                            </div>

                            {/* Reactor stats & qualitative progress benchmark */}
                            <div className="mt-4 pt-3 border-t border-white/5">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-gray-500 font-mono tracking-wider uppercase">STATUS</span>
                                        <span className="text-white font-medium text-sm tracking-tight">
                                            {skill.tier}
                                        </span>
                                    </div>
                                    <ReactorRing
                                        name={skill.name}
                                        benchmark={skill.benchmark}
                                        rank={skill.rank}
                                        stops={skill.stops}
                                    />
                                </div>

                                {/* Visual Progress Bar mapped to qualitative benchmark */}
                                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5 relative">
                                    <motion.div
                                        className={`h-full bg-gradient-to-r ${skill.color}`}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.benchmark}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, ease: "easeOut" }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Scanline Effect Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[200%] w-full z-20 pointer-events-none opacity-0 group-hover:opacity-100 animate-scan" />
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12 text-gray-400 text-sm">
                Simple, battle-tested tools that get the job done right.
            </div>
        </section>
    );
}
