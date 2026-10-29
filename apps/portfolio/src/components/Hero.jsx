import { useState, useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue, useTransform, AnimatePresence } from "motion/react";
import { Zap, Octagon, Wind, ArrowUpRight, Github } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center p-6 relative overflow-hidden bg-[#0a0a0a]">

            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-neon-pink/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-neon-blue/10 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 max-w-12xl w-full"
            >
                {/* Friendly Badges */}
                <div className="flex flex-wrap items-center justify-center gap-2.5 mb-5">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Open for freelance & projects</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300">
                        <span>🛋️ Certified Homebody</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-yellow-500/10 border border-yellow-500/30 text-yellow-300">
                        <span>🛵 30 km/h Burgman Cruiser</span>
                    </span>
                </div>

                {/* Friendly Showcase Bridge Banner */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    className="max-w-3xl mx-auto mb-8 px-5 py-3.5 rounded-2xl bg-gray-900/70 border border-neon-blue/30 shadow-[0_0_30px_rgba(0,255,255,0.12)] backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left group hover:border-neon-blue/60 transition-all"
                >
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-neon-blue/10 border border-neon-blue/20 text-neon-blue shrink-0">
                            <Zap size={18} className="fill-current text-neon-blue" />
                        </div>
                        <div className="text-xs md:text-sm text-gray-200 leading-snug">
                            <span className="text-neon-blue font-bold">Curious to see live designs?</span>{" "}
                            Browse 9 interactive website demos & sample business pages on{" "}
                            <span className="text-white font-semibold underline decoration-neon-blue/40">showcase.joecodes.in</span>
                        </div>
                    </div>

                    <a
                        href="https://showcase.joecodes.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-neon-blue text-black hover:bg-white hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all active:scale-95 group-hover:scale-[1.02] cursor-pointer whitespace-nowrap shrink-0"
                    >
                        <span>Explore Demos →</span>
                    </a>
                </motion.div>

                {/* Name Tag */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 font-mono text-xs md:text-sm mb-4 tracking-widest uppercase"
                >
                    <span className="text-white font-normal">Jotheeswaran</span> <span className="text-neon-green mx-2">•</span> <span className="text-white font-normal">Joe</span> <span className="text-neon-green mx-2">•</span> <span className="text-gray-400 lowercase">joecodes.in</span>
                </motion.p>

                {/* Main Headline */}
                <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight break-words max-w-full">
                    Web Developer. <br className="block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-teal-300 to-neon-pink inline-block">
                        Part-Time Burgman Pioneer.
                    </span>
                </h1>

                {/* Subtitle / Description */}
                <div className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                    <p>
                        I build websites and web apps that look clean, load fast, and actually feel easy to use on any device.
                    </p>
                    <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-3 text-gray-400">
                        <span className="italic">Cruising through life (and bugs) at</span>
                        <Speedometer />
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                        className="bg-gradient-to-r from-neon-blue to-neon-pink text-black px-8 py-3.5 rounded-full font-bold text-base hover:opacity-95 transition-all shadow-[0px_0px_25px_rgba(0,255,255,0.25)] inline-flex items-center gap-2 cursor-pointer"
                    >
                        <span>See What I've Built ↓</span>
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        className="bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-full font-medium text-base hover:bg-white/20 hover:border-white transition-all cursor-pointer"
                    >
                        <span>Say Hello 👋</span>
                    </motion.button>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-12 opacity-30"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2">
                    <div className="w-1 h-2 bg-white rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}

function Speedometer() {
    const [speedColor, setSpeedColor] = useState("text-neon-green");
    const [borderColor, setBorderColor] = useState("border-gray-800");
    const [interaction, setInteraction] = useState(null);
    const speed = useMotionValue(30);
    const rounded = useSpring(speed, { stiffness: 40, damping: 15 });
    const ref = useRef(null);
    const [shake, setShake] = useState(0);
    const [showWind, setShowWind] = useState(false);
    const [windDuration, setWindDuration] = useState(1.5);

    // Unified Speed Logic
    useEffect(() => {
        let timeoutId;

        const loop = () => {
            let nextTarget;
            let delay;

            if (interaction === 'brake') {
                speed.set(0);
                return;
            } else if (interaction === 'accel') {
                nextTarget = 70 + Math.random() * 20;
                delay = 100 + Math.random() * 200;
            } else {
                nextTarget = 25 + Math.random() * 20;
                delay = 1000 + Math.random() * 2000;
            }

            speed.set(nextTarget);
            timeoutId = setTimeout(loop, delay);
        };

        loop();
        return () => clearTimeout(timeoutId);
    }, [speed, interaction]);

    // Update Display, Color & Shake
    useEffect(() => {
        const unsubscribe = rounded.on("change", (latest) => {
            const val = Math.round(latest);
            if (ref.current) {
                ref.current.textContent = val;
            }

            // Wind Logic
            setShowWind(val > 5);
            const newDuration = val > 50 ? 0.1 : 1;
            setWindDuration(newDuration);

            if (val < 20) {
                setSpeedColor("text-red-500");
                setBorderColor("border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.3)]");
                setShake(0);
            } else if (val < 50) {
                setSpeedColor("text-neon-green");
                setBorderColor("border-neon-green/50 shadow-[0_0_15px_rgba(57,255,20,0.2)]");
                setShake(0);
            } else {
                setSpeedColor("text-yellow-400");
                setBorderColor("border-yellow-400/50 shadow-[0_0_20px_rgba(250,204,21,0.4)]");
                // Shake intensity based on speed
                setShake(val > 80 ? (val - 80) * 0.1 : 0);
            }
        });
        return unsubscribe;
    }, [rounded]);

    return (
        <motion.div
            className={`inline-flex items-center gap-3 p-3 rounded-2xl bg-gray-900/80 backdrop-blur-md border transition-all duration-300 ${borderColor} mt-4 relative`}
            animate={shake > 0 ? { x: [-2, 2, -2, 2, 0] } : {}}
            transition={{ duration: 0.2, repeat: shake > 0 ? Infinity : 0 }}
        >
            {/* Breeze Effect */}
            <AnimatePresence>
                {showWind && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none z-0 overflow-hidden rounded-2xl"
                    >
                        {[...Array(5)].map((_, i) => ( // Increased lines for coverage
                            <motion.div
                                key={i}
                                className="h-0.5 bg-neon-blue/50 rounded-full absolute z-[100]"
                                style={{ top: `${20 + i * 15}%` }} // Distribute vertically
                                initial={{ width: 0, x: -50, opacity: 0 }}
                                animate={{
                                    width: [50, 200, 50],
                                    x: [-100, 400], // Fly across full dash width
                                    opacity: [0, 1, 0]
                                }}
                                transition={{
                                    duration: windDuration + (i * 0.15),
                                    repeat: Infinity,
                                    delay: i * 2,
                                    ease: "linear"
                                }}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Brake Pedal */}
            <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "rgba(239,68,68,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative p-3 rounded-xl bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-red-500 hover:border-red-500/50 transition-all"
                onMouseEnter={() => setInteraction('brake')}
                onMouseLeave={() => setInteraction(null)}
                onTouchStart={() => setInteraction('brake')}
                onTouchEnd={() => setInteraction(null)}
            >
                <div className="absolute inset-0 bg-red-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <Octagon size={24} className="relative z-10" />
                <span className="sr-only">Brake</span>
            </motion.button>

            {/* Dashboard Display */}
            <div className="flex flex-col items-center w-24">
                <div className="flex items-baseline gap-1">
                    <span
                        ref={ref}
                        className={`font-mono font-bold text-4xl ${speedColor} transition-colors duration-200 tabular-nums leading-none`}
                    >
                        30
                    </span>
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">km/h</span>
                </div>

                {/* RPM/Load Bar */}
                <div className="w-full h-1.5 bg-gray-800 rounded-full mt-2 overflow-hidden">
                    <motion.div
                        className={`h-full ${speedColor === 'text-red-500' ? 'bg-red-500' : speedColor === 'text-yellow-400' ? 'bg-yellow-400' : 'bg-neon-green'}`}
                        style={{ width: useTransform(rounded, [0, 120], ["0%", "100%"]) }}
                    />
                </div>
            </div>

            {/* Accel Pedal */}
            <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "rgba(57,255,20,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative p-3 rounded-xl bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-neon-green hover:border-neon-green/50 transition-all"
                onMouseEnter={() => setInteraction('accel')}
                onMouseLeave={() => setInteraction(null)}
                onTouchStart={() => setInteraction('accel')}
                onTouchEnd={() => setInteraction(null)}
            >
                <div className="absolute inset-0 bg-neon-green/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <Zap size={24} className="relative z-10 fill-current" />
                <span className="sr-only">Accelerate</span>
            </motion.button>
        </motion.div>
    );
}
