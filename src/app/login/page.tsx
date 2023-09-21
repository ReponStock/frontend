"use client";

import React, { useEffect, useRef } from "react";
import './styles.css'

export default function Login() {
  const signUpButtonRef = useRef<HTMLButtonElement | null>(null);
  const signInButtonRef = useRef<HTMLButtonElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const signUpButton = signUpButtonRef.current;
    const signInButton = signInButtonRef.current;
    const container = containerRef.current;

    const handleSignUpClick = () => {
      // Comprobar si el contenedor existe antes de agregar la clase
      container?.classList.add("right-panel-active");
    };

    const handleSignInClick = () => {
      // Comprobar si el contenedor existe antes de eliminar la clase
      container?.classList.remove("right-panel-active");
    };

    // Asegurarse de que los elementos existan antes de agregar los event listeners
    signUpButton?.addEventListener("click", handleSignUpClick);
    signInButton?.addEventListener("click", handleSignInClick);

    return () => {
      // Eliminar los event listeners solo si los elementos existen
      signUpButton?.removeEventListener("click", handleSignUpClick);
      signInButton?.removeEventListener("click", handleSignInClick);
    };
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Crear Cuenta</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>o utiliza tu correo electrónico para registrarte</span>
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Correo Electrónico" />
          <input type="password" placeholder="Contraseña" />
          <button>Registrarse</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Iniciar Sesión</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>o utiliza tu cuenta</span>
          <input type="email" placeholder="Correo Electrónico" />
          <input type="password" placeholder="Contraseña" />
          <a href="#">¿Olvidaste tu contraseña?</a>
          <button>Iniciar Sesión</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h2>¡Bienvenido de nuevo!</h2>
            <p>
              Para mantenerte conectado con nosotros, inicia sesión con tu información personal.
            </p>
            <button className="ghost" ref={signInButtonRef}>
              Iniciar Sesión
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h2>¡Hola, Amigo!</h2>
            <p>Ingresa tus detalles personales y comienza tu viaje con nosotros</p>
            <button className="ghost" ref={signUpButtonRef}>
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

