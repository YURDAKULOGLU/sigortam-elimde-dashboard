# Sigortam Elimde — Dashboard (V1 demo)

Frontend-only demo of the "Sigortam Elimde" insurance policy dashboard,
built from the V1 Dashboard Master Spec. No backend, auth, OCR or real
insurer integration — mock data only, but every interactive element responds
(modal, toast, upload states, fake loading).

**Live:** https://yurdakuloglu.github.io/sigortam-elimde-dashboard/

## Stack

Vite + React + TypeScript + Tailwind CSS v4 (theme tokens in `src/index.css`),
`lucide-react` icons. Static export, deployed to GitHub Pages from `docs/`.

## Scope

- Welcome/status header, three quick-action panels (Poliçe Karşılaştır,
  Poliçe Sağlık Raporu, Kaza Yaptım) — each a distinct layout, not repeated
  cards.
- Policies list (row/divider style), renewals list, insight card, empty
  state, and full modal set with upload states (empty/hover/uploading/
  success/error) and toast notifications.

## Develop

```bash
npm install
npm run dev
npm run build     # outputs dist/
```

`docs/` is a committed static build used directly by GitHub Pages
(`main` branch, `/docs` path). Rebuild it after changes:

```bash
npm run build && rm -rf docs && cp -r dist docs
```
