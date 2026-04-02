import { readFileSync, existsSync, writeFileSync, copyFileSync } from 'fs';
import { join, resolve as pathResolve } from 'path';
import { loadEnv, type Plugin } from 'vite';
import { SCHEMA_KNOWS_ABOUT, SEO_KEYWORD_PHRASES } from '../src/data/seoKeywords';

function trimSlash(u: string): string {
  return u.replace(/\/$/, '');
}

function normalizeUrl(u: string | undefined | null): string {
  const t = (u ?? '').trim();
  if (!t) return '';
  if (/^https?:\/\//i.test(t)) return trimSlash(t);
  return trimSlash(`https://${t.replace(/^\/\//, '')}`);
}

function vercelDeploymentOrigin(): string {
  const host = (process.env.VERCEL_URL ?? '').trim().replace(/^https?:\/\//i, '');
  return host ? `https://${host}` : '';
}

/**
 * Resolves public site origin for canonicals, Open Graph, JSON-LD, sitemap, and robots.
 * Override with VITE_SITE_URL; many hosts set VERCEL_URL, URL, RENDER_EXTERNAL_URL, etc.
 */
export function resolveSiteUrl(mode: string, cwd: string): string {
  let fileEnv: Record<string, string> = {};
  try {
    fileEnv = loadEnv(mode, cwd, '');
  } catch {
    fileEnv = {};
  }

  const fromProcess = (k: string) => String(process.env[k] ?? '').trim();

  const candidates: string[] = [
    fromProcess('VITE_SITE_URL'),
    String(fileEnv.VITE_SITE_URL ?? '').trim(),
    fromProcess('VERCEL_PROJECT_PRODUCTION_URL'),
    fromProcess('VERCEL_BRANCH_URL'),
    vercelDeploymentOrigin(),
    fromProcess('URL'),
    fromProcess('DEPLOY_PRIME_URL'),
    fromProcess('RENDER_EXTERNAL_URL'),
    fromProcess('CF_PAGES_URL'),
  ].map((c) => String(c ?? ''));

  for (const c of candidates) {
    const n = normalizeUrl(c);
    if (n) return n;
  }

  const siteJson = pathResolve(cwd, 'site.json');
  if (existsSync(siteJson)) {
    try {
      const j = JSON.parse(readFileSync(siteJson, 'utf-8')) as { url?: string };
      const n = normalizeUrl(j.url ?? '');
      if (n) return n;
    } catch {
      /* ignore */
    }
  }

  if (mode === 'development') {
    return 'http://localhost:3000';
  }

  console.warn(
    '[site-url] No VITE_SITE_URL or host URL found. Using http://localhost:3000 for this build. Set VITE_SITE_URL on your host (or add site.json { "url": "https://..." }) for correct SEO URLs.',
  );
  return 'http://localhost:3000';
}

export function siteUrlPlugin(mode: string, cwd: string): Plugin {
  return {
    name: 'site-url',
    transformIndexHtml(html) {
      const base = resolveSiteUrl(mode, cwd);
      let knowsJson: string;
      let keywordsJson: string;
      try {
        knowsJson = JSON.stringify(SCHEMA_KNOWS_ABOUT);
        keywordsJson = JSON.stringify(SEO_KEYWORD_PHRASES);
      } catch (e) {
        console.error('[site-url] JSON stringify failed for schema injection', e);
        knowsJson = '[]';
        keywordsJson = '[]';
      }
      return html
        .replace(/%SITE_URL%/g, base)
        .replace('%SCHEMA_KNOWS_ABOUT%', knowsJson)
        .replace('%SEO_KEYWORDS_JSON%', keywordsJson);
    },
    closeBundle() {
      try {
        const base = resolveSiteUrl(mode, cwd);
        const outDir = pathResolve(cwd, 'build');
        if (!existsSync(outDir)) return;
        writeFileSync(
          join(outDir, 'robots.txt'),
          [`User-agent: *`, `Allow: /`, ``, `Sitemap: ${base}/sitemap.xml`, ``].join('\n'),
          'utf-8',
        );
        writeFileSync(
          join(outDir, 'sitemap.xml'),
          [
            `<?xml version="1.0" encoding="UTF-8"?>`,
            `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
            `  <url>`,
            `    <loc>${base}/</loc>`,
            `    <changefreq>weekly</changefreq>`,
            `    <priority>1.0</priority>`,
            `  </url>`,
            `</urlset>`,
            ``,
          ].join('\n'),
          'utf-8',
        );
        const ogSrc = join(cwd, 'src/assets/a4d8ef0d87474662cd76e7630a7f78504b069b4d.png');
        if (existsSync(ogSrc)) {
          try {
            copyFileSync(ogSrc, join(outDir, 'opengraph.png'));
          } catch {
            /* ignore */
          }
        }
      } catch (e) {
        console.warn('[site-url] closeBundle skipped (non-fatal):', e);
      }
    },
  };
}
