import { Breadcrumb } from "@/components/ui/Basics";

export interface LegalContent {
  title: string;
  updated: string;
  intro: string;
  sections: { title: string; content: string }[];
}

export function LegalPage({ content }: { content: LegalContent }) {
  return (
    <div className="container-page max-w-[800px] pb-16 pt-6 lg:pb-24 lg:pt-10">
      <Breadcrumb items={[{ label: "Bosh sahifa", href: "/" }, { label: content.title }]} />
      <h1 className="mt-5 text-[26px] font-bold tracking-[-0.8px] lg:text-4xl">{content.title}</h1>
      <p className="mt-2 text-sm text-muted">Oxirgi yangilanish: {content.updated}</p>
      <p className="mt-8 rounded-card border border-line bg-surface p-5 text-[15px] leading-relaxed">{content.intro}</p>
      <ol className="mt-8 space-y-8">
        {content.sections.map((s, i) => (
          <li key={s.title}>
            <h2 className="flex items-center gap-3 text-lg font-semibold">
              <span className="grid size-7 shrink-0 place-items-center rounded-btn bg-accent-soft text-xs font-bold text-accent">{i + 1}</span>
              {s.title}
            </h2>
            <p className="mt-3 pl-10 text-[15px] leading-[1.7] text-muted">{s.content}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
