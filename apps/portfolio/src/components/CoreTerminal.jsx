import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    Terminal as TerminalIcon,
    X,
    Minus,
    Maximize2,
    ExternalLink,
    Play,
    Github,
    Box,
    Layers,
    Sparkles,
    Laptop,
    Smartphone,
    RefreshCw,
    Check,
    Copy,
    ArrowUpRight
} from "lucide-react";

export default function CoreTerminal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const [activeTab, setActiveTab] = useState("cli"); // 'cli' | 'desktop' | 'preview'
    const [inputVal, setInputVal] = useState("");
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyPointer, setHistoryPointer] = useState(-1);
    const [copiedDocker, setCopiedDocker] = useState(false);
    const terminalEndRef = useRef(null);
    const inputRef = useRef(null);
    const executeCommandRef = useRef(null);

    // Initial Welcome Message
    const [outputs, setOutputs] = useState([
        {
            type: "system",
            text: `========================================================================
 JOECODES RETRO OS // CORE TERMINAL (KERNEL v2026.1)
 Host: joecodes.in • Target: High-Velocity DevEx & Microservices
 Type 'help' or click quick command chips below.
 Try running: 'qwik-preview' to inspect the 1-click LAN mobile testing tool.
========================================================================`
        }
    ]);

    // Handle global custom event and hotkeys
    useEffect(() => {
        const handleCustomOpen = (e) => {
            setIsOpen(true);
            if (e.detail?.command) {
                executeCommandRef.current?.(e.detail.command);
            }
        };

        const handleKeyDown = (e) => {
            // Toggle terminal with `~` or Cmd+K / Ctrl+K
            if (e.key === "`" && !e.shiftKey && !e.metaKey && !e.ctrlKey) {
                // If user is not typing in a real form input
                const tag = document.activeElement?.tagName?.toLowerCase();
                if (tag !== "input" && tag !== "textarea") {
                    e.preventDefault();
                    setIsOpen((prev) => !prev);
                }
            } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            } else if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener("open-core-terminal", handleCustomOpen);
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("open-core-terminal", handleCustomOpen);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    // Auto scroll to bottom of terminal output
    useEffect(() => {
        if (isOpen && activeTab === "cli") {
            terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
            inputRef.current?.focus();
        }
    }, [outputs, isOpen, activeTab]);

    const handleCopyDocker = () => {
        navigator.clipboard.writeText("docker pull iamjothees/qwik-mobile-preview:latest");
        setCopiedDocker(true);
        setTimeout(() => setCopiedDocker(false), 2000);
    };

    const executeCommand = (cmdRaw) => {
        const cmd = cmdRaw.trim().toLowerCase();
        if (!cmd) return;

        setCommandHistory((prev) => [cmdRaw, ...prev]);
        setHistoryPointer(-1);

        const newOutput = {
            command: cmdRaw,
            timestamp: new Date().toLocaleTimeString(),
        };

        if (cmd === "clear" || cmd === "cls") {
            setOutputs([]);
            setInputVal("");
            return;
        }

        if (cmd === "help") {
            newOutput.content = (
                <div className="space-y-2 text-gray-300 font-mono text-xs">
                    <p className="text-neon-green font-bold">AVAILABLE EXECUTABLE COMMANDS:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        <div><span className="text-neon-blue font-bold">qwik-preview</span> — Inspect Qwik Preview specs, architecture & demo</div>
                        <div><span className="text-neon-blue font-bold">tools</span> — List developer utility tooling suite</div>
                        <div><span className="text-neon-blue font-bold">story</span> — Engineering highlight: The ~1-hour origin story</div>
                        <div><span className="text-neon-blue font-bold">architecture</span> — Dual-system topology breakdown (MV3 + Docker + PWA)</div>
                        <div><span className="text-neon-blue font-bold">docker</span> — Docker Hub pull & container instructions</div>
                        <div><span className="text-neon-blue font-bold">open</span> — Launch https://qwik-preview.joecodes.in/ directly</div>
                        <div><span className="text-neon-blue font-bold">projects</span> — List all shipped systems on joecodes.in</div>
                        <div><span className="text-neon-blue font-bold">whoami</span> — Identity, Burgman specs & indoor telemetry</div>
                        <div><span className="text-neon-blue font-bold">desktop</span> — Switch to Retro OS windowed apps view</div>
                        <div><span className="text-neon-blue font-bold">clear</span> — Wipe terminal output history</div>
                    </div>
                </div>
            );
        } else if (cmd === "qwik-preview" || cmd === "qwik" || cmd === "preview") {
            newOutput.content = (
                <div className="space-y-4 my-2 p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/40 shadow-[0_0_25px_rgba(0,240,255,0.15)] text-xs font-mono">
                    <pre className="text-cyan-400 font-bold text-[10px] sm:text-xs leading-none overflow-x-auto">
{`   ___          _ _      ___              _               
  / _ \\__      _(_) | __ | _ \\_ _ _____ __(_)_____ __ __ __
 | (_) \\ \\ /\\ / / | |/ / |  _/ '_/ -_) V / | -_) V  V /
  \\__\\_\\\\_/\\_/|_|_|_|\\_\\ |_| |_| \\___|\\_/|_|\\___|\\_/\\_/ `}
                    </pre>

                    <div>
                        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold text-[10px] uppercase tracking-wider mb-1">
                            TOOL ↗ • SAAS & DEVEX
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-white">
                            QWIK PREVIEW — 1-Click LAN Mobile Preview for Developers
                        </h4>
                        <p className="text-gray-300 mt-1 leading-relaxed">
                            Zero-friction mobile testing for developers. Instant 1-click push from laptop to phone over LAN with 24/7 Stay-Awake desk mode, real-time WebSocket relay, and automatic localhost IP translation.
                        </p>
                    </div>

                    {/* Architecture diagram */}
                    <div className="p-3 rounded-lg bg-black/60 border border-cyan-500/20 space-y-2">
                        <div className="text-[11px] font-bold text-cyan-400">DUAL ARCHITECTURE TOPOLOGY:</div>
                        <div className="text-[11px] text-gray-300 leading-relaxed space-y-1">
                            <div><span className="text-cyan-400 font-bold">[1] Chrome Ext (Manifest V3):</span> 1-click toolbar push & hotkey triggers. Auto-translates localhost to LAN subnet.</div>
                            <div><span className="text-cyan-400 font-bold">[2] Dockerized Relay Hub:</span> Node.js WebSocket engine on homelab, tunnelled via Cloudflare to a secured domain.</div>
                            <div><span className="text-cyan-400 font-bold">[3] Mobile PWA Shell:</span> Screen Wake Lock API + silent audio keep-alive, staying permanently awake on a desk dock 24/7.</div>
                        </div>
                    </div>

                    {/* Tech stack badges */}
                    <div>
                        <span className="text-gray-400 text-[10px] uppercase font-bold block mb-1">TECH STACK:</span>
                        <div className="flex flex-wrap gap-1.5">
                            {["Docker", "Manifest V3", "WebSockets", "PWA", "Cloudflare Tunnel", "Node.js", "Screen Wake Lock API"].map((t) => (
                                <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-200 text-[10px]">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-2 flex flex-wrap items-center gap-2.5 border-t border-cyan-500/20">
                        <a
                            href="https://qwik-preview.joecodes.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-400 text-black font-bold hover:bg-white transition-all shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                        >
                            <ExternalLink size={13} />
                            <span>Open Live PWA ↗</span>
                        </a>

                        <button
                            onClick={() => setActiveTab("preview")}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-400/50 text-cyan-300 hover:bg-cyan-900/50 transition-colors"
                        >
                            <Play size={12} className="fill-cyan-400 text-cyan-400" />
                            <span>Mount In-Terminal Preview ⚡</span>
                        </button>

                        <a
                            href="https://github.com/iamjothees/qwik-mobile-preview"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                        >
                            <Github size={13} />
                            <span>GitHub Repo</span>
                        </a>

                        <button
                            onClick={handleCopyDocker}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 border border-gray-700 hover:border-gray-500 text-gray-300 transition-colors"
                        >
                            {copiedDocker ? <Check size={12} className="text-neon-green" /> : <Copy size={12} />}
                            <span>{copiedDocker ? "Copied Docker Tag ✓" : "docker pull iamjothees/qwik-mobile-preview:latest"}</span>
                        </button>
                    </div>
                </div>
            );
        } else if (cmd === "tools") {
            newOutput.content = (
                <div className="space-y-3 text-xs font-mono">
                    <p className="text-neon-green font-bold">DEVELOPER TOOLS & INFRASTRUCTURE BY JOE:</p>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-cyan-400 font-bold">⚡ Qwik Preview (qwik-mobile-preview)</span>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">FLAGSHIP DEVEX</span>
                        </div>
                        <p className="text-gray-300">
                            1-Click LAN Mobile Preview for developers with 24/7 Stay-Awake desk mode, Chrome MV3 extension, Docker relay hub, and WebSocket stream.
                        </p>
                        <div className="flex items-center gap-3 pt-1">
                            <button
                                onClick={() => executeCommand("qwik-preview")}
                                className="text-cyan-400 underline hover:text-white"
                            >
                                Execute 'qwik-preview' →
                            </button>
                            <a
                                href="https://qwik-preview.joecodes.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 underline hover:text-white flex items-center gap-1"
                            >
                                Live Demo <ExternalLink size={10} />
                            </a>
                        </div>
                    </div>
                </div>
            );
        } else if (cmd === "story") {
            newOutput.content = (
                <div className="p-4 rounded-xl bg-gray-900/80 border border-gray-700 text-xs font-mono space-y-3">
                    <div className="text-neon-pink font-bold flex items-center gap-2">
                        <Sparkles size={14} />
                        <span>THE ~1-HOUR DEVEX ORIGIN STORY:</span>
                    </div>
                    <p className="text-gray-200 leading-relaxed">
                        Built in ~1 hour as a rapid DevEx tool to solve a personal pain point: typing local IP addresses or repeatedly scanning QR codes while testing responsive layouts on real mobile hardware.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        Dual architecture was designed deliberately:
                        <br />1. <strong className="text-cyan-400">Chrome Extension (Manifest V3)</strong> for 1-click toolbar push & hotkey triggers.
                        <br />2. <strong className="text-cyan-400">Dockerized Relay Hub</strong> running on homelab, tunnelled via Cloudflare to a secured domain (qwik-preview.joecodes.in).
                        <br />3. <strong className="text-cyan-400">Mobile PWA Shell</strong> equipped with the Screen Wake Lock API and background silent audio keep-alive, staying permanently awake on a desk dock 24/7.
                    </p>
                </div>
            );
        } else if (cmd === "architecture") {
            newOutput.content = (
                <div className="p-4 rounded-xl bg-black/70 border border-gray-800 text-xs font-mono space-y-3">
                    <span className="text-cyan-400 font-bold block">QWIK PREVIEW ARCHITECTURE FLOW:</span>
                    <pre className="text-gray-300 text-[11px] leading-relaxed overflow-x-auto">
{` +---------------------------+           +-----------------------------+
 | Chrome Extension (MV3)    |           | Dockerized Relay Hub        |
 | [Active Tab Inspector]    | --POST->  | [Node.js WebSocket Server]  |
 | Localhost -> 192.168.1.42 |           | Cloudflare Tunnel Ingress   |
 +---------------------------+           +-----------------------------+
                                                       |
                                               WebSocket Relay
                                                (Sub-50ms ping)
                                                       v
                                         +-----------------------------+
                                         | Mobile PWA Shell            |
                                         | Screen Wake Lock API (24/7) |
                                         | Desk Docked Receiver        |
                                         +-----------------------------+`}
                    </pre>
                </div>
            );
        } else if (cmd === "docker") {
            newOutput.content = (
                <div className="p-3 rounded-lg bg-black/60 border border-gray-800 text-xs font-mono space-y-2">
                    <div className="text-neon-blue font-bold">DOCKER HUB REGISTRY // QWIK-MOBILE-PREVIEW</div>
                    <p className="text-gray-300">Run the relay hub locally on your machine or home server:</p>
                    <div className="p-2 bg-gray-950 rounded border border-gray-800 text-cyan-400 select-all">
                        docker pull iamjothees/qwik-mobile-preview:latest
                    </div>
                    <div className="p-2 bg-gray-950 rounded border border-gray-800 text-gray-400 select-all">
                        docker run -d --name qwik-relay -p 8080:8080 iamjothees/qwik-mobile-preview:latest
                    </div>
                </div>
            );
        } else if (cmd === "open") {
            window.open("https://qwik-preview.joecodes.in/", "_blank", "noopener,noreferrer");
            newOutput.content = (
                <p className="text-neon-green font-mono text-xs">
                    Dispatched browser intent: Opening https://qwik-preview.joecodes.in/ ...
                </p>
            );
        } else if (cmd === "desktop") {
            setActiveTab("desktop");
            newOutput.content = (
                <p className="text-neon-green font-mono text-xs">
                    Switched mode to Retro OS Desktop.
                </p>
            );
        } else if (cmd === "projects") {
            newOutput.content = (
                <div className="space-y-2 text-xs font-mono text-gray-300">
                    <p className="text-neon-green font-bold">SHIPPED CODE & ARCHITECTURES:</p>
                    <div>1. <span className="text-cyan-400 font-bold">Qwik Preview</span> — 1-Click LAN Mobile Preview (Docker, MV3, WebSockets, PWA)</div>
                    <div>2. <span className="text-purple-400 font-bold">E-Commerce System</span> — High-Throughput Storefront (PHP 8.2, Laravel, React, Docker)</div>
                    <div>3. <span className="text-orange-400 font-bold">Food Ordering Application</span> — Real-Time Kitchen Dispatch (Laravel, React, MySQL ACID)</div>
                    <p className="text-gray-400 text-[11px] pt-1">
                        Full 9-project directory live at <a href="https://showcase.joecodes.in" target="_blank" rel="noopener noreferrer" className="text-neon-blue underline">showcase.joecodes.in</a>.
                    </p>
                </div>
            );
        } else if (cmd === "whoami") {
            newOutput.content = (
                <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-800 text-xs font-mono space-y-1 text-gray-300">
                    <div><strong className="text-white">USER:</strong> Jotheeswaran (Joe) // joecodes.in</div>
                    <div><strong className="text-white">ROLE:</strong> Full-Stack Sorcerer • End-to-End Solutions Engineer</div>
                    <div><strong className="text-white">TOP SPEED:</strong> 30 km/h on Burgman (Peak cognitive velocity)</div>
                    <div><strong className="text-white">STATUS:</strong> Indoors &gt; Outdoors • Zero packet loss</div>
                </div>
            );
        } else {
            newOutput.content = (
                <div className="text-xs font-mono text-red-400">
                    bash: command not found: {cmdRaw}. Type <button onClick={() => executeCommand("help")} className="text-cyan-400 underline font-bold">help</button> or <button onClick={() => executeCommand("qwik-preview")} className="text-cyan-400 underline font-bold">qwik-preview</button>.
                </div>
            );
        }

        setOutputs((prev) => [...prev, newOutput]);
        setInputVal("");
    };

    useEffect(() => {
        executeCommandRef.current = executeCommand;
    });

    const handleKeyDownInput = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            executeCommand(inputVal);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const nextIdx = Math.min(commandHistory.length - 1, historyPointer + 1);
                setHistoryPointer(nextIdx);
                setInputVal(commandHistory[nextIdx]);
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyPointer > 0) {
                const nextIdx = historyPointer - 1;
                setHistoryPointer(nextIdx);
                setInputVal(commandHistory[nextIdx]);
            } else if (historyPointer === 0) {
                setHistoryPointer(-1);
                setInputVal("");
            }
        }
    };

    return (
        <>
            {/* FLOATING HUD LAUNCHER BUTTON */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="fixed bottom-6 right-6 z-[85]"
            >
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-gray-950/90 border border-cyan-500/50 text-white font-mono text-xs font-bold shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] backdrop-blur-xl transition-all active:scale-95 cursor-pointer"
                    title="Toggle Core Terminal & Retro Desktop (~ or Cmd+K)"
                    aria-label="Toggle Core Terminal"
                >
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <TerminalIcon size={14} className="text-cyan-400 group-hover:rotate-6 transition-transform" />
                    <span>&gt;_ CORE TERMINAL</span>
                    <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-gray-400">
                        ~
                    </span>
                </button>
            </motion.div>

            {/* RETRO TERMINAL & OS WINDOW MODAL */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[130] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.92, y: 20 }}
                            transition={{ duration: 0.2 }}
                            className={`w-full bg-[#09090e] border border-cyan-500/40 rounded-2xl shadow-[0_0_60px_rgba(0,240,255,0.25)] flex flex-col overflow-hidden relative ${
                                isMaximized
                                    ? "h-[96vh] max-w-[96vw]"
                                    : "h-[85vh] max-h-[720px] max-w-4xl"
                            }`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* CRT Scanline Filter effect */}
                            <div
                                className="pointer-events-none absolute inset-0 opacity-[0.03] z-20"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)",
                                    backgroundSize: "100% 4px"
                                }}
                            />

                            {/* Window Header */}
                            <div className="px-4 py-3 bg-[#11111a] border-b border-gray-800 flex items-center justify-between shrink-0 select-none z-10">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1.5">
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="w-3 h-3 rounded-full bg-red-500/90 hover:bg-red-400 transition-colors"
                                            title="Close Terminal"
                                            aria-label="Close"
                                        />
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="w-3 h-3 rounded-full bg-yellow-500/90 hover:bg-yellow-400 transition-colors"
                                            title="Minimize"
                                            aria-label="Minimize"
                                        />
                                        <button
                                            onClick={() => setIsMaximized((prev) => !prev)}
                                            className="w-3 h-3 rounded-full bg-green-500/90 hover:bg-green-400 transition-colors"
                                            title="Maximize"
                                            aria-label="Maximize"
                                        />
                                    </div>
                                    <span className="text-xs font-mono text-gray-300 font-semibold truncate hidden sm:inline">
                                        joe@joecodes.in: ~ (Retro OS CLI v2026.1)
                                    </span>
                                </div>

                                {/* Mode Switcher Tabs */}
                                <div className="flex items-center gap-1 bg-black/60 p-1 rounded-lg border border-gray-800 text-[11px] font-mono">
                                    <button
                                        onClick={() => setActiveTab("cli")}
                                        className={`px-2.5 py-1 rounded-md transition-colors ${
                                            activeTab === "cli"
                                                ? "bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30"
                                                : "text-gray-400 hover:text-white"
                                        }`}
                                    >
                                        &gt;_ CLI Shell
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("desktop")}
                                        className={`px-2.5 py-1 rounded-md transition-colors ${
                                            activeTab === "desktop"
                                                ? "bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30"
                                                : "text-gray-400 hover:text-white"
                                        }`}
                                    >
                                        🖥️ Desktop Apps
                                    </button>
                                    {activeTab === "preview" && (
                                        <button
                                            onClick={() => setActiveTab("preview")}
                                            className="px-2.5 py-1 rounded-md bg-cyan-400 text-black font-bold"
                                        >
                                            ⚡ Live Preview
                                        </button>
                                    )}
                                </div>

                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                                    aria-label="Close"
                                >
                                    <X size={16} />
                                </button>
                            </div>

                            {/* TAB 1: CLI SHELL */}
                            {activeTab === "cli" && (
                                <div className="flex-1 flex flex-col overflow-hidden bg-[#07070c] p-4 font-mono z-10">
                                    {/* Scrollable output container */}
                                    <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-thin">
                                        {outputs.map((item, index) => (
                                            <div key={index} className="space-y-1">
                                                {item.type === "system" && (
                                                    <pre className="text-gray-400 text-[11px] leading-relaxed whitespace-pre-wrap select-all">
                                                        {item.text}
                                                    </pre>
                                                )}

                                                {item.command && (
                                                    <div className="flex items-center gap-2 text-xs text-gray-400 pt-1">
                                                        <span className="text-neon-pink">joe@joecodes</span>
                                                        <span className="text-gray-600">:</span>
                                                        <span className="text-cyan-400">~</span>
                                                        <span className="text-white">$</span>
                                                        <span className="text-neon-green font-bold">{item.command}</span>
                                                        <span className="text-[10px] text-gray-600 ml-auto">{item.timestamp}</span>
                                                    </div>
                                                )}

                                                {item.content && (
                                                    <div className="pl-3 border-l-2 border-cyan-500/30">
                                                        {item.content}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                        <div ref={terminalEndRef} />
                                    </div>

                                    {/* Quick Command Suggestion Chips */}
                                    <div className="pt-2 pb-1 border-t border-gray-800/80 flex flex-wrap items-center gap-1.5 text-[11px]">
                                        <span className="text-gray-500 text-[10px] font-bold uppercase">Quick:</span>
                                        {[
                                            { cmd: "qwik-preview", label: "⚡ qwik-preview" },
                                            { cmd: "tools", label: "tools" },
                                            { cmd: "story", label: "story" },
                                            { cmd: "architecture", label: "architecture" },
                                            { cmd: "docker", label: "docker" },
                                            { cmd: "open", label: "open" },
                                            { cmd: "clear", label: "clear" }
                                        ].map((chip) => (
                                            <button
                                                key={chip.cmd}
                                                onClick={() => executeCommand(chip.cmd)}
                                                className="px-2 py-0.5 rounded bg-gray-900 border border-gray-700/80 hover:border-cyan-400 text-gray-300 hover:text-cyan-300 transition-colors text-[10px]"
                                            >
                                                {chip.label}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Active Input Line */}
                                    <div className="pt-2 border-t border-gray-800 flex items-center gap-2 text-xs">
                                        <span className="text-neon-pink font-bold">joe@joecodes</span>
                                        <span className="text-gray-600">:</span>
                                        <span className="text-cyan-400 font-bold">~</span>
                                        <span className="text-white font-bold">$</span>
                                        <input
                                            ref={inputRef}
                                            type="text"
                                            value={inputVal}
                                            onChange={(e) => setInputVal(e.target.value)}
                                            onKeyDown={handleKeyDownInput}
                                            placeholder="type command (e.g. 'qwik-preview', 'tools', 'help')..."
                                            className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs placeholder:text-gray-600 caret-cyan-400"
                                            autoFocus
                                            spellCheck={false}
                                            autoComplete="off"
                                        />
                                        <button
                                            onClick={() => executeCommand(inputVal)}
                                            className="px-2.5 py-1 rounded bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500 hover:text-black font-bold text-[10px] transition-all"
                                        >
                                            RUN ↵
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* TAB 2: RETRO OS DESKTOP APPS */}
                            {activeTab === "desktop" && (
                                <div className="flex-1 p-6 bg-[#0a0a10] overflow-y-auto z-10 font-mono">
                                    <div className="max-w-2xl mx-auto space-y-6">
                                        <div className="text-center">
                                            <h3 className="text-lg font-bold text-white mb-1">
                                                RETRO OS DESKTOP ENVIRONMENT
                                            </h3>
                                            <p className="text-xs text-gray-400">
                                                Select an application launcher icon to inspect code artifacts or execute tools.
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                                            {/* App 1: Qwik Preview */}
                                            <div
                                                onClick={() => {
                                                    setActiveTab("cli");
                                                    executeCommand("qwik-preview");
                                                }}
                                                className="group p-4 rounded-xl bg-gray-900/60 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-950/20 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.1)] hover:scale-105"
                                            >
                                                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400 text-cyan-300 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,240,255,0.5)]">
                                                    <Smartphone size={24} />
                                                </div>
                                                <div className="font-bold text-xs text-white">Qwik Preview</div>
                                                <div className="text-[10px] text-cyan-400 font-bold">1-Click Mobile</div>
                                            </div>

                                            {/* App 2: Showcase Portal */}
                                            <a
                                                href="https://showcase.joecodes.in/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group p-4 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-neon-blue hover:bg-neon-blue/10 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2 hover:scale-105"
                                            >
                                                <div className="w-12 h-12 rounded-xl bg-neon-blue/20 border border-neon-blue text-neon-blue flex items-center justify-center">
                                                    <Layers size={24} />
                                                </div>
                                                <div className="font-bold text-xs text-white">Showcase Vault</div>
                                                <div className="text-[10px] text-neon-blue">9 Projects Live</div>
                                            </a>

                                            {/* App 3: Speedometer Dashboard */}
                                            <div
                                                onClick={() => {
                                                    setIsOpen(false);
                                                    document.querySelector("section")?.scrollIntoView({ behavior: "smooth" });
                                                }}
                                                className="group p-4 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-neon-green hover:bg-neon-green/10 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2 hover:scale-105"
                                            >
                                                <div className="w-12 h-12 rounded-xl bg-neon-green/20 border border-neon-green text-neon-green flex items-center justify-center">
                                                    <Box size={24} />
                                                </div>
                                                <div className="font-bold text-xs text-white">Burgman Speedo</div>
                                                <div className="text-[10px] text-neon-green">30km/h Cruise</div>
                                            </div>

                                            {/* App 4: Contact Terminal */}
                                            <div
                                                onClick={() => {
                                                    setIsOpen(false);
                                                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                                }}
                                                className="group p-4 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-neon-pink hover:bg-neon-pink/10 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2 hover:scale-105"
                                            >
                                                <div className="w-12 h-12 rounded-xl bg-neon-pink/20 border border-neon-pink text-neon-pink flex items-center justify-center">
                                                    <Laptop size={24} />
                                                </div>
                                                <div className="font-bold text-xs text-white">Pigeon Protocol</div>
                                                <div className="text-[10px] text-neon-pink">WhatsApp / SSH</div>
                                            </div>
                                        </div>

                                        {/* Featured highlight card */}
                                        <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                                            <div>
                                                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block">
                                                    FEATURED APP OF THE DAY:
                                                </span>
                                                <h4 className="text-sm font-bold text-white">
                                                    Qwik Preview — Zero-friction LAN mobile testing
                                                </h4>
                                                <p className="text-xs text-gray-400 mt-0.5">
                                                    Built in ~1 hour. 24/7 Stay-Awake desk mode with Screen Wake Lock API.
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => {
                                                    setActiveTab("cli");
                                                    executeCommand("qwik-preview");
                                                }}
                                                className="shrink-0 px-4 py-2 rounded-lg bg-cyan-400 text-black font-bold text-xs hover:bg-white transition-all shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                                            >
                                                Execute in Terminal ➔
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* TAB 3: IN-TERMINAL LIVE PREVIEW */}
                            {activeTab === "preview" && (
                                <div className="flex-1 flex flex-col bg-[#08080d] z-10">
                                    <div className="px-4 py-2 bg-gray-950 border-b border-gray-800 flex items-center justify-between font-mono text-xs text-gray-400">
                                        <div className="flex items-center gap-2 truncate">
                                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                            <span className="text-cyan-400 font-bold">MOUNTED TARGET:</span>
                                            <span className="text-white truncate">https://qwik-preview.joecodes.in/</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <a
                                                href="https://qwik-preview.joecodes.in/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white transition-colors text-[11px]"
                                            >
                                                <span>Pop-out ↗</span>
                                            </a>
                                            <button
                                                onClick={() => setActiveTab("cli")}
                                                className="px-2.5 py-1 rounded bg-gray-800 hover:bg-gray-700 text-gray-200 transition-colors text-[11px]"
                                            >
                                                Back to CLI [&gt;_]
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex-1 w-full bg-black relative">
                                        <iframe
                                            src="https://qwik-preview.joecodes.in/"
                                            title="Qwik Preview Live App"
                                            className="w-full h-full border-none"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
