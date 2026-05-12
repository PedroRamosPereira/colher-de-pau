import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Recommendations } from "./Recommendations";
import { UnitProvider } from "@/context/UnitContext";

describe("Recommendations", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("highlights the main dish even when the daily array is in another order", () => {
    vi.spyOn(Date.prototype, "getDay").mockReturnValue(5);

    render(
      <UnitProvider defaultSlug="itaparica">
        <Recommendations />
      </UnitProvider>,
    );

    expect(screen.getByText("Destaque de hoje")).toBeInTheDocument();
    expect(screen.getByText("Clássicos para acompanhar")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Croissant Gruyère" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Aperol Spritz" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Chocolatudo" })).toBeInTheDocument();
  });
});
