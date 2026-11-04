"use client";

import { X, CircleCheck, CircleExclamationPoint } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { Button, type ButtonVariant } from "./Button";

/** Portal faqat brauzerda — server render paytida document yo'q. */
function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

/** Escape bilan yopish, body scroll'ni bloklash va fokusni dialog ichiga olish. */
function useOverlay(open: boolean, onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  const mounted = useMounted();
  const active = open && mounted;

  useEffect(() => {
    if (!active) return;
    const prev = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeRef.current();
    };
    document.addEventListener("keydown", onKey);
    ref.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
      prev?.focus?.();
    };
  }, [active]);

  return { ref, active };
}

interface OverlayProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  className?: string;
}

/** bare=true — sarlavha va padding'siz, kontent o'z sarlavhasini o'zi chizadi. */
export function Modal({ open, onClose, title, children, className, bare = false }: OverlayProps & { bare?: boolean }) {
  const { ref, active } = useOverlay(open, onClose);
  if (!active) return null;
  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 animate-fade-in bg-dark/55" onClick={onClose} aria-hidden />
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        className={cn(
          "relative max-h-[90vh] w-full animate-pop-in overflow-y-auto rounded-card bg-surface shadow-modal outline-none",
          bare ? "max-w-[680px]" : "max-w-[540px] p-6 lg:p-7",
          className,
        )}
      >
        {!bare && (
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="text-[22px] font-bold tracking-[-0.4px]">{title}</h2>
            <CloseButton onClick={onClose} />
          </div>
        )}
        {children}
      </div>
    </div>,
    document.body,
  );
}

export function BottomSheet({ open, onClose, title, subtitle, children, className }: OverlayProps & { subtitle?: string }) {
  const { ref, active } = useOverlay(open, onClose);
  if (!active) return null;
  return createPortal(
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="absolute inset-0 animate-fade-in bg-dark/50" onClick={onClose} aria-hidden />
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        className={cn(
          "absolute inset-x-0 bottom-0 max-h-[88vh] animate-sheet-up overflow-y-auto rounded-t-3xl bg-surface px-5 pb-6 pt-3 outline-none",
          className,
        )}
      >
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-line" aria-hidden />
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold">{title}</h2>
            {subtitle && <p className="mt-0.5 text-xs text-muted">{subtitle}</p>}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Yopish"
            className="-mr-2 grid size-11 place-items-center rounded-btn text-muted hover:bg-subtle"
          >
            <X className="size-5" />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body,
  );
}

export function ConfirmModal({
  open,
  onClose,
  onConfirm,
  title,
  children,
  confirmLabel,
  cancelLabel = "Orqaga",
  confirmVariant = "primary",
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  children: ReactNode;
  confirmLabel: string;
  cancelLabel?: string;
  confirmVariant?: ButtonVariant;
}) {
  return (
    <Modal open={open} onClose={onClose} title={title}>
      <div>{children}</div>
      <div className="mt-5 flex gap-3">
        <Button variant="secondary" onClick={onClose} className="flex-1">
          {cancelLabel}
        </Button>
        <Button variant={confirmVariant} onClick={onConfirm} className="flex-1">
          {confirmLabel}
        </Button>
      </div>
    </Modal>
  );
}

export function Toast({
  open,
  tone = "success",
  message,
  onClose,
  duration = 4000,
}: {
  open: boolean;
  tone?: "success" | "error";
  message: string;
  onClose: () => void;
  duration?: number;
}) {
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  const mounted = useMounted();
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => closeRef.current(), duration);
    return () => clearTimeout(t);
  }, [open, duration]);

  if (!open || !mounted) return null;
  const Icon = tone === "success" ? CircleCheck : CircleExclamationPoint;
  return createPortal(
    <div className="pointer-events-none fixed inset-x-5 top-5 z-[70] flex justify-end sm:left-auto">
      <div
        role="status"
        aria-live="polite"
        className="pointer-events-auto flex w-full max-w-[380px] animate-pop-in items-start gap-3 rounded-xl border border-line bg-surface p-4 shadow-modal"
      >
        <span
          className={cn(
            "grid size-8 shrink-0 place-items-center rounded-full",
            tone === "success" ? "bg-success-soft text-success" : "bg-danger-soft text-danger",
          )}
        >
          <Icon className="size-[18px]" />
        </span>
        <p className="flex-1 pt-1 text-sm font-medium leading-relaxed">{message}</p>
        <button type="button" onClick={onClose} aria-label="Yopish" className="grid size-8 place-items-center rounded-btn text-muted hover:bg-subtle">
          <X className="size-4" />
        </button>
      </div>
    </div>,
    document.body,
  );
}

export function CloseButton({ onClick, className }: { onClick: () => void; className?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Yopish"
      className={cn("grid size-9 shrink-0 place-items-center rounded-btn bg-subtle text-ink hover:bg-line", className)}
    >
      <X className="size-4" />
    </button>
  );
}