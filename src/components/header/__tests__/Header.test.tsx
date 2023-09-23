import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";

describe("Header", () => {
  it("renders correctly", () => {
    render(<Header />);

    // Verificar si el logo se renderiza correctamente
    expect(screen.getByAltText("Repon Logo")).toBeInTheDocument();

    // Verificar si los enlaces de la barra de navegación se renderizan
    expect(screen.getByText("Contáctenos")).toBeInTheDocument();
    expect(screen.getByText("FAQ")).toBeInTheDocument();
    expect(screen.getByText("Precios")).toBeInTheDocument();
    expect(screen.getByText("Soporte")).toBeInTheDocument();

    // Verificar si el enlace de ingreso se renderiza
    expect(screen.getByText("INGRESAR")).toBeInTheDocument();
  });
});
