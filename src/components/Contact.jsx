import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [showModal, setShowModal] = useState(false);
    const [copied, setCopied] = useState(false);

    const moveButton = () => {
        const x = Math.random() * 300 - 150; // Random X between -150 and 150
        const y = Math.random() * 300 - 150; // Random Y between -150 and 150
        setPosition({ x, y });
    };

    const handleCopy = () => {
        navigator.clipboard.writeText("joecodes004@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-20 px-4 text-center relative z-50">
            <h2 className="text-4xl font-bold mb-8 text-white">
                Contact Me (Please Don't)
            </h2>

            <p className="mb-12 text-gray-400 max-w-xl mx-auto">
                If you really must, you can try to click the button below.
                But honestly, I'm probably debugging a race condition I created 3 weeks ago.
            </p>

            <div className="relative h-40 flex items-center justify-center">
                <motion.button
                    animate={{ x: position.x, y: position.y }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onHoverStart={moveButton}
                    onTouchStart={moveButton} // Handle touch devices
                    onClick={() => setShowModal(true)}
                    className="bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-700 active:bg-red-800 cursor-none touch-manipulation"
                    whileTap={{ scale: 0.9 }}
                >
                    Send Urgent Request
                </motion.button>
            </div>

            <div className="mt-12">
                <button
                    onClick={() => {
                        const pigeon = document.createElement("div");
                        pigeon.innerText = "🐦✉️";
                        pigeon.style.position = "fixed";
                        pigeon.style.left = "-100px";
                        pigeon.style.top = `${Math.random() * (window.innerHeight - 100)}px`;
                        pigeon.style.fontSize = "3rem";
                        pigeon.style.zIndex = "9999";
                        pigeon.style.transition = "left 2s linear";
                        document.body.appendChild(pigeon);

                        // Force reflow
                        void pigeon.offsetWidth;

                        pigeon.style.left = "110vw";

                        setTimeout(() => {
                            pigeon.remove();
                            window.open("https://wa.me/919442608662?text=I%20sent%20a%20pigeon%20but%20it%20got%20lost...", "_blank");
                        }, 2000);
                    }}
                    className="text-neon-blue underline hover:text-white transition-colors cursor-pointer bg-transparent border-none"
                >
                    Or just send a pigeon
                </button>
            </div>

            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        onClick={() => setShowModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.5, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.5, y: 50 }}
                            className="bg-gray-900 border-2 border-red-500 rounded-xl p-8 max-w-md w-full shadow-[0_0_50px_rgba(239,68,68,0.5)] relative overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Glitch Overlay */}
                            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(255,0,0,0.05)_2px,rgba(255,0,0,0.05)_4px)] pointer-events-none" />

                            <h3 className="text-2xl font-black text-red-500 mb-4 tracking-tighter">
                                ⚠ SYSTEM BREACH DETECTED
                            </h3>

                            <p className="text-gray-300 font-mono mb-6 leading-relaxed">
                                HOW DID YOU CLICK THIS?! That was supposed to be impossible. My reflex algorithms are broken.
                            </p>

                            <div className="space-y-4 mb-6">
                                {/* Email Row */}
                                <div className="bg-black/50 p-4 rounded border border-red-500/30 flex items-center justify-between group hover:border-red-500/60 transition-colors">
                                    <a href="mailto:joecodes004@gmail.com" className="text-red-400 hover:text-red-300 transition-colors truncate mr-2" title="Send Email">
                                        joecodes004@gmail.com
                                    </a>
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText("joecodes004@gmail.com");
                                            setCopied(true);
                                            setTimeout(() => setCopied(false), 2000);
                                        }}
                                        className="text-xs font-bold text-white bg-red-600 px-3 py-1 rounded hover:bg-red-500 transition-colors shrink-0"
                                    >
                                        {copied ? "COPIED" : "COPY"}
                                    </button>
                                </div>

                                {/* WhatsApp Row */}
                                <div className="bg-black/50 p-4 rounded border border-red-500/30 flex items-center justify-between group hover:border-red-500/60 transition-colors">
                                    <a href="https://wa.me/919442608662" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors font-mono truncate mr-2" title="Chat on WhatsApp">
                                        +91 94426 08662
                                    </a>
                                    <a
                                        href="https://wa.me/919442608662"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-bold text-black bg-green-500 px-3 py-1 rounded hover:bg-green-400 transition-colors shrink-0 no-underline"
                                    >
                                        CHAT
                                    </a>
                                </div>
                            </div>

                            <button
                                onClick={() => setShowModal(false)}
                                className="w-full bg-white text-black font-bold py-3 rounded hover:bg-gray-200 transition-colors uppercase tracking-widest"
                            >
                                CLOSE WARNING
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
