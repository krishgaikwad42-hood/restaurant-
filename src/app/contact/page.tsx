"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#0B0B0B] relative">

            {/* Header */}
            <div className="bg-secondary/20 py-24 text-center relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-20">
                    <Reveal>
                        <h2 className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-bold">Get in Touch</h2>
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 font-serif">Contact Us</h1>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </Reveal>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <Reveal>
                        <div className="space-y-12">
                            <div className="prose prose-invert">
                                <h3 className="text-3xl font-serif text-white mb-6">We'd Love to Hear From You</h3>
                                <p className="text-gray-400 font-light text-lg leading-relaxed">
                                    Whether you have a question about our menu, want to book a private event, or simply want to say hello, our team is ready to assist you.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-6 group">
                                    <div className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1 text-lg">Visit Us</h4>
                                        <p className="text-gray-400 font-light">123 Culinary Boulevard<br />New York, NY 10001</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6 group">
                                    <div className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                                        <Phone className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1 text-lg">Call Us</h4>
                                        <p className="text-gray-400 font-light">+1 (555) 123-4567</p>
                                        <p className="text-gray-500 text-sm mt-1">Mon-Sun, 11am - 10pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6 group">
                                    <div className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                                        <Mail className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1 text-lg">Email Us</h4>
                                        <p className="text-gray-400 font-light">dining@sirocco.com</p>
                                        <p className="text-gray-500 text-sm mt-1">We reply within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Contact Form */}
                    <Reveal delay={0.2}>
                        <div className="bg-secondary/30 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px] pointer-events-none"></div>

                            <form className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                                        <input type="text" id="name" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-gray-600" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                                        <input type="email" id="email" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-gray-600" placeholder="john@example.com" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                                    <input type="text" id="subject" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-gray-600" placeholder="Private Event Inquiry" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                                    <textarea id="message" rows={4} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-gray-600" placeholder="How can we help you?"></textarea>
                                </div>

                                <Button className="w-full h-12 text-lg">Send Message</Button>
                            </form>
                        </div>
                    </Reveal>
                </div>

                {/* Map Section - Simplified Placeholder */}
                <Reveal delay={0.3} className="mt-20">
                    <div className="w-full h-[400px] bg-secondary/20 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative group border border-white/5">
                        <div className="absolute inset-0 flex items-center justify-center bg-secondary/10 group-hover:bg-transparent transition-colors">
                            <span className="text-gray-500 font-light tracking-widest">MAP VIEW LOADING...</span>
                        </div>
                        {/* In a real app, embed Google Maps iframe here */}
                        <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                            <p className="text-xs text-primary font-bold">SIROCCO HEADQUARTERS</p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
}
