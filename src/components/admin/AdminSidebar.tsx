"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, UtensilsCrossed, ShoppingBag, Calendar, Settings, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

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

    const handleSignOut = async () => {
        await signOut();
        router.push("/login");
    };

    return (
        <div className="w-64 bg-secondary border-r border-white/10 h-screen fixed left-0 top-0 flex flex-col">
            <div className="p-6 border-b border-white/10">
                <Link href="/" className="text-2xl font-bold text-primary tracking-widest uppercase block">
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
                            className={`flex items-center px-4 py-3 rounded-md transition-colors ${isActive
                                    ? "bg-primary text-black font-medium"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <Icon className="w-5 h-5 mr-3" />
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
                    <LogOut className="w-5 h-5 mr-3" />
                    Sign Out
                </button>
            </div>
        </div>
    );
};
