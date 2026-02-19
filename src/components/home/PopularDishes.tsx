"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const popularDishes = [
    {
        id: 1,
        name: "Truffle Risotto",
        description: "Arborio rice, black truffle, parmesan crisp, wild mushrooms.",
        price: "$32",
        category: "Main Course",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Pan-Seared Scallops",
        description: "Jumbo scallops, cauliflower purée, lemon butter sauce.",
        price: "$28",
        category: "Starter",
        image: "https://images.unsplash.com/photo-1544510802-39bd92842426?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Wagyu Beef Burger",
        description: "Brioche bun, aged cheddar, caramelized onions, truffle mayo.",
        price: "$24",
        category: "Main Course",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop"
    },
];

export const PopularDishes = () => {
    return (
        <section className="py-24 bg-[#0F0F0F] relative overflow-hidden">

            <div className="container mx-auto px-4 relative z-10">
                <Reveal className="text-center mb-16">
                    <h2 className="text-primary font-medium tracking-[0.3em] uppercase mb-4 text-xs md:text-sm font-bold">
                        Discover
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">
                        Popular Dishes
                    </h3>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {popularDishes.map((dish, index) => (
                        <Reveal key={dish.id} delay={index * 0.1}>
                            <div
                                className="group bg-[#151515] rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                                style={{ willChange: "transform, box-shadow" }}
                            >
                                {/* Image Container with Zoom Effect */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={dish.image}
                                        alt={dish.name}
                                        fill
                                        loading="lazy"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary uppercase border border-primary/20">
                                        {dish.category}
                                    </div>
                                </div>

                                <div className="p-8">
                                    <div className="flex justify-between items-baseline mb-4">
                                        <h4 className="text-2xl font-bold text-white group-hover:text-primary transition-colors font-serif">{dish.name}</h4>
                                        <span className="text-lg font-bold text-primary font-mono">{dish.price}</span>
                                    </div>
                                    <p className="text-gray-400 mb-6 line-clamp-2 leading-relaxed font-light">
                                        {dish.description}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Reveal delay={0.3}>
                        <Link href="/menu">
                            <Button variant="outline" size="lg" className="min-w-[200px] border-white/20 hover:border-primary hover:text-black">
                                View Full Menu
                            </Button>
                        </Link>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
