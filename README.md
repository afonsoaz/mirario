# Restaurante Mira Rio

**DISCLAIMER: I have used AI (specifically [Lovable](https://lovable.dev)) heavily to build this website**

The website of Restaurante Mira Rio, my grandparents' restaurant in Rebordões, Santo Tirso,
in the north of Portugal. It opened in February 1985 within sight of the Rio Ave, and
D. Fernanda has run it, and cooked in it, for more than thirty years. Her sons and grandsons
still eat there almost every day, and that is the case the site makes for the food: she
serves it to her own family first.

For someone deciding where to have lunch, the page does three things. It says what kind of
place this is, it shows what is cooked there, and it keeps the phone number one tap away,
because the phone is how the restaurant takes bookings and how you find out the dish of the
day. It is written in European Portuguese.

**[Visit the site](https://restaurantemirario.com)**

<p align="center">
  <img src="docs/img/desktop.jpg" width="100%" alt="The first screen on a laptop: the headline, the phone number and a line drawing of D. Fernanda">
</p>

TanStack Start, React 19 and Tailwind CSS 4, rendered on the server and hosted by Lovable.
One page, about 450 lines of it, on top of the template Lovable starts every project from.

## What is on the page

| Section | What it answers |
|---|---|
| **A nossa história** | Who cooks here. The headline, the drawing of D. Fernanda, and the number to call for a table or the dish of the day. |
| **The blue band** | The practical four: the address, which opens in Google Maps, the kind of cooking, the lunch hours, and parking, takeaway and the cards it takes. |
| **À mesa** | What the food is like, in three pictures: grilled fish, a roast and the dining room. |
| **Cardápio** | What you can order. Dishes from the sea and from the land, and the prato do dia, served Tuesday to Friday and told over the phone. |
| **Reviews** | What other people think. The Google Maps and Tripadvisor ratings, each linking to its source, and three reviews quoted from Google Maps. |
| **The river** | Why it has lasted. A wide picture of the Rio Ave, and the line the site is built on: quality proven first at the family's own table. |
| **Visite-nos** | How to get there and when. Address, hours, phone, email, and the link to the Livro de Reclamações, the official complaints book that Portuguese law asks businesses to link from their websites. |

<p align="center">
  <img src="docs/img/phone-hero.jpg" width="24%" alt="On a phone: the headline, with the drawing of D. Fernanda behind it">
  <img src="docs/img/phone-mesa.jpg" width="24%" alt="On a phone: the start of À mesa">
  <img src="docs/img/phone-cardapio.jpg" width="24%" alt="On a phone: the menu and the prato do dia">
  <img src="docs/img/phone-reviews.jpg" width="24%" alt="On a phone: the ratings and the first reviews">
</p>

## Rules the page follows

There are four, and each one can be checked in [`src/routes/index.tsx`](src/routes/index.tsx).

- **The phone is the booking system.** Bookings are taken over the phone, so every button
  on the page is a `tel:` link: Reservar in the header, the number under the headline, and
  Ligar agora in the footer. The same number is how you find out the prato do dia. There is
  no booking form.
- **"Aberto agora" is Lisbon time, whoever is looking.** The green badge is worked out with
  `Intl.DateTimeFormat` in `Europe/Lisbon`, so someone checking from Boston sees whether the
  restaurant is open in Rebordões, not where they are. It shows only from 12:00 to 15:00,
  Tuesday to Sunday, checks again every minute, and is drawn in the browser after the page
  loads, because the server that renders the HTML cannot know when you will read it.
- **Say only what can be checked.** The menu was built to a plan, kept in
  [`.lovable/plan/`](.lovable/plan), that allowed only dishes found in public sources and
  ruled out inventing a daily rota. The page names eight dishes and no prices, and for the
  prato do dia it gives you the phone number.
- **Every rating says where it came from.** The two scores carry the Google Maps and
  Tripadvisor logos and link to their pages, and each quoted review is marked as a Google
  Maps review.

## How it was built

It started as one prompt in Lovable, which asked for a site that felt familiar and
traditional but also airy, with hints of the river and the countryside, and that put
D. Fernanda at the centre. Lovable wrote the code, and I steered it over more than a
hundred commits in a week, most of them on 21 September 2026. Lovable commits every change straight
to this repository, which is why nearly all of the history belongs to its bot, and anything
pushed here syncs back into the editor.

The brief became a warm off-white page, a deep azulejo blue with a terracotta accent,
Instrument Serif for the headings and Work Sans for the text, a faint pattern of tile dots
behind the river, and D. Fernanda as a line drawing rather than a photograph.

A few things sit behind the page:

- **Server rendering.** The whole page, menu included, is in the first HTML response, which
  is what a search engine reads and what a phone on a weak signal shows first.
- **Search.** A description and Open Graph tags for link previews, schema.org data that
  tells search engines this is a restaurant, with its address, hours, phone and rating, a
  sitemap, a robots.txt that lets every crawler in and points to it, and Google Search
  Console connected.
- **Email.** Lovable's managed email is set up for the restaurant's domain, with
  `notify.restaurantemirario.com` as the sending subdomain. No template is registered yet,
  so nothing sends mail.
- **Hosting.** Lovable serves the site at [restaurantemirario.com](https://restaurantemirario.com),
  and both `www.restaurantemirario.com` and `mirario.lovable.app` redirect there.

## How it is put together

```
src/
  routes/
    __root.tsx          the shell: meta tags, fonts, Search Console verification, error screens
    index.tsx           the whole restaurant, its schema.org data, and the "Aberto agora" badge
    lovable/email/      an endpoint Lovable calls to preview email templates
  lib/email-templates/  sending through Lovable's managed email, from the restaurant's domain
  assets/               the drawing of D. Fernanda, the logo, and pointers to images Lovable stores
  styles.css            colours in OKLCH, the type, and the page's own pieces: hero, phone, tiles
  server.ts, start.ts   from the template: the server entry, the error page, CSRF protection
  components/ui/        the shadcn/ui kit from Lovable's template, which the page does not use
public/                 favicon, robots.txt and sitemap.xml
.lovable/plan/          the plan Lovable drew up for the menu and the phone number
roadmap.md              two finished items: the rating logos and "Aberto agora"
```

More on the routes in [`src/routes/README.md`](src/routes/README.md).

## What it does not do

It is one page for a restaurant that takes bookings by phone, so a few things are missing.

- **No booking form, no online ordering and no prices.** The phone covers the first two,
  and the page asks you to call for the day's prices.
- **The ratings are typed in by hand.** The scores and review counts are written into the
  page and its schema.org data rather than fetched, so they drift until someone updates
  them.
- **Portuguese only.** There is no English version of the page.

## Run it locally

You need Node.js. Lovable uses Bun, which is why the lockfile is `bun.lock`, but npm works
too.

```bash
git clone https://github.com/afonsoaz/mirario.git
cd mirario
npm install
npm run dev
```

Nothing needs a key to run the page. Only sending email would, through `LOVABLE_API_KEY`,
and nothing sends email yet. The drawing of D. Fernanda is in the repository, and the other
images are stored with Lovable and referenced from `src/assets/`.

## Licence

All rights reserved, except for the shadcn/ui components in `src/components/ui/`, which keep
their MIT licence. The source is published to be read, not reused, and that includes the
drawing of D. Fernanda and the restaurant's name.

Afonso Azevedo, 2026.
