# bosonbomb.github.io

My personal site — writing, reading list, and what I'm working on. Built with
[Astro](https://astro.build) and deployed to GitHub Pages via GitHub Actions.

Live at **https://bosonbomb.github.io**

## Writing content

All content lives as Markdown in `src/content/`:

| Folder                   | What it's for                         |
| :----------------------- | :------------------------------------ |
| `src/content/blog/`      | Blog posts                            |
| `src/content/books/`     | Reading list entries                  |
| `src/content/projects/`  | Things I'm working on / want to build |

### The easy way (browser, no setup)

This repo is wired up for [Pages CMS](https://pagescms.org). Go to
**https://app.pagescms.org**, sign in with GitHub, pick `BosonBomb.github.io`,
and you get a clean form UI to write posts, update the reading list, and manage
projects. Saving commits to `main`, which triggers a rebuild automatically.

### The manual way (local)

```sh
npm install
npm run dev      # http://localhost:4321
```

Add a Markdown file to the relevant folder. Frontmatter is validated by
`src/content.config.ts`, so if a field is missing the build will tell you.

## Commands

| Command           | Action                                     |
| :---------------- | :----------------------------------------- |
| `npm install`     | Install dependencies                       |
| `npm run dev`     | Local dev server at `localhost:4321`       |
| `npm run build`   | Build the production site to `./dist/`     |
| `npm run preview` | Preview the build locally                  |
| `npx astro check` | Typecheck the project                      |

## Deploy

Push to `main`. The workflow in `.github/workflows/deploy.yml` builds the site
and publishes it to GitHub Pages.

## Adding a photo

Drop a square image at `public/portrait.jpg` — it shows up on the home and about
pages automatically. If it's missing, a placeholder is shown instead.
