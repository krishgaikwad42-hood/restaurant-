"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface Order {
    id: string;
    total_amount: number;
    status: string;
    created_at: string;
    items: any[];
}

export default function AdminOrdersPage() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOrders();

        // Realtime subscription
        const channel = supabase
            .channel("admin-orders")
            .on(
                "postgres_changes",
                { event: "INSERT", schema: "public", table: "orders" },
                (payload) => {
                    setOrders((current) => [payload.new as Order, ...current]);
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    const fetchOrders = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from("orders")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) throw error;
            setOrders(data || []);
        } catch (error) {
            console.error("Error fetching orders:", error);
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (id: string, newStatus: string) => {
        try {
            const { error } = await supabase
                .from("orders")
                .update({ status: newStatus })
                .eq("id", id);

            if (error) throw error;

            // Optimistic update
            setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    if (loading) return <div className="text-white">Loading orders...</div>;

    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-8">Order Management</h1>

            <div className="space-y-4">
                {orders.map((order) => (
                    <div
                        key={order.id}
                        className="bg-secondary p-6 rounded-lg border border-white/10 flex justify-between items-center"
                    >
                        <div>
                            <div className="text-primary font-mono text-sm mb-1">
                                Order #{order.id.slice(0, 8)}
                            </div>
                            <div className="text-gray-400 text-sm mb-2">
                                {new Date(order.created_at).toLocaleString()}
                            </div>
                            <div className="text-white font-bold text-xl">
                                ${order.total_amount.toFixed(2)}
                            </div>
                            <div className="text-gray-500 text-xs mt-1">
                                {Array.isArray(order.items) ? order.items.length : 0} items
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <span
                                className={`px-3 py-1 rounded-full text-xs uppercase font-bold ${order.status === "pending"
                                        ? "bg-yellow-500/20 text-yellow-500"
                                        : order.status === "completed"
                                            ? "bg-green-500/20 text-green-500"
                                            : "bg-gray-500/20 text-gray-500"
                                    }`}
                            >
                                {order.status}
                            </span>

                            <select
                                value={order.status}
                                onChange={(e) => updateStatus(order.id, e.target.value)}
                                className="bg-black/50 border border-white/10 text-white text-sm rounded px-2 py-1"
                            >
                                <option value="pending">Pending</option>
                                <option value="preparing">Preparing</option>
                                <option value="completed">Completed</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                        </div>
                    </div>
                ))}

                {orders.length === 0 && (
                    <div className="text-center text-gray-500 py-10">No active orders.</div>
                )}
            </div>
        </div>
    );
}
