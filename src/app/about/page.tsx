"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Award, Users, Heart, Clock } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#0B0B0B] relative">
            {/* Header */}
            <div className="bg-[#0F0F0F] py-24 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <Reveal width="100%">
                        <h2 className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-bold">Our Story</h2>
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 font-serif">About Sirocco</h1>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                            Where culinary artistry meets luxury atmosphere.
                        </p>
                    </Reveal>
                </div>
            </div>

            {/* Main Content */}
            <section className="py-20 md:py-32 bg-[#0B0B0B] overflow-hidden">
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
                                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
                                    alt="Restaurant Interior"
                                    fill
                                    loading="lazy"
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

                            <Link href="/menu">
                                <Button variant="outline" className="min-w-[140px]">
                                    View Menu
                                </Button>
                            </Link>
                        </Reveal>
                    </div>

                    {/* Values Section */}
                    <div className="mt-32">
                        <Reveal className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif">Our Values</h2>
                            <div className="w-24 h-1 bg-primary mx-auto"></div>
                        </Reveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: Award, title: "Excellence", description: "Uncompromising quality in every dish" },
                                { icon: Users, title: "Community", description: "Building connections through food" },
                                { icon: Heart, title: "Passion", description: "Love for culinary artistry" },
                                { icon: Clock, title: "Tradition", description: "Honoring timeless recipes" }
                            ].map((value, index) => (
                                <Reveal key={index} delay={index * 0.1}>
                                    <div className="bg-[#151515] p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] shadow-[0_5px_15px_rgba(0,0,0,0.2)] text-center group">
                                        <value.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                        <h3 className="text-xl font-bold text-white mb-2 font-serif">{value.title}</h3>
                                        <p className="text-gray-400 font-light">{value.description}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
