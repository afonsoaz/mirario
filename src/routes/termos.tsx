import { createFileRoute, Link } from "@tanstack/react-router";
import { CONTACT, LegalPage } from "@/components/LegalPage";

const title = "Termos e Condições | Restaurante Mira Rio";
const description = "Termos e condições de utilização do site do Restaurante Mira Rio, em Rebordões, Santo Tirso.";

export const Route = createFileRoute("/termos")({
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
    links: [{ rel: "canonical", href: "/termos" }],
  }),
});

function Page() {
  return (
    <LegalPage title="Termos e Condições" updated="12 de outubro de 2026">
      <p>Ao utilizar este site aceita os termos seguintes. O site pertence ao {CONTACT.name}, {CONTACT.address}.</p>
      <h2>1. Finalidade do site</h2>
      <p>Este site apresenta o restaurante, a sua história, cardápio, horário e contactos. Não é feita qualquer venda através do site.</p>
      <h2>2. Cardápio, preços e horário</h2>
      <p>O cardápio é indicativo e pode variar conforme o mercado e a época. Os preços e o prato do dia são confirmados no restaurante ou por telefone. O horário pode ser alterado em feriados ou datas especiais.</p>
      <h2>3. Reservas</h2>
      <p>As reservas são feitas por telefone ({CONTACT.phone}) ou email e só ficam confirmadas após a nossa resposta. Agradecemos que nos avise se não puder comparecer.</p>
      <h2>4. Propriedade dos conteúdos</h2>
      <p>Os textos, fotografias, desenhos e o logótipo deste site pertencem ao {CONTACT.name} e não podem ser reproduzidos sem autorização. As marcas Google Maps e Tripadvisor pertencem aos respetivos titulares e são usadas apenas para identificar a origem das avaliações, que são citadas com atribuição.</p>
      <h2>5. Ligações externas</h2>
      <p>Não somos responsáveis pelo conteúdo de sites de terceiros para onde existam ligações.</p>
      <h2>6. Responsabilidade</h2>
      <p>Procuramos manter a informação correta e atualizada, mas não garantimos que esteja isenta de erros.</p>
      <h2>7. Reclamações e litígios</h2>
      <p>Dispomos de Livro de Reclamações, físico e <a href="https://www.livroreclamacoes.pt/Inicio/" target="_blank" rel="noreferrer">eletrónico<span className="sr-only"> (abre numa nova janela)</span></a>. Em caso de litígio de consumo, pode recorrer ao CICAP – Centro de Informação de Consumo e Arbitragem do Porto (<a href="https://www.cicap.pt" target="_blank" rel="noreferrer">www.cicap.pt<span className="sr-only"> (abre numa nova janela)</span></a>). Mais informação em <a href="https://www.consumidor.gov.pt" target="_blank" rel="noreferrer">www.consumidor.gov.pt<span className="sr-only"> (abre numa nova janela)</span></a>.</p>
      <h2>8. Lei aplicável</h2>
      <p>Estes termos regem-se pela lei portuguesa.</p>
      <p>Veja também a <Link to="/privacidade">Política de Privacidade</Link> e a <Link to="/cookies">Política de Cookies</Link>.</p>
    </LegalPage>
  );
}
