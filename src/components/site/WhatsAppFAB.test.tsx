import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { WhatsAppFAB } from "../WhatsAppFAB";

describe("WhatsAppFAB", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("opens the WhatsApp chat when clicked", () => {
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);

    render(<WhatsAppFAB />);

    fireEvent.click(screen.getByRole("button", { name: /Abrir WhatsApp/i }));

    expect(openSpy).toHaveBeenCalledWith(
      "https://wa.me/5527981890666",
      "_blank",
      "noopener,noreferrer",
    );
  });
});
