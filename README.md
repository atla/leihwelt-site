# Leihwelt

Personal hobby-project portfolio for **Marcus Körner** (`atla`).

- **Live:** https://leihwelt.com / https://leihwelt.de (HTTP until DNS/TLS settle)
- **Stack:** [Hugo](https://gohugo.io/) static site, markdown content, custom clean light/dark layout
- **Not** the CozyTown arcade (`mycozy.town`) — this site only catalogues projects

## Local develop

```bash
hugo server -D
```

Build:

```bash
hugo --minify
```

## Add a project

1. Copy the archetype or create a new file under `content/projects/`:

```bash
hugo new content content/projects/my-game.md
```

2. Fill frontmatter (required shape):

```yaml
---
title: "My Game"
summary: "One-line pitch."
technologies:
  - Go
  - Svelte
year_start: 2024
year_end: null          # or a year like 2025
status: ongoing         # use "ongoing" OR set year_end; leave status empty if finished
cover: "/images/covers/my-game.svg"   # optional
github: "https://github.com/atla/..."
live: "https://..."
store: ""
weight: 55              # lower = earlier on the home grid
draft: false
---
```

3. Write the body in markdown. Optional cover art: drop an image in `static/images/covers/` and point `cover` at it.

4. Commit with `[grokbot]` in the message when bots push; humans can use normal messages.

## Deploy (CozyTown)

Source of truth on the server: `/home/atla/apps/leihwelt/`

```bash
cd /home/atla/apps/leihwelt
git pull
hugo --minify
# backup then publish
sudo mkdir -p /var/www/leihwelt.bak
sudo rsync -a --delete /var/www/leihwelt/ /var/www/leihwelt.bak/$(date +%Y%m%d-%H%M%S)/
sudo rsync -a --delete public/ /var/www/leihwelt/
```

Nginx conf: `/etc/nginx/conf.d/leihwelt.conf` — do **not** touch arcade / mycozy.town configs.

## Theme

System preference + header toggle (`system` → `light` → `dark`). Preference stored in `localStorage` key `leihwelt-theme`.
