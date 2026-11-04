import Link from "next/link";
import type { ComponentProps } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "dangerSoft" | "white";
export type ButtonSize = "sm" | "md" | "lg";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white hover:bg-accent-hover",
  secondary: "bg-surface text-ink border border-line hover:bg-subtle",
  ghost: "bg-transparent text-accent hover:bg-accent-soft",
  danger: "bg-danger text-white hover:bg-danger-hover",
  dangerSoft: "bg-danger-soft text-danger hover:bg-danger/15",
  white: "bg-surface text-accent hover:bg-subtle",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: { variant?: ButtonVariant; size?: ButtonSize; className?: string } = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-btn font-semibold transition-colors",
    "disabled:pointer-events-none disabled:opacity-45 aria-disabled:pointer-events-none aria-disabled:opacity-45",
    VARIANTS[variant],
    SIZES[size],
    className,
  );
}

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  loading?: boolean;
}

export function Button({
  variant,
  size,
  icon: Icon,
  loading,
  className,
  children,
  disabled,
  type = "button",
  ...rest
}: CommonProps & ComponentProps<"button">) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={buttonClasses({ variant, size, className })}
      {...rest}
    >
      {loading ? (
        <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden />
      ) : (
        Icon && <Icon className="size-[18px]" strokeWidth={2} aria-hidden />
      )}
      {children}
    </button>
  );
}

export function ButtonLink({
  variant,
  size,
  icon: Icon,
  className,
  children,
  ...rest
}: Omit<CommonProps, "loading"> & ComponentProps<typeof Link>) {
  return (
    <Link className={buttonClasses({ variant, size, className })} {...rest}>
      {Icon && <Icon className="size-[18px]" strokeWidth={2} aria-hidden />}
      {children}
    </Link>
  );
}
