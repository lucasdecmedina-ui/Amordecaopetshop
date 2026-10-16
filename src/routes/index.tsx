import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Clock3,
  Heart,
  MapPin,
  PawPrint,
  Phone,
  Pill,
  Scissors,
  Sparkles,
  Star,
  Stethoscope,
} from "lucide-react";

const mapsUrl = "https://maps.app.goo.gl/PHQqXdkSkGQL7jh28";
const whatsappUrl =
  "https://wa.me/5513991420644?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Amor%20de%20C%C3%A3o%20e%20gostaria%20de%20falar%20sobre%20meu%20pet.";
const phoneUrl = "tel:+551332251996";

const title = "Amor de Cão | Veterinária, banho e tosa em Santos";
const description =
  "Pet Shop Amor de Cão, no Marapé em Santos. Veterinária, banho e tosa e medicamentos com atendimento próximo e carinhoso.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#inicio"
      className="group inline-flex items-center gap-3"
      aria-label="Amor de Cão — início"
    >
      <span
        className={`grid size-11 place-items-center rounded-2xl shadow-sm transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105 ${
          light ? "bg-white text-pink-600" : "bg-pink-600 text-white"
        }`}
      >
        <PawPrint size={24} strokeWidth={2.35} aria-hidden="true" />
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-[1.45rem] font-semibold tracking-[-0.055em] ${
            light ? "text-white" : "text-stone-900"
          }`}
        >
          Amor de Cão
        </span>
        <span
          className={`mt-1 block text-[0.63rem] font-extrabold uppercase tracking-[0.22em] ${
            light ? "text-pink-100" : "text-pink-700"
          }`}
        >
          Pet shop & cuidado
        </span>
      </span>
    </a>
  );
}

function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold transition-all duration-300 ${className}`}
    >
      {children}
      <ArrowRight size={17} strokeWidth={2.5} aria-hidden="true" />
    </a>
  );
}

function Index() {
  return (
    <div id="inicio" className="min-h-screen overflow-hidden bg-[#fffaf8] text-stone-900">
      <a
        href="#conteudo"
        className="sr-only left-5 top-5 z-50 rounded-full bg-stone-900 px-5 py-3 text-sm font-extrabold text-white focus:not-sr-only focus:absolute"
      >
        Pular para o conteúdo
      </a>
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <Brand />
          <nav
            className="hidden items-center gap-7 text-sm font-bold text-stone-600 lg:flex"
            aria-label="Navegação principal"
          >
            <a className="transition-colors hover:text-pink-600" href="#servicos">
              Serviços
            </a>
            <a className="transition-colors hover:text-pink-600" href="#amor">
              A Amor de Cão
            </a>
            <a className="transition-colors hover:text-pink-600" href="#visite">
              Localização
            </a>
          </nav>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar no WhatsApp (abre em nova aba)"
            className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-4 py-3 text-sm font-extrabold text-white shadow-[0_12px_28px_-12px_rgba(40,20,28,0.65)] transition-transform hover:-translate-y-0.5 hover:bg-pink-600 sm:px-5"
          >
            <Heart size={16} fill="currentColor" aria-hidden="true" />
            <span className="hidden sm:inline">Falar no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      <main id="conteudo">
        <section className="relative isolate pt-32 sm:pt-36 lg:pt-40">
          <div className="hero-halo hero-halo-one" aria-hidden="true" />
          <div className="hero-halo hero-halo-two" aria-hidden="true" />
          <div className="hero-paws" aria-hidden="true">
            <PawPrint />
            <Heart fill="currentColor" />
            <PawPrint />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 sm:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12 lg:px-10 lg:pb-20">
            <div className="max-w-2xl pb-2 lg:pb-8">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/85 px-3.5 py-2 text-xs font-extrabold text-pink-700 shadow-sm backdrop-blur">
                <Sparkles size={15} aria-hidden="true" />
                <span>Carinho para cada patinha</span>
              </div>
              <h1 className="max-w-xl font-display text-5xl font-semibold leading-[0.96] tracking-[-0.065em] text-stone-900 sm:text-6xl lg:text-[4.6rem]">
                O cuidado que o seu pet sente.
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-stone-600 sm:text-lg">
                Veterinária, banho e tosa e medicamentos em um espaço feito para receber sua família
                com atenção de verdade.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ArrowLink
                  href={whatsappUrl}
                  className="bg-pink-600 text-white shadow-[0_16px_30px_-14px_rgba(219,39,119,0.7)] hover:-translate-y-1 hover:bg-pink-700"
                >
                  Chamar no WhatsApp
                </ArrowLink>
                <ArrowLink
                  href="#visite"
                  className="border border-stone-200 bg-white text-stone-800 hover:-translate-y-1 hover:border-pink-200 hover:text-pink-700"
                >
                  Como chegar
                </ArrowLink>
              </div>
              <div className="mt-8 flex items-center gap-3 text-sm text-stone-600">
                <div className="flex -space-x-1 text-amber-400" aria-label="Avaliação 4,9 de 5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={18} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p>
                  <strong className="font-extrabold text-stone-800">4,9 no Google</strong>
                </p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[35rem] lg:max-w-none">
              <div
                className="absolute -left-7 top-12 hidden size-24 rounded-[2rem] bg-amber-300 lg:block"
                aria-hidden="true"
              />
              <div
                className="absolute -right-6 bottom-14 size-28 rounded-full border-[13px] border-pink-200/80"
                aria-hidden="true"
              />
              <div className="hero-photo-wrap relative overflow-hidden rounded-[2.4rem] bg-pink-100 p-2 shadow-[0_26px_70px_-30px_rgba(89,27,62,0.55)] sm:p-3">
                <img
                  src="/media/amor-de-cao/fachada-amor-de-cao.jpg"
                  alt="Fachada do Pet Shop Amor de Cão, no Marapé em Santos"
                  className="h-[27rem] w-full rounded-[1.85rem] object-cover object-[50%_38%] sm:h-[34rem]"
                />
                <div className="absolute inset-x-7 bottom-7 rounded-2xl border border-white/65 bg-white/90 p-4 shadow-lg backdrop-blur-sm sm:inset-x-9 sm:bottom-9 sm:p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-pink-100 text-pink-600">
                      <MapPin size={21} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                    </span>
                    <p className="text-sm font-bold leading-5 text-stone-700">
                      Marapé, Santos
                      <span className="block font-medium text-stone-500">R. Dona Ana Nery, 68</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-4 rounded-2xl bg-stone-900 px-4 py-3 text-sm font-bold text-white shadow-xl sm:-left-7 sm:px-5">
                <span className="mr-2 inline-block text-pink-300">●</span>
                Vamos conversar?
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 border-y border-pink-100 bg-pink-600 text-white">
          <div className="mx-auto grid max-w-7xl divide-y divide-white/20 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-10">
            {[
              [Stethoscope, "Veterinária", "Atenção para o bem-estar do seu pet"],
              [Scissors, "Banho & tosa", "Cuidado, higiene e muito carinho"],
              [Pill, "Medicamentos", "Praticidade para a rotina de cuidados"],
            ].map(([Icon, heading, copy]) => {
              const ServiceIcon = Icon as typeof Stethoscope;
              return (
                <div
                  key={heading as string}
                  className="flex items-center gap-4 py-5 sm:px-6 sm:py-6 first:sm:pl-0 last:sm:pr-0"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white/15 text-white">
                    <ServiceIcon size={22} strokeWidth={2.15} aria-hidden="true" />
                  </span>
                  <p className="leading-5">
                    <strong className="block font-display text-xl font-medium tracking-[-0.035em]">
                      {heading as string}
                    </strong>
                    <span className="text-sm text-white">{copy as string}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="servicos" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-pink-700">Tudo em um só lugar</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-none tracking-[-0.06em] text-stone-900 sm:text-5xl">
              Para cuidar de quem faz parte da família.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6">
            <article className="service-card group rounded-[2rem] bg-[#fff0f5] p-7 sm:p-8">
              <span className="grid size-14 place-items-center rounded-2xl bg-white text-pink-600 shadow-sm transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                <Stethoscope size={29} aria-hidden="true" />
              </span>
              <h3 className="mt-9 font-display text-3xl font-semibold tracking-[-0.05em] text-stone-900">
                Veterinária
              </h3>
              <p className="mt-3 leading-6 text-stone-600">
                Um atendimento próximo para acompanhar a saúde do seu companheiro.
              </p>
            </article>
            <article className="service-card group rounded-[2rem] bg-[#fff8df] p-7 sm:p-8">
              <span className="grid size-14 place-items-center rounded-2xl bg-white text-amber-600 shadow-sm transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                <Scissors size={29} aria-hidden="true" />
              </span>
              <h3 className="mt-9 font-display text-3xl font-semibold tracking-[-0.05em] text-stone-900">
                Banho & tosa
              </h3>
              <p className="mt-3 leading-6 text-stone-600">
                Limpeza, cuidado e uma dose extra de carinho em cada visita.
              </p>
            </article>
            <article className="service-card group rounded-[2rem] bg-[#edf8f3] p-7 sm:p-8">
              <span className="grid size-14 place-items-center rounded-2xl bg-white text-emerald-600 shadow-sm transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                <Pill size={29} aria-hidden="true" />
              </span>
              <h3 className="mt-9 font-display text-3xl font-semibold tracking-[-0.05em] text-stone-900">
                Medicamentos
              </h3>
              <p className="mt-3 leading-6 text-stone-600">
                Mais praticidade para você manter a rotina de cuidados em dia.
              </p>
            </article>
          </div>
        </section>

        <section
          id="amor"
          className="relative overflow-hidden bg-stone-900 py-20 text-white sm:py-24"
        >
          <div className="section-paw section-paw-left" aria-hidden="true">
            <PawPrint />
          </div>
          <div className="section-paw section-paw-right" aria-hidden="true">
            <Heart fill="currentColor" />
          </div>
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div
                className="absolute -left-4 -top-4 size-24 rounded-full bg-amber-300"
                aria-hidden="true"
              />
              <img
                src="/media/amor-de-cao/banho-e-tosa.png"
                alt="Cão após banho e tosa no Pet Shop Amor de Cão"
                className="relative h-[31rem] w-full rounded-[2rem] object-cover object-[50%_72%] shadow-2xl"
              />
              <div className="absolute -bottom-5 -right-2 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-extrabold text-stone-800 shadow-xl sm:right-5">
                <Heart size={17} className="text-pink-600" fill="currentColor" aria-hidden="true" />
                Aqui eles são de casa
              </div>
            </div>
            <div className="max-w-xl">
              <p className="eyebrow text-pink-300">Amor em cada detalhe</p>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                Cuidar bem é também deixar o pet se sentir seguro.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-stone-300 sm:text-lg">
                Na Amor de Cão, cada atendimento começa com escuta, atenção e respeito ao jeito
                único de cada bichinho.
              </p>
              <ul className="mt-8 grid gap-4 text-sm font-bold text-stone-100 sm:grid-cols-2">
                {[
                  "Atendimento perto de você",
                  "Veterinária, banho e tosa",
                  "Contato pelo WhatsApp",
                  "Medicamentos para a rotina",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-pink-500 text-white">
                      <Check size={14} strokeWidth={3} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Ver avaliações no Google (abre em nova aba)"
                className="mt-10 inline-flex items-center gap-2 text-sm font-extrabold text-pink-200 transition-colors hover:text-white"
              >
                Ver avaliações no Google
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="visite" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="grid overflow-hidden rounded-[2.25rem] border border-stone-200 bg-white shadow-[0_22px_55px_-40px_rgba(65,36,47,0.42)] lg:grid-cols-[1.08fr_0.92fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="eyebrow text-pink-700">Vem visitar a gente</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-none tracking-[-0.06em] text-stone-900 sm:text-5xl">
                Estamos no coração do Marapé.
              </h2>
              <div className="mt-9 space-y-5">
                <div className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-pink-100 text-pink-600">
                    <MapPin size={21} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                  </span>
                  <p className="pt-0.5 text-sm leading-6 text-stone-600 sm:text-base">
                    <strong className="block font-extrabold text-stone-800">
                      R. Dona Ana Nery, 68
                    </strong>
                    Marapé · Santos/SP · 11070-240
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-amber-100 text-amber-600">
                    <Clock3 size={21} aria-hidden="true" />
                  </span>
                  <p className="pt-0.5 text-sm leading-6 text-stone-600 sm:text-base">
                    <strong className="block font-extrabold text-stone-800">
                      Segunda a sábado · 9h às 18h30
                    </strong>
                    Domingo · fechado
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-emerald-100 text-emerald-600">
                    <Phone size={20} aria-hidden="true" />
                  </span>
                  <p className="pt-0.5 text-sm leading-6 text-stone-600 sm:text-base">
                    <strong className="block font-extrabold text-stone-800">
                      (13) 99142-0644 · WhatsApp
                    </strong>
                    <a href={phoneUrl} className="font-semibold text-pink-600 hover:text-pink-700">
                      (13) 3225-1996 · telefone fixo
                    </a>
                  </p>
                </div>
              </div>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ArrowLink
                  href={mapsUrl}
                  className="bg-stone-900 text-white hover:-translate-y-1 hover:bg-pink-600"
                >
                  Abrir no Maps
                </ArrowLink>
                <ArrowLink
                  href={whatsappUrl}
                  className="border border-stone-200 text-stone-800 hover:-translate-y-1 hover:border-pink-200 hover:text-pink-700"
                >
                  Tirar uma dúvida
                </ArrowLink>
              </div>
            </div>
            <div className="relative min-h-[24rem] bg-pink-600 p-7 sm:p-10 lg:p-12">
              <div className="map-dots" aria-hidden="true" />
              <div className="relative flex h-full flex-col justify-between rounded-[1.7rem] border border-white/20 bg-white/10 p-6 backdrop-blur-[2px]">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-white text-pink-600 shadow-xl">
                  <PawPrint size={29} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display text-4xl font-semibold leading-none tracking-[-0.06em] text-white">
                    Seu pet merece esse carinho.
                  </p>
                  <p className="mt-4 max-w-xs text-sm leading-6 text-white">
                    Mande uma mensagem e tire suas dúvidas com a gente.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Falar agora no WhatsApp (abre em nova aba)"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-pink-600 transition-transform hover:-translate-y-1"
                  >
                    Falar agora
                    <ArrowRight size={17} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-pink-100 bg-[#fff5f7]">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-10">
          <Brand />
          <div className="text-sm text-stone-500 md:text-right">
            <p>Pet Shop Amor de Cão · Santos/SP</p>
            <p className="mt-1">Veterinária, banho e tosa e medicamentos.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
