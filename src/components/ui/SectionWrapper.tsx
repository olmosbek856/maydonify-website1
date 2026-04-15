import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  theme?: "dark" | "light" | "darker";
  style?: React.CSSProperties;
}

export default function SectionWrapper({
  children,
  className,
  id,
  theme = "dark",
  style,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      style={style}
      className={cn(
        "w-full border-t",
        theme === "dark" && "bg-dark-900 border-white/[0.04]",
        theme === "darker" && "bg-dark-800 border-white/[0.06]",
        theme === "light" && "bg-light-50 border-white/[0.02]",
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {children}
      </div>
    </section>
  );
}
