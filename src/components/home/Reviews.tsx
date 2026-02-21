"use client";

import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const reviews = [
    {
        id: 1,
        name: "Sophia Martinez",
        rating: 5,
        text: "The best dining experience I've had in years. The ambiance is unmatched and the truffle risotto is to die for.",
        role: "Food Critic"
    },
    {
        id: 2,
        name: "James Wilson",
        rating: 5,
        text: "Incredible service and attention to detail. Perfect for our anniversary dinner. Highly recommend the chef's tasting menu.",
        role: "Verified Guest"
    },
    {
        id: 3,
        name: "Elena Rossi",
        rating: 5,
        text: "A true culinary gem. The fusion of traditional flavors with modern presentation is masterful.",
        role: "Local Guide"
    }
];

export const Reviews = () => {
    return (
        <section className="py-24 bg-[#0F0F0F] relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary via-black to-black opacity-50"></div>

            <div className="container mx-auto px-4 relative z-10">
                <Reveal className="text-center mb-16">
                    <h2 className="text-primary font-medium tracking-[0.3em] uppercase mb-4 text-xs md:text-sm font-bold">
                        Testimonials
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">
                        Guest Stories
                    </h3>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <Reveal key={review.id} delay={Math.min(index * 0.15, 0.3)}>
                            <div
                                className="bg-[#151515] backdrop-blur-sm p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] shadow-[0_5px_15px_rgba(0,0,0,0.2)] relative group"
                                style={{ willChange: "transform, box-shadow" }}
                            >
                                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />

                                <div className="flex space-x-1 mb-6">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                                    ))}
                                </div>

                                <p className="text-gray-300 mb-6 leading-relaxed italic">"{review.text}"</p>

                                <div>
                                    <div className="text-white font-bold text-lg">{review.name}</div>
                                    <div className="text-primary/80 text-sm uppercase tracking-wider">{review.role}</div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
