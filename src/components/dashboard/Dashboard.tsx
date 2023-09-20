import React, { ReactNode } from "react";
import Image from "next/image";

import "./styles.css";
import restock from "../../../public/logo-restock.svg";
import mail from "../../../public/mail.svg";
import bell from "../../../public/bell.svg";
import circle from "../../../public/circle.svg";

interface DashboardProps {
  children: ReactNode;
}

export const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  return (
    <section>
      <nav className="flex justify-between header-bar ">
        <div className="flex align-center gap-10">
          <Image src={restock} width="50" height="40" alt="Restock Logo" />
          <h3>Restock</h3>
        </div>

        <div className="flex align-center gap-20">
          <Image src={mail} width="30" height="28" alt="Mail Logo" />
          <Image src={bell} width="25" height="25" alt="Notifications Logo" />
          <Image src={circle} width="40" height="40" alt="Profile picture" />
        </div>
      </nav>
      <div className="container">
        <aside className="lateral-navigation">
          <button className="dashboard-button">Dashboard</button>
          <div>
            <div>
              <p>analisis</p>
              <button className="nav-button">Chat Bot</button>
            </div>
            <div>
              <p>Cuentas</p>
              <button className="nav-button">Empleados</button>
            </div>
            <div>
              <p>Inventario</p>
              <button className="nav-button">Archivos</button>
              <button className="nav-button">Alertas</button>
              <button className="nav-button">Productos</button>
            </div>
            <div>
              <button className="nav-button">Configuracion</button>
              <button className="nav-button">Cerrar Sesion</button>
            </div>
          </div>
        </aside>
        <div className="content-dashboard">{children}</div>
      </div>
    </section>
  );
};
