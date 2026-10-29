import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    Terminal,
    Mail,
    Linkedin,
    MessageSquare,
    Copy,
    Check,
    ArrowUpRight,
    Github,
    Sparkles,
    ShieldAlert,
    Send
} from "lucide-react";

export default function Contact() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [showModal, setShowModal] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedTerminal, setCopiedTerminal] = useState(false);

    const emailAddress = "joecodes004@gmail.com";
    const linkedInUrl = "https://www.linkedin.com/in/iamjothees";
    const whatsAppUrl = "https://wa.me/919442608662";
    const githubUrl = "https://github.com/iamjothees";

    const moveButton = () => {
        const x = Math.random() * 280 - 140; // Random X between -140 and 140
        const y = Math.random() * 200 - 100; // Random Y between -100 and 100
        setPosition({ x, y });
    };

    const handleCopyEmail = (isTerminal = false) => {
        navigator.clipboard.writeText(emailAddress);
        if (isTerminal) {
            setCopiedTerminal(true);
            setTimeout(() => setCopiedTerminal(false), 2200);
        } else {
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2200);
        }
    };

    const triggerPigeon = () => {
        const pigeon = document.createElement("div");
        pigeon.innerText = "🐦✉️";
        pigeon.style.position = "fixed";
        pigeon.style.left = "-100px";
        pigeon.style.top = `${Math.random() * (window.innerHeight - 120) + 40}px`;
        pigeon.style.fontSize = "3.2rem";
        pigeon.style.zIndex = "9999";
        pigeon.style.whiteSpace = "nowrap";
        pigeon.style.pointerEvents = "none";
        pigeon.style.transition = "left 2.2s linear";
        document.body.appendChild(pigeon);

        // Force reflow
        void pigeon.offsetWidth;

        pigeon.style.left = "110vw";

        setTimeout(() => {
            pigeon.remove();
            window.open("https://wa.me/919442608662?text=I%20sent%20a%20pigeon%20but%20it%20got%20lost...", "_blank");
        }, 2200);
    };

    return (
        <section id="contact" className="py-24 px-4 relative z-40 bg-[#0a0a0a] border-t border-gray-900">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-neon-blue/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/5 text-neon-blue text-xs font-medium mb-4"
                    >
                        <MessageSquare size={13} className="text-neon-blue" />
                        <span>SAY HELLO</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4"
                    >
                        Get in Touch
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-300 text-base max-w-xl mx-auto font-normal leading-relaxed"
                    >
                        Have an idea for a website, need a web app for your business, or just want to chat? Reach out through any channel below.
                    </motion.p>
                </div>

                {/* POLISHED CONTACT CARD */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-2xl bg-gray-950/90 border border-gray-800 shadow-[0_0_50px_rgba(0,0,0,0.7)] overflow-hidden backdrop-blur-xl mb-16"
                >
                    {/* Header Bar */}
                    <div className="px-5 py-3.5 bg-gray-900/80 border-b border-gray-800 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex gap-2">
                                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                            </div>
                            <span className="text-xs text-gray-300 font-medium truncate">
                                Direct Contact Channels
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                            <span className="text-[11px] font-medium text-neon-green">
                                Replies within a few hours
                            </span>
                        </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6 md:p-8 space-y-6">
                        {/* Friendly Intro */}
                        <div className="p-5 rounded-xl bg-black/40 border border-gray-800/80 space-y-2">
                            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
                                Let's build something people love using.
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed font-normal">
                                Whether you're planning a new website, an online store, an internal business tool, or just want to swap stories about cruising at <span className="text-yellow-400 font-bold">30 km/h</span> on a scooter—drop a line below.
                            </p>
                        </div>

                        {/* Direct Channel Action Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            {/* WhatsApp Channel */}
                            <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800 flex flex-col justify-between hover:border-neon-green/40 transition-colors">
                                <div>
                                    <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-1">
                                        <MessageSquare size={14} className="text-neon-green" />
                                        <span className="uppercase font-semibold">WhatsApp (Fastest)</span>
                                    </div>
                                    <p className="text-sm text-white font-medium truncate mb-3">
                                        +91 94426 08662
                                    </p>
                                </div>
                                <a
                                    href={whatsAppUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold bg-neon-green/20 border border-neon-green/40 text-neon-green hover:bg-neon-green/30 transition-all active:scale-95 cursor-pointer"
                                >
                                    <MessageSquare size={14} />
                                    <span>Chat on WhatsApp</span>
                                    <ArrowUpRight size={13} />
                                </a>
                            </div>

                            {/* Email Action Channel */}
                            <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800 flex flex-col justify-between hover:border-neon-pink/40 transition-colors">
                                <div>
                                    <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-1">
                                        <Mail size={14} className="text-neon-pink" />
                                        <span className="uppercase font-semibold">Email Directly</span>
                                    </div>
                                    <p className="text-sm text-white font-medium truncate mb-3">
                                        {emailAddress}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => handleCopyEmail(true)}
                                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-white/10 hover:bg-white/20 text-white transition-all active:scale-95 cursor-pointer"
                                    >
                                        {copiedTerminal ? (
                                            <>
                                                <Check size={13} className="text-neon-green" />
                                                <span className="text-neon-green">Copied! ✓</span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy size={13} />
                                                <span>Copy Email</span>
                                            </>
                                        )}
                                    </button>
                                    <a
                                        href={`mailto:${emailAddress}`}
                                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-neon-pink/20 border border-neon-pink/40 text-neon-pink hover:bg-neon-pink/30 transition-all active:scale-95"
                                    >
                                        <Send size={13} />
                                        <span>Open Mail</span>
                                    </a>
                                </div>
                            </div>

                            {/* LinkedIn Action Channel */}
                            <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800 flex flex-col justify-between hover:border-neon-blue/40 transition-colors">
                                <div>
                                    <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-1">
                                        <Linkedin size={14} className="text-neon-blue" />
                                        <span className="uppercase font-semibold">LinkedIn Profile</span>
                                    </div>
                                    <p className="text-sm text-white font-medium truncate mb-3">
                                        Jotheeswaran (Joe)
                                    </p>
                                </div>
                                <a
                                    href={linkedInUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold bg-neon-blue text-black hover:bg-white transition-all active:scale-95 shadow-[0_0_15px_rgba(0,255,255,0.2)]"
                                >
                                    <Linkedin size={14} />
                                    <span>Connect on LinkedIn</span>
                                    <ArrowUpRight size={13} />
                                </a>
                            </div>

                            {/* GitHub Channel */}
                            <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800 flex flex-col justify-between hover:border-gray-600 transition-colors">
                                <div>
                                    <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-1">
                                        <Github size={14} className="text-gray-300" />
                                        <span className="uppercase font-semibold">Code Repositories</span>
                                    </div>
                                    <p className="text-sm text-white font-medium truncate mb-3">
                                        github.com/iamjothees
                                    </p>
                                </div>
                                <a
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium bg-white/10 hover:bg-white/20 text-white transition-all active:scale-95"
                                >
                                    <Github size={14} />
                                    <span>View GitHub</span>
                                    <ArrowUpRight size={13} />
                                </a>
                            </div>
                        </div>

                        {/* Location footer note */}
                        <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-400 border-t border-gray-900">
                            <span>Location: Tamil Nadu, India (Comfortably Indoors)</span>
                            <span>Preferred: WhatsApp & Email</span>
                        </div>
                    </div>
                </motion.div>

                {/* FUN INTERACTIVE EXTRAS */}
                <div className="mt-8 text-center pt-8 border-t border-gray-900/80">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-800 bg-gray-900/50 text-gray-400 text-xs mb-4">
                        <Sparkles size={13} className="text-yellow-400" />
                        <span>JUST FOR FUN</span>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-2">
                        Try to Catch the Button! 🏃💨
                    </h4>
                    <p className="mb-6 text-gray-400 text-sm max-w-md mx-auto">
                        Test your mouse or finger reflexes against this evasive button, or fly a carrier pigeon straight to WhatsApp.
                    </p>

                    {/* Runaway Button */}
                    <div className="relative h-28 flex items-center justify-center overflow-visible">
                        <motion.button
                            animate={{ x: position.x, y: position.y }}
                            transition={{ type: "spring", stiffness: 350, damping: 22 }}
                            onHoverStart={moveButton}
                            onTouchStart={moveButton}
                            onClick={() => setShowModal(true)}
                            className="bg-red-600/90 text-white font-bold py-2.5 px-6 rounded-full shadow-[0_0_25px_rgba(239,68,68,0.4)] hover:bg-red-600 active:bg-red-700 cursor-pointer touch-manipulation text-xs tracking-wider"
                            whileTap={{ scale: 0.95 }}
                        >
                            Catch Me If You Can! 🏃
                        </motion.button>
                    </div>

                    {/* Pigeon Protocol Trigger */}
                    <div className="mt-4">
                        <button
                            onClick={triggerPigeon}
                            className="text-neon-blue underline hover:text-white transition-colors cursor-pointer bg-transparent border-none text-xs inline-flex items-center gap-1.5"
                        >
                            <span>🕊️ Send a Carrier Pigeon to WhatsApp</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* CAUGHT BUTTON MODAL */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[140] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
                        onClick={() => setShowModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, y: 40 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 40 }}
                            className="bg-gray-950 border-2 border-neon-pink rounded-2xl p-8 max-w-md w-full shadow-[0_0_60px_rgba(255,0,128,0.4)] relative overflow-hidden text-left"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Sparkles size={28} className="text-yellow-400 animate-bounce" />
                                <h3 className="text-xl font-bold text-white tracking-tight">
                                    🎉 Incredible Reflexes!
                                </h3>
                            </div>

                            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-normal">
                                How did you manage to click that?! You actually caught the runaway button. Since you won the challenge, here is the direct link to say hello:
                            </p>

                            <div className="space-y-3 mb-6">
                                <div className="bg-black/60 p-3.5 rounded-lg border border-red-500/30 flex items-center justify-between">
                                    <a
                                        href={`mailto:${emailAddress}`}
                                        className="text-red-400 hover:text-red-300 transition-colors font-mono text-xs truncate mr-2"
                                    >
                                        {emailAddress}
                                    </a>
                                    <button
                                        onClick={() => handleCopyEmail(false)}
                                        className="text-[10px] font-bold text-white bg-red-600 px-3 py-1 rounded hover:bg-red-500 transition-colors shrink-0 font-mono"
                                    >
                                        {copiedEmail ? "COPIED ✓" : "COPY"}
                                    </button>
                                </div>

                                <div className="bg-black/60 p-3.5 rounded-lg border border-red-500/30 flex items-center justify-between">
                                    <a
                                        href={whatsAppUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-400 hover:text-green-300 transition-colors font-mono text-xs truncate mr-2"
                                    >
                                        +91 94426 08662 (WhatsApp)
                                    </a>
                                    <a
                                        href={whatsAppUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[10px] font-bold text-black bg-green-500 px-3 py-1 rounded hover:bg-green-400 transition-colors shrink-0 font-mono"
                                    >
                                        CHAT ↗
                                    </a>
                                </div>
                            </div>

                            <button
                                onClick={() => setShowModal(false)}
                                className="w-full bg-white text-black font-mono font-bold py-2.5 rounded-lg hover:bg-gray-200 transition-colors uppercase tracking-widest text-xs"
                            >
                                CLOSE BREACH ALERT
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
