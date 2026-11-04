export const siteConfig = {
  /**
   * Onlayn bron, to'lov, kirish, bronlarim, profil va o'yinga qo'shilish.
   * To'lov tizimi ulanmaguncha false — sayt faqat ko'rish uchun ishlaydi.
   * true qilinsa, barcha bron sahifalari va tugmalari qaytadan yoqiladi.
   */
  bookingEnabled: false,

  name: "MiniPolya",
  domain: "minipolya.uz",
  url: "https://minipolya.uz",
  description:
    "Toshkentdagi mini-futbol maydonlarini onlayn bron qilish platformasi. Bo'sh vaqtni toping, onlayn to'lang va o'ynang.",

  // Aloqa
  email: "support@minipolya.uz",
  privacyEmail: "privacy@minipolya.uz",

  // Ijtimoiy tarmoqlar
  telegramHandle: "@minipolya_uz",
  telegram: "https://t.me/minipolya_uz",
  instagramHandle: "@minipolya.uz",
  instagram: "https://instagram.com/minipolya.uz",
} as const;
