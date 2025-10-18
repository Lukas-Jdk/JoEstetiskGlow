export type TreatmentSlug = "botox" | "profhilo" | "fillers" | "laser" | "consult";

export type TreatmentCard = {
  id: TreatmentSlug;
  title: string;
  image: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string; // lankstesnis variantas
  category?: string;
};

export const caruseleTreatments: TreatmentCard[] = [
  {
    id: "botox",
    title: "Botox",
    image: "/botox.webp",
    bullets: ["Reduserer fine linjer", "Jevnere og friskere hud"],
    ctaLabel: "Se priser",
    ctaHref: "/prices#botox",
    category: "Injeksjoner",
  },
  {
    id: "profhilo",
    title: "Profhilo behandling",
    image: "/profhilo.webp",
    bullets: ["Forbedrer hudstruktur og elastisitet", "Gir fukt og spenst"],
    ctaLabel: "Se priser",
    ctaHref: "/prices#profhilo",
    category: "Hudforbedring",
  },
  {
    id: "fillers",
    title: "Fillers",
    image: "/filer.webp",
    bullets: ["Gjenoppretter volum", "Fremhever ansiktskonturer"],
    ctaLabel: "Se priser",
    ctaHref: "/prices#fillers",
    category: "Injeksjoner",
  },
  {
    id: "laser",
    title: "Laser hårfjerning Oslo",
    image: "/lazer.webp",
    bullets: ["Myk og glatt hud", "Langvarige resultater"],
    ctaLabel: "Se priser",
    ctaHref: "/prices#laser",
    category: "Maskinbehandling",
  },
];
