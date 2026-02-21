"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { items } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Menu", href: "/menu" },
        { name: "Gallery", href: "/gallery" },
        { name: "Reservations", href: "/reservations" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
                ? "bg-black/60 backdrop-blur-[10px] border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                : "bg-transparent py-6"
                }`}
        >
            <div className={`container mx-auto px-4 flex items-center justify-between transition-all duration-500 ${isScrolled ? "h-12" : "h-16"}`}>
                {/* Logo */}
                <Link href="/" className="group relative">
                    <span className={`text-2xl font-bold tracking-[0.2em] uppercase transition-colors duration-300 font-serif ${isScrolled ? "text-white" : "text-white"}`}>
                        Sirocco
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-white/80 hover:text-primary transition-colors text-xs font-medium uppercase tracking-widest group py-2"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center space-x-6">
                    <Link href="/cart" className="text-white hover:text-primary transition-colors relative group">
                        <ShoppingBag className="w-5 h-5" />
                        {items.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-primary text-black text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center animate-pulse">
                                {items.length}
                            </span>
                        )}
                    </Link>
                    <Link href="/login">
                        <Button
                            variant="outline" // Changed to outline for cleaner look on glass
                            size="sm"
                            className={`border-white/20 hover:bg-white hover:text-black transition-all duration-300 ${isScrolled ? "h-9 text-xs" : ""}`}
                        >
                            Login
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden fixed inset-0 top-[60px] bg-black/95 backdrop-blur-xl border-t border-white/10 z-40"
                    >
                        <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-2xl font-light text-white hover:text-primary transition-colors uppercase tracking-[0.2em]"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-col items-center space-y-6 mt-8 w-full max-w-xs"
                            >
                                <Link href="/cart" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-2 text-white/70 hover:text-white">
                                    <ShoppingBag className="w-5 h-5" />
                                    <span>Cart ({items.length})</span>
                                </Link>
                                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                                    <Button variant="primary" className="w-full">Login</Button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};
