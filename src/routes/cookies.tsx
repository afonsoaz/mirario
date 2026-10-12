import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

const title = "Política de Cookies | Restaurante Mira Rio";
const description = "O site do Restaurante Mira Rio não usa cookies de rastreio nem de publicidade. Saiba o que isso significa.";

export const Route = createFileRoute("/cookies")({
  component: Page,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
});

function Page() {
  return (
    <LegalPage title="Política de Cookies" updated="12 de outubro de 2026">
      <p>Cookies são pequenos ficheiros que um site pode guardar no seu dispositivo.</p>
      <h2>Que cookies usamos</h2>
      <p><strong>Nenhum cookie de estatística, publicidade ou redes sociais.</strong> Este site não grava cookies próprios, não usa Google Analytics, píxeis de rastreio ou conteúdos incorporados de terceiros (mapas, vídeos ou widgets). Os tipos de letra são servidos pelo próprio site, sem ligação a servidores externos.</p>
      <p>Por isso não lhe pedimos consentimento: não há nada a aceitar ou recusar.</p>
      <h2>Ligações externas</h2>
      <p>Se clicar em ligações para o Google Maps, Tripadvisor ou Livro de Reclamações, esses sites podem usar os seus próprios cookies, de acordo com as respetivas políticas.</p>
      <h2>Alterações</h2>
      <p>Se no futuro passarmos a usar cookies não essenciais, só o faremos depois de pedir o seu consentimento, e atualizaremos esta página.</p>
      <p>Veja também a <Link to="/privacidade">Política de Privacidade</Link>.</p>
    </LegalPage>
  );
}
