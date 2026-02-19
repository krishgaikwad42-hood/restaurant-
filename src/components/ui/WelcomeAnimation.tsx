"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const WelcomeAnimation = () => {
    const [showAnimation, setShowAnimation] = useState(true);

    useEffect(() => {
        // Check if animation has already played in this session
        const hasPlayed = sessionStorage.getItem("sirocco_welcome_played");

        if (hasPlayed) {
            setShowAnimation(false);
            return;
        }

        // Set flag so it doesn't play again
        sessionStorage.setItem("sirocco_welcome_played", "true");

        // Hide animation after 3 seconds
        const timer = setTimeout(() => {
            setShowAnimation(false);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {showAnimation && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="text-center"
                    >
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold text-primary tracking-[0.2em] uppercase mb-2"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Sirocco
                        </motion.h1>
                        <motion.p
                            className="text-white/60 text-sm md:text-base tracking-widest uppercase"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            Taste the Wind
                        </motion.p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
