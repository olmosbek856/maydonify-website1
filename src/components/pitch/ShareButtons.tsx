"use client";

import { useState } from "react";
import { Heart, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Toast } from "@/components/ui/Overlay";

export function ShareButtons({ title }: { title: string }) {
  const [liked, setLiked] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
      } else {
        await navigator.clipboard.writeText(url);
        setToast("Havola nusxalandi");
      }
    } catch {
      /* foydalanuvchi bekor qildi */
    }
  };

  const base = "grid size-11 place-items-center rounded-btn border border-line bg-surface transition-colors hover:bg-subtle";
  return (
    <div className="flex shrink-0 gap-2">
      <button
        type="button"
        onClick={() => {
          setLiked((v) => !v);
          setToast(liked ? "Saqlanganlardan olib tashlandi" : "Saqlanganlarga qo'shildi");
        }}
        aria-pressed={liked}
        aria-label="Saqlash"
        className={base}
      >
        <Heart className={cn("size-5", liked && "fill-danger text-danger")} />
      </button>
      <button type="button" onClick={share} aria-label="Ulashish" className={base}>
        <Share2 className="size-5" />
      </button>
      <Toast open={!!toast} message={toast ?? ""} onClose={() => setToast(null)} />
    </div>
  );
}
