"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";

interface MenuItemProps {
    id: string;
    name: string;
    description: string;
    price: number;
    image_url?: string;
    category: string;
}

export const MenuItem = ({ id, name, description, price, image_url, category }: MenuItemProps) => {
    const { addItem } = useCart();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="group bg-secondary rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/20 flex flex-col h-full"
        >
            <div className="relative aspect-[4/3] overflow-hidden">
                {image_url ? (
                    <Image
                        src={image_url}
                        alt={name}
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-white/20">
                        [Image]
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary uppercase border border-primary/20 tracking-wider shadow-lg">
                    {category}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow relative">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors font-serif tracking-wide">{name}</h3>
                    <span className="text-lg font-bold text-primary font-mono">${price}</span>
                </div>

                <div className="w-12 h-[1px] bg-white/10 mb-4 group-hover:bg-primary/50 transition-colors" />

                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed font-light">{description}</p>

                <Button
                    variant="outline"
                    className="w-full border-white/20 hover:border-primary hover:bg-primary hover:text-black transition-all duration-300"
                    onClick={() => addItem({ id, name, price, image_url: image_url || "" })}
                >
                    <Plus className="w-4 h-4 mr-2" />
                    Add to Order
                </Button>
            </div>
        </motion.div>
    );
};
