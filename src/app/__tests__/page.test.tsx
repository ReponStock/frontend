import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../page";

describe("Home", () => {
  it("renders correctly", () => {
    render(<Home />);

    // Verificar si el Header se renderiza
    const loginLinks = screen.getAllByText("INGRESAR");
    expect(loginLinks.some((link) => link.className === "headerLogin")).toBeTruthy();

    // Verificar si el Hero se renderiza
    expect(screen.getByText(/Transformando la Construcción/i)).toBeInTheDocument();

    // Verificar si la sección de "¿Quiénes somos?" se renderiza
    expect(screen.getByText("¿Quiénes somos?")).toBeInTheDocument();

    // Verificar si las Cards se renderizan
    expect(screen.getByText(/Maximiza productividad con REPON SAS./i)).toBeInTheDocument();
    expect(screen.getByText(/Eleva tu proyecto con nosotros./i)).toBeInTheDocument();

    // Verificar si el Footer se renderiza
    expect(loginLinks.some((link) => link.className === "footerLogin")).toBeTruthy();
  });
});
