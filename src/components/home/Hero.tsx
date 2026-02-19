"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useRef } from "react";

export const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Parallax Background Container */}
            <motion.div
                style={{ y, willChange: "transform" }}
                className="absolute inset-0 z-0"
            >
                {/* Subtle Zoom Animation */}
                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear"
                    }}
                    className="relative w-full h-full"
                    style={{ willChange: "transform" }}
                >
                    <Image
                        // High-quality dark food background (Fine dining plate)
                        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop"
                        alt="Exquisite Dining Experience"
                        fill
                        className="object-cover opacity-80"
                        priority
                        sizes="100vw"
                    />
                </motion.div>
            </motion.div>

            {/* Clean Gradient Overlay for Readability */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Subtle Radial Glow */}
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />


            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="container mx-auto px-4 relative z-30 text-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                >
                    <div className="inline-block mb-6 relative">
                        <h2 className="text-primary text-sm md:text-base tracking-[0.4em] uppercase relative z-10 font-bold">
                            Est. 2024
                        </h2>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-primary"></div>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-8 tracking-tight drop-shadow-2xl font-serif">
                        Sirocco
                    </h1>

                    <p className="text-gray-200 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed drop-shadow-lg">
                        Where culinary artistry meets <span className="text-primary italic font-serif">luxury</span> atmosphere.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link href="/menu">
                            <Button size="lg" className="min-w-[180px] text-lg h-14 bg-primary text-black hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                                View Menu
                            </Button>
                        </Link>
                        <Link href="/reservations">
                            <Button variant="outline" size="lg" className="min-w-[180px] text-lg h-14 border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm group">
                                Book a Table
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-3 z-30"
            >
                <span className="text-[10px] uppercase tracking-[0.3em]">Explore</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/80 to-white/0 animate-pulse" />
            </motion.div>
        </section>
    );
};
