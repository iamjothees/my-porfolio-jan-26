import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Armchair, Zap, Glasses, Coffee, Code, Calendar, Terminal, Sparkles } from "lucide-react";

export default function About() {
    return (
        <section className="min-h-screen py-20 px-4 bg-[#0a0a0a] relative overflow-hidden flex flex-col items-center justify-center">

            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-neon-green/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-neon-blue/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-6xl mx-auto z-10 w-full space-y-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        The <span className="text-neon-pink">Indoor Enthusiast</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Full-Stack Sorcerer. Lefty. Anti-Solar Agent.
                    </p>
                </motion.div>

                {/* The Origin Story (Extracted & Styled like Week in Life) */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="w-full bg-gray-900/30 border border-gray-800 rounded-3xl p-8 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Sparkles size={100} />
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <div className="p-4 bg-neon-green/10 rounded-full text-neon-green shrink-0">
                            <Sparkles size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">The Origin</h3>
                            <p className="text-gray-300 leading-relaxed text-sm max-w-3xl">
                                "I didn't choose the coding life; the coding life chose me in Grade 11.
                                It was an accident. I started <span className="text-neon-blue font-mono">Backend Only</span>,
                                but realized users actually need to *see* things.
                                Now I'm passionate about <span className="text-neon-pink font-bold">UI/UX</span> and making things accessible."
                            </p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Col: ID Card (Current Status) */}
                    <motion.div
                        className="h-full"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 backdrop-blur-sm h-full flex flex-col hover:border-neon-blue/30 transition-colors">
                            <div className="flex items-start gap-4 mb-8">
                                <div className="p-3 bg-neon-blue/10 rounded-2xl text-neon-blue shrink-0">
                                    <Glasses size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Jotheeswaran (Joe)</h3>
                                    <p className="text-sm font-mono text-neon-green">
                                        Level 25 • 3y Pro / 5y Hobby Dev
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6 flex-grow">
                                <div className="flex gap-4 items-start">
                                    <Terminal className="text-gray-500 mt-1 shrink-0" size={20} />
                                    <div>
                                        <h4 className="text-white font-medium text-sm">Deployment Zone</h4>
                                        <p className="text-sm text-gray-400 mt-1">
                                            <span className="text-white font-medium">AWP Solutions</span> (Office Base)
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <Calendar className="text-gray-500 mt-1 shrink-0" size={20} />
                                    <div>
                                        <h4 className="text-white font-medium text-sm">The Schedule</h4>
                                        <p className="text-sm text-gray-400 mt-1">
                                            6 Days/Week • 8 Hours/Day <br />
                                            (Incl. 30min Power Nap aka <span className="text-neon-pink italic">"Offline Rendering"</span>).
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Col: The Simulator */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="relative h-full"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink to-neon-blue rounded-3xl blur opacity-20"></div>
                        <div className="relative bg-[#0F0F0F] rounded-3xl p-8 border border-gray-800 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    <Coffee className="text-yellow-500" />
                                    The "Chill" Simulator
                                </h3>
                                <p className="text-gray-400 text-sm mb-8">
                                    I can sit on my balcony (simulated) for hours. Can you survive 30 seconds of doing absolutely nothing?
                                </p>
                            </div>

                            <BalconySimulator />
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section: Week in the Life (The Story) */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="w-full bg-gray-900/30 border border-gray-800 rounded-3xl p-8 md:p-10 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Code size={120} />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                        <span className="text-neon-pink">A Week in the Life</span>
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8 relative z-10">
                        {/* 1. The Process */}
                        <div className="space-y-3">
                            <h4 className="text-neon-green font-mono text-sm uppercase tracking-wider">Mon - Sat: The Process</h4>
                            <p className="text-gray-300 leading-relaxed text-sm">
                                I don't rush. I <span className="text-white font-medium">cruise through the process</span>.
                                My debugging philosophy? Simple.
                                <code className="bg-gray-800 px-1 py-0.5 rounded text-neon-pink mx-1">dd($var)</code> and
                                <code className="bg-gray-800 px-1 py-0.5 rounded text-neon-blue mx-1">console.log()</code>.
                                <br />If things get rough, I pull out the raw SQL queries.
                            </p>
                        </div>

                        {/* 2. The Ritual */}
                        <div className="space-y-3">
                            <h4 className="text-yellow-400 font-mono text-sm uppercase tracking-wider">Sunday: The Ritual</h4>
                            <p className="text-gray-300 leading-relaxed text-sm">
                                One day off. One mission. Me, my <span className="text-white font-medium">Appa (Dad)</span>, and our Scooty hitting the road at a blistering <span className="text-yellow-400 font-bold">30-ish kmph</span>.
                                (Or sometimes, we bring <span className="text-white font-medium">Amma (Mom)</span> along for some window shopping).
                                {/* <br />No bugs, just breeze. */}
                            </p>
                        </div>

                        {/* 3. The Setup */}
                        <div className="space-y-3">
                            <h4 className="text-neon-pink font-mono text-sm uppercase tracking-wider">Every Night: The Setup</h4>
                            <p className="text-gray-300 leading-relaxed text-sm">
                                The Vision: An ergonomic temple featuring an electric standing desk and glorious dual monitors.
                                <br />
                                <span className="block mt-2 bg-gray-800/50 p-2 rounded border-l-2 border-yellow-500 text-xs italic text-gray-400">
                                    ⚠️ <b>Reality Check:</b> Currently laying in bed with my laptop.
                                </span>
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

function BalconySimulator() {
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState("Idle");
    const [isActive, setIsActive] = useState(false);

    const MESSAGES = [
        { p: 1, text: "Finding a comfortable spot..." },
        { p: 10, text: "Adjusting cushions..." },
        { p: 20, text: "Sipping coffee..." },
        { p: 30, text: "Watching a random bird..." },
        { p: 45, text: "Contemplating variable names..." },
        { p: 60, text: "Suppressing the sun..." },
        { p: 80, text: "Entering Zen Mode..." },
        { p: 95, text: "Almost enlightened..." },
        { p: 100, text: "ACHIEVEMENT UNLOCKED: Master Loafer" }
    ];

    useEffect(() => {
        let interval;
        if (isActive && progress < 100) {
            interval = setInterval(() => {
                setProgress(prev => prev + 1);
            }, 300); // 300ms * 100 = 30 seconds
        } else if (!isActive && progress > 0 && progress < 100) {
            // Slowly drain if they stop just to annoy them
            interval = setInterval(() => {
                setProgress(prev => Math.max(0, prev - 5));
            }, 100);
        }
        return () => clearInterval(interval);
    }, [isActive, progress]);

    // Update message based on progress
    useEffect(() => {
        if (progress === 0 && !isActive) setStatus("Ready to chill?");
        if (!isActive && progress > 0 && progress < 100) setStatus("Hey! You moved! Vibe lost.");

        const currentMsg = MESSAGES.slice().reverse().find(m => progress >= m.p);
        if (isActive && currentMsg) setStatus(currentMsg.text);
    }, [progress, isActive]);

    return (
        <div className="w-full h-full flex flex-col justify-end">
            <div className="mb-4 h-8 flex items-center justify-between text-xs font-mono text-neon-green">
                <span>{status}</span>
                <span>{progress}%</span>
            </div>

            <div className="h-4 bg-gray-800 rounded-full overflow-hidden mb-6 border border-gray-700">
                <motion.div
                    className="h-full bg-gradient-to-r from-neon-blue to-neon-pink"
                    animate={{ width: `${progress}%` }}
                    transition={{ useEase: "linear", duration: 0.6 }}
                />
            </div>

            <button
                className={`w-full py-4 rounded-xl font-bold transition-all ${progress === 100
                    ? "bg-neon-green text-black cursor-default"
                    : isActive
                        ? "bg-gray-800 text-gray-400 border border-gray-600"
                        : "bg-white text-black hover:bg-gray-200"
                    }`}
                onMouseEnter={() => progress < 100 && setIsActive(true)}
                onMouseLeave={() => progress < 100 && setIsActive(false)}
            >
                {progress === 100 ? "You are now one with the balcony." : isActive ? "Keep hovering to chill..." : "Hover to Chill"}
            </button>
            <p className="text-center text-xs text-gray-600 mt-2">
                (Don't move your mouse away or you lose the vibe)
            </p>
        </div>
    );
}
