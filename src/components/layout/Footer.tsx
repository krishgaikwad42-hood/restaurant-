"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const Footer = () => {
    return (
        <footer className="bg-[#0B0B0B] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* Background Element */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    {/* Brand & Newsletter */}
                    <div className="col-span-1 md:col-span-5 space-y-8">
                        <Reveal>
                            <Link href="/" className="inline-block group">
                                <span className="text-4xl font-bold text-white tracking-[0.2em] font-serif uppercase group-hover:text-primary transition-colors duration-500">
                                    Sirocco
                                </span>
                            </Link>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-md font-light mt-6">
                                A culinary journey where tradition meets innovation. Experience the art of dining in an atmosphere of pure luxury.
                            </p>

                            <div className="pt-6">
                                <h4 className="text-primary text-xs uppercase tracking-widest mb-4">Subscribe to our newsletter</h4>
                                <div className="flex gap-2 max-w-md">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="bg-secondary/30 border border-white/10 rounded-md px-4 py-3 w-full text-sm focus:outline-none focus:border-primary/50 transition-colors"
                                    />
                                    <Button variant="primary" className="px-6">
                                        <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Navigation Links */}
                    <div className="col-span-1 md:col-span-3 md:col-start-7">
                        <Reveal delay={0.1}>
                            <h3 className="text-xl font-serif font-bold mb-8 text-white">Explore</h3>
                            <ul className="space-y-4 text-gray-400">
                                {['Menu', 'Reservations', 'Private Dining', 'About Us', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-primary hover:pl-2 transition-all duration-300 inline-block">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-1 md:col-span-3">
                        <Reveal delay={0.2}>
                            <h3 className="text-xl font-serif font-bold mb-8 text-white">Visit Us</h3>
                            <ul className="space-y-6 text-gray-400 font-light">
                                <li className="flex flex-col">
                                    <span className="text-white font-medium mb-1">Location</span>
                                    123 Culinary Boulevard<br />New York, NY 10001
                                </li>
                                <li className="flex flex-col">
                                    <span className="text-white font-medium mb-1">Hours</span>
                                    Mon - Sun: 5:00 PM - 11:00 PM
                                </li>
                                <li className="flex flex-col">
                                    <span className="text-white font-medium mb-1">Contact</span>
                                    <a href="tel:+15551234567" className="hover:text-primary transition-colors">+1 (555) 123-4567</a>
                                    <a href="mailto:dining@sirocco.com" className="hover:text-primary transition-colors">dining@sirocco.com</a>
                                </li>
                            </ul>
                        </Reveal>
                    </div>
                </div>

                {/* Bottom Bar */}
                <Reveal delay={0.3}>
                    <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                        <p className="font-light tracking-wide">&copy; {new Date().getFullYear()} Sirocco Restaurant. Crafted for excellence.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            {[Facebook, Instagram, Twitter, Mail].map((Icon, i) => (
                                <a key={i} href="#" className="text-gray-400 hover:text-primary hover:-translate-y-1 transition-all duration-300">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </footer>
    );
};
