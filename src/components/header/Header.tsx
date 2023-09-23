import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link className={styles.headerLogo} href='/'>
          <Image src='/repon/repon.svg' alt='Header Repon Logo' width={144} height={70} />
        </Link>
        <nav className={styles.navBar}>
          <Link href='/contacto'>Contáctenos</Link>
          <Link href='/preguntas-frecuentes'>FAQ</Link>
          <Link href='/precios'>Precios</Link>
          <Link href='/soporte'>Soporte</Link>
        </nav>
        <Link className={styles.headerLogin} href='/login'>INGRESAR</Link>
      </div>
    </header>
  );
};

export default Header;
