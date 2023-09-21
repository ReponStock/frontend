"use client";

import React, { useEffect, useRef, useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import './styles.css'

export default function Login() {
  const signUpButtonRef = useRef<HTMLButtonElement | null>(null);
  const signInButtonRef = useRef<HTMLButtonElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [signInData, setSignInData] = useState({
    email: "",
    password: ""
  });

  const handleSignUpChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSignInChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const handleSignUp = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const url = "https://uyflckmef2.execute-api.us-east-1.amazonaws.com/production/auth/signup";
    console.log(signUpData);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(signUpData)
      });

      if (response.ok) {
        // Registro exitoso
        console.log("Usuario registrado");

        //Abrir modal o input nuevo para el código de verificación
      } else {
        // Manejar errores aquí, por ejemplo, mostrar un mensaje de error al usuario
        console.error("Error en el registro");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  const handleSignIn = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const url = "https://uyflckmef2.execute-api.us-east-1.amazonaws.com/production/auth/signin";
    console.log(JSON.stringify(signInData));
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(signInData)
      });

      console.log(response);
      if (response.ok) {
        // Inicio de sesión exitoso

        //Gardado de tokens en localstorage
        const data = await response.json();
        const accessToken = data.accessToken;
        const refreshToken = data.refreshToken;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        console.log("Sesion iniciada");
        router.push("/filesUpload");
      } else {
        // Manejar errores aquí, por ejemplo, mostrar un mensaje de error al usuario
        console.error("Error en el registro");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };


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
      <form>
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
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={signUpData.name}
            onChange={handleSignUpChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={signUpData.email}
            onChange={handleSignUpChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={signUpData.password}
            onChange={handleSignUpChange}
          />
          <button onClick={handleSignUp}>Registrarse</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form>
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
          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={signInData.email}
            onChange={handleSignInChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={signInData.password}
            onChange={handleSignInChange}
          />
          <a href="#">¿Olvidaste tu contraseña?</a>
          <button onClick={handleSignIn}>Iniciar Sesión</button>
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

