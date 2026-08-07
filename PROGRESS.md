# Progress — Sigortam Elimde Dashboard

- [x] Spec read completely (2441 lines, kasko spec.txt)
- [x] Scaffold: Vite + React + TS + Tailwind v4, base path set for GitHub Pages
- [x] Design tokens (CSS variables per spec §29-33)
- [x] Sidebar / Header / Bottom nav
- [x] Welcome + stats
- [x] Quick actions (Compare / Health / Accident — 3 distinct shapes, not repeated cards)
- [x] Policies section (row/list, not card-per-policy)
- [x] Renewals section
- [x] Insight card
- [x] Modals: Compare, Health report, Accident, Add policy
- [x] Toast system
- [x] Empty state (toggle via dev link, bottom-left desktop)
- [x] Responsive check 390px / 1440px via Playwright — no horizontal overflow, no console errors
- [x] Build green (tsc -b && vite build)
- [x] Git init + commit
- [x] GitHub repo created + pushed
- [x] GitHub Pages published (docs/ on main)
- [x] Live URL verified 200 + real content

## De-AI pass (owner feedback: "site çok AI olmuş")
- [x] Removed waving-hand emoji from greeting (no emoji anywhere in product UI)
- [x] Replaced marketing-coach hero subtitle with factual status line (active policy count + nearest renewal)
- [x] Renamed "Ne yapmak istersin?" to "İşlemler"
- [x] Cut "kolayca"/"hızla"/"tek yerden" filler and redundant helper sentences under headings
- [x] Replaced stock Tailwind blue (#155EEF) with deep ink-petrol brand color (#12403E), adjusted all derived/semantic tokens
- [x] Simplified empty-state benefit triad from icon-bubble row to plain text
- [x] Rebuilt, verified emoji/old copy/old color absent from the live production bundle (cache-busted fetch)
- [x] Committed and pushed; GitHub Pages serving new build confirmed
- [ ] Playwright visual screenshots — MCP server disconnected this session; verified via build-output/live-bundle string inspection instead (documented in final report)
