# CrackIT — static HTML/CSS version

Plain HTML + CSS (with a small vanilla `app.js` for theme, menus and toggles).
No build step: open `index.html` in a browser, or serve the folder.

Live in this project at: `/static/index.html`

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Dashboard (new-user "Not Started" state) |
| `coding.html`, `aptitude.html`, `ai-mock-interview.html`, `resume-builder.html`, `analysis.html` | Feature pages |
| `profile.html`, `settings.html` | Profile and Settings (Light / Dark / System theme toggle) |
| `login.html` | Placeholder login page for the auth teammate |
| `styles.css` | All styling — CSS variables for light + dark themes |
| `app.js` | Theme persistence (`localStorage`), mobile sidebar, dropdowns, switches, toast |

## Connecting login

1. Build the real form in `login.html` (markup and classes are already styled).
2. On successful sign-in, redirect to `index.html`.
3. Protect pages by adding your own session check at the top of each page's `<script>` and redirecting to `login.html` when signed out.
4. The Logout button is wired in `app.js` — search for `.logout` and replace the toast with your sign-out + `window.location.href = "login.html"`.

## Theming

Colors live as CSS variables in `:root` (light) and `html.dark` (dark) in `styles.css`.
The selected theme is stored under the `crackit-theme` localStorage key.
