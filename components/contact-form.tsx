"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

const services = [
  "Estructuración y Constitución de Empresas",
  "Aviso de Operaciones e Inscripción Fiscal",
  "Registro Sanitario de Productos",
  "Licencias Sanitarias y Certificación de Plantas",
  "Permisos para Restaurantes",
  "Registro de Marca",
  "Migración y Residencia",
  "Registro de Naves y Servicios Marítimos",
  "Asesoría Legal Estratégica"
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const email = String(form.get("email") || "");
    const service = String(form.get("service") || "");
    const message = String(form.get("message") || "");

    const text = [
      "Hola, deseo recibir asesoría legal con A&A Law Firm.",
      "",
      `Nombre: ${name}`,
      `Teléfono: ${phone}`,
      `Correo: ${email}`,
      `Servicio de interés: ${service}`,
      `Mensaje: ${message}`
    ].join("\n");

    const href = `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(href, "_blank");
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-brand-navy">Nombre</span>
          <input
            type="text"
            name="name"
            required
            className="h-12 rounded-2xl border border-brand-pearl bg-white px-4 text-sm text-brand-navy outline-none transition focus:border-brand-gold"
            placeholder="Su nombre"
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium text-brand-navy">Teléfono / WhatsApp</span>
          <input
            type="tel"
            name="phone"
            required
            className="h-12 rounded-2xl border border-brand-pearl bg-white px-4 text-sm text-brand-navy outline-none transition focus:border-brand-gold"
            placeholder="Ej. +507 6000-0000"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-brand-navy">Correo</span>
          <input
            type="email"
            name="email"
            required
            className="h-12 rounded-2xl border border-brand-pearl bg-white px-4 text-sm text-brand-navy outline-none transition focus:border-brand-gold"
            placeholder="correo@empresa.com"
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium text-brand-navy">Servicio de interés</span>
          <select
            name="service"
            required
            className="h-12 rounded-2xl border border-brand-pearl bg-white px-4 text-sm text-brand-navy outline-none transition focus:border-brand-gold"
            defaultValue=""
          >
            <option value="" disabled>
              Seleccione un servicio
            </option>
            {services.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-brand-navy">Mensaje</span>
        <textarea
          name="message"
          rows={5}
          required
          className="rounded-2xl border border-brand-pearl bg-white px-4 py-3 text-sm text-brand-navy outline-none transition focus:border-brand-gold"
          placeholder="Cuéntenos brevemente su necesidad legal"
        />
      </label>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-slate"
        >
          Enviar por WhatsApp
        </button>
        <p className="text-sm leading-6 text-brand-slate">
          También puede escribirnos a <span className="font-medium text-brand-navy">{site.email}</span>
        </p>
      </div>

      {submitted ? (
        <p className="rounded-2xl border border-brand-gold/30 bg-brand-ivory px-4 py-3 text-sm text-brand-navy">
          Hemos preparado su mensaje para WhatsApp. Revise el contenido y envíelo para iniciar la conversación.
        </p>
      ) : null}
    </form>
  );
}
