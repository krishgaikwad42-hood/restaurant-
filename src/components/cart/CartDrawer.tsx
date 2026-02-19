"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";

export const CartDrawer = () => {
    const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, totalAmount, clearCart } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-secondary border-l border-white/10 z-[70] flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-white flex items-center">
                                <ShoppingBag className="w-5 h-5 mr-3 text-primary" />
                                Your Order
                            </h2>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
                                    <ShoppingBag className="w-16 h-16 mb-4 opacity-20" />
                                    <p className="text-lg font-medium">Your cart is empty</p>
                                    <p className="text-sm">Add some delicious items from the menu.</p>
                                    <Button
                                        variant="outline"
                                        className="mt-6"
                                        onClick={() => setIsCartOpen(false)}
                                    >
                                        Browse Menu
                                    </Button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="flex gap-4 bg-black/20 p-4 rounded-lg border border-white/5"
                                    >
                                        {/* Image placeholder */}
                                        <div className="w-20 h-20 bg-neutral-800 rounded-md flex-shrink-0 overflow-hidden">
                                            {item.image_url ? (
                                                <img src={item.image_url} alt={item.name} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-xs text-white/20">Img</div>
                                            )}
                                        </div>

                                        <div className="flex-1 flex flex-col justify-between">
                                            <div className="flex justify-between items-start">
                                                <h3 className="font-medium text-white line-clamp-1">{item.name}</h3>
                                                <p className="font-bold text-primary">${item.price * item.quantity}</p>
                                            </div>

                                            <div className="flex justify-between items-center mt-2">
                                                <div className="flex items-center space-x-3 bg-black/40 rounded-lg p-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1 hover:text-red-400 text-gray-400 transition-colors"
                                                    >
                                                        <Minus className="w-4 h-4" />
                                                    </button>
                                                    <span className="text-sm font-medium w-4 text-center text-white">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 hover:text-green-400 text-gray-400 transition-colors"
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                    </button>
                                                </div>

                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-gray-500 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-6 border-t border-white/10 bg-black/20 backdrop-blur-md">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-gray-400">Subtotal</span>
                                    <span className="text-xl font-bold text-primary">${totalAmount.toFixed(2)}</span>
                                </div>
                                <div className="space-y-3">
                                    <Button variant="primary" className="w-full text-lg h-12">
                                        Checkout
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="w-full text-red-400 hover:text-red-500 hover:bg-red-500/10"
                                        onClick={clearCart}
                                    >
                                        Clear Cart
                                    </Button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
