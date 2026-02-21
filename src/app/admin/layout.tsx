import { AdminSidebar } from "@/components/admin/AdminSidebar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-black">
            <AdminSidebar />
            {/* Content: on desktop shift right of sidebar, on mobile add top padding for hamburger bar */}
            <div className="flex-1 md:ml-64 overflow-y-auto bg-black p-6 md:p-8 pt-20 md:pt-8">
                {children}
            </div>
        </div>
    );
}
