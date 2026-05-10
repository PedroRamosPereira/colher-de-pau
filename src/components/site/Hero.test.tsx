import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "./Hero";
import { UnitProvider } from "@/context/UnitContext";

describe("Hero", () => {
  it("shows the current primary calls to action", () => {
    render(
      <UnitProvider defaultSlug="itaparica">
        <Hero />
      </UnitProvider>,
    );

    expect(screen.getByRole("link", { name: /Conheça nossas unidades/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Fazer encomenda/i })).toBeInTheDocument();
  });
});
