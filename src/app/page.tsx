import { BenefitsSection } from "@/components/BenefitsSection";
import { LocationSection } from "@/components/LocationSection";
import { PromoGallery } from "@/components/PromoGallery";
import { VideoSection } from "@/components/VideoSection";

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0">
          <img
            src="/portada-mazamitla-2.jpg"
            alt="Cúpulas coloniales bajo un cielo azul"
            className="h-full w-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-slate-900" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[50vh] max-w-5xl flex-col items-center justify-center px-6 pt-12 pb-6 text-center sm:min-h-[55vh] sm:pt-16 sm:pb-10 lg:min-h-[60vh] lg:pt-20 lg:pb-14">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight drop-shadow-[0_10px_24px_rgba(0,0,0,0.65)] sm:text-5xl lg:text-6xl">
            Renta de Cabañas Chávez
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Escápate a la sierra con cabañas acogedoras y vistas increíbles.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3 sm:flex-row sm:gap-5">
            <a
              href="/cabanas"
              className="w-full max-w-xs rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-tight text-slate-900 shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/25 sm:w-auto sm:px-8 sm:text-base"
            >
              Ver cabañas
            </a>
            <a
              href="/tours"
              className="w-full max-w-xs rounded-full border border-white/80 bg-white/10 px-7 py-3 text-sm font-semibold uppercase tracking-tight text-white shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-2xl hover:shadow-black/20 sm:w-auto sm:px-8 sm:text-base"
            >
              Cuatrimotos RZR
            </a>
            <a
              href="https://wa.me/message/VQKEZNH6V7XLH1"
              className="w-full max-w-xs rounded-full border border-white/70 px-7 py-3 text-sm font-semibold uppercase tracking-tight text-white shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:border-white hover:shadow-2xl hover:shadow-black/20 sm:w-auto sm:px-8 sm:text-base"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <PromoGallery />
      <VideoSection />
      <BenefitsSection />
      <LocationSection />
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-slate-900 px-6 py-10 text-center text-white shadow-lg">
          <h3 className="text-2xl font-semibold">¿Listo para cotizar?</h3>
          <p className="text-sm text-white/80">
            Escríbenos por WhatsApp y arma tu reserva al instante.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/cabanas"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-tight text-slate-900 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/30"
            >
              Ver cabañas
            </a>
            <a
              href="https://wa.me/message/VQKEZNH6V7XLH1"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-tight text-white shadow-lg shadow-black/15 transition hover:-translate-y-0.5 hover:border-white hover:shadow-2xl hover:shadow-black/25"
            >
              Cotiza por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
