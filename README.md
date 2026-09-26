# Aydlett Insurance Agency - Redesign Website

Coastal independent insurance agency website built with React 19, Vite 6, and TypeScript. Optimized for high-speed delivery using **Cloudflare Workers Static Assets**.

---

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Preview local production build
npm run preview
```

---

## Production Build

```bash
npm run build
```

This compiles TypeScript (`tsc -b`) and runs Vite (`vite build`), outputting the fully static production assets to the `dist` directory.

---

## Cloudflare Deployment (Workers Static Assets)

This project is configured to deploy directly to **Cloudflare Workers** using the new **Static Assets** architecture.

### Configuration (`wrangler.jsonc`)

```jsonc
{
  "$schema": "./node_modules/wrangler/config-schema.json",
  "name": "aydlett-insurance-redesign",
  "compatibility_date": "2026-09-25",
  "assets": {
    "directory": "./dist",
    "not_found_handling": "single-page-application"
  }
}
```

- **Assets Directory:** `./dist`
- **SPA Routing:** `"not_found_handling": "single-page-application"` routes all client-side navigation requests cleanly to `index.html`.

### CLI Deployment Commands

1. **Verify deployment bundle (dry run):**
   ```bash
   npx wrangler deploy --dry-run
   ```

2. **Deploy to Cloudflare Workers:**
   ```bash
   npx wrangler deploy
   ```

### Cloudflare Dashboard (Workers Builds / Git Integration)

If connecting the GitHub repository (`hanseltrainerfit/aydlett-insurance-redesign`) directly via Cloudflare Workers Builds:

- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`
- **Root directory:** `/` (project root)
