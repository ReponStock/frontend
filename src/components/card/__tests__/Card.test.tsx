import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../Card";

describe("Card", () => {
  it("renders correctly", () => {
    render(
      <Card
        imgSrc='/repon/working-pc.webp'
        cardTitle={<>Maximiza productividad con REPON SAS.</>}
        buttonDescription='Leer más ...'
        imagePosition='left'
      />
    );

    // Verificar si el título se renderiza correctamente
    expect(screen.getByText(/Maximiza productividad con REPON SAS./i)).toBeInTheDocument();

    // Verificar si la descripción del botón se renderiza correctamente
    expect(screen.getByText("Leer más ...")).toBeInTheDocument();

    // Verificar si la imagen se renderiza en la posición correcta
    const imageDiv = screen.getByAltText("Card Decorative Image").parentElement;
    expect(imageDiv).toHaveClass("imageLeft");
  });

  it("renders image on the right when imagePosition is 'right'", () => {
    render(
      <Card
        imgSrc='/repon/working-pc.webp'
        cardTitle={<>Maximiza productividad con REPON SAS.</>}
        buttonDescription='Leer más ...'
        imagePosition='right'
      />
    );

    // Verificar si la imagen se renderiza en la posición correcta
    const imageDiv = screen.getByAltText("Card Decorative Image").parentElement;
    expect(imageDiv).toHaveClass("imageRight");
  });

  it("uses default imagePosition when none is provided", () => {
    render(
      <Card
        imgSrc='/repon/working-pc.webp'
        cardTitle={<>Maximiza productividad con REPON SAS.</>}
        buttonDescription='Leer más ...'
      />
    );

    // Verificar si la imagen se renderiza en la posición por defecto (izquierda)
    const imageDiv = screen.getByAltText('Card Decorative Image').parentElement;
    expect(imageDiv).toHaveClass('imageLeft');
  });
});
