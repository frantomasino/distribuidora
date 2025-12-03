"use client";

import { useState, useRef } from "react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);
    setShowMessage(false);

    const formData = new FormData(e.currentTarget);

    const data = {
      nombre: String(formData.get("nombre")),
      email: String(formData.get("email")),
      mensaje: String(formData.get("mensaje")),
    };

    const res = await fetch("/api/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: data.nombre,
        email: data.email,
        mensaje: data.mensaje,
      }),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      formRef.current?.reset();

      // Mostrar mensaje (fade-in)
      setShowMessage(true);

      // Ocultarlo después de 3 segundos (fade-out)
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);

    } else {
      setError(true);

      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 space-y-4"
    >
      <h2 className="text-2xl font-semibold mb-4">Enviar consulta</h2>

      <input
        type="text"
        name="nombre"
        placeholder="Tu nombre"
        className="w-full p-3 border rounded"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Tu email"
        className="w-full p-3 border rounded"
        required
      />

      <textarea
        name="mensaje"
        placeholder="Escribí tu consulta..."
        rows={5}
        className="w-full p-3 border rounded"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full p-3 bg-black text-white rounded hover:bg-gray-800 disabled:opacity-50"
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>

      {/* Fade-in / Fade-out del mensaje */}
      <div
        className={`transition-opacity duration-500 ${
          showMessage ? "opacity-100" : "opacity-0"
        }`}
      >
        {success && (
          <p className="text-green-600 font-medium">
            Tu mensaje fue enviado correctamente ✔️
          </p>
        )}

        {error && (
          <p className="text-red-600 font-medium">
            Ocurrió un error al enviar el mensaje ❌
          </p>
        )}
      </div>
    </form>
  );
}
