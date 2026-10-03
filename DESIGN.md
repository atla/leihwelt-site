# Leihwelt design

Studio site for Marcus Körner. Audience: publishers, press, players, and ID@Xbox reviewers. It should read as a small professional game studio, not a theme and not a portfolio template.

Subject used for every choice below: a one-person German indie, three real games, real screenshots, no awards and no store numbers.

## Pass 1 (before critique)

Color

- Paper `#F3EFE6`
- Ink `#1A1814`
- Brass `#C4A27A` as the only accent
- Mist `#A39888` for secondary text
- Rule `#D9D3C7` for hairlines between rows

Type

- Display: a high-contrast serif (the Fraunces already on the site)
- Body: a neutral grotesque

Layout

- Tracked small-caps line above the title: `STUDIO · GERMANY`
- Three equal cards in a row
- Hairline rules and a two-column newspaper block for About
- Numbered rows `01` `02` `03`

That pass is what a generic “editorial studio” prompt produces. It was not built.

## Critique

| Pass 1 choice | Why it fails this brief | Change |
| --- | --- | --- |
| Warm paper `#F3EFE6` | Sits next to the cream cluster `#F4F1EA` | Cooler green-grey sheet `#E4E7E2` |
| Brass accent | This is the dark site Marcus just rejected, cluster 2’s “single brass/gold accent” | Muted forest ink `#2A4A38` only |
| Near-black page | The shipped look. Also the tinted-black template habit | Light paper, ink text |
| Fraunces + Source Sans | The pairing just shipped. Fraunces is also the high-contrast serif tell | One family: Familjen Grotesk |
| Inter, Roboto, Geist, Space Grotesk, Instrument Serif | Named defaults | Not used |
| Three twin cards, one radius, soft shadow | SaaS-card kit | Alternating editorial rows, no radius, no shadow |
| Hairline rules, dense columns | Broadsheet default | Space separates sections. One text measure |
| `01` `02` `03` | The games are not a sequence | No numerals |
| Tracked ALL-CAPS eyebrows, `A · B · C`, `WORD — fragment` | Template chrome | Sentence-case headings. A comma if two facts share a line |
| Arrow on every link, monospace meta, hover lift, fade-up on each section | Same chrome, plus the motion tell | Plain underlined links. No entrance motion, no lift |
| Painting only “welt” in another color | Single-word accent in a headline | The whole name is ink. Size is the accent |
| Masthead knocked out of the screenshot | Considered, then dropped: the stills are dark UI, so ink type fails and white type becomes a poster treatment | Name sits on paper. The still sits under it, whole frame visible |

## Revised plan

### Color

| Name | Hex | Use |
| --- | --- | --- |
| Paper | `#E4E7E2` | Page. Cool uncoated sheet, not cream |
| Ink | `#17211C` | Text, masthead, titles |
| Forest | `#2A4A38` | Link underlines, focus, link hover. Pine ink, not acid green |
| Graphite | `#4E5A53` | Captions, footer, secondary sentences |
| Sheet | `#F4F6F3` | Skip-link rest state only, and the projects-list hover. Not a card fill |
| Moss | `#C5CFC6` | Text selection |

Ink on paper is 13.2:1. Forest on paper is 7.9:1. Graphite on paper is 5.8:1.

### Type

One family: **Familjen Grotesk** (self-hosted, latin). A wide grotesque with ink traps. The heavy weight is blunt enough to carry the name; the text weight is plain. No second family.

- Masthead: 700, `clamp(4.6rem, 14.5vw, 9.75rem)`, line-height 0.8, tracking `-0.06em`
- Game and page titles: 700, tighter than body, sentence case
- Body: 400, `1.125rem`, line-height 1.5, measure `34rem` (under 80 characters)
- Nav and links: 500 where they are actions, 400 in prose
- No all-caps, no small-caps labels, no monospace

Fallback if the file is late: Avenir Next, Segoe UI, sans-serif.

### Layout

Left aligned. Not centered, not justified.

The page is one sheet. The only loud move is the word **Leihwelt**, set as a catalog title. Under it, one sentence, then the games. Veilspan is the cover: its still is shown once, large, whole, not cropped into a card (that frame reads as a place; Neon’s still is mostly empty road and would be a black void as the cover). It is not repeated as a second thumbnail.

The other two games are asymmetric rows. Screenshot and text swap sides. Same grid, not three twins. Titles go to the game page. Actions are the real verb: “Play in the browser”, “Playtest builds”, “TalesMUD source”.

About and contact are one column of sentences. Earlier experiments stay off the front page; the projects index is a list, not a card grid.

```
Leihwelt                         Games   About   Contact

Leihwelt
Games by Marcus Körner, made in Germany.

[ Veilspan still, full width of the sheet, uncropped ]
Veilspan, a browser MUD.

Games

[ still ]   Veilspan
            one honest sentence
            Play in the browser    TalesMUD source

            Pirates Bay Palooza              [ still ]
            one honest sentence
            Playtest builds

[ still ]   Neon Velocity
            one honest sentence
            Play in the browser

About
...
Contact
X @atla_  and  GitHub
```

Inner pages: a small wordmark back to the studio, then the title, the still if it is a real screenshot, then the writeup. No breadcrumb dots.

### Principles

- One loud move. The masthead. Everything else is quiet enough for a press kit.
- Screenshots are evidence. No generated covers on the front page, no fake awards, no player counts.
- Structure is only there when it tells you where you are: a heading, a link, a caption.
- Sentence case, plain verbs, first person where the studio is speaking.
- Motion does not introduce the page. Focus outlines do.

## Build notes

- Veilspan’s still is the cover and is not shown again as a twin thumbnail. Pirates Bay Palooza and Neon Velocity alternate. The Xbox Series X note stays in the Neon blurb.
- Real files stay: `static/images/games/{veilspan,pirates-bay-palooza,neon-velocity}.webp`.
- Stylesheet is Hugo-fingerprinted so the old brass CSS cannot stick in cache.
