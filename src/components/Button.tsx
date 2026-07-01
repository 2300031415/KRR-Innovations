import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "accent" | "outline" | "outlineWhite" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light focus:ring-primary shadow-lg shadow-primary/20",
    secondary: "bg-secondary text-white hover:bg-secondary-light focus:ring-secondary shadow-lg shadow-secondary/20",
    accent: "bg-accent text-slate-900 hover:bg-accent-light focus:ring-accent shadow-lg shadow-accent/20",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
    outlineWhite: "border-2 border-white text-white hover:bg-white hover:text-slate-950 focus:ring-white",
    white: "bg-white text-primary hover:bg-slate-50 focus:ring-white shadow-lg shadow-black/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.03, y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
