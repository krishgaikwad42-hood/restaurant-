"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Application error:", error);
    }, [error]);

    return (
        <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center px-4">
            <div className="text-center max-w-2xl">
                <div className="mb-8">
                    <AlertTriangle className="w-24 h-24 text-primary mx-auto mb-6" />
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">
                        Something Went Wrong
                    </h1>
                    <p className="text-gray-400 text-lg mb-8">
                        We encountered an unexpected error. Please try again.
                    </p>
                    {process.env.NODE_ENV === "development" && (
                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-8 text-left">
                            <p className="text-red-400 text-sm font-mono break-all">
                                {error.message}
                            </p>
                        </div>
                    )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        size="lg"
                        className="min-w-[180px]"
                        onClick={reset}
                    >
                        <RefreshCw className="w-5 h-5 mr-2" />
                        Try Again
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="min-w-[180px]"
                        onClick={() => window.location.href = "/"}
                    >
                        Go Home
                    </Button>
                </div>
            </div>
        </div>
    );
}
