"use client";

import Image from "next/image";
import icon from "../../../public/upload.svg";
import "./styles.css";

export default function FilesUpload() {
  const handleFileButtonClick = () => {
    // Abre el cuadro de diálogo de selección de archivo cuando se hace clic en el botón personalizado.
    document.getElementById("file-input")?.click();
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      // Aquí puedes hacer algo con el archivo seleccionado, como enviarlo a un servidor o realizar alguna acción.
      console.log("Archivo seleccionado:", file);
    }
  };

  return (
    <section>
      <div className="nav flex justify-between flex-row">
        <h2>Archivos subidos</h2>
        <div className="nav-buttons">
          <button className="file-button">Tutorial</button>
          <button className="file-button">Descargar Formato</button>
          <div className="file-button blue" onClick={handleFileButtonClick}>
            <Image
              className="mx-5"
              src={icon}
              width="20"
              height="20"
              alt="Upload Icon"
            />
            <p>Subir archivo</p>
          </div>
          {/* Input oculto para seleccionar archivos */}
          <input
            type="file"
            id="file-input"
            style={{ display: "none" }}
            onChange={handleFileInputChange}
          />
        </div>
      </div>
    </section>
  );
}
