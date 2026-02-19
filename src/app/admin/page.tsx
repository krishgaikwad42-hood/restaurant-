import { Users, ShoppingBag, DollarSign, Calendar } from "lucide-react";

const stats = [
    { name: "Total Users", value: "1,234", icon: Users, change: "+12%" },
    { name: "Active Orders", value: "45", icon: ShoppingBag, change: "+5%" },
    { name: "Total Revenue", value: "$12,345", icon: DollarSign, change: "+18%" },
    { name: "Reservations", value: "8", icon: Calendar, change: "-2%" },
];

export default function AdminDashboardPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-8">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={stat.name}
                            className="bg-secondary p-6 rounded-lg border border-white/10"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>
                                <span
                                    className={`text-sm font-medium ${stat.change.startsWith("+")
                                            ? "text-green-400"
                                            : "text-red-400"
                                        }`}
                                >
                                    {stat.change}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                            <p className="text-gray-400 text-sm">{stat.name}</p>
                        </div>
                    );
                })}
            </div>

            <div className="bg-secondary rounded-lg border border-white/10 p-6">
                <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
                <div className="text-gray-400 text-sm">
                    No recent activity to display.
                </div>
            </div>
        </div>
    );
}
