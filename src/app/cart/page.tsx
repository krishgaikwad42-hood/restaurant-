"use client";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export default function CartPage() {
    const { items, removeItem, updateQuantity, totalAmount } = useCart();

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center">
                <div className="text-center">
                    <ShoppingBag className="w-24 h-24 text-gray-600 mx-auto mb-6" />
                    <h1 className="text-3xl font-bold text-white mb-4 font-serif">Your Cart is Empty</h1>
                    <p className="text-gray-400 mb-8">Add some delicious items to get started!</p>
                    <Link href="/menu">
                        <Button size="lg">Browse Menu</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0B0B0B] py-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <Reveal className="mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif">Your Cart</h1>
                    <p className="text-gray-400">Review your order before checkout</p>
                </Reveal>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {items.map((item, index) => (
                            <Reveal key={item.id} delay={index * 0.05}>
                                <div className="bg-[#151515] rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-all">
                                    <div className="flex gap-6">
                                        {/* Image */}
                                        <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                                            <Image
                                                src={item.image_url || "/placeholder.jpg"}
                                                alt={item.name}
                                                fill
                                                loading="lazy"
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Details */}
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white mb-1 font-serif">{item.name}</h3>
                                            <p className="text-primary font-bold text-lg">${item.price}</p>
                                        </div>

                                        {/* Quantity Controls */}
                                        <div className="flex flex-col items-end justify-between">
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-gray-400 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>

                                            <div className="flex items-center gap-3 bg-secondary/50 rounded-lg px-3 py-2">
                                                <button
                                                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                    className="text-white hover:text-primary transition-colors"
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="text-white font-bold w-8 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="text-white hover:text-primary transition-colors"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <Reveal delay={0.2}>
                            <div className="bg-[#151515] rounded-xl p-8 border border-white/5 sticky top-24">
                                <h2 className="text-2xl font-bold text-white mb-6 font-serif">Order Summary</h2>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-gray-400">
                                        <span>Subtotal</span>
                                        <span>${totalAmount.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-400">
                                        <span>Tax (10%)</span>
                                        <span>${(totalAmount * 0.1).toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-400">
                                        <span>Delivery</span>
                                        <span>$5.00</span>
                                    </div>
                                    <div className="border-t border-white/10 pt-4">
                                        <div className="flex justify-between text-white text-xl font-bold">
                                            <span>Total</span>
                                            <span className="text-primary">${(totalAmount * 1.1 + 5).toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>

                                <Button className="w-full h-12 text-lg mb-4">
                                    Proceed to Checkout
                                </Button>

                                <Link href="/menu">
                                    <Button variant="outline" className="w-full h-12">
                                        Continue Shopping
                                    </Button>
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
    );
}
