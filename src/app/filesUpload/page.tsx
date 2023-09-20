"use client";

import Image from "next/image";
import { useState } from "react";
import icon from "../../../public/upload.svg";
import close from "../../../public/close-circle.svg";
import { Dashboard } from "@/components/dashboard/Dashboard";
import "./styles.css";
import { NONAME } from "dns";

export default function FilesUpload() {
  const [step, setStep] = useState(1);
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);

  const handleFileButtonClick = () => {
    document.getElementById("file-input")?.click();
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Archivo subido:", file);
      // Aquí puedes agregar la lógica para subir el archivo al servidor si es necesario.
    }
  };

  return (
    <Dashboard>
      <section>
        <div
          className="tutorial-section"
          style={isActive ? { display: "flex" } : { display: "none" }}
        >
          <div className="tutorial-section-card">
            <h3 className="center-txt my-5">Tutorial</h3>
            <Image
              onClick={() => setIsActive(false)}
              src={close}
              height={40}
              width={40}
              alt="close circle"
              className="absolute right-5 top-5 pointer"
            />
            <div className="card-buttons">
              <div
                style={
                  step == 1
                    ? { display: "flex", flexDirection: "column" }
                    : { display: "none" }
                }
              >
                <p className="my-5">
                  Paso 1: Descarga el formato presionando el botón
                </p>
                <a
                  className="file-button mx-auto my-5"
                  href="/repon/Formato.xlsx" // Ruta relativa al archivo que quieres descargar
                  download="Formato.xlsx" // Nombre del archivo que se descargará
                >
                  Descargar Formato
                </a>
              </div>
              <p
                className="my-5"
                style={step == 2 ? { display: "inherit" } : { display: "none" }}
              >
                Paso 2: Llena el formato con la información de tu empresa
              </p>
              <div
                style={
                  step == 3
                    ? { display: "flex", flexDirection: "column" }
                    : { display: "none" }
                }
              >
                <p className="my-5">
                  Paso 3: Sube el archvio con el formato presionando el botón
                </p>
                <div
                  className="file-button blue mx-auto my-5"
                  onClick={handleFileButtonClick}
                >
                  <Image
                    className="mx-5"
                    src={icon}
                    width="20"
                    height="20"
                    alt="Upload Icon"
                  />
                  <p>Subir archivo</p>
                </div>
              </div>
              <input
                type="file"
                id="file-input"
                style={{ display: "none" }}
                onChange={handleFileInputChange}
              />
              <div className="flex flex-row justify-between">
                <button
                  onClick={() => setStep((prev) => prev - 1)}
                  className="file-button"
                  style={
                    step == 1
                      ? { display: "none", marginLeft: "auto" }
                      : { display: "inherit" }
                  }
                >
                  Anterior
                </button>
                <button
                  onClick={() => setStep((prev) => prev + 1)}
                  className="file-button"
                  style={
                    step == 3
                      ? { display: "none" }
                      : { display: "inherit", marginLeft: "auto" }
                  }
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="nav flex justify-between flex-row">
          <h5 className="flex align-center">Archivos subidos</h5>
          <div className="nav-buttons">
            <button onClick={() => setIsActive(true)} className="file-button">
              Tutorial
            </button>
            <a
              style={step == 1 ? { zIndex: "10", position: "relative" } : {}}
              className="file-button"
              href="/repon/Formato.xlsx" // Ruta relativa al archivo que quieres descargar
              download="Formato.xlsx" // Nombre del archivo que se descargará
            >
              Descargar Formato
            </a>
            <div
              style={step == 3 ? { zIndex: "10", position: "relative" } : {}}
              className="file-button blue"
              onClick={handleFileButtonClick}
            >
              <Image
                className="mx-5"
                src={icon}
                width="20"
                height="20"
                alt="Upload Icon"
              />
              <p>Subir archivo</p>
            </div>
            <input
              type="file"
              id="file-input"
              style={{ display: "none" }}
              onChange={handleFileInputChange}
            />
          </div>
        </div>
      </section>
    </Dashboard>
  );
}
