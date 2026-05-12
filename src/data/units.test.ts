import { describe, expect, it } from "vitest";
import { getUnit } from "./units";

describe("unit menu links", () => {
  it("exposes the main and brunch PDFs for Itaparica", () => {
    const unit = getUnit("itaparica");

    expect(unit.menuPdf).toBe("/cardapio-colher-de-pau-praia-de-itaparica.pdf");
    expect(unit.menuLabel).toBe("Cardápio da casa");
    expect(unit.brunchMenuPdf).toBe("/cardapio-manha-brunch-itaparica.pdf");
    expect(unit.brunchMenuLabel).toBe("Cardápio especial de brunch");
    expect(unit.brunchAvailability).toBe("Terça a sexta, das 8h às 14h, exceto feriados.");
    expect(unit.wineMenuPdf).toBeUndefined();
  });

  it("exposes a supporting wine and drinks PDF for Praia da Costa", () => {
    const unit = getUnit("praia-da-costa");

    expect(unit.menuPdf).toBe("/cardapio-colher-de-pau-praia-da-costa-dez.pdf");
    expect(unit.menuLabel).toBe("Cardápio da casa");
    expect(unit.brunchMenuPdf).toBeUndefined();
    expect(unit.wineMenuPdf).toBe("/carta-de-drinks-e-vinhos-colher-de-pau-praia-da-costa-mar.pdf");
    expect(unit.wineMenuLabel).toBe("Drinks e vinhos");
  });

  it("keeps at least three curated highlights in confeitaria and bistro for each unit", () => {
    for (const slug of ["itaparica", "praia-da-costa"] as const) {
      const unit = getUnit(slug);
      const confeitariaItems = unit.menu.filter((item) => item.category === "confeitaria");
      const bistroItems = unit.menu.filter((item) => item.category === "bistro");

      expect(confeitariaItems.length).toBeGreaterThanOrEqual(3);
      expect(bistroItems.length).toBeGreaterThanOrEqual(3);
    }
  });
});
