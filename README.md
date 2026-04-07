# lusse-lists

A small markdown-powered lists app.

## How it works

- Put markdown files in `src/lists`.
- Each file becomes a page at `/<listname>`.
- The left menu is generated automatically from those files.

Examples:

- `src/lists/welcome.md` -> `/welcome`
- `src/lists/packing-list.md` -> `/packing-list`

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Netlify

This repo is set up for Netlify SPA hosting.

- publish directory: `dist`
- build command: `npm run build`
- client-side routes are handled via `public/_redirects` and `netlify.toml`

## Next

Add more markdown files to `src/lists` and deploy when ready.
