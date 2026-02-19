"use client";

import React, { useState, MouseEvent } from 'react';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
        const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

        const addRipple = (e: MouseEvent<HTMLButtonElement>) => {
            const button = e.currentTarget;
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const id = Date.now();

            setRipples((prev) => [...prev, { x, y, id }]);

            setTimeout(() => {
                setRipples((prev) => prev.filter((r) => r.id !== id));
            }, 600); // Standard ripple duration

            if (props.onClick) {
                props.onClick(e);
            }
        };

        const baseStyles = "relative overflow-hidden inline-flex items-center justify-center rounded-md font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 tracking-wide uppercase text-sm";

        // Premium Glow & Shadow Styles
        const variants = {
            primary: "bg-primary text-black shadow-lg shadow-primary/20",
            secondary: "bg-secondary text-primary border border-white/10",
            outline: "border border-primary text-primary bg-transparent",
            ghost: "text-primary bg-transparent",
        };

        const sizes = {
            sm: "h-9 px-3 text-sm",
            md: "h-11 px-8 text-base",
            lg: "h-14 px-10 text-lg",
        };

        return (
            <motion.button
                ref={ref as any}
                className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
                disabled={isLoading || props.disabled}
                onClick={addRipple}
                whileHover={{
                    y: -4,
                    scale: 1.02,
                    boxShadow: variant === 'primary'
                        ? "0 20px 25px -5px rgba(212, 175, 55, 0.4), 0 8px 10px -6px rgba(212, 175, 55, 0.2)" // Gold glow
                        : "0 10px 15px -3px rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                {...props as any}
            >
                {/* Content Overlay to stay on top of ripples */}
                <span className="relative z-10 flex items-center">
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {children}
                </span>

                {/* Ripple Effect Container */}
                {ripples.map((ripple) => (
                    <motion.span
                        key={ripple.id}
                        initial={{ scale: 0, opacity: 0.5 }}
                        animate={{ scale: 4, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="absolute bg-white/30 rounded-full pointer-events-none z-0"
                        style={{
                            left: ripple.x,
                            top: ripple.y,
                            width: 100, // Fixed size to expand from
                            height: 100,
                            x: "-50%",
                            y: "-50%",
                        }}
                    />
                ))}

                {/* Extra Shine/Sheen Effect on Hover */}
                <motion.div
                    className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
                    initial={{ x: "-150%" }}
                    whileHover={{ x: "150%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
            </motion.button>
        );
    }
);

Button.displayName = "Button";
