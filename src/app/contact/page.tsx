"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call / email send
        await new Promise(resolve => setTimeout(resolve, 1200));
        setLoading(false);
        setSuccess(true);
    };

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
                                <h3 className="text-3xl font-serif text-white mb-6">We&apos;d Love to Hear From You</h3>
                                <p className="text-gray-400 font-light text-lg leading-relaxed">
                                    Whether you have a question about our menu, want to book a private event, or simply want to say hello, our team is ready to assist you.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {[
                                    {
                                        icon: MapPin,
                                        title: "Visit Us",
                                        lines: ["123 Culinary Boulevard", "New York, NY 10001"],
                                    },
                                    {
                                        icon: Phone,
                                        title: "Call Us",
                                        lines: ["+1 (555) 123-4567", "Mon-Sun, 11am - 10pm"],
                                    },
                                    {
                                        icon: Mail,
                                        title: "Email Us",
                                        lines: ["dining@sirocco.com", "We reply within 24 hours"],
                                    },
                                ].map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={item.title} className="flex items-start space-x-6 group cursor-default">
                                            <div className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300 shrink-0">
                                                <Icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-medium mb-1 text-lg">{item.title}</h4>
                                                {item.lines.map((line, i) => (
                                                    <p key={i} className={`font-light ${i === 1 ? "text-gray-500 text-sm mt-1" : "text-gray-400"}`}>{line}</p>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </Reveal>

                    {/* Contact Form */}
                    <Reveal delay={0.2}>
                        <div className="bg-secondary/30 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px] pointer-events-none"></div>

                            {success ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center">
                                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 border border-primary/30">
                                        <CheckCircle className="w-10 h-10 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-white mb-3">Message Sent!</h3>
                                    <p className="text-gray-400 mb-8 max-w-xs">
                                        Thank you for reaching out. Our team will get back to you within 24 hours.
                                    </p>
                                    <Button variant="outline" onClick={() => { setSuccess(false); setFormData({ name: "", email: "", subject: "", message: "" }); }}>
                                        Send Another Message
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-gray-600"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-gray-600"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-gray-600"
                                            placeholder="Private Event Inquiry"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-gray-600 resize-none"
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full h-12 text-lg"
                                        isLoading={loading}
                                    >
                                        {loading ? "Sending..." : "Send Message"}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </Reveal>
                </div>

                {/* Map Section */}
                <Reveal delay={0.3} className="mt-20">
                    <div className="w-full h-[400px] rounded-xl overflow-hidden border border-white/5 shadow-xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98784368468033!3d40.75889794284484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598a6e1e7b9b%3A0x2b2b2b2b2b2b2b2b!2s123%20W%2041st%20St%2C%20New%20York%2C%20NY%2010036!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Sirocco Restaurant Location"
                        />
                    </div>
                </Reveal>
            </div>
        </div>
    );
}
