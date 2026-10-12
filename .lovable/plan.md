# Páginas legais, privacidade e acessibilidade

## O que encontrei
- **Rastreio:** o site não tem Google Analytics, píxeis nem anúncios, e não grava cookies próprios. A única ligação a terceiros que acontece sozinha é o tipo de letra, carregado dos servidores da Google (isso envia o endereço IP do visitante à Google sem consentimento — já houve multas na UE por isto).
- **Conteúdos de terceiros incorporados:** nenhum (sem mapas, vídeos ou widgets). Google Maps, Tripadvisor e Livro de Reclamações são apenas links.
- **Imagens:** todas são do restaurante (fotos editadas, desenho de D. Fernanda, favicon próprio). Os logótipos Google Maps / Tripadvisor são usados só para identificar as avaliações, o que é uso aceitável. Os textos das avaliações estão citados com atribuição.
- **Texto alternativo:** as imagens já têm descrição; o desenho repetido em telemóvel está marcado como decorativo (correto). Vou rever cada descrição para ficar mais rica.
- **Contraste:** há alguns textos pequenos esbatidos (rótulos a 60–70% de opacidade) que podem não cumprir o mínimo legível.

## O que vou fazer
1. **Política de Privacidade** (`/privacidade`) — responsável (Restaurante Mira Rio, morada, email), que dados são tratados (só os que a pessoa envia por telefone/email para reservas; registos técnicos do alojamento), finalidade, base legal RGPD, prazos, direitos e contacto da CNPD.
2. **Termos e Condições** (`/termos`) — uso do site, informação de preços/cardápio indicativa, reservas, propriedade dos conteúdos, links externos, lei portuguesa.
3. **Política de Cookies** (`/cookies`) — explica que o site não usa cookies de rastreio nem publicidade; lista o que existe (nenhum cookie próprio; registos técnicos do alojamento sem cookies).
4. **Consentimento:** como não há rastreio, **não é preciso aviso de cookies** (mostrá-lo sem motivo seria pior). Para eliminar a única ligação automática à Google, os tipos de letra passam a ser servidos pelo próprio site. Se no futuro for adicionado Analytics, fica preparado o ponto para pedir consentimento antes.
5. **Rodapé:** links para as três páginas junto ao Livro de Reclamações.
6. **Acessibilidade:** subir contraste dos textos esbatidos, garantir foco visível em todos os links/botões, link "Saltar para o conteúdo", hierarquia de títulos sem saltos, área de toque mínima em telemóvel, rótulos claros nos links de logótipos e estrelas (ex.: "Avaliação 4,3 de 5 no Google Maps"), e aviso de abrir em nova janela nos links externos.
7. Verificar no ecrã (telemóvel e computador) e atualizar o sitemap com as novas páginas.

Nota: os textos legais serão um modelo sólido, mas convém confirmarem NIF/nome legal da empresa — posso deixar um campo para isso.

## Detalhes técnicos
- Novas rotas `src/routes/privacidade.tsx`, `termos.tsx`, `cookies.tsx`, cada uma com `head()` próprio; cabeçalho/rodapé partilhados extraídos de `index.tsx` para componentes reutilizáveis.
- Fontes Instrument Serif e Work Sans auto-alojadas (ficheiros woff2 em `public/fonts` + `@font-face`), removendo o link para fonts.googleapis.com em `__root.tsx`.
- Contraste: trocar `opacity-60` e `text-primary-foreground/70` por tokens com rácio ≥ 4.5:1; validar com axe via Playwright.
- `public/sitemap.xml` com as 3 novas URLs.
