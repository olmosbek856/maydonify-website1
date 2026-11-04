/**
 * Mock ma'lumotlar — backend ulanguncha prototip shu ma'lumotlar bilan ishlaydi.
 * Barcha matn o'zbek lotin tilida.
 */

export const DISTRICTS = [
  "Chilonzor",
  "Yunusobod",
  "Mirzo Ulug'bek",
  "Sergeli",
  "Yakkasaroy",
  "Shayxontohur",
] as const;
export type District = (typeof DISTRICTS)[number];

export const PITCH_SIZES = ["5x5", "6x6", "7x7"] as const;
export type PitchSize = (typeof PITCH_SIZES)[number];
export type PitchType = "Yopiq" | "Ochiq";

export const AMENITIES = ["Kiyinish xonasi", "Dush", "Yoritish", "Parkovka", "Tomoshabin o'rni", "Inventar"] as const;
export type Amenity = (typeof AMENITIES)[number];

/** pen.dev canvas'dagi rasmlar (U1–U9, U3 ishlatilmaydi). */
const unsplash = (id: string, ixid: string) =>
  `https://images.unsplash.com/${id}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=${ixid}&ixlib=rb-4.1.0&q=80&w=1080`;
export const IMG = {
  pitchNight: unsplash("photo-1503753024571-3e39032c3807", "M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3OTM3ODQxMjZ8"), // U1
  pitchIndoor: unsplash("photo-1788204406198-83182d218b91", "M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3OTM3ODQxMjd8"), // U2
  heroSunset: unsplash("photo-1602100923663-9524d6eaa91a", "M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3OTM3ODM2MjZ8"), // U4
  pitchTurf: unsplash("photo-1780842815933-489d2e89d7a1", "M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3OTM3ODM2MjZ8"), // U5
  pitchArena: unsplash("photo-1640604905813-f98d33709f49", "M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3OTM3ODM2MjZ8"), // U6
  pitchFloodlights: unsplash("photo-1791132034052-da37c49fa424", "M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3OTM3ODM2MjZ8"), // U7
  heroDusk: unsplash("photo-1643607155594-7aefe42baef6", "M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3OTM3ODM2MjZ8"), // U8
  pitchSmall: unsplash("photo-1604162458755-53c7869da276", "M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3OTM3ODM2MjV8"), // U9
};

/** Maydon sahifasi galereyasidagi kichik rasmlar (canvas: desktop 4 ta, mobil 3 ta). */
export const GALLERY_DESKTOP = [IMG.pitchTurf, IMG.pitchArena, IMG.pitchArena, IMG.pitchFloodlights];
export const GALLERY_MOBILE = [IMG.pitchIndoor, IMG.pitchTurf, IMG.pitchArena];

export interface Pitch {
  slug: string;
  name: string;
  district: District;
  address: string;
  rating: number;
  reviews: number;
  price: number;
  type: PitchType;
  size: PitchSize;
  capacity: number;
  amenities: Amenity[];
  /** Bosh sahifa, o'xshash maydonlar, bronlar va checkout'dagi rasm. */
  image: string;
  /** "Maydonlar" ro'yxatidagi rasm (canvas'da ba'zan boshqacha). */
  listImage?: string;
  popularity: number;
}

const RAW_PITCHES: Omit<Pitch, "popularity">[] = [
  { slug: "chilonzor-arena", name: "Chilonzor Arena", district: "Chilonzor", address: "Bunyodkor ko'chasi 12", rating: 4.8, reviews: 124, price: 250000, type: "Yopiq", size: "6x6", capacity: 12, amenities: ["Kiyinish xonasi", "Dush", "Yoritish", "Parkovka"], image: IMG.pitchNight },
  { slug: "yunusobod-sport", name: "Yunusobod Sport", district: "Yunusobod", address: "Amir Temur shoh ko'chasi 108", rating: 4.9, reviews: 86, price: 300000, type: "Yopiq", size: "7x7", capacity: 14, amenities: ["Kiyinish xonasi", "Dush", "Yoritish", "Parkovka", "Inventar"], image: IMG.heroSunset, listImage: IMG.pitchIndoor },
  { slug: "olimpiya-mini", name: "Olimpiya Mini", district: "Mirzo Ulug'bek", address: "Mustaqillik shoh ko'chasi 59", rating: 4.7, reviews: 52, price: 180000, type: "Ochiq", size: "5x5", capacity: 10, amenities: ["Yoritish", "Parkovka"], image: IMG.pitchIndoor, listImage: IMG.pitchSmall },
  { slug: "sergeli-futbol-park", name: "Sergeli Futbol Park", district: "Sergeli", address: "Yangi Sergeli ko'chasi 4", rating: 4.6, reviews: 41, price: 200000, type: "Ochiq", size: "6x6", capacity: 12, amenities: ["Kiyinish xonasi", "Yoritish", "Parkovka"], image: IMG.pitchTurf },
  { slug: "yakkasaroy-arena", name: "Yakkasaroy Arena", district: "Yakkasaroy", address: "Shota Rustaveli ko'chasi 33", rating: 4.8, reviews: 73, price: 280000, type: "Yopiq", size: "6x6", capacity: 12, amenities: ["Kiyinish xonasi", "Dush", "Yoritish", "Tomoshabin o'rni"], image: IMG.pitchArena },
  { slug: "shayxontohur-mini", name: "Shayxontohur Mini", district: "Shayxontohur", address: "Navoiy ko'chasi 21", rating: 4.5, reviews: 28, price: 190000, type: "Yopiq", size: "5x5", capacity: 10, amenities: ["Kiyinish xonasi", "Yoritish"], image: IMG.pitchFloodlights },
  { slug: "bunyodkor-mini", name: "Bunyodkor Mini", district: "Chilonzor", address: "Qatortol ko'chasi 7", rating: 4.9, reviews: 156, price: 350000, type: "Yopiq", size: "7x7", capacity: 14, amenities: ["Kiyinish xonasi", "Dush", "Yoritish", "Parkovka", "Tomoshabin o'rni", "Inventar"], image: IMG.heroDusk },
  { slug: "mirzo-ulugbek-stadion", name: "Mirzo Ulug'bek Stadion", district: "Mirzo Ulug'bek", address: "Buyuk Ipak Yo'li ko'chasi 154", rating: 4.7, reviews: 64, price: 320000, type: "Ochiq", size: "7x7", capacity: 14, amenities: ["Kiyinish xonasi", "Dush", "Yoritish", "Parkovka"], image: IMG.heroSunset },
  { slug: "yunusobod-yunus", name: "Yunusobod Yunus", district: "Yunusobod", address: "Bodomzor yo'li 2", rating: 4.4, reviews: 19, price: 220000, type: "Yopiq", size: "5x5", capacity: 10, amenities: ["Yoritish", "Parkovka"], image: IMG.pitchIndoor },
];

/** "Mashhurlik" tartibi = canvas'dagi tartib. */
export const PITCHES: Pitch[] = RAW_PITCHES.map((p, i) => ({ ...p, popularity: 100 - i }));
export const getPitch = (slug: string) => PITCHES.find((p) => p.slug === slug);

/** Kunlik jadval: 08:00–23:00 boshlanish vaqtlari. */
export const SLOT_TIMES = Array.from({ length: 16 }, (_, i) => `${String(i + 8).padStart(2, "0")}:00`);

export type SlotState = "free" | "taken" | "few";

/** Deterministik "band" jadval — har bir maydon/kun uchun bir xil natija (SSR va klientda). */
export function slotStates(slug: string, dayIndex: number): Record<string, SlotState> {
  let seed = [...slug].reduce((a, c) => a + c.charCodeAt(0), 0) + dayIndex * 31;
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  return Object.fromEntries(
    SLOT_TIMES.map((t) => {
      const r = rnd();
      const hour = Number(t.slice(0, 2));
      const peak = hour >= 18 && hour <= 22;
      const state: SlotState = r < (peak ? 0.45 : 0.3) ? "taken" : peak && r < 0.6 ? "few" : "free";
      return [t, state];
    }),
  );
}

/** Bron qilish uchun 7 kunlik sanalar (prototip: 2026-yil 19–25 oktyabr). */
export const BOOKING_DAYS = [
  { short: "Du", day: 19, date: "19.10.2026" },
  { short: "Se", day: 20, date: "20.10.2026" },
  { short: "Ch", day: 21, date: "21.10.2026" },
  { short: "Pa", day: 22, date: "22.10.2026" },
  { short: "Ju", day: 23, date: "23.10.2026" },
  { short: "Sh", day: 24, date: "24.10.2026" },
  { short: "Ya", day: 25, date: "25.10.2026" },
];

export const PITCH_RULES = [
  "Faqat sport poyabzalida o'ynash mumkin (sun'iy o'tloq).",
  "Chekish va alkogolli ichimliklar maydonda taqiqlangan.",
  "Bron vaqti aniq boshlanadi — kechikish vaqtni uzaytirmaydi.",
  "O'yindan keyin inventarni joyiga qaytarib qo'ying.",
];

export const PITCH_REVIEWS = [
  { name: "Sardor M.", date: "1 hafta oldin", text: "Maydon zo'r, yoritish kuchli. Kiyinish xonasi toza." },
  { name: "Javohir T.", date: "2 hafta oldin", text: "Vaqtida boshlanadi, hech qanday navbat yo'q. Narxi ham munosib." },
  { name: "Aziz R.", date: "3 hafta oldin", text: "Sun'iy o'tloq yangi, to'p yaxshi. Faqat parkovka biroz tor." },
];

/** Sharhlar taqsimoti (5★ → 1★), prototipdagi 92/21/7/2/2 nisbatida. */
export function ratingDistribution(total: number): [number, number][] {
  const share = [92, 21, 7, 2, 2].map((v) => v / 124);
  return share.map((s, i) => [5 - i, Math.round(total * s)]);
}

/* ---------------- Guruh o'yinlari ---------------- */

export type GameType = "open" | "team";
export const GAME_TYPE_LABEL: Record<GameType, string> = { open: "Ochiq o'yin", team: "Jamoa vs jamoa" };
export const LEVELS = ["Boshlang'ich", "O'rta daraja", "Kuchli daraja"] as const;
export type Level = (typeof LEVELS)[number];

export interface Game {
  id: number;
  type: GameType;
  level: Level;
  date: string;
  time: string;
  pitch: string;
  district: District;
  joined: number;
  total: number;
  price: number;
}

export const GAMES: Game[] = [
  { id: 1, type: "open", level: "O'rta daraja", date: "24.10.2026", time: "20:00–21:00", pitch: "Chilonzor Arena", district: "Chilonzor", joined: 8, total: 14, price: 25000 },
  { id: 2, type: "team", level: "Kuchli daraja", date: "25.10.2026", time: "19:00–20:00", pitch: "Yunusobod Sport", district: "Yunusobod", joined: 10, total: 12, price: 30000 },
  { id: 3, type: "open", level: "Boshlang'ich", date: "26.10.2026", time: "21:00–22:00", pitch: "Olimpiya Mini", district: "Mirzo Ulug'bek", joined: 5, total: 10, price: 20000 },
  { id: 4, type: "open", level: "O'rta daraja", date: "26.10.2026", time: "18:00–19:00", pitch: "Sergeli Futbol Park", district: "Sergeli", joined: 12, total: 14, price: 22000 },
  { id: 5, type: "team", level: "O'rta daraja", date: "27.10.2026", time: "20:00–21:00", pitch: "Yakkasaroy Arena", district: "Yakkasaroy", joined: 14, total: 14, price: 28000 },
  { id: 6, type: "open", level: "Kuchli daraja", date: "27.10.2026", time: "22:00–23:00", pitch: "Shayxontohur Mini", district: "Shayxontohur", joined: 7, total: 12, price: 26000 },
];

export const PLAYERS = ["Aziz R.", "Javohir T.", "Sardor M.", "Bekzod A.", "Umid Q.", "Doniyor S.", "Rustam N.", "Shohruh K.", "Islom B.", "Jasur E.", "Otabek F.", "Kamron X.", "Sherzod Y.", "Ulug'bek Z."];

/* ---------------- Bronlar ---------------- */

export type BookingStatus = "Tasdiqlangan" | "Kutilmoqda" | "Bekor qilingan" | "Yakunlangan" | "To'langan";
export type BookingTab = "kelgusi" | "otgan" | "bekor";

export interface Booking {
  id: string;
  pitchSlug: string;
  date: string;
  time: string;
  amount: number;
  status: BookingStatus;
  tab: BookingTab;
  /** O'yin boshlanishigacha qolgan soat (bekor qilish qoidasi uchun). */
  hoursLeft?: number;
}

export const BOOKINGS: Booking[] = [
  { id: "MP-20481", pitchSlug: "chilonzor-arena", date: "24.10.2026", time: "20:00–21:00", amount: 250000, status: "Tasdiqlangan", tab: "kelgusi", hoursLeft: 72 },
  { id: "MP-20496", pitchSlug: "yunusobod-sport", date: "27.10.2026", time: "19:00–20:00", amount: 300000, status: "Kutilmoqda", tab: "kelgusi", hoursLeft: 3 },
  { id: "MP-20377", pitchSlug: "olimpiya-mini", date: "12.10.2026", time: "21:00–22:00", amount: 180000, status: "Yakunlangan", tab: "otgan" },
  { id: "MP-20211", pitchSlug: "sergeli-futbol-park", date: "02.10.2026", time: "18:00–19:00", amount: 200000, status: "Bekor qilingan", tab: "bekor" },
];

/* ---------------- Savol-javob ---------------- */

export const FAQ: [string, string][] = [
  ["Qanday to'layman?", "To'lov faqat platforma orqali amalga oshiriladi: Humo yoki UZCard kartasi bilan. Maydonning o'zida naqd pul bilan to'lash imkoniyati yo'q — bu barcha maydonlar uchun bir xil qoida."],
  ["Bronni bekor qilsam, pul qaytariladimi?", "Ha. O'yin boshlanishidan 24 soatdan ko'proq vaqt oldin bekor qilsangiz, to'lov to'liq qaytariladi. 24 soatdan kam vaqt qolsa, pul qaytarilmaydi."],
  ["Ochiq o'yin nima?", "Bu bitta o'yinchi sifatida qo'shilib o'ynaydigan o'yin. Har bir o'yinchi o'z ulushini oldindan to'laydi va ishtirokchilar ro'yxatida ko'rinadi."],
  ["Maydon egasi bilan qanday bog'lanaman?", "Bron tasdiqlangandan keyin maydon manzili va aloqa raqami SMS orqali yuboriladi. Qo'shimcha savollar uchun qo'llab-quvvatlash xizmatiga yozishingiz mumkin."],
  ["To'lov xavfsizmi?", "To'lov bank ekvayringi orqali amalga oshiriladi. MiniPolya karta raqamingizni saqlamaydi va uchinchi shaxslarga bermaydi."],
];

export const OWNER_FAQ: [string, string][] = [
  ["Xizmat uchun qancha komissiya to'layman?", "Har bir muvaffaqiyatli brondan 10% komissiya olinadi. Ro'yxatdan o'tish, maydonni joylashtirish va boshqaruv paneli — bepul."],
  ["To'lov qachon hisobimga tushadi?", "Har hafta dushanba kuni o'tgan haftadagi barcha bronlar uchun to'lov Humo yoki UZCard kartangizga o'tkaziladi."],
  ["Bekor qilish qanday ishlaydi?", "O'yinchi 24 soat oldin bekor qilsa, pul unga qaytariladi va vaqt yana bo'sh bo'ladi. 24 soatdan kam qolgan bo'lsa, to'lov sizda qoladi."],
  ["Maydonni o'zim boshqara olamanmi?", "Ha. Panelda jadval, narxlar, yopiq vaqtlar va sharhlarni o'zingiz boshqarasiz. Menejer faqat boshlang'ich sozlashda yordam beradi."],
];
