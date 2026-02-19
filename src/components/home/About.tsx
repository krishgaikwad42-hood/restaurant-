"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export const About = () => {
    return (
        <section className="py-20 md:py-32 bg-black overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <Reveal
                        width="100%"
                        className="relative h-[600px] w-full"
                    >
                        <div className="absolute inset-0 bg-primary/20 transform -rotate-3 rounded-lg z-0"></div>
                        <div className="absolute inset-0 z-10 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 group shadow-xl hover:shadow-primary/20">
                            <Image
                                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop"
                                alt="Restaurant Interior"
                                fill
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary p-8 rounded-full flex items-center justify-center z-20 border border-white/10 hidden md:flex">
                            <div className="text-center">
                                <span className="block text-4xl font-bold text-primary">15+</span>
                                <span className="text-xs uppercase tracking-widest text-gray-400">Years of<br />Excellence</span>
                            </div>
                        </div>
                    </Reveal>

                    {/* Content Side */}
                    <Reveal width="100%" delay={0.2}>
                        <h3 className="text-primary text-sm tracking-[0.2em] uppercase mb-4 font-bold">Our Story</h3>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-serif">
                            Where Tradition Meets <span className="italic font-serif text-primary">Modernity</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            Founded in 2009, Sirocco began as a small family bistro and has evolved into
                            one of the city's premier dining destinations. Our philosophy is simple:
                            honor the ingredients, respect the tradition, but never stop innovating.
                        </p>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Executive Chef Marco Rossi brings his Michelin-star experience to create
                            dishes that are visually stunning and packed with authentic Mediterranean flavors.
                            Every plate tells a story of passion, heritage, and culinary artistry.
                        </p>

                        <Link href="/about">
                            <Button variant="outline" className="min-w-[140px]">
                                Learn More
                            </Button>
                        </Link>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
