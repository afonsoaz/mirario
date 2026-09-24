# Routes

TanStack Start uses **file-based routing**: every file in this folder is a route, and its
path is its URL. The whole restaurant fits on one page, so there are only three.

| File | URL | What it is |
| --- | --- | --- |
| `__root.tsx` | (every page) | The shell: meta tags, fonts, favicon, Search Console verification, and the 404 and error screens. Every page renders through its `<Outlet />`, so that has to stay. |
| `index.tsx` | `/` | The whole restaurant, top to bottom, with its title, description and schema.org data. |
| `lovable/email/transactional/preview.ts` | `/lovable/email/transactional/preview` | A POST endpoint Lovable calls to preview email templates. It answers only to a caller holding `LOVABLE_API_KEY`. |

`routeTree.gen.ts`, one folder up, is generated from this folder. Don't edit it by hand.

## Adding a page

This is TanStack Start, not Next.js or Remix, so do **not** create `src/pages/`,
`src/routes/_app/index.tsx` or `app/layout.tsx`. The only root layout is
`src/routes/__root.tsx`. Name the file after its URL:

| File | URL |
| --- | --- |
| `index.tsx` | `/` |
| `about.tsx` | `/about` |
| `users/index.tsx` | `/users` |
| `users/$id.tsx` | `/users/:id` (dynamic: a bare `$`, no curly braces) |
| `posts/{-$category}.tsx` | `/posts/:category?` (optional segment) |
| `files/$.tsx` | `/files/*` (splat: read it from the `_splat` param, never `*`) |
| `_layout.tsx` | a layout route, which renders its children through `<Outlet />` |
| `__root.tsx` | the app shell, which wraps every page; keep its `<Outlet />` |
