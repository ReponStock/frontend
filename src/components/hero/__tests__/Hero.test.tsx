import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../Hero";

describe("Hero", () => {
  it("renders correctly", () => {
    render(<Hero />);

    // Verificar si el título se renderiza correctamente
    expect(screen.getByText(/REPON SAS/i)).toBeInTheDocument();
    expect(screen.getByText(/Transformando la Construcción/i)).toBeInTheDocument();

    // Verificar si la descripción se renderiza correctamente
    expect(
      screen.getByText(/Gestiona, controla y valoriza tus excedentes de obra./i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/¡Únete a la revolución colombiana en construcción sostenible!/i)
    ).toBeInTheDocument();

    // Verificar si el botón de "Contáctenos" se renderiza
    expect(screen.getByText("Contáctenos")).toBeInTheDocument();
  });
});
