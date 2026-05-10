import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Navbar } from "./Navbar";
import { UnitProvider } from "@/context/UnitContext";

vi.mock("@tanstack/react-router", async () => {
  const actual =
    await vi.importActual<typeof import("@tanstack/react-router")>("@tanstack/react-router");

  return {
    ...actual,
    useRouterState: ({
      select,
    }: {
      select: (state: { location: { pathname: string } }) => string;
    }) => select({ location: { pathname: "/itaparica" } }),
  };
});

describe("Navbar", () => {
  it("keeps the section link but removes the direct menu CTA from the header", () => {
    render(
      <UnitProvider defaultSlug="itaparica">
        <Navbar />
      </UnitProvider>,
    );

    expect(screen.getByRole("link", { name: "Principais da casa" })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Cardápio da casa" })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Cardápio" })).not.toBeInTheDocument();
  });

  it("keeps the mobile menu button at a 44x44 minimum touch target", () => {
    render(
      <UnitProvider defaultSlug="itaparica">
        <Navbar />
      </UnitProvider>,
    );

    const menuButton = screen.getAllByRole("button", { name: "Menu" })[0];

    expect(menuButton).toHaveClass(
      "min-w-[44px]",
      "min-h-[44px]",
      "flex",
      "items-center",
      "justify-center",
    );
  });
});
