import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const Bug = ({ id, onSquash }) => {
    const [position, setPosition] = useState({
        x: Math.random() * 90, // Percentage
        y: Math.random() * 90
    });

    // Random movement
    useEffect(() => {
        const interval = setInterval(() => {
            setPosition({
                x: Math.min(90, Math.max(0, position.x + (Math.random() - 0.5) * 20)),
                y: Math.min(90, Math.max(0, position.y + (Math.random() - 0.5) * 20))
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [position]);

    return (
        <motion.div
            className="absolute cursor-pointer text-2xl z-50 select-none"
            animate={{ left: `${position.x}%`, top: `${position.y}%` }}
            transition={{ duration: 1, ease: "linear" }}
            onClick={(e) => {
                e.stopPropagation();
                onSquash(id);
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
        >
            🐛
        </motion.div>
    );
};

const Projects = () => {
    const [bugs, setBugs] = useState(Array.from({ length: 5 }, (_, i) => i));
    const [hackerMode, setHackerMode] = useState(false);

    const squashBug = (id) => {
        setBugs(prev => prev.filter(b => b !== id));
        // Spawn a new one occasionally to keep it going
        if (Math.random() > 0.5) {
            setTimeout(() => {
                setBugs(prev => [...prev, Math.max(...prev, 0) + 1]);
            }, 2000);
        }
    };

    const toggleHackerMode = () => {
        setHackerMode(true);
        setTimeout(() => setHackerMode(false), 3000);
    };

    return (
        <section id="projects" className="py-20 px-4 relative min-h-[600px] overflow-hidden border-t border-gray-900 bg-gray-950">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5"
                style={{ backgroundImage: "repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, #111 25%, #111 75%, #000 75%, #000)" }}>
            </div>

            {/* Content Container */}
            <div className="max-w-6xl mx-auto relative z-10 text-center">

                {/* Header */}
                <h2 className="text-4xl md:text-6xl font-black mb-8 text-red-600 tracking-tighter animate-pulse">
                    TOP SECRET // CLASSIFIED
                </h2>

                {/* Locked Message */}
                <div className="bg-red-950/30 border-2 border-red-600/50 p-8 rounded-lg max-w-2xl mx-auto backdrop-blur-sm relative mb-12">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-950 px-4 text-red-500 font-mono text-sm border border-red-600">
                        SECURITY ALERT
                    </div>
                    <p className="text-2xl text-red-400 font-mono mb-4">
                        ACCESS DENIED
                    </p>
                    <p className="text-gray-400 font-mono">
                        Clearance Level Too Low. Declassification Scheduled for Soon™.
                    </p>

                    <button
                        onClick={toggleHackerMode}
                        className="mt-6 px-6 py-2 border border-red-500 text-red-500 font-mono text-sm hover:bg-red-500 hover:text-white transition-colors"
                    >
                        {hackerMode ? "DECRYPTING..." : "ATTEMPT DECRYPTION"}
                    </button>

                    {hackerMode && (
                        <div className="absolute inset-0 bg-black/90 flex items-center justify-center overflow-hidden rounded-lg">
                            <p className="text-green-500 font-mono text-xs text-left p-4 opacity-80 break-all">
                                {Array(500).fill(0).map(() => Math.random().toString(36).substring(7)).join(' ')}
                            </p>
                        </div>
                    )}
                </div>

                {/* Placeholder Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-50 pointer-events-none">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-64 bg-gray-900 rounded-xl border border-gray-800 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)] opacity-20"></div>
                            <div className="text-6xl">🔒</div>
                            <div className="absolute bottom-4 text-gray-600 font-mono text-xs">FILE_{i}_LOCKED.enc</div>
                        </div>
                    ))}
                </div>

                {/* Footer Message */}
                <div className="mt-16 text-gray-500 font-mono text-xs animate-bounce">
                    ↓ KEEP COMING TO CHECK FOR NEW GAMES ↓
                </div>
            </div>

            {/* Bugs Layer */}
            {bugs.map(id => (
                <Bug key={id} id={id} onSquash={squashBug} />
            ))}

            <div className="absolute bottom-4 right-4 text-gray-700 font-mono text-[10px]">
                BUGS_ACTIVE: {bugs.length}
            </div>

        </section>
    );
};

export default Projects;
