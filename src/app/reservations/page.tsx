"use client";

import { ReservationForm } from "@/components/reservations/ReservationForm";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";

export default function ReservationsPage() {
    return (
        <div className="min-h-screen bg-[#0B0B0B] relative">

            <div className="flex flex-col lg:flex-row min-h-screen">
                {/* Left Side - Visual & Info */}
                <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-screen flex items-center justify-center p-8 lg:p-20 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
                            alt="Dining Area"
                            fill
                            className="object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20"></div>
                    </div>

                    <div className="relative z-20 max-w-lg text-center lg:text-left">
                        <Reveal>
                            <h2 className="text-primary text-sm tracking-[0.4em] uppercase mb-6 font-bold">Reservations</h2>
                            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight">
                                Book Your <br /><span className="italic text-primary">Table</span>
                            </h1>
                            <p className="text-gray-300 text-lg leading-relaxed mb-10 font-light">
                                Immerse yourself in an ambiance of sophistication. Secure your spot at Sirocco for an unforgettable evening of culinary excellence.
                            </p>

                            <div className="hidden lg:block space-y-6 text-gray-400 border-l border-primary/30 pl-6">
                                <div>
                                    <h4 className="text-white font-medium mb-1">Opening Hours</h4>
                                    <p className="text-sm">Daily: 5:00 PM - 11:00 PM</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Contact</h4>
                                    <p className="text-sm">+1 (555) 123-4567</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Private Dining</h4>
                                    <p className="text-sm">Available for parties of 12+</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="lg:w-1/2 relative bg-black flex items-center justify-center p-4 py-20 lg:p-20 z-20">
                    <div className="w-full max-w-md relative">
                        {/* Decorative Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>

                        <Reveal delay={0.2} className="relative z-10 bg-secondary/30 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl">
                            <h3 className="text-2xl font-serif font-bold text-white mb-2 text-center">Guest Details</h3>
                            <p className="text-gray-400 text-sm text-center mb-8">Please fill in your reservation information</p>

                            <ReservationForm />
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
    );
}
