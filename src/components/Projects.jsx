import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    Github,
    ExternalLink,
    ShieldCheck,
    Cpu,
    Database,
    ShoppingCart,
    Utensils,
    CheckCircle2,
    Terminal,
    X,
    Sparkles,
    ArrowUpRight,
    Server,
    Box,
    Layers,
    Play,
    Zap
} from "lucide-react";

const Bug = ({ id, onSquash }) => {
    const [position, setPosition] = useState(() => ({
        x: 8 + (id * 19) % 78,
        y: 12 + (id * 23) % 72
    }));

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition(prev => ({
                x: Math.min(88, Math.max(5, prev.x + (Math.random() - 0.5) * 16)),
                y: Math.min(88, Math.max(5, prev.y + (Math.random() - 0.5) * 16))
            }));
        }, 1200);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="absolute cursor-pointer text-2xl z-40 select-none hover:scale-125 transition-transform"
            animate={{ left: `${position.x}%`, top: `${position.y}%` }}
            transition={{ duration: 1.2, ease: "linear" }}
            onClick={(e) => {
                e.stopPropagation();
                onSquash(id);
            }}
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.8 }}
            title="Click to squash this bug!"
        >
            🐛
        </motion.div>
    );
};

const projectsData = [
    {
        id: "ecommerce-system",
        title: "E-Commerce System",
        tagline: "High-Throughput Storefront & Containerized Commerce Engine",
        category: "FULL-STACK ARCHITECTURE",
        icon: ShoppingCart,
        accentColor: "from-purple-500 to-indigo-500",
        badgeColor: "border-purple-500/40 text-purple-400 bg-purple-500/10",
        stack: [
            { name: "PHP 8.2", role: "Backend Core" },
            { name: "Laravel", role: "API & Multi-Guard Auth" },
            { name: "React", role: "Custom Cart State & UI" },
            { name: "MySQL", role: "ACID Relational Schemas" },
            { name: "Docker", role: "Containerized Infra" },
        ],
        description:
            "Engineered an end-to-end commerce architecture with reactive custom cart states, bulletproof multi-guard authentication flows, and relational inventory schemas in MySQL. Fully containerized with Docker multi-stage builds for zero-headache local-to-production parity. Built to survive flash traffic without screaming.",
        highlights: [
            {
                label: "Custom Cart States",
                detail: "Optimistic UI synchronization, client-side persistence, and automated guest-to-user cart reconciliation."
            },
            {
                label: "Secure Auth Flows",
                detail: "Multi-guard session isolation with Laravel Sanctum, customer/merchant RBAC, and CSRF-shielded checkout."
            },
            {
                label: "Docker Infrastructure",
                detail: "Multi-container compose topology orchestrating PHP-FPM, Nginx, MySQL 8.0, and Redis cache workers."
            },
            {
                label: "ACID Relational Schemas",
                detail: "Atomic transactions preventing inventory overselling, composite indexing, and sub-10ms catalog queries."
            }
        ],
        sourceUrl: "https://github.com/iamjothees",
        liveUrl: "https://showcase.joecodes.in/#ecommerce",
        previewBadge: "Live on showcase.joecodes.in • One-click access",
        demoType: "ecommerce"
    },
    {
        id: "food-ordering-app",
        title: "Online Food Ordering Application",
        tagline: "Real-Time Kitchen Dispatch & Concurrency-Safe Order Pipeline",
        category: "REAL-TIME MVP",
        icon: Utensils,
        accentColor: "from-orange-500 to-red-500",
        badgeColor: "border-orange-500/40 text-orange-400 bg-orange-500/10",
        stack: [
            { name: "React", role: "Mobile-First Ordering UI" },
            { name: "Laravel", role: "Order Dispatch Engine" },
            { name: "PHP 8.2", role: "Queue & Job Processing" },
            { name: "MySQL", role: "Transactional Integrity" },
            { name: "Tailwind CSS", role: "Fluid Responsive Design" },
        ],
        description:
            "Engineered for when hunger meets impatience. Features sub-second cart recalculations, live kitchen-to-doorstep order pipeline state tracking, and resilient MySQL transactional queries so double-ordered biryanis are impossible (unless intentional).",
        highlights: [
            {
                label: "Real-Time Dispatch Pipeline",
                detail: "State machine orchestrating kitchen prep, courier assignment, and live delivery updates without polling lag."
            },
            {
                label: "Pessimistic Locking & Safety",
                detail: "Row-level database locks protecting limited-inventory menu items during peak dinner rush hours."
            },
            {
                label: "Adaptive Menu Discovery",
                detail: "Sub-millisecond instant search across extensive categorizations, modifier addons, and dietary tags."
            },
            {
                label: "Frictionless Onboarding",
                detail: "Single-tap guest checkout with cached delivery coordinates, instant OTP fallback, and order tracking."
            }
        ],
        sourceUrl: "https://github.com/iamjothees",
        liveUrl: "https://showcase.joecodes.in/#food-ordering",
        previewBadge: "Live on showcase.joecodes.in • One-click access",
        demoType: "food"
    }
];

export default function Projects() {
    const [bugs, setBugs] = useState([0, 1, 2, 3]);
    const [squashedCount, setSquashedCount] = useState(0);
    const [hackerMode, setHackerMode] = useState(false);
    const [matrixRainText, setMatrixRainText] = useState("");
    const [activeModalProject, setActiveModalProject] = useState(null);

    // Interactive Demo Sandbox State
    const [guestAuthToken, setGuestAuthToken] = useState(null);
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Mechanical Keyboard (Cherry MX)", qty: 1, price: 89 },
        { id: 2, name: "Desk Mat (Cyberpunk Edition)", qty: 2, price: 25 }
    ]);
    const [foodOrderStatus, setFoodOrderStatus] = useState(0); // 0: placed, 1: prep, 2: transit, 3: delivered

    const squashBug = (id) => {
        setBugs(prev => prev.filter(b => b !== id));
        setSquashedCount(c => c + 1);
        if (Math.random() > 0.4) {
            setTimeout(() => {
                setBugs(prev => [...prev, (prev.length ? Math.max(...prev) : 0) + 1]);
            }, 2500);
        }
    };

    const triggerHackerMode = () => {
        const randomHex = Array.from({ length: 450 }, () =>
            Math.random().toString(36).substring(2, 8)
        ).join(" ");
        setMatrixRainText(randomHex);
        setHackerMode(true);
        setTimeout(() => setHackerMode(false), 3200);
    };

    const simulateGuestLogin = () => {
        const mockToken = "sanctum_" + Math.random().toString(36).substring(2) + Date.now().toString(36);
        setGuestAuthToken(mockToken);
    };

    const addCartItem = (name, price) => {
        setCartItems(prev => [
            ...prev,
            { id: Date.now(), name, qty: 1, price }
        ]);
    };

    const advanceFoodOrder = () => {
        setFoodOrderStatus(prev => (prev + 1) % 4);
    };

    const foodStages = [
        { label: "Order Received", sub: "Ticket sent to kitchen POS" },
        { label: "Wok & Tandoor Active", sub: "Chefs preparing your meal" },
        { label: "Burgman Courier En Route", sub: "Cruising smoothly at 30km/h" },
        { label: "Delivered & Consumed", sub: "Zero packet loss detected" }
    ];

    return (
        <section
            id="projects"
            className="py-24 px-4 relative min-h-screen overflow-hidden border-t border-gray-900 bg-[#0a0a0a]"
        >
            {/* Background cyber grid */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, #0a0a0a 1px)",
                    backgroundSize: "40px 40px",
                    backgroundPosition: "0 0, 20px 20px"
                }}
            />

            {/* Glowing Accent Orbs */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-blue/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-pink/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-green/30 bg-neon-green/5 text-neon-green text-xs font-mono mb-4"
                    >
                        <Sparkles size={13} className="text-neon-green" />
                        <span>PRODUCTION SHIPPED ARTIFACTS</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4"
                    >
                        Shipped Code & MVPs
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-300 font-mono text-sm md:text-base leading-relaxed max-w-3xl mx-auto"
                    >
                        I build systems that run in production. Explore the full high-density interactive vault of live SaaS platforms, ERP systems, and custom web builds over at{" "}
                        <a
                            href="https://showcase.joecodes.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neon-blue font-bold underline hover:text-white transition-colors inline-flex items-center gap-1"
                        >
                            <span>showcase.joecodes.in</span>
                            <ArrowUpRight size={14} className="inline" />
                        </a>.
                    </motion.p>

                    {/* High-Visibility Showcase Bridge Action Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-5"
                    >
                        <a
                            href="https://showcase.joecodes.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neon-blue/40 bg-neon-blue/10 text-neon-blue hover:bg-neon-blue hover:text-black font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(0,255,255,0.2)] active:scale-95 group cursor-pointer"
                        >
                            <Zap size={14} className="text-neon-blue group-hover:text-black fill-current" />
                            <span>Explore Full Showcase Directory (showcase.joecodes.in)</span>
                            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Interactive Telemetry Bar */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-xs font-mono">
                        <button
                            onClick={triggerHackerMode}
                            className="px-3 py-1.5 rounded-lg border border-red-500/40 bg-red-950/20 text-red-400 hover:bg-red-900/30 hover:border-red-500 transition-colors flex items-center gap-1.5"
                        >
                            <Terminal size={14} />
                            <span>{hackerMode ? "DIAGNOSTICS_RUNNING..." : "AUDIT SYSTEM LOGS"}</span>
                        </button>
                        <span className="px-3 py-1.5 rounded-lg border border-gray-800 bg-gray-900/50 text-gray-400">
                            BUGS SQUASHED: <span className="text-neon-green font-bold">{squashedCount}</span>
                        </span>
                        <span className="px-3 py-1.5 rounded-lg border border-gray-800 bg-gray-900/50 text-gray-400">
                            BUGS IN THE WILD: <span className="text-neon-pink font-bold">{bugs.length}</span>
                        </span>
                    </div>
                </div>

                {/* Matrix Rain Diagnostics Overlay */}
                <AnimatePresence>
                    {hackerMode && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="relative mb-12 bg-black/90 border border-green-500/50 rounded-xl p-6 overflow-hidden shadow-[0_0_40px_rgba(34,197,94,0.25)]"
                        >
                            <div className="flex items-center justify-between pb-3 border-b border-green-500/20 mb-3 text-xs font-mono text-green-400">
                                <span>KERNEL MEMORY & AUTH STREAM // DECRYPTED</span>
                                <span>STATUS: 200 OK</span>
                            </div>
                            <p className="text-green-400 font-mono text-xs opacity-80 break-all leading-5">
                                {matrixRainText}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Projects Grid: Clean, Responsive Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projectsData.map((project) => {
                        const Icon = project.icon;
                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.3 }}
                                className="group relative rounded-2xl bg-gray-900/40 border border-white/10 hover:border-white/25 backdrop-blur-xl p-8 flex flex-col justify-between overflow-hidden shadow-xl"
                            >
                                {/* Top Glow Accent Line */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accentColor}`} />

                                <div>
                                    {/* Card Header & Badges */}
                                    <div className="flex items-start justify-between gap-4 mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white group-hover:border-white/30 transition-colors">
                                                <Icon size={24} className="text-neon-blue" />
                                            </div>
                                            <div>
                                                <span className={`text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded border ${project.badgeColor}`}>
                                                    {project.category}
                                                </span>
                                                <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                                                    {project.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Architectural Stack Pills */}
                                    <div className="mb-6">
                                        <p className="text-[11px] font-mono text-gray-500 uppercase tracking-wider mb-2">
                                            Architectural Stack
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.stack.map((item) => (
                                                <span
                                                    key={item.name}
                                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-black/60 border border-white/10 text-gray-200"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                                                    <span className="font-semibold text-white">{item.name}</span>
                                                    <span className="text-gray-500 text-[10px]">({item.role})</span>
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Punchy Description */}
                                    <p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans">
                                        {project.description}
                                    </p>

                                    {/* Architecture Highlights Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                        {project.highlights.map((h) => (
                                            <div
                                                key={h.label}
                                                className="p-3 rounded-lg bg-black/40 border border-white/5 text-xs flex flex-col justify-between"
                                            >
                                                <div className="flex items-center gap-1.5 font-mono text-neon-blue font-semibold mb-1">
                                                    <CheckCircle2 size={13} className="shrink-0" />
                                                    <span>{h.label}</span>
                                                </div>
                                                <p className="text-gray-400 text-[11px] leading-relaxed">
                                                    {h.detail}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Dual Action Buttons & Sub-text Badge */}
                                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                                    <div className="flex flex-wrap items-center gap-3">
                                        {/* Explore Source Code button */}
                                        <a
                                            href={project.sourceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-white/30 transition-all active:scale-95"
                                        >
                                            <Github size={15} />
                                            <span>Explore Source Code</span>
                                            <ArrowUpRight size={13} className="text-gray-400" />
                                        </a>

                                        {/* Launch Live Preview button */}
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-gradient-to-r from-neon-blue to-neon-pink text-black hover:opacity-90 transition-all shadow-[0_0_20px_rgba(0,255,255,0.25)] active:scale-95 cursor-pointer no-underline"
                                        >
                                            <Play size={14} className="fill-black" />
                                            <span>Launch Live Preview</span>
                                            <ArrowUpRight size={13} className="text-black" />
                                        </a>

                                        {/* Interactive Walkthrough Sandbox Launcher */}
                                        <button
                                            onClick={() => setActiveModalProject(project)}
                                            title="Inspect Sandbox & Telemetry"
                                            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-mono font-medium bg-black/40 border border-white/10 text-gray-400 hover:text-white hover:border-white/25 transition-all active:scale-95 cursor-pointer"
                                        >
                                            <Terminal size={13} className="text-neon-blue" />
                                            <span>Sandbox</span>
                                        </button>
                                    </div>

                                    {/* Sub-text Badge */}
                                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-neon-green shrink-0">
                                        <ShieldCheck size={14} className="shrink-0" />
                                        <span>{project.previewBadge}</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Squashable Bugs crawling around the projects section */}
            {bugs.map((id) => (
                <Bug key={id} id={id} onSquash={squashBug} />
            ))}

            {/* High-Quality Embedded Walkthrough Preview Tool Modal */}
            <AnimatePresence>
                {activeModalProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
                        onClick={() => setActiveModalProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 30 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 30 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-gray-950 border border-gray-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(0,0,0,0.8)] relative text-left"
                        >
                            {/* Window Header */}
                            <div className="sticky top-0 bg-gray-900/90 backdrop-blur-md p-4 border-b border-gray-800 flex items-center justify-between z-10">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    </div>
                                    <span className="text-xs font-mono text-gray-300 font-semibold truncate">
                                        preview-sandbox // {activeModalProject.title}
                                    </span>
                                </div>
                                <button
                                    onClick={() => setActiveModalProject(null)}
                                    className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            <div className="p-6 space-y-6">
                                {/* Banner with one-click guest login indicator */}
                                <div className="p-4 rounded-xl bg-neon-green/5 border border-neon-green/30 flex items-center justify-between">
                                    <div className="flex items-center gap-2.5">
                                        <ShieldCheck size={18} className="text-neon-green" />
                                        <div>
                                            <p className="text-xs font-mono font-bold text-neon-green">
                                                One-click guest login enabled
                                            </p>
                                            <p className="text-[11px] text-gray-400 font-mono">
                                                Zero-friction testing token injected into sandbox state.
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={simulateGuestLogin}
                                        className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-neon-green text-black hover:bg-neon-green/90 transition-colors"
                                    >
                                        {guestAuthToken ? "Token Refreshed ✓" : "Generate Guest Token"}
                                    </button>
                                </div>

                                {guestAuthToken && (
                                    <div className="bg-black/60 p-3 rounded-lg border border-gray-800 text-[11px] font-mono break-all text-gray-300">
                                        <span className="text-neon-blue font-bold">SESSION_TOKEN: </span>
                                        {guestAuthToken}
                                    </div>
                                )}

                                {/* E-Commerce Walkthrough Sandbox */}
                                {activeModalProject.demoType === "ecommerce" && (
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-sm font-mono font-bold text-white flex items-center gap-2">
                                                <ShoppingCart size={16} className="text-neon-blue" />
                                                Reactive Cart State Tester
                                            </h4>
                                            <span className="text-xs font-mono text-gray-400">
                                                Total Items: {cartItems.reduce((acc, i) => acc + i.qty, 0)}
                                            </span>
                                        </div>

                                        <div className="space-y-2">
                                            {cartItems.map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="p-3 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-between text-xs font-mono"
                                                >
                                                    <span className="text-white font-medium">{item.name}</span>
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-gray-400">x{item.qty}</span>
                                                        <span className="text-neon-green font-bold">${item.price * item.qty}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            <button
                                                onClick={() => addCartItem("Ergonomic Vertical Mouse", 45)}
                                                className="px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-xs font-mono text-white transition-colors"
                                            >
                                                + Dispatch Cart Event (Add Mouse $45)
                                            </button>
                                            <button
                                                onClick={() => setCartItems([])}
                                                className="px-3 py-1.5 rounded-lg bg-red-950/40 border border-red-500/30 text-red-400 hover:bg-red-900/50 text-xs font-mono transition-colors"
                                            >
                                                Flush Cart State
                                            </button>
                                        </div>

                                        {/* Docker Topology Health Status */}
                                        <div className="mt-4 p-4 rounded-xl bg-black/60 border border-gray-800 space-y-2">
                                            <div className="text-[11px] font-mono text-gray-400 flex items-center justify-between">
                                                <span className="flex items-center gap-1.5 text-white font-bold">
                                                    <Box size={13} className="text-neon-blue" />
                                                    Docker Compose Container Health
                                                </span>
                                                <span className="text-neon-green">ALL_CONTAINERS_HEALTHY</span>
                                            </div>
                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] font-mono pt-1">
                                                <div className="p-2 rounded bg-gray-900 border border-gray-800 text-center">
                                                    <span className="text-gray-400 block">nginx:alpine</span>
                                                    <span className="text-neon-green font-bold">80:ACTIVE</span>
                                                </div>
                                                <div className="p-2 rounded bg-gray-900 border border-gray-800 text-center">
                                                    <span className="text-gray-400 block">php-fpm-8.2</span>
                                                    <span className="text-neon-green font-bold">UP // OPCACHE</span>
                                                </div>
                                                <div className="p-2 rounded bg-gray-900 border border-gray-800 text-center">
                                                    <span className="text-gray-400 block">mysql:8.0</span>
                                                    <span className="text-neon-green font-bold">HEALTHY</span>
                                                </div>
                                                <div className="p-2 rounded bg-gray-900 border border-gray-800 text-center">
                                                    <span className="text-gray-400 block">redis:7</span>
                                                    <span className="text-neon-green font-bold">READY</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Online Food Ordering Walkthrough Sandbox */}
                                {activeModalProject.demoType === "food" && (
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-sm font-mono font-bold text-white flex items-center gap-2">
                                                <Utensils size={16} className="text-orange-400" />
                                                Real-Time Dispatch Stepper Simulation
                                            </h4>
                                            <button
                                                onClick={advanceFoodOrder}
                                                className="px-3 py-1 rounded bg-orange-600 hover:bg-orange-500 text-white text-xs font-mono font-bold transition-colors"
                                            >
                                                Advance Order Pipeline →
                                            </button>
                                        </div>

                                        <div className="p-4 rounded-xl bg-gray-900/80 border border-gray-800 space-y-3">
                                            <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                                                <span>ORDER ID: #ORD-7729-INDOOR</span>
                                                <span className="text-orange-400 font-bold">STAGE {foodOrderStatus + 1} OF 4</span>
                                            </div>

                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                {foodStages.map((stage, idx) => (
                                                    <div
                                                        key={stage.label}
                                                        className={`p-2.5 rounded-lg border text-xs font-mono transition-all ${
                                                            idx <= foodOrderStatus
                                                                ? "bg-orange-500/10 border-orange-500 text-orange-300"
                                                                : "bg-black/30 border-gray-800 text-gray-600"
                                                        }`}
                                                    >
                                                        <div className="font-bold text-[11px] mb-1">{stage.label}</div>
                                                        <div className="text-[10px] opacity-75">{stage.sub}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="p-3 rounded-lg bg-black/60 border border-gray-800 text-xs font-mono text-gray-300">
                                            <span className="text-neon-blue font-bold">ACID CONCURRENCY GUARD: </span>
                                            MySQL row-level locks engaged on inventory schema. Zero duplicate orders permitted.
                                        </div>
                                    </div>
                                )}

                                {/* Modal Actions */}
                                <div className="pt-4 border-t border-gray-800 flex flex-wrap items-center justify-between gap-3">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <a
                                            href={activeModalProject.sourceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold bg-white/10 hover:bg-white/20 text-white transition-colors"
                                        >
                                            <Github size={15} />
                                            <span>View Code on GitHub</span>
                                            <ExternalLink size={13} />
                                        </a>
                                        <a
                                            href={activeModalProject.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold bg-gradient-to-r from-neon-blue to-neon-pink text-black hover:opacity-90 transition-colors"
                                        >
                                            <Play size={14} className="fill-black" />
                                            <span>Launch on showcase.joecodes.in</span>
                                            <ExternalLink size={13} />
                                        </a>
                                    </div>
                                    <button
                                        onClick={() => setActiveModalProject(null)}
                                        className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-white text-black hover:bg-gray-200 transition-colors"
                                    >
                                        Dismiss Walkthrough
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
