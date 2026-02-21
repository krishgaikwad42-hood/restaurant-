"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

// Gallery images
const images = [
    {
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
        alt: "Restaurant Interior",
        category: "Interior"
    },
    {
        src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
        alt: "Signature Cocktail",
        category: "Drinks"
    },
    {
        src: "https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=1000&auto=format&fit=crop",
        alt: "Plating Detail",
        category: "Food"
    },
    {
        src: "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2070&auto=format&fit=crop",
        alt: "Dining Area",
        category: "Interior"
    },
    {
        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
        alt: "Chef Special",
        category: "Food"
    },
    {
        src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop",
        alt: "Rooftop View",
        category: "Ambiance"
    }
];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-[#0B0B0B] relative">
            {/* Header */}
            <div className="bg-[#0F0F0F] py-24 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <Reveal width="100%">
                        <h2 className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-bold">Visual Journey</h2>
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 font-serif">Gallery</h1>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                            A glimpse into the Sirocco experience - where every detail is crafted for excellence.
                        </p>
                    </Reveal>
                </div>
            </div>

            {/* Gallery Grid */}
            <section className="py-20 bg-[#0B0B0B]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {images.map((img, index) => (
                            <Reveal key={index} delay={Math.min(index * 0.1, 0.3)}>
                                <div
                                    className="relative aspect-square cursor-pointer overflow-hidden group rounded-lg shadow-md hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
                                    onClick={() => setSelectedImage(img.src)}
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        loading="lazy"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-lg font-medium tracking-wide border-b border-primary pb-1">
                                            View
                                        </span>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <AnimatePresence>
                        {selectedImage && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                                onClick={() => setSelectedImage(null)}
                            >
                                <button
                                    className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <X className="w-8 h-8" />
                                </button>
                                <div className="relative w-full max-w-5xl aspect-video md:aspect-[16/9] h-auto max-h-[80vh]">
                                    <Image
                                        src={selectedImage}
                                        alt="Gallery Fullscreen"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </div>
    );
}
