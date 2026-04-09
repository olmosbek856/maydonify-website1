import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  theme?: "dark" | "light" | "darker";
}

export default function SectionWrapper({
  children,
  className,
  id,
  theme = "dark",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full",
        theme === "dark" && "bg-dark-900",
        theme === "darker" && "bg-dark-800",
        theme === "light" && "bg-light-50",
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {children}
      </div>
    </section>
  );
}
