import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-champagne text-obsidian hover:bg-rose shadow-lg shadow-champagne/20 hover:shadow-rose/30 hover:-translate-y-0.5",
  secondary:
    "bg-graphite text-pearl hover:bg-charcoal border border-graphite hover:border-champagne/40 hover:-translate-y-0.5",
  outline:
    "border border-champagne/60 text-champagne hover:bg-champagne hover:text-obsidian hover:-translate-y-0.5",
  ghost: "text-pearl hover:text-champagne",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`px-8 py-3.5 text-sm tracking-wide rounded-full transition-all duration-400 ease-out disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0 ${variantStyles[variant]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
