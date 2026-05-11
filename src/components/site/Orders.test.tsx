import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Orders } from "./Orders";

describe("Orders", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("opens WhatsApp with a pre-formatted order message", async () => {
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);

    render(<Orders unitName="Itaparica" whatsappHref="https://wa.me/5527999999999" />);

    fireEvent.change(screen.getByLabelText("Nome"), { target: { value: "Maria" } });
    fireEvent.change(screen.getByLabelText("WhatsApp"), { target: { value: "(27) 99999-0000" } });
    fireEvent.click(screen.getByRole("combobox"));
    const [menuOption] = await screen.findAllByRole("option", { name: "Bolo inteiro" });
    fireEvent.click(menuOption);
    fireEvent.change(screen.getByLabelText("Data desejada"), { target: { value: "2026-05-20" } });

    fireEvent.click(screen.getByRole("button", { name: /Pedir orçamento pelo WhatsApp/i }));

    const message = encodeURIComponent(
      "Olá! Gostaria de fazer uma encomenda:\n\n" +
        "Nome: Maria\n" +
        "WhatsApp: (27) 99999-0000\n" +
        "Produto: Bolo inteiro\n" +
        "Data desejada: 2026-05-20",
    );

    expect(openSpy).toHaveBeenCalledWith(`https://wa.me/5527981890666?text=${message}`, "_blank");
  });
});
