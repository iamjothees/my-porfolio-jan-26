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
    Zap,
    Smartphone,
    Copy,
    Check,
    Radio
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
        title: "Online Store Platform",
        tagline: "Fast checkout, instant cart updates, and hassle-free shopping.",
        category: "ONLINE STORE",
        icon: ShoppingCart,
        accentColor: "from-purple-500 to-indigo-500",
        badgeColor: "border-purple-500/40 text-purple-400 bg-purple-500/10",
        stack: [
            { name: "PHP & Laravel", role: "Store Engine & Secure Accounts" },
            { name: "React", role: "Instant Cart & Interactive Catalog" },
            { name: "MySQL", role: "Reliable Product & Order Database" },
            { name: "Tailwind CSS", role: "Mobile-Friendly Design" },
        ],
        description:
            "A complete online shopping platform designed for speed and ease of use. Shoppers can search products with instant results, add items to their cart with zero lag, and check out securely. The system automatically tracks stock levels in real time so customers never purchase an item that just went out of stock.",
        highlights: [
            {
                label: "Instant Shopping Cart",
                detail: "Add items and watch totals and taxes calculate right away without slow page reloads."
            },
            {
                label: "Safe & Secure Accounts",
                detail: "Keeps customer logins, passwords, and purchase history protected and easy to manage."
            },
            {
                label: "Smart Stock Tracking",
                detail: "Automatically updates item counts the second an order is placed, preventing overselling."
            },
            {
                label: "Mobile-First Shopping",
                detail: "Designed and tested to feel as smooth and natural on a phone as it does on a desktop."
            }
        ],
        sourceUrl: "https://github.com/iamjothees",
        liveUrl: "https://showcase.joecodes.in/#ecommerce",
        previewBadge: "Live on showcase.joecodes.in • 1-Click Access",
        demoType: "ecommerce"
    },
    {
        id: "food-ordering-app",
        title: "Food Ordering & Delivery App",
        tagline: "Order hot meals and track delivery straight to your doorstep.",
        category: "ORDERING APP",
        icon: Utensils,
        accentColor: "from-orange-500 to-red-500",
        badgeColor: "border-orange-500/40 text-orange-400 bg-orange-500/10",
        stack: [
            { name: "React", role: "Easy Mobile Menu & Checkout" },
            { name: "Laravel", role: "Kitchen Dispatch & Order Manager" },
            { name: "MySQL", role: "Live Order Records" },
            { name: "Tailwind CSS", role: "App-like Interface" },
        ],
        description:
            "Built for hungry customers and busy kitchens. Browse food menus with appetizing photos, customize meals (extra cheese, no onions, combo options), and watch your order update in real time from the chef's pan to the delivery scooter on the road.",
        highlights: [
            {
                label: "Live Order Status",
                detail: "Follow along as your meal moves from kitchen prep to rider pickup and arrival at your door."
            },
            {
                label: "Easy Meal Customizer",
                detail: "Choose portion sizes, toppings, and special cooking notes with simple, clear taps."
            },
            {
                label: "Rush-Hour Ready",
                detail: "Handles hundreds of orders during lunch or dinner rush without slowing down or duplicating tickets."
            },
            {
                label: "Fast Reordering",
                detail: "Saves delivery addresses and past orders so dinner can be reordered in two taps."
            }
        ],
        sourceUrl: "https://github.com/iamjothees",
        liveUrl: "https://showcase.joecodes.in/#food-ordering",
        previewBadge: "Live on showcase.joecodes.in • 1-Click Access",
        demoType: "food"
    },
    {
        id: "qwik-preview",
        title: "Qwik Preview",
        tagline: "1-Click tool to preview web projects on your real phone.",
        category: "PRODUCTIVITY TOOL",
        icon: Smartphone,
        accentColor: "from-cyan-400 to-blue-500",
        badgeColor: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
        stack: [
            { name: "Web Tool", role: "1-Click Phone Mirror" },
            { name: "Stay-Awake Mode", role: "Keeps Phone Display On" },
            { name: "Docker", role: "Easy 1-Command Setup" },
        ],
        description:
            "A tool I built to solve an everyday headache: testing how a new website looks on an actual phone. Instead of typing long numbers or scanning codes over and over, one click on the laptop screen immediately opens the page on a phone sitting on the desk.",
        highlights: [
            {
                label: "1-Click Phone Mirror",
                detail: "Click once on your computer and the page opens immediately on your phone."
            },
            {
                label: "Screen Stays Awake",
                detail: "Keeps your phone screen turned on while you work so it doesn't constantly lock or go dark."
            },
            {
                label: "Zero Manual Typing",
                detail: "Eliminates having to email links to yourself or type awkward IP numbers into mobile browsers."
            },
            {
                label: "Instant Live Updates",
                detail: "Change a color or layout on your laptop and see it on your phone in a flash."
            }
        ],
        sourceUrl: "https://github.com/iamjothees/qwik-mobile-preview",
        liveUrl: "https://qwik-preview.joecodes.in/",
        dockerHub: "iamjothees/qwik-mobile-preview:latest",
        previewBadge: "Live on qwik-preview.joecodes.in",
        demoType: "qwik-preview"
    }
];

export default function Projects() {
    const [bugs, setBugs] = useState([0, 1, 2, 3]);
    const [squashedCount, setSquashedCount] = useState(0);
    const [activeModalProject, setActiveModalProject] = useState(null);

    // Interactive Demo Sandbox State
    const [guestAuthToken, setGuestAuthToken] = useState(null);
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Mechanical Keyboard (Cherry MX)", qty: 1, price: 89 },
        { id: 2, name: "Desk Mat (Cyberpunk Edition)", qty: 2, price: 25 }
    ]);
    const [foodOrderStatus, setFoodOrderStatus] = useState(0); // 0: placed, 1: prep, 2: transit, 3: delivered

    // Qwik Preview Interactive Sandbox State
    const [qwikSampleUrl, setQwikSampleUrl] = useState("http://localhost:3000/checkout");
    const [qwikTranslatedUrl, setQwikTranslatedUrl] = useState("http://192.168.1.42:3000/checkout");
    const [qwikWakeLockActive, setQwikWakeLockActive] = useState(true);
    const [isPushingQwik, setIsPushingQwik] = useState(false);
    const [qwikCopiedDocker, setQwikCopiedDocker] = useState(false);
    const [qwikLogPackets, setQwikLogPackets] = useState([
        "[READY] Manifest V3 Extension toolbar beacon idle",
        "[STATUS] WebSocket relay established: wss://qwik-preview.joecodes.in/relay",
        "[DOCK] Screen Wake Lock API active (24/7 Desk Dock Stay-Awake: ON)"
    ]);

    const handleQwikPush = () => {
        setIsPushingQwik(true);
        const translated = qwikSampleUrl
            .replace("localhost", "192.168.1.42")
            .replace("127.0.0.1", "192.168.1.42");
        setQwikTranslatedUrl(translated);

        const newLog = [
            `[EXT-TRIGGER] Captured active tab: ${qwikSampleUrl}`,
            `[IP-RESOLVER] Auto-translated loopback: ${qwikSampleUrl} -> ${translated}`,
            `[RELAY-HUB] Dispatched WS packet over Cloudflare Tunnel (14ms ping)`,
            `[PWA-RECEIVER] Phone viewport mirrored & rendered successfully`
        ];

        setQwikLogPackets((prev) => [...newLog, ...prev.slice(0, 4)]);

        setTimeout(() => {
            setIsPushingQwik(false);
        }, 500);
    };

    const copyQwikDocker = () => {
        navigator.clipboard.writeText("docker pull iamjothees/qwik-mobile-preview:latest");
        setQwikCopiedDocker(true);
        setTimeout(() => setQwikCopiedDocker(false), 2000);
    };

    const squashBug = (id) => {
        setBugs(prev => prev.filter(b => b !== id));
        setSquashedCount(c => c + 1);
        if (Math.random() > 0.4) {
            setTimeout(() => {
                setBugs(prev => [...prev, (prev.length ? Math.max(...prev) : 0) + 1]);
            }, 2500);
        }
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
                        className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-neon-green/30 bg-neon-green/5 text-neon-green text-xs font-medium mb-4"
                    >
                        <Sparkles size={13} className="text-neon-green" />
                        <span>REAL THINGS I'VE BUILT</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4"
                    >
                        Featured Projects
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto"
                    >
                        Built for speed, ease of use, and everyday humans. Looking for more designs? Explore all 9 interactive templates and demos on{" "}
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
                        className="mt-6"
                    >
                        <a
                            href="https://showcase.joecodes.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neon-blue/40 bg-neon-blue/10 text-neon-blue hover:bg-neon-blue hover:text-black text-xs font-bold transition-all shadow-[0_0_20px_rgba(0,255,255,0.18)] active:scale-95 group cursor-pointer"
                        >
                            <Zap size={14} className="text-neon-blue group-hover:text-black fill-current" />
                            <span>Browse 9 Live Templates on showcase.joecodes.in</span>
                            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Friendly Bug Squasher Game */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-xs">
                        <button
                            onClick={() => setBugs(prev => [...prev, (prev.length ? Math.max(...prev) : 0) + 1])}
                            className="px-3 py-1.5 rounded-lg border border-yellow-500/30 bg-yellow-950/20 text-yellow-300 hover:bg-yellow-900/30 transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                            <span>Spawn a Bug 🐛</span>
                        </button>
                        <span className="px-3 py-1.5 rounded-lg border border-gray-800 bg-gray-900/50 text-gray-300 font-medium">
                            Bugs Squashed: <span className="text-neon-green font-bold">{squashedCount}</span>
                        </span>
                        <span className="px-3 py-1.5 rounded-lg border border-gray-800 bg-gray-900/50 text-gray-400">
                            Bugs on screen: <span className="text-neon-pink font-bold">{bugs.length}</span> (Click to squash!)
                        </span>
                    </div>
                </div>

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

                                    {/* Tools Used Pills */}
                                    <div className="mb-6">
                                        <p className="text-[11px] font-mono text-gray-500 uppercase tracking-wider mb-2">
                                            Tools Used
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.stack.map((item) => (
                                                <span
                                                    key={item.name}
                                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs bg-black/60 border border-white/10 text-gray-200"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                                                    <span className="font-semibold text-white">{item.name}</span>
                                                    <span className="text-gray-400 text-[11px]">({item.role})</span>
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Clear Description */}
                                    <p className="text-gray-300 text-sm leading-relaxed mb-6 font-normal">
                                        {project.description}
                                    </p>

                                    {/* Key Features Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                        {project.highlights.map((h) => (
                                            <div
                                                key={h.label}
                                                className="p-3 rounded-lg bg-black/40 border border-white/5 text-xs flex flex-col justify-between"
                                            >
                                                <div className="flex items-center gap-1.5 text-neon-blue font-semibold mb-1">
                                                    <CheckCircle2 size={13} className="shrink-0" />
                                                    <span>{h.label}</span>
                                                </div>
                                                <p className="text-gray-300 text-[11px] leading-relaxed">
                                                    {h.detail}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                                    <div className="flex flex-wrap items-center gap-3">
                                        {/* Try Live Demo button */}
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-neon-blue to-neon-pink text-black hover:opacity-90 transition-all shadow-[0_0_20px_rgba(0,255,255,0.25)] active:scale-95 cursor-pointer no-underline"
                                        >
                                            <Play size={13} className="fill-black" />
                                            <span>Try Live Demo</span>
                                            <ArrowUpRight size={13} className="text-black" />
                                        </a>

                                        {/* Interactive Walkthrough Sandbox Launcher */}
                                        <button
                                            onClick={() => setActiveModalProject(project)}
                                            title="Try interactive demo"
                                            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-medium bg-white/5 border border-white/10 text-gray-200 hover:text-white hover:border-white/30 transition-all active:scale-95 cursor-pointer"
                                        >
                                            <Sparkles size={13} className="text-neon-green" />
                                            <span>Quick Test</span>
                                        </button>

                                        {/* View Code button */}
                                        <a
                                            href={project.sourceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-medium text-gray-400 hover:text-white transition-colors"
                                        >
                                            <Github size={14} />
                                            <span>Code</span>
                                        </a>
                                    </div>

                                    {/* Sub-text Badge */}
                                    <div className="flex items-center gap-1.5 text-[11px] text-neon-green shrink-0">
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
                                {/* Banner with one-click guest test indicator */}
                                <div className="p-4 rounded-xl bg-neon-green/5 border border-neon-green/30 flex items-center justify-between">
                                    <div className="flex items-center gap-2.5">
                                        <ShieldCheck size={18} className="text-neon-green" />
                                        <div>
                                            <p className="text-xs font-bold text-neon-green">
                                                Instant Test Mode Enabled
                                            </p>
                                            <p className="text-xs text-gray-400">
                                                Test all interactive features without needing an account.
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={simulateGuestLogin}
                                        className="px-3 py-1.5 rounded-lg text-xs font-bold bg-neon-green text-black hover:bg-neon-green/90 transition-colors cursor-pointer"
                                    >
                                        {guestAuthToken ? "Logged in as Guest ✓" : "One-Click Guest Login"}
                                    </button>
                                </div>

                                {guestAuthToken && (
                                    <div className="bg-black/60 p-3 rounded-lg border border-gray-800 text-xs text-gray-300">
                                        <span className="text-neon-blue font-bold">Status: </span>
                                        Logged in as Guest Shopper (Ready to add items to cart)
                                    </div>
                                )}

                                {/* E-Commerce Walkthrough Sandbox */}
                                {activeModalProject.demoType === "ecommerce" && (
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-sm font-bold text-white flex items-center gap-2">
                                                <ShoppingCart size={16} className="text-neon-blue" />
                                                Live Shopping Cart Test
                                            </h4>
                                            <span className="text-xs text-gray-400">
                                                Total Items: {cartItems.reduce((acc, i) => acc + i.qty, 0)}
                                            </span>
                                        </div>

                                        <div className="space-y-2">
                                            {cartItems.map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="p-3 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-between text-xs"
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
                                                className="px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-xs text-white transition-colors cursor-pointer"
                                            >
                                                + Add Item (Mouse $45)
                                            </button>
                                            <button
                                                onClick={() => setCartItems([])}
                                                className="px-3 py-1.5 rounded-lg bg-red-950/40 border border-red-500/30 text-red-400 hover:bg-red-900/50 text-xs transition-colors cursor-pointer"
                                            >
                                                Clear Cart
                                            </button>
                                        </div>

                                        {/* Status */}
                                        <div className="mt-4 p-4 rounded-xl bg-black/60 border border-gray-800 space-y-2">
                                            <div className="text-xs text-gray-400 flex items-center justify-between">
                                                <span className="flex items-center gap-1.5 text-white font-bold">
                                                    <Box size={13} className="text-neon-blue" />
                                                    Store Engine Status
                                                </span>
                                                <span className="text-neon-green font-medium">All Services Running Smoothly</span>
                                            </div>
                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs pt-1">
                                                <div className="p-2 rounded bg-gray-900 border border-gray-800 text-center">
                                                    <span className="text-gray-400 block text-[11px]">Web Server</span>
                                                    <span className="text-neon-green font-medium">Active</span>
                                                </div>
                                                <div className="p-2 rounded bg-gray-900 border border-gray-800 text-center">
                                                    <span className="text-gray-400 block text-[11px]">Cart Engine</span>
                                                    <span className="text-neon-green font-medium">Fast</span>
                                                </div>
                                                <div className="p-2 rounded bg-gray-900 border border-gray-800 text-center">
                                                    <span className="text-gray-400 block text-[11px]">Database</span>
                                                    <span className="text-neon-green font-medium">Connected</span>
                                                </div>
                                                <div className="p-2 rounded bg-gray-900 border border-gray-800 text-center">
                                                    <span className="text-gray-400 block text-[11px]">Inventory</span>
                                                    <span className="text-neon-green font-medium">Synced</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Online Food Ordering Walkthrough Sandbox */}
                                {activeModalProject.demoType === "food" && (
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-sm font-bold text-white flex items-center gap-2">
                                                <Utensils size={16} className="text-orange-400" />
                                                Live Order Tracker Test
                                            </h4>
                                            <button
                                                onClick={advanceFoodOrder}
                                                className="px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition-colors cursor-pointer"
                                            >
                                                Next Order Step →
                                            </button>
                                        </div>

                                        <div className="p-4 rounded-xl bg-gray-900/80 border border-gray-800 space-y-3">
                                            <div className="flex items-center justify-between text-xs text-gray-400">
                                                <span>Order #7729 (Biryani & Chai)</span>
                                                <span className="text-orange-400 font-bold">Step {foodOrderStatus + 1} of 4</span>
                                            </div>

                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                {foodStages.map((stage, idx) => (
                                                    <div
                                                        key={stage.label}
                                                        className={`p-2.5 rounded-lg border text-xs transition-all ${
                                                            idx <= foodOrderStatus
                                                                ? "bg-orange-500/10 border-orange-500 text-orange-300"
                                                                : "bg-black/30 border-gray-800 text-gray-500"
                                                        }`}
                                                    >
                                                        <div className="font-bold text-[11px] mb-1">{stage.label}</div>
                                                        <div className="text-[10px] opacity-75">{stage.sub}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="p-3 rounded-lg bg-black/60 border border-gray-800 text-xs text-gray-300">
                                            <span className="text-neon-blue font-bold">Safety Guarantee: </span>
                                            Automatic order locks guarantee zero duplicate orders even during dinner peak rush.
                                        </div>
                                    </div>
                                )}

                                {/* Qwik Preview Walkthrough Sandbox */}
                                {activeModalProject.demoType === "qwik-preview" && (
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-sm font-bold text-white flex items-center gap-2">
                                                <Smartphone size={16} className="text-cyan-400" />
                                                1-Click Phone Mirror Test
                                            </h4>
                                            <button
                                                onClick={() => setQwikWakeLockActive(prev => !prev)}
                                                className={`px-2.5 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                                                    qwikWakeLockActive
                                                        ? "bg-neon-green/20 border border-neon-green/40 text-neon-green"
                                                        : "bg-red-950/40 border border-red-500/40 text-red-400"
                                                }`}
                                            >
                                                {qwikWakeLockActive ? "⚡ Screen Stay-Awake: ON" : "Screen Stay-Awake: OFF"}
                                            </button>
                                        </div>

                                        {/* Simulator Device Grid */}
                                        <div className="p-4 rounded-xl bg-gray-900/80 border border-gray-800 space-y-4">
                                            {/* Laptop URL input & push trigger */}
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-between text-xs text-gray-400">
                                                    <span className="flex items-center gap-1.5 text-white">
                                                        <Server size={13} className="text-cyan-400" />
                                                        Current page on your laptop:
                                                    </span>
                                                    <span className="text-cyan-400 text-[11px]">Instant 1-Click Sync</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="text"
                                                        value={qwikSampleUrl}
                                                        onChange={(e) => setQwikSampleUrl(e.target.value)}
                                                        className="flex-1 bg-black/70 border border-gray-700 rounded-lg px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-cyan-400"
                                                        placeholder="http://localhost:3000..."
                                                    />
                                                    <button
                                                        onClick={handleQwikPush}
                                                        disabled={isPushingQwik}
                                                        className="px-4 py-2 rounded-lg bg-cyan-400 hover:bg-white text-black font-bold text-xs transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] active:scale-95 shrink-0 cursor-pointer"
                                                    >
                                                        {isPushingQwik ? "Sending..." : "⚡ Push to Phone"}
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Translation result banner */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                                                <div className="p-2.5 rounded-lg bg-black/50 border border-gray-800">
                                                    <span className="text-gray-500 text-[10px] block uppercase font-bold">Laptop Address:</span>
                                                    <span className="text-purple-300 font-mono font-medium">{qwikSampleUrl}</span>
                                                </div>
                                                <div className="p-2.5 rounded-lg bg-cyan-950/20 border border-cyan-500/30">
                                                    <span className="text-cyan-400 text-[10px] block uppercase font-bold">Opens on Phone as:</span>
                                                    <span className="text-neon-green font-mono font-medium">{qwikTranslatedUrl}</span>
                                                </div>
                                            </div>

                                            {/* Real-time packet telemetry */}
                                            <div className="p-3 rounded-lg bg-black/70 border border-gray-800 text-[11px] font-mono space-y-1 text-gray-300">
                                                <div className="text-[10px] font-bold text-gray-500 flex items-center justify-between pb-1 border-b border-gray-800">
                                                    <span>LIVE SYNC ACTIVITY</span>
                                                    <span className="text-neon-green">ACTIVE</span>
                                                </div>
                                                {qwikLogPackets.slice(0, 4).map((log, i) => (
                                                    <div key={i} className="text-cyan-300 truncate">{log}</div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Docker & Ingress Topology */}
                                        <div className="p-4 rounded-xl bg-black/60 border border-gray-800 space-y-2">
                                            <div className="text-[11px] font-mono text-gray-400 flex items-center justify-between">
                                                <span className="flex items-center gap-1.5 text-white font-bold">
                                                    <Box size={13} className="text-cyan-400" />
                                                    Qwik Preview Service Topology
                                                </span>
                                                <button
                                                    onClick={copyQwikDocker}
                                                    className="inline-flex items-center gap-1 text-[10px] text-cyan-400 hover:text-white"
                                                >
                                                    {qwikCopiedDocker ? <Check size={11} /> : <Copy size={11} />}
                                                    <span>{qwikCopiedDocker ? "Copied" : "Copy Docker Pull"}</span>
                                                </button>
                                            </div>
                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] font-mono pt-1">
                                                <div className="p-2 rounded bg-gray-900 border border-gray-800 text-center">
                                                    <span className="text-gray-400 block">relay:hub</span>
                                                    <span className="text-neon-green font-bold">8080:ACTIVE</span>
                                                </div>
                                                <div className="p-2 rounded bg-gray-900 border border-gray-800 text-center">
                                                    <span className="text-gray-400 block">cloudflare:tunnel</span>
                                                    <span className="text-neon-green font-bold">SECURED</span>
                                                </div>
                                                <div className="p-2 rounded bg-gray-900 border border-gray-800 text-center">
                                                    <span className="text-gray-400 block">wake-lock:api</span>
                                                    <span className="text-neon-green font-bold">24/7 AWAKE</span>
                                                </div>
                                                <div className="p-2 rounded bg-gray-900 border border-gray-800 text-center">
                                                    <span className="text-gray-400 block">manifest:v3</span>
                                                    <span className="text-neon-green font-bold">HOTKEY READY</span>
                                                </div>
                                            </div>
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
                                            <span>
                                                {activeModalProject.id === "qwik-preview"
                                                    ? "Launch Live PWA ↗"
                                                    : "Launch on showcase.joecodes.in"}
                                            </span>
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
