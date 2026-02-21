"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, UtensilsCrossed, ShoppingBag, Calendar, Settings, LogOut, Menu, X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

const adminLinks = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Menu", href: "/admin/menu", icon: UtensilsCrossed },
    { name: "Orders", href: "/admin/orders", icon: ShoppingBag },
    { name: "Reservations", href: "/admin/reservations", icon: Calendar },
    { name: "Settings", href: "/admin/settings", icon: Settings },
];

export const AdminSidebar = () => {
    const pathname = usePathname();
    const { signOut } = useAuth();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const handleSignOut = async () => {
        await signOut();
        router.push("/login");
    };

    const SidebarContent = () => (
        <>
            <div className="p-6 border-b border-white/10">
                <Link href="/" className="text-2xl font-bold text-primary tracking-widest uppercase block font-serif">
                    Sirocco
                </Link>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Admin Panel</span>
            </div>

            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                {adminLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center px-4 py-3 rounded-md transition-all duration-200 ${isActive
                                ? "bg-primary text-black font-medium shadow-[0_2px_10px_rgba(212,175,55,0.3)]"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <Icon className="w-5 h-5 mr-3 shrink-0" />
                            {link.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-white/10">
                <button
                    onClick={handleSignOut}
                    className="flex items-center w-full px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-md transition-colors"
                >
                    <LogOut className="w-5 h-5 mr-3 shrink-0" />
                    Sign Out
                </button>
            </div>
        </>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden md:flex w-64 bg-secondary border-r border-white/10 h-screen fixed left-0 top-0 flex-col z-40">
                <SidebarContent />
            </div>

            {/* Mobile Top Bar */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-secondary border-b border-white/10 flex items-center justify-between px-4 h-16">
                <Link href="/" className="text-xl font-bold text-primary tracking-widest uppercase font-serif">
                    Sirocco
                </Link>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white hover:text-primary transition-colors p-2"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/60 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Mobile Drawer */}
            <div
                className={`md:hidden fixed top-16 left-0 bottom-0 w-64 bg-secondary border-r border-white/10 z-50 flex flex-col transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <SidebarContent />
            </div>
        </>
    );
};
