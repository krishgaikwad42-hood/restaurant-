"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MenuItem } from "@/components/menu/MenuItem";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

// Real Data with Unsplash Images
const menuItems = [
    {
        id: "1",
        name: "Truffle Risotto",
        description: "Arborio rice, black truffle, parmesan crisp, wild mushrooms.",
        price: 32,
        category: "Main Course",
        image_url: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=1920&auto=format&fit=crop"
    },
    {
        id: "2",
        name: "Pan-Seared Scallops",
        description: "Jumbo scallops, cauliflower purée, lemon butter sauce.",
        price: 28,
        category: "Starter",
        image_url: "https://images.unsplash.com/photo-1544510802-39bd92842426?q=80&w=1920&auto=format&fit=crop"
    },
    {
        id: "3",
        name: "Wagyu Beef Burger",
        description: "Brioche bun, aged cheddar, caramelized onions, truffle mayo.",
        price: 24,
        category: "Main Course",
        image_url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1920&auto=format&fit=crop"
    },
    {
        id: "4",
        name: "Lobster Bisque",
        description: "Creamy lobster soup, cognac, chives, crème fraîche.",
        price: 18,
        category: "Starter",
        image_url: "https://images.unsplash.com/photo-1547592166-23acbe346499?q=80&w=1920&auto=format&fit=crop"
    },
    {
        id: "5",
        name: "Grilled Octopus",
        description: "Spanish octopus, romesco sauce, fingerling potatoes.",
        price: 26,
        category: "Starter",
        image_url: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1920&auto=format&fit=crop"
    },
    {
        id: "6",
        name: "Herb-Crusted Lamb Rack",
        description: "New Zealand lamb, ratatouille, rosemary jus.",
        price: 38,
        category: "Main Course",
        image_url: "https://images.unsplash.com/photo-1580476262716-6b3693166861?q=80&w=1920&auto=format&fit=crop"
    },
    {
        id: "7",
        name: "Tiramisu",
        description: "Espresso-soaked ladyfingers, mascarpone cream, cocoa powder.",
        price: 12,
        category: "Dessert",
        image_url: "https://images.unsplash.com/photo-1571875204638-83796912d22e?q=80&w=1920&auto=format&fit=crop"
    },
    {
        id: "8",
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake, vanilla bean ice cream, berry coulis.",
        price: 14,
        category: "Dessert",
        image_url: "https://images.unsplash.com/photo-1606313564200-e75d5e30476d?q=80&w=1920&auto=format&fit=crop"
    },
    {
        id: "9",
        name: "Signature Cocktail",
        description: "Gin, elderflower, cucumber, lime, mint.",
        price: 16,
        category: "Drinks",
        image_url: "https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=1920&auto=format&fit=crop"
    }
];

const categories = ["All", "Starter", "Main Course", "Dessert", "Drinks"];

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems = activeCategory === "All"
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <div className="min-h-screen bg-black">
            {/* Header */}
            <div className="bg-[#0F0F0F] py-24 text-center relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <Reveal width="100%">
                        <h2 className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-bold">Discover Our Flavors</h2>
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 font-serif">Our Menu</h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                            Explore our carefully curated selection of dishes, prepared with passion and the finest ingredients.
                        </p>
                    </Reveal>
                </div>
            </div>

            {/* Category Filter */}
            <div className="sticky top-20 z-40 bg-black/95 backdrop-blur-md border-b border-white/5 py-6">
                <div className="container mx-auto px-4 overflow-x-auto">
                    <Reveal width="100%">
                        <div className="flex space-x-4 md:justify-center min-w-max px-4">
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    variant={activeCategory === category ? "primary" : "ghost"}
                                    onClick={() => setActiveCategory(category)}
                                    className={`rounded-full transition-all duration-300 ${activeCategory === category
                                        ? "scale-105 shadow-lg shadow-primary/20"
                                        : "text-gray-400 hover:text-white"
                                        }`}
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Menu Grid */}
            <div className="container mx-auto px-4 py-20">
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {filteredItems.map((item, index) => (
                        <Reveal key={item.id} delay={index * 0.1}>
                            <MenuItem
                                {...item}
                            />
                        </Reveal>
                    ))}
                </motion.div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        No items found in this category.
                    </div>
                )}
            </div>
        </div>
    );
}
