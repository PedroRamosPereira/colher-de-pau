import { useUnit } from "@/context/UnitContext";
import { MapPin } from "lucide-react";

export function UnitSwitcher({ className = "" }: { className?: string }) {
  const { unit, setUnitSlug, units } = useUnit();
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur-sm px-3 py-1.5 ${className}`}>
      <MapPin className="h-3.5 w-3.5 text-caramel" aria-hidden />
      <label htmlFor="unit-switch" className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        Unidade
      </label>
      <select
        id="unit-switch"
        value={unit.slug}
        onChange={(e) => setUnitSlug(e.target.value as typeof unit.slug)}
        className="bg-transparent text-sm font-medium text-foreground focus:outline-none cursor-pointer"
      >
        {units.map((u) => (
          <option key={u.slug} value={u.slug}>{u.shortName}</option>
        ))}
      </select>
    </div>
  );
}
