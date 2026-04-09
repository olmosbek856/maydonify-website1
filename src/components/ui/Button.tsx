import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          // Base
          "inline-flex items-center justify-center gap-2 font-semibold leading-none tracking-[0.01em] transition-all duration-150 cursor-pointer select-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900",
          // Disabled
          disabled && "opacity-40 cursor-not-allowed pointer-events-none",
          // Sizes
          size === "sm" && "text-[13px] px-4 py-2 rounded-lg",
          size === "md" && "text-[15px] px-6 py-3 rounded-xl",
          size === "lg" && "text-[15px] px-7 py-3.5 rounded-xl",
          // Variants
          variant === "primary" &&
            "bg-brand-green text-dark-900 hover:bg-brand-green-dark hover:shadow-lg hover:shadow-brand-green/20 active:scale-[0.97]",
          variant === "secondary" &&
            "bg-dark-700 text-white hover:bg-dark-600 active:scale-[0.97]",
          variant === "ghost" &&
            "bg-transparent text-white hover:bg-white/8 active:scale-[0.97]",
          variant === "outline" &&
            "bg-transparent border border-white/20 text-white hover:border-white/40 hover:bg-white/6 active:scale-[0.97]",
          // Full width
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
