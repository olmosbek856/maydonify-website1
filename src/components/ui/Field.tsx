"use client";

import { ChevronDown } from "lucide-react";
import { useId, type ComponentProps, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const boxBase =
  "flex h-12 items-center rounded-btn border bg-surface px-3.5 transition-colors focus-within:border-accent focus-within:ring-2 focus-within:ring-accent-soft";

interface FieldShellProps {
  label: string;
  error?: string;
  hint?: string;
  id: string;
  children: ReactNode;
  className?: string;
}

function FieldShell({ label, error, hint, id, children, className }: FieldShellProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-[13px] font-semibold">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-msg`} className="mt-1.5 text-[13px] text-danger" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-msg`} className="mt-1.5 text-[13px] text-muted">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

type InputProps = ComponentProps<"input"> & { label: string; error?: string; hint?: string; prefix?: string };

export function TextField({ label, error, hint, prefix, className, id, ...rest }: InputProps) {
  const auto = useId();
  const fid = id ?? auto;
  return (
    <FieldShell label={label} error={error} hint={hint} id={fid} className={className}>
      <div className={cn(boxBase, error ? "border-danger" : "border-line")}>
        {prefix && <span className="mr-2 border-r border-line pr-2.5 text-[15px] font-medium">{prefix}</span>}
        <input
          id={fid}
          aria-invalid={!!error}
          aria-describedby={error || hint ? `${fid}-msg` : undefined}
          className="w-full bg-transparent text-[15px] outline-none placeholder:text-muted"
          {...rest}
        />
      </div>
    </FieldShell>
  );
}

type SelectProps = ComponentProps<"select"> & { label: string; error?: string; options: readonly string[]; placeholder?: string };

export function SelectField({ label, error, options, placeholder, className, id, ...rest }: SelectProps) {
  const auto = useId();
  const fid = id ?? auto;
  return (
    <FieldShell label={label} error={error} id={fid} className={className}>
      <div className={cn(boxBase, "relative", error ? "border-danger" : "border-line")}>
        <select
          id={fid}
          aria-invalid={!!error}
          className="h-full w-full appearance-none bg-transparent pr-7 text-[15px] outline-none"
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3.5 size-[18px] text-muted" aria-hidden />
      </div>
    </FieldShell>
  );
}

type TextareaProps = ComponentProps<"textarea"> & { label: string; error?: string };

export function TextareaField({ label, error, className, id, ...rest }: TextareaProps) {
  const auto = useId();
  const fid = id ?? auto;
  return (
    <FieldShell label={label} error={error} id={fid} className={className}>
      <textarea
        id={fid}
        rows={3}
        aria-invalid={!!error}
        className={cn(
          "w-full rounded-btn border bg-surface px-3.5 py-3 text-[15px] outline-none transition-colors placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent-soft",
          error ? "border-danger" : "border-line",
        )}
        {...rest}
      />
    </FieldShell>
  );
}

/** Tanlanadigan "chip" tugma (filtrlar, tablar uchun). */
export function Chip({
  active,
  className,
  children,
  ...rest
}: ComponentProps<"button"> & { active?: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        "inline-flex min-h-10 items-center rounded-full border px-3.5 text-[13px] font-medium transition-colors",
        active ? "border-accent bg-accent-soft text-accent" : "border-line bg-surface text-ink hover:bg-subtle",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function Checkbox({
  label,
  className,
  ...rest
}: ComponentProps<"input"> & { label: ReactNode }) {
  return (
    <label className={cn("flex min-h-8 cursor-pointer items-center gap-2.5 text-sm", className)}>
      <input type="checkbox" className="peer sr-only" {...rest} />
      <span className="grid size-5 shrink-0 place-items-center rounded-md border border-line bg-surface transition-colors peer-checked:border-accent peer-checked:bg-accent peer-focus-visible:ring-2 peer-focus-visible:ring-accent [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100">
        <svg className="size-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5} aria-hidden>
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      <span>{label}</span>
    </label>
  );
}

export function Switch({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative h-6 w-11 shrink-0 rounded-full transition-colors",
        checked ? "bg-accent" : "bg-line",
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 size-5 rounded-full bg-white transition-all",
          checked ? "left-[22px]" : "left-0.5",
        )}
      />
    </button>
  );
}
