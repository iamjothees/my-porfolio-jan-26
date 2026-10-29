import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Trophy, RefreshCw, Heart, Sparkles } from "lucide-react";

const LANES = [0, 1, 2]; // 0: Left, 1: Center, 2: Right
const LANE_POSITIONS = ["18%", "50%", "82%"];

const OBSTACLE_TYPES = [
    { type: "pothole", emoji: "🕳️", name: "Deep Pothole", isBad: true },
    { type: "sun", emoji: "☀️", name: "Blazing Sunlight", isBad: true },
    { type: "jogger", emoji: "🏃", name: "Outdoor Jogger", isBad: true },
    { type: "chai", emoji: "☕", name: "Hot Chai", isBad: false },
    { type: "chai", emoji: "☕", name: "Hot Chai", isBad: false },
    { type: "pillow", emoji: "🛋️", name: "Cozy Cushion", isBad: false },
];

export default function BurgmanGame() {
    const [gameState, setGameState] = useState("idle"); // 'idle' | 'playing' | 'gameover'
    const [playerLane, setPlayerLane] = useState(1);
    const [score, setScore] = useState(0);
    const [chaiCount, setChaiCount] = useState(0);
    const [lives, setLives] = useState(2);
    const [items, setItems] = useState([]);
    const [highScore, setHighScore] = useState(() => {
        try {
            return parseInt(localStorage.getItem("burgman_high_score") || "0", 10);
        } catch {
            return 0;
        }
    });
    const [gameOverReason, setGameOverReason] = useState("");
    const [toastMessage, setToastMessage] = useState(null);

    const gameLoopRef = useRef(null);
    const spawnTimerRef = useRef(null);
    const playerLaneRef = useRef(playerLane);
    const livesRef = useRef(lives);
    const chaiCountRef = useRef(chaiCount);
    const scoreRef = useRef(score);

    useEffect(() => {
        playerLaneRef.current = playerLane;
        livesRef.current = lives;
        chaiCountRef.current = chaiCount;
        scoreRef.current = score;
    }, [playerLane, lives, chaiCount, score]);

    // Toast feedback helper
    const showToast = (text) => {
        setToastMessage(text);
        setTimeout(() => setToastMessage(null), 1200);
    };

    // Start Game
    const startGame = () => {
        setGameState("playing");
        setPlayerLane(1);
        setScore(0);
        setChaiCount(0);
        setLives(2);
        setItems([]);
        setGameOverReason("");
    };

    // End Game
    const endGame = useCallback((reason) => {
        setGameState("gameover");
        setGameOverReason(reason);
        if (scoreRef.current > highScore) {
            setHighScore(scoreRef.current);
            try {
                localStorage.setItem("burgman_high_score", scoreRef.current.toString());
            } catch {
                // Ignore storage errors
            }
        }
    }, [highScore]);

    // Steer Controls
    const moveLeft = useCallback(() => {
        setPlayerLane((prev) => Math.max(0, prev - 1));
    }, []);

    const moveRight = useCallback(() => {
        setPlayerLane((prev) => Math.min(2, prev + 1));
    }, []);

    // Keyboard listener
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (gameState === "playing") {
                if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
                    e.preventDefault();
                    moveLeft();
                } else if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
                    e.preventDefault();
                    moveRight();
                }
            } else if (gameState === "idle" || gameState === "gameover") {
                if (e.key === " " || e.key === "Enter") {
                    e.preventDefault();
                    startGame();
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [gameState, moveLeft, moveRight]);

    // Spawner Loop
    useEffect(() => {
        if (gameState !== "playing") return;

        const spawnItem = () => {
            const lane = Math.floor(Math.random() * 3);
            const template = OBSTACLE_TYPES[Math.floor(Math.random() * OBSTACLE_TYPES.length)];
            const newItem = {
                id: Date.now() + Math.random(),
                lane,
                y: -10, // top of the road
                ...template
            };

            setItems((prev) => [...prev, newItem]);
        };

        spawnTimerRef.current = setInterval(spawnItem, 1100);
        return () => clearInterval(spawnTimerRef.current);
    }, [gameState]);

    // Main Game Loop: Tick item positions & collision detection
    useEffect(() => {
        if (gameState !== "playing") return;

        const interval = setInterval(() => {
            // Increment cruising distance score
            setScore((s) => s + 5);

            setItems((prevItems) => {
                const nextItems = [];
                for (const item of prevItems) {
                    const nextY = item.y + 3.8; // Falling speed

                    // Collision check when item reaches player's vertical area (75% to 92%)
                    if (nextY >= 75 && nextY <= 92 && item.lane === playerLaneRef.current) {
                        if (item.isBad) {
                            const remainingLives = livesRef.current - 1;
                            setLives(remainingLives);
                            if (remainingLives <= 0) {
                                let reason = "Hit a road hazard!";
                                if (item.type === "sun") {
                                    reason = "Blinded by harsh sunlight! Retreating indoors immediately.";
                                } else if (item.type === "pothole") {
                                    reason = "Hit a pothole! Appa gave you a stern 30 km/h lecture.";
                                } else if (item.type === "jogger") {
                                    reason = "Accidentally witnessed outdoor exercise. Too exhausting!";
                                }
                                endGame(reason);
                                return [];
                            } else {
                                showToast("⚠️ Bump! 1 Life Left");
                            }
                        } else {
                            // Collectible
                            if (item.type === "chai") {
                                setChaiCount((c) => c + 1);
                                setScore((s) => s + 50);
                                showToast("+50 Chai Power! ☕");
                            } else {
                                setScore((s) => s + 30);
                                showToast("+30 Maximum Comfort! 🛋️");
                            }
                        }
                        // Discard item on collision
                        continue;
                    }

                    // Keep item if still on screen
                    if (nextY < 105) {
                        nextItems.push({ ...item, y: nextY });
                    }
                }
                return nextItems;
            });
        }, 50);

        gameLoopRef.current = interval;
        return () => clearInterval(interval);
    }, [gameState, endGame]);

    return (
        <section id="game" className="py-24 px-4 relative overflow-hidden border-t border-gray-900 bg-[#0a0a0a]">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-yellow-500/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/5 text-yellow-300 text-xs font-medium mb-4"
                >
                    <Sparkles size={13} className="text-yellow-400" />
                    <span>TAKE A BREAK</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4"
                >
                    The 30 km/h Cruise
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-gray-300 text-base max-w-xl mx-auto mb-12 leading-relaxed font-normal"
                >
                    Take a breather before reaching out. Steer Joe down an unhurried road at a peaceful 30 km/h, collect fresh chai ☕, and avoid potholes!
                </motion.p>

                {/* Game Arcade Container */}
                <div className="max-w-2xl mx-auto rounded-3xl bg-gray-950/90 border border-gray-800 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-xl text-left">
                    {/* Header / Arcade Titlebar */}
                    <div className="px-5 py-3.5 bg-gray-900/90 border-b border-gray-800 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="text-xl">🛵</span>
                            <div>
                                <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
                                    <span>Burgman 30 km/h Cruise</span>
                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neon-green/10 text-neon-green border border-neon-green/30">
                                        MINI-GAME
                                    </span>
                                </h3>
                                <p className="text-[11px] text-gray-400">
                                    Collect hot chai ☕ and dodge outdoor hazards
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5 text-xs text-yellow-400 font-mono">
                                <Trophy size={14} />
                                <span>Best: {highScore}m</span>
                            </div>
                        </div>
                    </div>

                    {/* Game Canvas / Road Screen */}
                    <div className="relative h-80 sm:h-96 bg-[#111116] overflow-hidden select-none border-b border-gray-800">
                        {/* Scrolling Road Stripes */}
                        <div className="absolute inset-0 flex justify-between pointer-events-none opacity-20">
                            <div className="w-1/3 border-r-2 border-dashed border-gray-500 h-full animate-pulse" />
                            <div className="w-1/3 border-r-2 border-dashed border-gray-500 h-full animate-pulse" />
                        </div>

                        {/* Road ambient side grass / sidewalk glow */}
                        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-neon-blue/20 to-transparent" />
                        <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-neon-pink/20 to-transparent" />

                        {/* In-Game HUD Overlay */}
                        {gameState === "playing" && (
                            <div className="absolute top-3 left-4 right-4 z-20 flex items-center justify-between pointer-events-none text-xs font-mono">
                                <div className="flex items-center gap-3 bg-black/70 px-3 py-1.5 rounded-xl border border-gray-800">
                                    <span className="text-white font-bold">{score}m</span>
                                    <span className="text-yellow-400 font-bold flex items-center gap-1">
                                        <span>☕</span>
                                        <span>{chaiCount}</span>
                                    </span>
                                </div>

                                <div className="flex items-center gap-1 bg-black/70 px-3 py-1.5 rounded-xl border border-gray-800">
                                    {[...Array(2)].map((_, i) => (
                                        <Heart
                                            key={i}
                                            size={14}
                                            className={`${i < lives ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                                        />
                                    ))}
                                </div>

                                <div className="hidden sm:inline-flex bg-neon-green/10 border border-neon-green/30 text-neon-green px-2.5 py-1 rounded-xl text-[11px] font-bold">
                                    ⚡ 30 km/h LOCKED
                                </div>
                            </div>
                        )}

                        {/* Floating Toast Notification */}
                        <AnimatePresence>
                            {toastMessage && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-12 left-1/2 -translate-x-1/2 z-30 bg-black/90 border border-neon-blue/50 text-white px-3.5 py-1 rounded-full text-xs font-bold shadow-lg"
                                >
                                    {toastMessage}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Falling Objects (Hazards & Collectibles) */}
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="absolute text-2xl sm:text-3xl transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-75"
                                style={{
                                    left: LANE_POSITIONS[item.lane],
                                    top: `${item.y}%`,
                                }}
                            >
                                {item.emoji}
                            </div>
                        ))}

                        {/* Player Scooter */}
                        {gameState === "playing" && (
                            <motion.div
                                className="absolute bottom-6 transform -translate-x-1/2 flex flex-col items-center pointer-events-none z-10"
                                animate={{ left: LANE_POSITIONS[playerLane] }}
                                transition={{ type: "spring", stiffness: 450, damping: 28 }}
                            >
                                <div className="relative text-3xl sm:text-4xl filter drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]">
                                    🛵
                                </div>
                                <div className="text-[10px] font-mono font-bold text-cyan-300 mt-0.5">
                                    JOE
                                </div>
                            </motion.div>
                        )}

                        {/* Start Screen Overlay */}
                        {gameState === "idle" && (
                            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-6 bg-black/80 backdrop-blur-sm text-center">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-pink-500/20 border border-white/20 flex items-center justify-center text-3xl mb-4 shadow-lg">
                                    🛵
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">
                                    The Sunday 30 km/h Cruise
                                </h4>
                                <p className="text-xs text-gray-300 max-w-sm mb-6 leading-relaxed">
                                    Steer Joe on his Burgman scooter. Collect hot chai ☕ and cozy items, while avoiding potholes 🕳️ and blinding sunlight ☀️!
                                </p>
                                <button
                                    onClick={startGame}
                                    className="bg-gradient-to-r from-neon-blue to-neon-pink text-black font-bold px-7 py-3 rounded-xl text-sm shadow-[0_0_25px_rgba(0,255,255,0.3)] hover:opacity-95 active:scale-95 transition-all cursor-pointer"
                                >
                                    Start Cruising →
                                </button>
                                <p className="text-[11px] text-gray-500 mt-3 font-mono">
                                    Use [← / →] arrows, [A / D] keys, or tap on mobile
                                </p>
                            </div>
                        )}

                        {/* Game Over Screen Overlay */}
                        {gameState === "gameover" && (
                            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-6 bg-black/85 backdrop-blur-sm text-center">
                                <div className="text-3xl mb-2">🛋️</div>
                                <h4 className="text-xl font-bold text-white mb-1">
                                    Cruise Interrupted!
                                </h4>
                                <p className="text-xs text-pink-400 font-medium max-w-sm mb-4 leading-relaxed">
                                    {gameOverReason}
                                </p>

                                <div className="flex items-center gap-4 bg-gray-900/80 px-4 py-2.5 rounded-xl border border-gray-800 mb-6 text-xs font-mono">
                                    <div>
                                        <span className="text-gray-400 block text-[10px]">DISTANCE</span>
                                        <span className="text-white font-bold">{score}m</span>
                                    </div>
                                    <div className="w-px h-6 bg-gray-800" />
                                    <div>
                                        <span className="text-gray-400 block text-[10px]">CHAI CUPS</span>
                                        <span className="text-yellow-400 font-bold">{chaiCount} ☕</span>
                                    </div>
                                    <div className="w-px h-6 bg-gray-800" />
                                    <div>
                                        <span className="text-gray-400 block text-[10px]">RECORD</span>
                                        <span className="text-neon-green font-bold">{highScore}m</span>
                                    </div>
                                </div>

                                <button
                                    onClick={startGame}
                                    className="bg-white text-black font-bold px-6 py-2.5 rounded-xl text-xs hover:bg-gray-200 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
                                >
                                    <RefreshCw size={14} />
                                    <span>Ride Again</span>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Mobile Touch Steering Controls */}
                    <div className="p-3 bg-gray-950 flex items-center justify-between gap-3 text-xs">
                        <button
                            onClick={moveLeft}
                            disabled={gameState !== "playing"}
                            className="flex-1 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 active:bg-cyan-500/20 text-white font-bold border border-gray-800 active:border-cyan-400 transition-all cursor-pointer flex items-center justify-center gap-1.5 touch-manipulation disabled:opacity-40"
                        >
                            <span>◀</span>
                            <span>Steer Left</span>
                        </button>
                        <div className="text-[11px] text-gray-500 font-mono text-center px-2 hidden sm:block">
                            [A] or [←] Left • [D] or [→] Right
                        </div>
                        <button
                            onClick={moveRight}
                            disabled={gameState !== "playing"}
                            className="flex-1 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 active:bg-cyan-500/20 text-white font-bold border border-gray-800 active:border-cyan-400 transition-all cursor-pointer flex items-center justify-center gap-1.5 touch-manipulation disabled:opacity-40"
                        >
                            <span>Steer Right</span>
                            <span>▶</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
