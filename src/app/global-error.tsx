"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <html>
            <body className="bg-black text-white flex items-center justify-center min-h-screen">
                <div className="text-center p-8 bg-secondary rounded-lg border border-white/10">
                    <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
                    <p className="text-gray-400 mb-6">
                        We apologize for the inconvenience. Our team has been notified.
                    </p>
                    <Button variant="primary" onClick={() => reset()}>
                        Try again
                    </Button>
                </div>
            </body>
        </html>
    );
}
