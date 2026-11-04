import { Skeleton } from "@/components/ui/Basics";

export default function Loading() {
  return (
    <div className="container-page pb-16 pt-6 lg:pt-10" aria-busy="true" aria-label="Maydonlar yuklanmoqda">
      <Skeleton className="h-4 w-40" />
      <Skeleton className="mt-5 h-9 w-64" />
      <Skeleton className="mt-3 h-5 w-full max-w-[520px]" />
      <div className="mt-8 flex items-start gap-6">
        <div className="hidden w-[280px] shrink-0 space-y-4 rounded-card border border-line bg-surface p-5 lg:block">
          {Array.from({ length: 8 }, (_, i) => (
            <Skeleton key={i} className="h-6 w-full" />
          ))}
        </div>
        <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="overflow-hidden rounded-card border border-line bg-surface">
              <Skeleton className="aspect-[16/10] rounded-none" />
              <div className="space-y-3 p-4">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-11 w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
