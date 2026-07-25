# Happy Birthday — Azure Dreams

Three pages, linked together, each its own scene. No text labels on any button — every interaction is invited by a quiet visual cue (a breathing glow, an arrow) instead of an instruction.

```
index.html  → Welcome — a wordless arrow invites you in
gift.html   → A gift box that glows softly until tapped, opens, then an arrow continues
final.html  → The cake — a small spark button triggers confetti + balloons + hearts (repeatable)
```

Moving between pages fades out/in rather than hard-cutting.

## To personalize it

Open **`config.js`**:

```js
const CONFIG = {
  name: "Someone",
  welcomeHeading: "A moment,<br>just for",
  welcomeMessage: "Before the day gets away from you — one small thing, made with care.",
  giftMessage: "This isn't the gift. The gift is that someone thought of you today.",
  candles: 5
};
```

The `PAGES` array further down builds the small dot navigation on the right of every page — only touch it if you rename one of the HTML files.

## To preview locally

Open `index.html` in a browser and click through — no server required.

## To publish on GitHub Pages

1. Push `index.html`, `gift.html`, `final.html`, `style.css`, `script.js`, `config.js` to your repo's root.
2. **Settings → Pages → Source: Deploy from a branch → main / (root) → Save.**
3. Your link is `https://yourusername.github.io/repo-name/`.

## What's in it

- Three standalone pages, connected by a fade transition and a shared dot nav
- No text on any button — the welcome and gift pages use a wordless arrow icon-button; the gift box has an idle breathing glow so it invites tapping on its own; the final page's celebrate button is a small spark icon that dims (but stays clickable) after first use
- Aurora + twinkling stars + drifting clouds + ambient glow orbs on the welcome page
- Cursor-follow glow and subtle parallax (desktop only, skipped on touch devices)
- Gift box — lid lift, light burst, floating sparks, revealed message, then the Continue arrow fades in
- Cake with a candle count driven by `config.js`, floating hearts, confetti + balloons on the celebrate button
- Respects `prefers-reduced-motion`
- Poppins throughout, no emoji, no external icon font, no image assets to manage

## Notes for future edits

- Colors live in `:root` at the top of `style.css`.
- The wordless button style is the `.icon-btn` class in `style.css` — reuse it for any future button so the whole site stays consistent.
- There's no audio in this version. If you want a background track, drop an mp3 in the folder and ask for a toggle button to be wired up.
