import { createFileRoute, Link } from "@tanstack/react-router";
import { CONTACT, LegalPage } from "@/components/LegalPage";

const title = "Política de Privacidade | Restaurante Mira Rio";
const description = "Como o Restaurante Mira Rio, em Rebordões, Santo Tirso, trata os seus dados pessoais, ao abrigo do RGPD.";

export const Route = createFileRoute("/privacidade")({
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
    links: [{ rel: "canonical", href: "/privacidade" }],
  }),
});

function Page() {
  return (
    <LegalPage title="Política de Privacidade" updated="12 de outubro de 2026">
      <p>Esta política explica como o {CONTACT.name} trata os dados pessoais de quem visita este site ou nos contacta, de acordo com o Regulamento Geral sobre a Proteção de Dados (RGPD) e a legislação portuguesa.</p>
      <h2>1. Responsável pelo tratamento</h2>
      <p>{CONTACT.name}, {CONTACT.address}. Email: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> · Telefone: <a href="tel:+351252853492">{CONTACT.phone}</a>.</p>
      <h2>2. Que dados tratamos</h2>
      <ul>
        <li><strong>Reservas e pedidos:</strong> o nome, número de telefone, email e detalhes da reserva que nos fornecer por telefone ou email.</li>
        <li><strong>Dados técnicos:</strong> o serviço que aloja o site regista, de forma automática e temporária, dados técnicos como o endereço IP e o tipo de navegador, para garantir a segurança e o funcionamento do site.</li>
      </ul>
      <p>Este site não tem formulários, não usa ferramentas de estatística ou publicidade e não cria perfis de visitantes.</p>
      <h2>3. Para que usamos os dados e com que fundamento</h2>
      <ul>
        <li>Gerir reservas e responder a pedidos — diligências pré-contratuais a seu pedido (art. 6.º, n.º 1, al. b) do RGPD).</li>
        <li>Segurança e funcionamento do site — interesse legítimo (art. 6.º, n.º 1, al. f)).</li>
        <li>Cumprimento de obrigações legais, por exemplo fiscais — obrigação legal (art. 6.º, n.º 1, al. c)).</li>
      </ul>
      <h2>4. Durante quanto tempo</h2>
      <p>Os dados de reservas são guardados apenas o tempo necessário para a reserva e eventuais contactos relacionados. Os registos técnicos são apagados pelo serviço de alojamento após um curto período. Documentos fiscais são conservados pelo prazo legal.</p>
      <h2>5. Partilha de dados</h2>
      <p>Não vendemos nem cedemos os seus dados. Podem ser tratados por prestadores que nos apoiam (alojamento do site e serviço de email), sempre com garantias adequadas de proteção.</p>
      <h2>6. Sites externos</h2>
      <p>O site inclui ligações para o Google Maps, Tripadvisor e Livro de Reclamações Eletrónico. Só são abertas se clicar nelas e regem-se pelas políticas de privacidade desses serviços.</p>
      <h2>7. Os seus direitos</h2>
      <p>Pode pedir acesso, retificação, apagamento, limitação ou portabilidade dos seus dados e opor-se ao seu tratamento, contactando-nos por <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>. Tem também o direito de apresentar reclamação à Comissão Nacional de Proteção de Dados (<a href="https://www.cnpd.pt" target="_blank" rel="noreferrer">www.cnpd.pt<span className="sr-only"> (abre numa nova janela)</span></a>).</p>
      <h2>8. Cookies</h2>
      <p>Saiba mais na nossa <Link to="/cookies">Política de Cookies</Link>.</p>
    </LegalPage>
  );
}
