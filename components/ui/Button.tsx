import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-champagne text-obsidian hover:bg-rose shadow-xl shadow-champagne/10 hover:shadow-rose/20",
  secondary:
    "bg-transparent text-pearl border border-pearl/30 hover:border-champagne hover:text-champagne",
  outline:
    "border border-champagne text-champagne hover:bg-champagne hover:text-obsidian",
  ghost: "text-pearl hover:text-champagne",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`px-9 py-4 text-sm font-medium tracking-[0.15em] uppercase rounded-none disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-400 ease-out ${variantStyles[variant]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
