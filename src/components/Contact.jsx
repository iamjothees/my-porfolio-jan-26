import { useState } from "react";
import { motion } from "motion/react";

export default function Contact() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const moveButton = () => {
        const x = Math.random() * 300 - 150; // Random X between -150 and 150
        const y = Math.random() * 300 - 150; // Random Y between -150 and 150
        setPosition({ x, y });
    };

    return (
        <section className="py-20 px-4 text-center">
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
                    onClick={() => alert("HOW DID YOU CLICK THIS?! Okay, email me at: dev@null.com")}
                    className="bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-700 active:bg-red-800"
                >
                    Send Urgent Request
                </motion.button>
            </div>

            <div className="mt-12">
                <a href="#" className="text-neon-blue underline hover:text-white transition-colors">
                    Or just send a pigeon
                </a>
            </div>
        </section>
    );
}
