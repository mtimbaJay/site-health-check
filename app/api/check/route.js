import { extractTitleAndDescription } from '../../../lib/scrape';

export async function POST(req) {
  try {
    const { url } = await req.json?.() ?? {};
    if (!url || typeof url !== 'string') {
      return new Response(JSON.stringify({ error: 'Invalid URL' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Basic URL validation
    let fetchUrl;
    try {
      const parsed = new URL(url.startsWith('http') ? url : `https://${url}`);
      if (!/^https?:$/.test(parsed.protocol)) throw new Error('Invalid protocol');
      fetchUrl = parsed.toString();
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Invalid URL format' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    const start = Date.now();
    const res = await fetch(fetchUrl, {
      signal: controller.signal,
      redirect: 'follow',
      headers: { 'User-Agent': 'site-health-check/1.0 (+https://github.com/mtimbaJay/site-health-check)' },
    });
    clearTimeout(timeout);
    const durationMs = Date.now() - start;
    const status = res.status;

    let title = '';
    let description = '';
    const contentType = res.headers.get('content-type') || '';
    if (contentType.includes('text/html')) {
      const html = await res.text();
      const meta = extractTitleAndDescription(html);
      title = meta.title;
      description = meta.description;
    }

    return new Response(
      JSON.stringify({ ok: res.ok, status, durationMs, title, description, url: fetchUrl }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (e) {
    const err = e;
    const message = err && err.name === 'AbortError' ? 'Request timed out' : (err && err.message) || String(err);
    return new Response(JSON.stringify({ error: message }), { status: 502, headers: { 'Content-Type': 'application/json' } });
  }
}