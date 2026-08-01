import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-champagne text-obsidian hover:bg-rose transition-colors duration-400",
  secondary:
    "bg-graphite text-pearl hover:bg-charcoal transition-colors duration-400",
  outline:
    "border border-champagne text-champagne hover:bg-champagne hover:text-obsidian transition-colors duration-400",
  ghost: "text-pearl hover:text-champagne transition-colors duration-400",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`px-6 py-3 text-sm tracking-wide rounded-sm disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles[variant]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
