"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Package, Clock, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

export default function OrderPage() {
    // Mock order data - in production, fetch from Supabase
    const orders = [
        {
            id: "ORD-001",
            date: "2024-02-15",
            status: "delivered",
            total: 67.50,
            items: 3
        },
        {
            id: "ORD-002",
            date: "2024-02-14",
            status: "in_progress",
            total: 45.00,
            items: 2
        }
    ];

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "delivered":
                return <CheckCircle className="w-5 h-5 text-green-500" />;
            case "in_progress":
                return <Clock className="w-5 h-5 text-yellow-500" />;
            case "cancelled":
                return <XCircle className="w-5 h-5 text-red-500" />;
            default:
                return <Package className="w-5 h-5 text-gray-500" />;
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case "delivered":
                return "Delivered";
            case "in_progress":
                return "In Progress";
            case "cancelled":
                return "Cancelled";
            default:
                return "Pending";
        }
    };

    return (
        <div className="min-h-screen bg-[#0B0B0B] py-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="bg-[#0F0F0F] py-16 px-8 rounded-2xl mb-12">
                    <Reveal>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif">Order History</h1>
                        <p className="text-gray-400 text-lg">Track and manage your orders</p>
                    </Reveal>
                </div>

                {/* Orders List */}
                {orders.length === 0 ? (
                    <div className="text-center py-20">
                        <Package className="w-24 h-24 text-gray-600 mx-auto mb-6" />
                        <h2 className="text-2xl font-bold text-white mb-4 font-serif">No Orders Yet</h2>
                        <p className="text-gray-400 mb-8">Start ordering to see your history here</p>
                        <Link href="/menu">
                            <Button size="lg">Browse Menu</Button>
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {orders.map((order, index) => (
                            <Reveal key={order.id} delay={index * 0.1}>
                                <div className="bg-[#151515] rounded-xl p-8 border border-white/5 hover:border-primary/30 transition-all">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                        {/* Order Info */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <h3 className="text-2xl font-bold text-white font-serif">{order.id}</h3>
                                                <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1 rounded-full">
                                                    {getStatusIcon(order.status)}
                                                    <span className="text-sm text-gray-300">{getStatusText(order.status)}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                                                <span>Date: {new Date(order.date).toLocaleDateString()}</span>
                                                <span>•</span>
                                                <span>{order.items} items</span>
                                                <span>•</span>
                                                <span className="text-primary font-bold">${order.total.toFixed(2)}</span>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex gap-3">
                                            <Button variant="outline" size="sm">
                                                View Details
                                            </Button>
                                            {order.status === "delivered" && (
                                                <Button variant="primary" size="sm">
                                                    Reorder
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
