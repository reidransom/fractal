# Development & content editing

This site is a Jekyll port of the HTML5 UP "Fractal" template, built with
[jigyll](https://github.com/reidransom/jigyll) (a gojekyll fork). Content is
edited through [Decap CMS](https://decapcms.org/) running in **local backend** mode.

## Editing content locally

Decap's local backend lets you edit content on your machine with no hosting,
authentication, or git remote. It runs a small proxy (`decap-server`) that the
admin UI talks to when the site is served on `localhost`; edits are written
straight to the working-tree files (you commit them yourself with git).

Run these in **two terminals** from the repo root:

```sh
# 1) Decap local backend proxy (listens on http://localhost:8081)
npx decap-server

# 2) The site
jigyll serve
```

Then open the admin UI at the `/admin/` path of the served site, e.g.
<http://localhost:4000/admin/> (use whatever host/port `jigyll serve` prints).

Requirements: Node.js (for `npx decap-server`) and `jigyll` on your PATH.

## What's editable

The CMS (`admin/config.yml`) exposes:

- **Pages** — `index.html` (home: intro/hero copy and buttons, features strip
  heading, CTA section) and `generic.md` (heading, hero image, Markdown body).
- **Site data** — `_data/*.yml`: feature icons, spotlight rows, labeled icons,
  and footer social links.
- **Site settings** — `_config.yml`: title, tagline, description, author, URLs,
  share image, copyright. (`plugins`/`exclude` are hidden fields so they survive
  a save — leave them alone unless you mean to change the build.)

### Notes / gotchas

- **`_data` files use an `items:` wrapper.** Decap file collections need a
  mapping at the root of a file, so all list files nest their array under
  `items:`. Templates loop over `site.data.<name>.items`.
- **Decap doesn't preserve YAML comments.** Saving `_config.yml` (or any data
  file) through the CMS will drop comments and may reorder keys. Values are
  preserved; the build is unaffected.
- **Icon classes** use Font Awesome syntax without the leading `icon` word,
  e.g. `solid fa-camera-retro`. The templates prepend `icon` automatically.

## Production / deploying the `/admin/` page

This repo is configured local-only, so there is no working production backend —
the `backend:` block in `admin/config.yml` is a placeholder. **Exclude `/admin/`
from the production deploy** until a real backend is wired up:

```sh
jigyll build
rm -rf _site/admin        # or: rsync -a --exclude='admin' _site/ <target>
```

When you later add an authenticated backend, replace the placeholder `backend:`
block, stop excluding `/admin/`, and editors can manage content in production.
