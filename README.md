# Leihwelt

Studio site for **Marcus Körner** (`@atla_`) — [leihwelt.com](https://leihwelt.com).

Three games up front: **Veilspan**, **Pirates Bay Palooza**, **Neon Velocity**. Older hobby experiments stay in a quieter list. This is not the CozyTown arcade (`mycozy.town`).

- **Stack:** [Hugo](https://gohugo.io/) static site
- **Source:** https://github.com/atla/leihwelt

## Local

```bash
hugo server -D
```

Production build:

```bash
hugo --minify
```

Output is `public/`.

## Deploy

Preferred: Netlify from this repo (`netlify.toml` is already set, Hugo 0.167.0).

Fallback: GitHub Pages from the `gh-pages` branch (contents of `public/`) or from `main` / `docs` if you switch the source. `static/CNAME` publishes `leihwelt.com`.

The CozyTown VPS (`/var/www/leihwelt/`, `46.224.28.163`) is only a fallback if Pages and Netlify are both unavailable. Do not change mycozy.town nginx.

Commit messages from bots include `[grokbot]`.
