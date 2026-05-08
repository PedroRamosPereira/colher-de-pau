import { useUnit } from "@/context/UnitContext";
import { MapPin } from "lucide-react";
import { useNavigate, useRouter } from "@tanstack/react-router";

export function UnitSwitcher({ className = "" }: { className?: string }) {
  const { unit, setUnitSlug, units } = useUnit();
  const navigate = useNavigate();
  const router = useRouter();
  const handleChange = (slug: typeof unit.slug) => {
    setUnitSlug(slug);
    const onHome = router.state.location.pathname === "/";
    if (!onHome) {
      navigate({ to: "/" });
    }
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur-sm px-3 py-1.5 ${className}`}>
      <MapPin className="h-3.5 w-3.5 text-caramel" aria-hidden />
      <label htmlFor="unit-switch" className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        Unidade
      </label>
      <select
        id="unit-switch"
        value={unit.slug}
        onChange={(e) => handleChange(e.target.value as typeof unit.slug)}
        className="bg-transparent text-sm font-medium text-foreground focus:outline-none cursor-pointer"
      >
        {units.map((u) => (
          <option key={u.slug} value={u.slug}>{u.shortName}</option>
        ))}
      </select>
    </div>
  );
}
