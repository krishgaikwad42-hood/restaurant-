"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/Button";
import { Plus, Trash2, Edit2 } from "lucide-react";

interface MenuItem {
    id: string;
    name: string;
    price: number;
    category: string;
    available: boolean;
}

export default function AdminMenuPage() {
    const [items, setItems] = useState<MenuItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from("menu_items")
                .select("*")
                .order("category", { ascending: true });

            if (error) throw error;
            setItems(data || []);
        } catch (error) {
            console.error("Error fetching menu items:", error);
        } finally {
            setLoading(false);
        }
    };

    const deleteItem = async (id: string) => {
        if (!confirm("Are you sure you want to delete this item?")) return;
        try {
            const { error } = await supabase.from("menu_items").delete().eq("id", id);
            if (error) throw error;
            fetchItems();
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    if (loading) return <div className="text-white">Loading menu...</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-white">Menu Management</h1>
                <Button variant="primary">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Item
                </Button>
            </div>

            <div className="bg-secondary rounded-lg border border-white/10 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-white/5 text-gray-400">
                        <tr>
                            <th className="p-4">Name</th>
                            <th className="p-4">Category</th>
                            <th className="p-4">Price</th>
                            <th className="p-4">Status</th>
                            <th className="p-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {items.map((item) => (
                            <tr key={item.id} className="text-gray-300 hover:bg-white/5">
                                <td className="p-4 font-medium">{item.name}</td>
                                <td className="p-4">{item.category}</td>
                                <td className="p-4">${item.price}</td>
                                <td className="p-4">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs ${item.available
                                                ? "bg-green-500/20 text-green-400"
                                                : "bg-red-500/20 text-red-400"
                                            }`}
                                    >
                                        {item.available ? "Available" : "Sold Out"}
                                    </span>
                                </td>
                                <td className="p-4 text-right space-x-2">
                                    <button className="text-blue-400 hover:text-blue-300">
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => deleteItem(item.id)}
                                        className="text-red-400 hover:text-red-300"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {items.length === 0 && (
                    <div className="p-8 text-center text-gray-500">No menu items found.</div>
                )}
            </div>
        </div>
    );
}
