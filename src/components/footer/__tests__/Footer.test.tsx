import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders correctly", () => {
    render(<Footer />);

    // Verificar si el logo se renderiza correctamente
    expect(screen.getByAltText("Footer Repon Logo")).toBeInTheDocument();

    // Verificar si los enlaces de la barra de navegación se renderizan
    expect(screen.getByText("Contáctenos")).toBeInTheDocument();
    expect(screen.getByText("FAQ")).toBeInTheDocument();
    expect(screen.getByText("Precios")).toBeInTheDocument();
    expect(screen.getByText("Soporte")).toBeInTheDocument();

    // Verificar si el enlace de ingreso se renderiza
    expect(screen.getByText("INGRESAR")).toBeInTheDocument();

    // Verificar si el texto de copyright se renderiza
    expect(screen.getByText(/© Copyright 2022, All Rights Reserved by Repon/i)).toBeInTheDocument();
  });
});
