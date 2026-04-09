"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { ContactFormData, FormStatus } from "@/lib/types";

interface FormErrors {
  fullName?: string;
  phone?: string;
  stadiumName?: string;
  location?: string;
}

interface FormErrorMessages {
  fullNameRequired: string;
  phoneRequired: string;
  phoneInvalid: string;
  stadiumNameRequired: string;
  locationRequired: string;
}

function validate(data: ContactFormData, errorMessages: FormErrorMessages): FormErrors {
  const errs: FormErrors = {};
  if (!data.fullName.trim()) errs.fullName = errorMessages.fullNameRequired;
  if (!data.phone.trim()) {
    errs.phone = errorMessages.phoneRequired;
  } else if (!/^[\+]?[\d\s\-\(\)]{9,16}$/.test(data.phone.trim())) {
    errs.phone = errorMessages.phoneInvalid;
  }
  if (!data.stadiumName.trim()) errs.stadiumName = errorMessages.stadiumNameRequired;
  if (!data.location.trim()) errs.location = errorMessages.locationRequired;
  return errs;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

function FormInput({ label, error, required, id, className, ...props }: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-light mb-1.5">
        {label}
        {required && <span className="text-brand-green ml-1" aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "w-full bg-dark-700 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-muted transition-all duration-150",
          "focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent",
          "hover:border-dark-500",
          error ? "border-red-400/50" : "border-dark-600",
          className
        )}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M6 3.5V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="6" cy="8.5" r="0.75" fill="currentColor" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

function FormTextarea({ label, error, id, className, ...props }: TextareaProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-light mb-1.5">
        {label}
      </label>
      <textarea
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        rows={3}
        className={cn(
          "w-full bg-dark-700 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-muted transition-all duration-150 resize-none",
          "focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent",
          "hover:border-dark-500",
          error ? "border-red-400/50" : "border-dark-600",
          className
        )}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export default function OwnersForm() {
  const { t } = useLanguage();
  const f = t.owners.form;

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [honeypot, setHoneypot] = useState("");
  const [data, setData] = useState<ContactFormData>({
    fullName: "",
    phone: "",
    stadiumName: "",
    location: "",
    message: "",
  });

  const update = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(data, f.errors);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstKey = Object.keys(errs)[0];
      const el = document.getElementById(`form-${firstKey}`);
      if (el) (el as HTMLElement).focus();
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, website: honeypot }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <SectionWrapper id="owners-form" theme="darker">
        <div className="max-w-lg mx-auto text-center py-8">
          <div className="w-20 h-20 rounded-full bg-brand-green/15 border border-brand-green/30 flex items-center justify-center mx-auto mb-6">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <path d="M8 16l5 5 11-11" stroke="#00D46A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="text-2xl font-extrabold text-white mb-3">{f.successTitle}</h3>
          <p className="text-slate-muted leading-relaxed">{f.successMessage}</p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="owners-form" theme="darker">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <Badge className="mb-4">{f.badge}</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            {f.headline}
          </h2>
          <p className="text-slate-muted">{f.subheadline}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Honeypot — hidden from real users, filled by bots */}
          <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}>
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormInput
              id="form-fullName"
              label={f.fullName}
              placeholder={f.fullNamePlaceholder}
              value={data.fullName}
              onChange={update("fullName")}
              error={errors.fullName}
              required
              autoComplete="name"
            />
            <FormInput
              id="form-phone"
              label={f.phone}
              placeholder={f.phonePlaceholder}
              value={data.phone}
              onChange={update("phone")}
              error={errors.phone}
              required
              type="tel"
              autoComplete="tel"
            />
          </div>

          <FormInput
            id="form-stadiumName"
            label={f.stadiumName}
            placeholder={f.stadiumNamePlaceholder}
            value={data.stadiumName}
            onChange={update("stadiumName")}
            error={errors.stadiumName}
            required
          />

          <FormInput
            id="form-location"
            label={f.location}
            placeholder={f.locationPlaceholder}
            value={data.location}
            onChange={update("location")}
            error={errors.location}
            required
          />

          <FormTextarea
            id="form-message"
            label={f.message}
            placeholder={f.messagePlaceholder}
            value={data.message}
            onChange={update("message")}
          />

          {status === "error" && (
            <div
              role="alert"
              className="flex items-center gap-2.5 p-3.5 bg-red-500/10 border border-red-400/25 rounded-xl text-red-400 text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="flex-shrink-0">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="8" cy="11" r="0.75" fill="currentColor" />
              </svg>
              {f.errorMessage}
            </div>
          )}

          <Button type="submit" size="lg" fullWidth disabled={status === "loading"}>
            {status === "loading" ? (
              <>
                <svg className="animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeDasharray="28" strokeDashoffset="10" strokeLinecap="round" />
                </svg>
                {f.submitting}
              </>
            ) : (
              <>
                {f.submit}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </>
            )}
          </Button>

          <p className="text-center text-xs text-slate-muted">* — majburiy maydonlar</p>
        </form>
      </div>
    </SectionWrapper>
  );
}
