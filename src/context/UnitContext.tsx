import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { units, getUnit, type Unit } from "@/data/units";

type Ctx = {
  unit: Unit;
  setUnitSlug: (slug: Unit["slug"]) => void;
  units: Unit[];
};

const UnitContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "cdp.unit";

export function UnitProvider({
  children,
  defaultSlug,
}: {
  children: ReactNode;
  defaultSlug?: Unit["slug"];
}) {
  const [slug, setSlug] = useState<Unit["slug"]>(defaultSlug ?? "itaparica");

  useEffect(() => {
    if (defaultSlug) return;
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY) as Unit["slug"] | null;
    if (saved && units.some((u) => u.slug === saved)) setSlug(saved);
  }, [defaultSlug]);

  const setUnitSlug = (s: Unit["slug"]) => {
    setSlug(s);
    if (typeof window !== "undefined") window.localStorage.setItem(STORAGE_KEY, s);
  };

  return (
    <UnitContext.Provider value={{ unit: getUnit(slug), setUnitSlug, units }}>
      {children}
    </UnitContext.Provider>
  );
}

export function useUnit() {
  const ctx = useContext(UnitContext);
  if (!ctx) throw new Error("useUnit must be inside UnitProvider");
  return ctx;
}

export function useOptionalUnit() {
  return useContext(UnitContext);
}
