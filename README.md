# Maria K — Models in finance, made understandable

A calm, minimal personal-brand site for an established expert. **No framework, no
build step.** Plain HTML + one CSS file + one small JS file.

```
index.html     Home  — hero, credibility, focus areas, YouTube, writing topics
models.html    Models   — notes on building & testing models
money.html     Explain  — plain-language explanations (nav label: "Explain")
code.html      Technical — technical notes (nav label: "Technical")
courses.html   YouTube  — YouTube / learning themes (nav label: "YouTube")
about.html     About    — credentials, teaching philosophy, focus, links
styles.css     ALL styling (design tokens at the top)
main.js        theme toggle, mobile nav, active-page highlight, footer year
```

## Positioning

> I build, test, and explain models used in financial applications.

Credentials used throughout: **Associate Professor in ML/AI · Fellow CPA ·
Google-certified Cloud Architect**. The site directs visitors to YouTube (primary
content channel) and LinkedIn (professional).

## Structure

Every page shares an **identical sticky header and footer** — if you change a nav
link, update it in each file. Interior pages are a `.page-head` (kicker + H1 +
lead) followed by `.section` blocks. Content is presented as **topic rows**
(`.topic-row`) and **credential rows** (`.credential-row`), not cards.

The current page highlights automatically — `main.js` matches the file name in the
nav (`.nav-links`) and mobile drawer (`.mobile-nav`).

## Editing content

To add an item, copy one existing block and edit the text:

- **Topic** → copy a `.topic-row` (use an `<a class="topic-row">` to make it a link)
- **Credential / focus area** → copy a `.credential-row`
- **Simple list item** (About) → copy an `<li>` inside `.simple-list`

## Links

- **YouTube**: `https://www.youtube.com/@mariakruglov`
- **LinkedIn**: `https://www.linkedin.com/in/mariapr/`

These appear in the hero CTAs, the YouTube page, the About "Find me" links, and the
footer. To change one, edit the `href` in each file (each is marked with a `TODO`
comment near the hero CTAs).

## Changing the look

Open `styles.css` — every color, spacing, and font value is a variable at the top
under `:root` (light) and `:root[data-theme="dark"]` (dark). Change `--accent` to
recolor every link and highlight in one place. The palette is a restrained warm
paper / deep-slate scheme; shadows are avoided in favour of subtle borders and
whitespace.

## Running locally

Any static server works, e.g.:

```
python3 -m http.server
```

Then open http://localhost:8000

## Deploying to GitHub Pages

1. Push these files to a GitHub repo.
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch.**
3. Pick your branch and the `/ (root)` folder. Save.
4. Your site goes live at `https://<username>.github.io/<repo>/`.

To use a custom domain, add a `CNAME` file containing your domain and configure DNS.
