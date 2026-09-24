import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import fernandaLine from "../assets/dona-fernanda-line.png";
import peixeAsset from "../assets/peixe-grelhado.jpg.asset.json";
import assadoAsset from "../assets/assado-da-casa.jpg.asset.json";
import salaAsset from "../assets/sala-mira-rio.jpg.asset.json";
import rioAve from "../assets/rio-ave.jpg.asset.json";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Restaurante Mira Rio - Cozinha Regional em Rebordões" },
      {
        name: "description",
        content:
          "Há mais de 30 anos, D. Fernanda serve cozinha regional caseira no Restaurante Mira Rio em Rebordões, Santo Tirso.",
      },
      { property: "og:title", content: "Restaurante Mira Rio - Cozinha Regional em Rebordões" },
      {
        property: "og:description",
        content:
          "Há mais de 30 anos, D. Fernanda serve cozinha regional caseira no Restaurante Mira Rio em Rebordões, Santo Tirso.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Restaurante Mira Rio",
          description:
            "Cozinha regional caseira em Rebordões, Santo Tirso, conduzida há mais de 30 anos por D. Fernanda.",
          servesCuisine: "Portuguesa",
          telephone: "+351252853492",
          url: "https://restaurantemirario.com",
          image: "https://restaurantemirario.com/favicon.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. João Paulo II, 400",
            addressLocality: "Rebordões, Santo Tirso",
            addressRegion: "Porto",
            addressCountry: "PT",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 41.342,
            longitude: -8.486,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "12:00",
              closes: "15:00",
            },
          ],
          priceRange: "€€",
          paymentAccepted: "Visa, Mastercard, Multibanco",
          acceptsReservations: "True",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.3",
            reviewCount: "156",
          },
          review: reviews.map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.author },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody: r.quote,
            publisher: { "@type": "Organization", name: "Google Maps" },
          })),
        }),
      },
    ],
  }),
});

const details = [
  ["Morada", "Av. João Paulo II, 400\nRebordões, Santo Tirso"],
  ["A nossa cozinha", "Tradicional portuguesa\nFeita todos os dias"],
  ["Ao almoço", "Terça a domingo\n12:00 — 15:00"],
  ["À sua espera", "Estacionamento · Takeaway\nVisa · Mastercard · Multibanco"],
];

const highlights = [
  {
    image: peixeAsset.url,
    alt: "Peixe grelhado com batata cozida e legumes",
    eyebrow: "Sabores do mar",
    title: "Peixe no ponto",
    text: "Preparado com simplicidade para deixar falar a qualidade de cada ingrediente.",
  },
  {
    image: assadoAsset.url,
    alt: "Assado tradicional com batatas douradas",
    eyebrow: "Receitas de família",
    title: "Assados da casa",
    text: "O sabor dos almoços demorados, servido à mesa como sempre foi.",
  },
  {
    image: salaAsset.url,
    alt: "Sala de refeições do Restaurante Mira Rio",
    eyebrow: "A nossa casa",
    title: "Mesa posta",
    text: "Uma sala luminosa e familiar, pronta para receber a sua família.",
  },
];

const menuSections = [
  {
    title: "Do mar",
    items: [
      "Bacalhau à Mira Rio",
      "Polvo com batata cozida e molho verde",
      "Robalo grelhado com batata cozida",
      "Filetes de pescada",
    ],
  },
  {
    title: "Da terra",
    items: [
      "Bife à Mira Rio",
      "Rojões à moda do Minho",
      "Lombinhos de porco grelhados",
      "Lombo de porco assado no forno",
    ],
  },
];

const reviews = [
  {
    quote: "Experimentei o bacalhau à Mira Rio e estava delicioso. Os funcionários são muito simpáticos e profissionais. Recomendo!",
    author: "Carlos",
    source: "Google",
  },
  {
    quote: "Restaurante com tudo bom: comida, atendimento e preços bons.",
    author: "Vítor",
    source: "Google",
  },
  {
    quote: "Excelente refeição, boa relação preço/qualidade.",
    author: "Comercial",
    source: "Google",
  },
];

function OpenNowBadge() {
  // Restaurante Mira Rio: aberto terça a domingo, 12:00–15:00. Segunda encerrado.
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const check = () => {
      const now = new Date();
      // Horário de Portugal (continente)
      const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Lisbon",
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).formatToParts(now);
      const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
      const weekday = get("weekday").toLowerCase();
      const hour = parseInt(get("hour"), 10);
      const minute = parseInt(get("minute"), 10);
      const time = hour + minute / 60;
      // Segunda (Mon) encerrado; terça a domingo 12:00–15:00
      const isMonday = weekday === "mon";
      const inHours = !isMonday && time >= 12 && time < 15;
      setOpen(inHours);
    };
    check();
    setMounted(true);
    const id = setInterval(check, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!mounted || !open) return null;

  return (
    <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground md:text-muted-foreground">
      <span className="relative inline-flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500/70" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
      </span>
      Aberto agora
    </p>
  );
}

function GoogleMapsLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" role="img" aria-hidden="true">
      <path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z" />
    </svg>
  );
}

function TripadvisorLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" role="img" aria-hidden="true">
      <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6-5.998 5.982 5.982 0 0 0-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.903C13.943 8.138 12 10.43 12 13.1c0-2.671-1.942-4.962-4.504-5.942A11.72 11.72 0 0 1 12 6.256zM6.002 9.157a4.059 4.059 0 1 1 0 8.118 4.059 4.059 0 0 1 0-8.118zm11.992.002a4.057 4.057 0 1 1 .003 8.115 4.057 4.057 0 0 1-.003-8.115zm-11.992 1.93a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256zm11.992 0a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256z" />
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8" aria-label="Navegação principal">
          <a href="#inicio" className="flex flex-col">
            <span className="font-display text-3xl font-semibold text-primary md:text-4xl">Restaurante Mira Rio</span>
            <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground md:text-xs">Rebordões, Santo Tirso</span>
          </a>
          <div className="hidden items-center gap-8 text-xs font-semibold uppercase text-muted-foreground md:flex">
            <a className="nav-link" href="#historia">A nossa história</a>
            <a className="nav-link" href="#mesa">À mesa</a>
            <a className="nav-link" href="#cardapio">Cardápio</a>
            <a className="nav-link" href="#visitar">Visite-nos</a>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <a className="button-primary inline-flex" href="tel:+351252853492" aria-label="Ligar para reservar mesa">
              Reservar
            </a>
          </div>
        </nav>
      </header>

      <main id="inicio">
        <section id="historia" className="relative mx-auto max-w-7xl overflow-hidden px-5 pt-12 lg:grid lg:min-h-[680px] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-4 lg:px-8 lg:pt-20 lg:min-h-[760px] lg:pt-24">
          <div className="fernanda-hero-mobile lg:hidden" aria-hidden="true">
            <img src={fernandaLine} alt="" />
          </div>
          <div className="relative z-10 self-center pb-12 lg:pb-24">
            <p className="mb-4 text-xs font-semibold uppercase text-accent">DESDE FEVEREIRO DE 1985</p>
            <h1 className="max-w-[58%] font-display text-4xl leading-[1.08] text-primary sm:text-5xl lg:max-w-2xl lg:text-7xl">
              <span className="whitespace-nowrap">A alma da cozinha,</span><br />pelas mãos de <em className="mt-2 block text-[1.2em] font-normal leading-[0.92]">D. Fernanda</em>
            </h1>
            <div className="relative">
              <p className="mt-8 max-w-lg text-base leading-7 text-foreground md:text-muted-foreground">
                {'\n\n'}No Restaurante Mira Rio, cozinha-se como em casa.
                D. Fernanda prepara cada refeição com o mesmo cuidado com que alimenta os filhos e os netos, que continuam a sentar-se aqui à mesa quase todos os dias.
              </p>
              <p className="mt-6 max-w-lg border-l-2 border-accent pl-5 font-display text-2xl italic leading-snug text-foreground">
                “Dou aos meus clientes aquilo que dou aos meus filhos.”
              </p>
              <OpenNowBadge />
              <a className="hero-phone mt-7" href="tel:+351252853492" aria-label="Ligar para o Restaurante Mira Rio">
                <span>Reservas e prato do dia</span>
                <strong>+351 252 853 492</strong>
              </a>
            </div>
          </div>

          <div className="relative hidden h-full min-h-[640px] items-end justify-center self-end lg:flex">
            <img className="fernanda-line" src={fernandaLine} alt="Retrato desenhado a traço fino de D. Fernanda" />
          </div>
        </section>

        <section className="relative z-20 bg-primary py-10 text-primary-foreground">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-10 px-5 md:grid-cols-4 md:px-8">
            {details.map(([label, value]) => (
              <div key={label}>
                <p className="mb-2 text-[10px] font-semibold uppercase opacity-60">{label}</p>
                {label === "Morada" ? (
                  <a
                    className="whitespace-pre-line font-display text-lg italic leading-snug underline decoration-accent/60 underline-offset-4 transition-colors hover:decoration-accent"
                    href="https://www.google.com/maps/search/?api=1&query=Restaurante+Mira+Rio+Rebordoes+Av.+Joao+Paulo+II+400+Santo+Tirso"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Abrir a morada do Restaurante Mira Rio no Google Maps"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="whitespace-pre-line font-display text-lg italic leading-snug">{value}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="mesa" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase text-accent">Da cozinha para a mesa</p>
            <h2 className="font-display text-5xl italic text-primary md:text-6xl">Comida que sabe a casa</h2>
            <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
              Cozinha portuguesa honesta, generosa e sem artifícios. Ingredientes bem escolhidos, temperos apurados e o tempo certo.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3 md:gap-7">
            {highlights.map((item, index) => (
              <article key={item.title} className={index === 1 ? "md:translate-y-8" : ""}>
                <div className="overflow-hidden border border-border bg-secondary">
                  <img className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-[1.025]" src={item.image} alt={item.alt} />
                </div>
                <p className="mt-5 text-[10px] font-semibold uppercase text-accent">{item.eyebrow}</p>
                <h3 className="mt-1 font-display text-3xl italic text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="cardapio" className="border-y border-border bg-secondary/40 py-20 md:py-28" aria-labelledby="cardapio-title">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase text-accent">À escolha da casa</p>
                <h2 id="cardapio-title" className="font-display text-5xl italic text-primary md:text-6xl">O nosso cardápio</h2>
                <p className="mt-5 max-w-md leading-7 text-muted-foreground">
                  Pratos portugueses de conforto, preparados com o tempo e o cuidado de sempre. A seleção pode variar conforme o mercado e a época.
                </p>

                <aside className="daily-special mt-10" aria-label="Informação sobre o prato do dia">
                  <p className="text-[10px] font-semibold uppercase text-primary-foreground/70">De terça a sexta · ao almoço</p>
                  <h3 className="mt-3 font-display text-4xl italic text-primary-foreground">Prato do dia</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-primary-foreground/80">
                    Uma sugestão caseira diferente, escolhida diariamente pela cozinha. À segunda-feira estamos encerrados.
                  </p>
                  <a className="mt-6 inline-flex font-semibold text-primary-foreground underline decoration-accent underline-offset-4" href="tel:+351252853492">
                    Ligue para saber o prato de hoje
                  </a>
                </aside>
              </div>

              <div className="divide-y divide-border border-y border-border">
                {menuSections.map((section) => (
                  <div key={section.title} className="grid gap-6 py-8 sm:grid-cols-[9rem_1fr] md:py-10">
                    <h3 className="font-display text-3xl italic text-primary">{section.title}</h3>
                    <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                      {section.items.map((item) => (
                        <li key={item} className="border-b border-border/70 pb-4 text-sm leading-6 text-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="py-7 text-sm leading-6 text-muted-foreground">
                  Consulte-nos sobre acompanhamentos, disponibilidade e preços do dia.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/40 pt-16 pb-10 md:pt-24 md:pb-20" aria-labelledby="reviews-title">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-10 border-b border-border pb-12 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase text-accent">Palavras de quem nos visita</p>
                <h2 id="reviews-title" className="font-display text-5xl italic text-primary md:text-6xl">À mesa, sentem-se em casa</h2>
              </div>
              <div className="flex flex-wrap gap-x-10 gap-y-5">
                <a className="rating-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+Mira+Rio+Rebordoes" target="_blank" rel="noreferrer" aria-label="Ver avaliações do Mira Rio no Google Maps">
                  <span className="rating-platform inline-flex items-center gap-1.5">
                    <GoogleMapsLogo className="h-3.5 w-3.5 text-[#4285F4]" />
                    Google Maps
                  </span>
                  <span className="rating-number">4,3</span>
                  <span className="rating-stars" aria-hidden="true">★★★★★</span>
                  <span className="rating-count">156 avaliações</span>
                </a>
                <a className="rating-link" href="https://www.tripadvisor.com/Restaurant_Review-g1466996-d12700432-Reviews-Restaurante_Mira_Rio-Santo_Tirso_Porto_District_Northern_Portugal.html" target="_blank" rel="noreferrer" aria-label="Ver avaliações do Mira Rio no Tripadvisor">
                  <span className="rating-platform inline-flex items-center gap-1.5">
                    <TripadvisorLogo className="h-3.5 w-3.5 text-[#00AF87]" />
                    Tripadvisor
                  </span>
                  <span className="rating-number">4,5</span>
                  <span className="rating-stars" aria-hidden="true">★★★★★</span>
                  <span className="rating-count">16 avaliações</span>
                </a>
              </div>
            </div>

            <div className="grid gap-px bg-border md:grid-cols-3">
              {reviews.map((review) => (
                <figure key={review.author} className="flex flex-col justify-between bg-background p-7 md:min-h-64 md:p-9">
                  <blockquote className="font-display text-2xl italic leading-snug text-foreground">“{review.quote}”</blockquote>
                  <figcaption className="mt-5 flex items-center justify-between text-[10px] font-semibold uppercase text-muted-foreground">
                    <span>{review.author}</span>
                    <span className="inline-flex items-center gap-1.5">
                      <GoogleMapsLogo className="h-3 w-3 text-[#4285F4]" />
                      Google Maps · 5/5
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="azulejo-band pt-8 pb-20 md:pt-16 md:pb-28">
          <figure className="w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
            <img
              src={rioAve.url}
              alt="Vista do Rio Ave a partir do Restaurante Mira Rio, em Rebordões, Santo Tirso"
              className="h-[40vh] w-full object-cover md:h-[55vh]"
              loading="lazy"
            />
          </figure>
          <div className="mx-auto mt-14 max-w-3xl px-5 text-center md:px-8">
            <p className="text-xs font-semibold uppercase text-accent">De geração em geração</p>
          </div>
          <div className="mx-auto mt-10 max-w-3xl px-5 text-center md:px-8">
            <h2 className="font-display text-4xl leading-tight text-primary md:text-6xl">
              Uma casa onde a qualidade se prova primeiro à mesa da família.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-7 text-muted-foreground">
              É esta confiança simples que guia o Restaurante Mira Rio há mais de três décadas: receber cada pessoa com pratos locais verdadeiros e a generosidade do Norte, à vista do Rio Ave.
            </p>
          </div>
        </section>

      </main>

      <footer id="visitar" className="border-t border-border px-5 py-14 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_1fr_0.8fr]">
          <div>
            <p className="font-display text-4xl italic text-primary">Restaurante Mira Rio</p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">Av. João Paulo II, 400<br />4795 Rebordões, Santo Tirso</p>
            <a className="mt-5 inline-block text-sm font-semibold text-primary underline decoration-accent underline-offset-4" href="https://www.google.com/maps/search/?api=1&query=Restaurante+Mira+Rio+Rebordoes" target="_blank" rel="noreferrer">Ver no mapa</a>
          </div>
          <div>
            <p className="footer-label">Horário</p>
            <div className="mt-5 space-y-2 text-sm text-muted-foreground">
              <p>Terça a domingo · 12:00 — 15:00</p>
              <p className="font-semibold text-accent">Segunda-feira · Encerrado</p>
            </div>
          </div>
          <div className="md:text-right">
            <p className="footer-label">Reservas e pedidos</p>
            <a className="mt-5 block font-display text-2xl text-primary" href="tel:+351252853492">+351 252 853 492</a>
            <a className="mt-2 block break-all text-sm text-muted-foreground" href="mailto:mirario.sts@gmail.com">mirario.sts@gmail.com</a>
            <a className="button-primary mt-6" href="tel:+351252853492">Ligar agora</a>
          </div>
        </div>
        <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-2 border-t border-border pt-7 text-[10px] uppercase text-muted-foreground sm:flex-row sm:justify-between">
          <p>© 2026 Restaurante Mira Rio</p>
          <div className="flex flex-col gap-2 sm:items-end">
            <p>Visa · Mastercard · Multibanco</p>
            <a className="transition-colors hover:text-primary" href="https://www.livroreclamacoes.pt/Inicio/" target="_blank" rel="noreferrer">Livro de Reclamações</a>
          </div>
        </div>
      </footer>
    </div>
  );
}