import { motion } from "motion/react";
import {
    Github,
    ShieldCheck,
    ShoppingCart,
    Utensils,
    CheckCircle2,
    Sparkles,
    ArrowUpRight,
    Play,
    Zap,
    Smartphone
} from "lucide-react";
import BurgmanGame from "./BurgmanGame";

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
        liveUrl: null, // Hidden since no standalone live demo URL is deployed yet
        previewBadge: "GitHub Repo Available"
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
        liveUrl: null, // Hidden since no standalone live demo URL is deployed yet
        previewBadge: "GitHub Repo Available"
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
        liveUrl: "https://qwik-preview.joecodes.in/", // Real live demo!
        previewBadge: "Live Web Tool Available"
    }
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-24 px-4 relative min-h-screen overflow-hidden border-t border-gray-900 bg-[#0a0a0a]"
        >
            {/* Background subtle grid */}
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
                <div className="text-center max-w-3xl mx-auto mb-10">
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
                </div>

                {/* Option C: The 30 km/h Burgman Cruiser Retro Mini-Game */}
                <BurgmanGame />

                {/* Projects Grid: Clean, Responsive Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
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
                                        {/* Try Live Demo button (Only rendered if a real live demo URL exists) */}
                                        {project.liveUrl && (
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
                                        )}

                                        {/* View Code button */}
                                        {project.sourceUrl && (
                                            <a
                                                href={project.sourceUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-medium text-gray-300 hover:text-white bg-white/5 border border-white/10 hover:border-white/30 transition-all active:scale-95"
                                            >
                                                <Github size={14} />
                                                <span>View Code</span>
                                            </a>
                                        )}
                                    </div>

                                    {/* Sub-text Badge */}
                                    {project.previewBadge && (
                                        <div className="flex items-center gap-1.5 text-[11px] text-neon-green shrink-0">
                                            <ShieldCheck size={14} className="shrink-0" />
                                            <span>{project.previewBadge}</span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
