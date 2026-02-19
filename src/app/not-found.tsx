"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center px-4">
            <div className="text-center max-w-2xl">
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-primary mb-4 font-serif">404</h1>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">
                        Page Not Found
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                        <Button size="lg" className="min-w-[180px]">
                            <Home className="w-5 h-5 mr-2" />
                            Go Home
                        </Button>
                    </Link>
                    <Button
                        variant="outline"
                        size="lg"
                        className="min-w-[180px]"
                        onClick={() => window.history.back()}
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Go Back
                    </Button>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                    <p className="text-gray-500 text-sm">
                        Need help? <Link href="/contact" className="text-primary hover:underline">Contact us</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
