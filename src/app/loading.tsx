export default function Loading() {
    return (
        <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center">
            <div className="text-center">
                <div className="inline-block relative">
                    <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                </div>
                <p className="text-gray-400 mt-6 text-lg tracking-wide">Loading...</p>
            </div>
        </div>
    );
}
