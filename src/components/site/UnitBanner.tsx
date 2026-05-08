import { useUnit } from "@/context/UnitContext";

export function UnitBanner() {
  const { unit } = useUnit();
  return (
    <div className="w-full bg-bistro text-cream border-b border-caramel/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-2.5 text-center text-sm">
        <span className="opacity-80">Você está vendo: </span>
        <strong className="font-semibold text-caramel">Unidade {unit.shortName}</strong>
      </div>
    </div>
  );
}
