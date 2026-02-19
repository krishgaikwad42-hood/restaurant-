import { AdminSidebar } from "@/components/admin/AdminSidebar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-black">
            <AdminSidebar />
            <div className="flex-1 ml-64 overflow-y-auto bg-black p-8">
                {children}
            </div>
        </div>
    );
}
