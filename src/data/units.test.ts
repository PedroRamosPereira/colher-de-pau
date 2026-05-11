import { describe, expect, it } from "vitest";
import { getUnit } from "./units";

describe("unit menu links", () => {
  it("keeps Itaparica with only the main menu PDF", () => {
    const unit = getUnit("itaparica");

    expect(unit.menuPdf).toBe("/cardapio-colher-de-pau-praia-de-itaparica.pdf");
    expect(unit.menuLabel).toBe("Cardápio da casa");
    expect(unit.wineMenuPdf).toBeUndefined();
  });

  it("exposes a supporting wine and drinks PDF for Praia da Costa", () => {
    const unit = getUnit("praia-da-costa");

    expect(unit.menuPdf).toBe("/cardapio-colher-de-pau-praia-da-costa-dez.pdf");
    expect(unit.menuLabel).toBe("Cardápio da casa");
    expect(unit.wineMenuPdf).toBe("/carta-de-drinks-e-vinhos-colher-de-pau-praia-da-costa-mar.pdf");
    expect(unit.wineMenuLabel).toBe("Drinks e vinhos");
  });
});
