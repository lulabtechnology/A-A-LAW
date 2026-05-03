"use client";

import { FormEvent, useState } from "react";
import { Language, pageText, services, site } from "@/lib/site";

const labels = {
  es: {
    formLabel: "Formulario de contacto A&A Law Firm",
    name: "Nombre",
    phone: "Teléfono / WhatsApp",
    email: "Correo",
    service: "Servicio de interés",
    choose: "Elegir servicio legal",
    message: "Mensaje",
    submit: "Enviar por WhatsApp",
    contactEmail: "Correo de contacto",
    privacy: "La información enviada se utilizará únicamente para orientar la solicitud de contacto.",
    success: "El mensaje fue preparado en WhatsApp. Revise los datos y envíelo para iniciar la conversación.",
    introMessage: "Hola, deseo recibir asesoría legal con A&A Law Firm."
  },
  en: {
    formLabel: "A&A Law Firm contact form",
    name: "Name",
    phone: "Phone / WhatsApp",
    email: "Email",
    service: "Service of interest",
    choose: "Choose legal service",
    message: "Message",
    submit: "Send via WhatsApp",
    contactEmail: "Contact email",
    privacy: "The information submitted will be used only to guide the contact request.",
    success: "Your message was prepared in WhatsApp. Review the details and send it to start the conversation.",
    introMessage: "Hello, I would like to receive legal guidance from A&A Law Firm."
  }
};

export function ContactForm({ lang }: { lang: Language }) {
  const [submitted, setSubmitted] = useState(false);
  const text = labels[lang];
  const serviceOptions = services[lang];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const email = String(form.get("email") || "");
    const service = String(form.get("service") || "");
    const message = String(form.get("message") || "");

    const body = lang === "es"
      ? [
          text.introMessage,
          "",
          `Nombre: ${name}`,
          `Teléfono: ${phone}`,
          `Correo: ${email}`,
          `Servicio de interés: ${service}`,
          `Mensaje: ${message}`
        ].join("\n")
      : [
          text.introMessage,
          "",
          `Name: ${name}`,
          `Phone: ${phone}`,
          `Email: ${email}`,
          `Service of interest: ${service}`,
          `Message: ${message}`
        ].join("\n");

    const href = `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(body)}`;
    window.open(href, "_blank");
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="grid w-full min-w-0 gap-4" aria-label={text.formLabel}>
      <div className="grid w-full min-w-0 gap-4 sm:grid-cols-2">
        <label className="grid w-full min-w-0 gap-2">
          <span className="text-sm font-semibold text-brand-navy">{text.name}</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className="h-12 w-full min-w-0 rounded-2xl border border-brand-pearl bg-white px-4 text-sm text-brand-navy outline-none transition focus:border-brand-slate focus:ring-2 focus:ring-brand-mist/30"
          />
        </label>
        <label className="grid w-full min-w-0 gap-2">
          <span className="text-sm font-semibold text-brand-navy">{text.phone}</span>
          <input
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            className="h-12 w-full min-w-0 rounded-2xl border border-brand-pearl bg-white px-4 text-sm text-brand-navy outline-none transition focus:border-brand-slate focus:ring-2 focus:ring-brand-mist/30"
          />
        </label>
      </div>

      <div className="grid w-full min-w-0 gap-4 sm:grid-cols-2">
        <label className="grid w-full min-w-0 gap-2">
          <span className="text-sm font-semibold text-brand-navy">{text.email}</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="h-12 w-full min-w-0 rounded-2xl border border-brand-pearl bg-white px-4 text-sm text-brand-navy outline-none transition focus:border-brand-slate focus:ring-2 focus:ring-brand-mist/30"
          />
        </label>
        <label className="grid w-full min-w-0 gap-2">
          <span className="text-sm font-semibold text-brand-navy">{text.service}</span>
          <select
            name="service"
            required
            className="h-12 w-full min-w-0 rounded-2xl border border-brand-pearl bg-white px-4 text-sm text-brand-navy outline-none transition focus:border-brand-slate focus:ring-2 focus:ring-brand-mist/30"
            defaultValue=""
          >
            <option value="" disabled>
              {text.choose}
            </option>
            {serviceOptions.map((item) => (
              <option key={item.title} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid w-full min-w-0 gap-2">
        <span className="text-sm font-semibold text-brand-navy">{text.message}</span>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full min-w-0 resize-y rounded-2xl border border-brand-pearl bg-white px-4 py-3 text-sm text-brand-navy outline-none transition focus:border-brand-slate focus:ring-2 focus:ring-brand-mist/30"
        />
      </label>

      <div className="flex w-full min-w-0 flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-brand-navy px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-slate sm:w-auto"
        >
          {text.submit}
        </button>
        <p className="min-w-0 break-words text-sm leading-6 text-brand-slate">
          {text.contactEmail}: <span className="font-semibold text-brand-navy">{site.email}</span>
        </p>
      </div>

      <p className="break-words rounded-2xl border border-brand-pearl/70 bg-brand-ivory px-4 py-3 text-xs leading-6 text-brand-slate">
        {text.privacy}
      </p>

      {submitted ? (
        <p className="rounded-2xl border border-brand-mist/70 bg-brand-mist/20 px-4 py-3 text-sm text-brand-navy">
          {text.success}
        </p>
      ) : null}
    </form>
  );
}
