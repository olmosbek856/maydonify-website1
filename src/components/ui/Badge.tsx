import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "dark" | "light";
  className?: string;
}

export default function Badge({ children, variant = "green", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase rounded-full px-3 py-1",
        variant === "green" && "bg-brand-green/15 text-brand-green border border-brand-green/25",
        variant === "dark" && "bg-dark-700 text-slate-muted border border-dark-600",
        variant === "light" && "bg-light-100 text-dark-900 border border-light-100",
        className
      )}
    >
      {children}
    </span>
  );
}
