import { createFileRoute } from "@tanstack/react-router";
import fernandaLine from "../assets/dona-fernanda-line.png";
import peixeAsset from "../assets/peixe-grelhado.jpg.asset.json";
import assadoAsset from "../assets/assado-da-casa.jpg.asset.json";
import salaAsset from "../assets/sala-mira-rio.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Restaurante Mira Rio — Cozinha Portuguesa em Santo Tirso" },
      {
        name: "description",
        content:
          "Há mais de 30 anos, D. Fernanda serve cozinha portuguesa caseira no Restaurante Mira Rio, em Rebordões, Santo Tirso.",
      },
      { property: "og:title", content: "Restaurante Mira Rio — Santo Tirso" },
      {
        property: "og:description",
        content: "Cozinha portuguesa com o sabor e o cuidado de uma casa de família.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8" aria-label="Navegação principal">
          <a href="#inicio" className="font-display text-3xl font-semibold text-primary md:text-4xl">Mira Rio</a>
          <div className="hidden items-center gap-8 text-xs font-semibold uppercase text-muted-foreground md:flex">
            <a className="nav-link" href="#historia">A nossa história</a>
            <a className="nav-link" href="#mesa">À mesa</a>
            <a className="nav-link" href="#visitar">Visite-nos</a>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <a className="button-menu" href="#cardapio">Cardápio</a>
            <a className="button-primary hidden sm:inline-flex" href="tel:+351252853492" aria-label="Ligar para reservar mesa">
              Reservar
            </a>
          </div>
        </nav>
      </header>

      <main id="inicio">
        <section id="historia" className="relative mx-auto max-w-7xl overflow-hidden px-5 pt-12 md:grid md:min-h-[680px] md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-4 md:px-8 md:pt-20 lg:min-h-[760px] lg:pt-24">
          <div className="fernanda-hero-mobile md:hidden" aria-hidden="true">
            <img src={fernandaLine} alt="" />
          </div>
          <div className="relative z-10 self-center pb-12 md:pb-24">
            <p className="mb-4 text-xs font-semibold uppercase text-accent">Desde 1986</p>
            <h1 className="max-w-[58%] font-display text-4xl leading-[1.08] text-primary sm:max-w-2xl sm:text-5xl md:text-7xl">
              A alma da cozinha,<br />pelas mãos de <em className="mt-2 block text-[1.2em] font-normal leading-[0.92]">D. Fernanda</em>
            </h1>
            <div className="relative">
              <p className="mt-8 max-w-lg text-lg leading-8 text-foreground md:text-muted-foreground">
                No Mira Rio, cozinha-se como em casa. D. Fernanda prepara cada refeição com o mesmo cuidado com que alimenta os filhos e os netos, que continuam a sentar-se aqui à mesa quase todos os dias.
              </p>
              <p className="mt-6 max-w-lg border-l-2 border-accent pl-5 font-display text-2xl italic leading-snug text-foreground">
                “Se é bom para a minha família, é bom para quem nos visita.”
              </p>
              <a className="hero-phone mt-7" href="tel:+351252853492" aria-label="Ligar para o Restaurante Mira Rio">
                <span>Reservas e prato do dia</span>
                <strong>+351 252 853 492</strong>
              </a>
            </div>
          </div>

          <div className="relative hidden h-full min-h-[640px] items-end justify-center self-end md:flex">
            <img className="fernanda-line" src={fernandaLine} alt="Retrato desenhado a traço fino de D. Fernanda" />
          </div>
        </section>

        <section className="relative z-20 bg-primary py-10 text-primary-foreground">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-10 px-5 md:grid-cols-4 md:px-8">
            {details.map(([label, value]) => (
              <div key={label}>
                <p className="mb-2 text-[10px] font-semibold uppercase opacity-60">{label}</p>
                <p className="whitespace-pre-line font-display text-lg italic leading-snug">{value}</p>
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

        <section className="border-y border-border bg-secondary/40 py-20 md:py-24" aria-labelledby="reviews-title">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-10 border-b border-border pb-12 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase text-accent">Palavras de quem nos visita</p>
                <h2 id="reviews-title" className="font-display text-5xl italic text-primary md:text-6xl">À mesa, sentem-se em casa</h2>
              </div>
              <div className="flex flex-wrap gap-x-10 gap-y-5">
                <a className="rating-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+Mira+Rio+Rebordoes" target="_blank" rel="noreferrer" aria-label="Ver avaliações do Mira Rio no Google">
                  <span className="rating-platform">Google</span>
                  <span className="rating-number">4,3</span>
                  <span className="rating-stars" aria-hidden="true">★★★★★</span>
                  <span className="rating-count">156 avaliações</span>
                </a>
                <a className="rating-link" href="https://www.tripadvisor.com/Restaurant_Review-g1466996-d12700432-Reviews-Restaurante_Mira_Rio-Santo_Tirso_Porto_District_Northern_Portugal.html" target="_blank" rel="noreferrer" aria-label="Ver avaliações do Mira Rio no Tripadvisor">
                  <span className="rating-platform">Tripadvisor</span>
                  <span className="rating-number">4,5</span>
                  <span className="rating-stars" aria-hidden="true">★★★★★</span>
                  <span className="rating-count">16 avaliações</span>
                </a>
              </div>
            </div>

            <div className="grid gap-px bg-border md:grid-cols-3">
              {reviews.map((review) => (
                <figure key={review.author} className="flex min-h-64 flex-col justify-between bg-background p-7 md:p-9">
                  <blockquote className="font-display text-2xl italic leading-snug text-foreground">“{review.quote}”</blockquote>
                  <figcaption className="mt-8 flex items-center justify-between text-[10px] font-semibold uppercase text-muted-foreground">
                    <span>{review.author}</span>
                    <span>{review.source} · 5/5</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="azulejo-band py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
            <p className="text-xs font-semibold uppercase text-accent">De geração em geração</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-primary md:text-6xl">
              Uma casa onde a qualidade se prova primeiro à mesa da família.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-7 text-muted-foreground">
              É esta confiança simples que guia o Mira Rio há mais de três décadas — receber cada pessoa com comida verdadeira e a generosidade do Norte.
            </p>
          </div>
        </section>
      </main>

      <footer id="visitar" className="border-t border-border px-5 py-14 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_1fr_0.8fr]">
          <div>
            <p className="font-display text-4xl italic text-primary">Mira Rio</p>
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