// data/procedures.ts
export type ProcedureItem = {
  id: string;
  title: string;
  price: string;
  description?: string;
  note?: string;
};

export type ProcedureGroup = {
  id: string;
  title: string;
  items: ProcedureItem[];
};

export const procedureGroups: ProcedureGroup[] = [
  {
    id: "botox",
    title: "Botox / Medisinske injeksjoner",
    items: [
      { id: "botox-1-omrade", title: "Botox – 1 område (1 ml)", price: "2800 NOK" },
      { id: "botox-2-omrader", title: "Botox – 2 områder (2 ml)", price: "3500 NOK" },
      { id: "svettebehandling-underarm", title: "Svettebehandling – underarm", price: "fra 4200 NOK" },
      { id: "masseter-botox", title: "Masseter (kjeveområde) – botox", price: "3500 NOK" },
      { id: "medisinsk-inj-1", title: "Medisinsk injeksjon – 1. område", price: "2100 NOK", note: "Oppført i Timma" },
      { id: "medisinsk-inj-2", title: "Medisinsk injeksjon – 2. områder", price: "3200 NOK", note: "Oppført i Timma" },
      { id: "medisinsk-inj-3", title: "Medisinsk injeksjon – 3. områder", price: "4300 NOK", note: "Oppført i Timma" },
    ],
  },
  {
    id: "profhilo",
    title: "Profhilo",
    items: [
      {
        id: "profhilo-1",
        title: "Profhilo – 1 behandling",
        price: "3600 NOK",
        description:
          "Profhilo er en bio-stimulator basert på stabilisert hyaluronsyre med både lav og høy molekylvekt. Behandlingen gir huden mer spenst, fukt og jevnere hudtone.",
      },
      { id: "profhilo-2", title: "Profhilo – pakke (2 behandlinger)", price: "6500 NOK" },
      { id: "profhilo-timma-1", title: "Profhilo injeksjon – 1. behandling (Timma)", price: "3900 NOK" },
      { id: "profhilo-timma-2", title: "Profhilo injeksjon – 2. behandling (Timma)", price: "7200 NOK" },
    ],
  },
  {
    id: "fillers", // <-- pataisyta (buvo "fillere")
    title: "Fillere (hyaluronsyre)",
    items: [
      {
        id: "filler-aprasymas",
        title: "Hva er en fillerbehandling?",
        price: "—",
        description:
          "Fillere tilfører volum til huden for å redusere rynker, forbedre ansiktskonturer eller forstørre lepper. De inneholder vanligvis hyaluronsyre – et naturlig stoff i kroppen som binder vann og gir fylde og fuktighet.",
        note: "Informasjonstekst (ingen pris).",
      },
      { id: "lepper-1ml", title: "Lepper – 1 ml", price: "2500 NOK" },
      { id: "lepper-2ml", title: "Lepper – 2 ml", price: "3200 NOK" },
      { id: "masseter-filler", title: "Masseter – filler", price: "2800 NOK" },
      { id: "tear-trough", title: "Tear trough (under øyne)", price: "3400 NOK" },
      { id: "sur-munn", title: "Sur munn (munnviker)", price: "3300 NOK" },
      { id: "fjerning-av-filler", title: "Fjerning av filler", price: "3300 NOK" },
    ],
  },
  {
    id: "laser",
    title: "Laser hårfjerning",
    items: [
      {
        id: "laser-fra",
        title: "Laser hårfjerning",
        price: "fra 1200 NOK",
        note: "Pakkepris kan avtales individuelt.",
      },
    ],
  },
  {
    id: "konsultasjon",
    title: "Konsultasjon",
    items: [
      {
        id: "konsultasjon",
        title: "Konsultasjon",
        price: "0 NOK",
        note: "Gratis ved bestilling av behandling. Ellers 350 NOK.",
      },
    ],
  },
] as const;

export function allItems(): ProcedureItem[] {
  return procedureGroups.flatMap((g) => g.items);
}
export function findItem(id: string): ProcedureItem | undefined {
  return allItems().find((i) => i.id === id);
}
