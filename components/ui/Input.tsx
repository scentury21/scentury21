import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={id} className="text-sm text-smoke">
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          className={`bg-charcoal border border-graphite rounded-sm px-4 py-3 text-pearl placeholder:text-smoke focus:border-champagne outline-none transition-colors duration-400 ${
            error ? "border-rose" : ""
          } ${className}`}
          {...props}
        />
        {error && <p className="text-sm text-rose">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
