import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "MiniPolya — mini-futbol maydonlarini onlayn bron qilish";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const logo = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0B1220",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={72} height={72} style={{ borderRadius: 18 }} alt="" />
          <span style={{ fontSize: 44, fontWeight: 700 }}>MiniPolya</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2, maxWidth: 940 }}>
            Futbol maydonini 1 daqiqada bron qiling
          </span>
          <span style={{ fontSize: 30, color: "rgba(255,255,255,0.7)" }}>
            Toshkentdagi mini-futbol maydonlari · Onlayn to&apos;lov · minipolya.uz
          </span>
        </div>
      </div>
    ),
    size,
  );
}
