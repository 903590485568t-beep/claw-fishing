"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", glow = false, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-2xl font-bold transition-all duration-200 border-3 border-black active:translate-y-1 active:shadow-none focus:outline-none";
    
    const variants = {
      primary: "bg-cartoon-yellow text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300",
      secondary: "bg-cartoon-pink text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-pink-400",
      outline: "bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-50",
      ghost: "border-transparent shadow-none hover:bg-black/5",
    };

    const sizes = {
      sm: "h-10 px-4 text-sm",
      md: "h-12 px-6 text-lg",
      lg: "h-16 px-10 text-xl",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05, rotate: -2 }}
        whileTap={{ scale: 0.95, rotate: 0 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
