import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  theme?: "dark" | "light";
  hover?: boolean;
}

export default function Card({ children, className, theme = "dark", hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl",
        theme === "dark" && "bg-dark-800 border border-dark-700",
        theme === "light" && "bg-white border border-light-100 shadow-sm",
        hover &&
          theme === "dark" &&
          "hover:border-dark-600 hover:bg-dark-700/50 transition-all duration-200",
        hover &&
          theme === "light" &&
          "hover:shadow-md hover:-translate-y-0.5 transition-all duration-200",
        className
      )}
    >
      {children}
    </div>
  );
}
