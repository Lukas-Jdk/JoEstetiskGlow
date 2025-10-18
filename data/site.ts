// data/site.ts
export const site = {
  timmaUrl: "https://www.timma.no/salong/klinikk-resplandor-as",

  // 🔽 nauja
  siteUrl: "https://www.estetiskglow.no", // <- įrašyk tikrą domeną kai turėsi
  brand: "Estetisk Glow",
  defaultDescription:
    "Naturlige resultater med estetiske behandlinger i Oslo. Trygt, profesjonelt og personlig.",
  social: {
    instagram: "https://www.instagram.com/estetiskglow", // jei neturi, gali palikti tuščią arba ištrinti
    facebook: "https://www.facebook.com/estetiskglow"
  },
  assets: {
    logo: "/logo11.png",
    ogImage: "/og-home.jpg", // įkelk į /public (1200×630 rekomenduojama)
    favicon: "/favicon.ico"
  }
} as const;
