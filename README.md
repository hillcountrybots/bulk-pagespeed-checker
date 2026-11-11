# Bulk PageSpeed Insights Test (examples)

Run Google PageSpeed Insights on a whole list of URLs in one go. You get Lighthouse scores, lab speed metrics, real-user Core Web Vitals (LCP, INP, CLS), and the top fixes. Mobile, desktop, or both. No Google API key required (you can add your own if you want).

This repository is examples and docs for the hosted Actor. The Actor source is not published here.

**Store:** [apify.com/hillcountrybots/bulk-pagespeed-checker](https://apify.com/hillcountrybots/bulk-pagespeed-checker)  
**Website:** [hillcountrybots.com](https://hillcountrybots.com)  
**n8n node:** [n8n-nodes-hillcountrybots-bulk-pagespeed-checker](https://www.npmjs.com/package/n8n-nodes-hillcountrybots-bulk-pagespeed-checker)  
**Actor ID:** `hillcountrybots/bulk-pagespeed-checker`

Topics: `apify`, `apify-actor`, `pagespeed-insights`, `lighthouse`, `core-web-vitals`, `web-vitals`, `seo`, `performance`

## What it does

For each URL and device, Google runs Lighthouse on its own servers. You get one row with:

- Lighthouse scores (0-100): Performance, Accessibility, Best Practices, SEO
- Lab metrics: LCP, CLS, TBT, FCP, Speed Index, TTFB
- Real-user Core Web Vitals from the Chrome UX Report, when Google has enough traffic data
- The top 5 opportunities, sorted by estimated time savings
- A clear `status` and `errorCode` if a URL could not be tested (those rows are free)

To audit a whole site, first extract URLs with the [Sitemap URL Extractor](https://apify.com/hillcountrybots/sitemap-url-extractor), then paste the `url` column here.

## Pricing

**$3.00 per 1,000 successful audits** ($0.003 per `url-audited` event, one URL on one device). Checked on the live Store on November 11, 2026. Failed, invalid, and timed-out audits are free. 500 URLs on mobile and desktop is 1,000 audits, or $3.00.

## Example input

```json
{
  "urls": ["https://www.wikipedia.org/", "https://web.dev/"],
  "strategy": "mobile",
  "categories": ["performance", "accessibility", "best-practices", "seo"]
}
```

Set `strategy` to `both` if you want two rows (and two charges) per URL.

## Example output

A shortened row from a real run on November 10, 2026 (see `examples/output.json`):

```json
{
  "url": "https://www.wikipedia.org/",
  "strategy": "mobile",
  "scores": { "performance": 100, "accessibility": 94, "bestPractices": 100, "seo": 100 },
  "lab": { "lcpMs": 1221, "cls": 0.0005, "tbtMs": 0 },
  "fieldData": { "overallCategory": "FAST" },
  "status": "ok"
}
```

## How to run it

### Apify UI

Open [the Store page](https://apify.com/hillcountrybots/bulk-pagespeed-checker), paste URLs, choose a device, and click Start. Example tasks are linked from that page.

### API (curl)

```bash
export APIFY_TOKEN=your_token   # never commit this

curl -X POST "https://api.apify.com/v2/acts/hillcountrybots~bulk-pagespeed-checker/run-sync-get-dataset-items?token=$APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"urls":["https://www.wikipedia.org/"],"strategy":"mobile"}'
```

Use the async run endpoints for large batches. Scripts: `examples/run_curl.sh`, `examples/run_python.py`, `examples/run_js.mjs`.

### Python

```bash
pip install apify-client
export APIFY_TOKEN=your_token
python examples/run_python.py
```

### JavaScript

```bash
npm install apify-client
export APIFY_TOKEN=your_token
node examples/run_js.mjs
```

### MCP

Add `https://mcp.apify.com?tools=hillcountrybots/bulk-pagespeed-checker` as an MCP server.

### n8n, Make, Zapier, or a schedule

Install `n8n-nodes-hillcountrybots-bulk-pagespeed-checker`, or use Apify's official n8n, Make, or Zapier integrations with **your own token**. You can also schedule a weekly run in Apify Console.

## More tools

- [SEO Audit Tool](https://apify.com/hillcountrybots/seo-audit)
- [Sitemap URL Extractor](https://apify.com/hillcountrybots/sitemap-url-extractor)
- [Tech Stack Detector](https://apify.com/hillcountrybots/tech-stack-detector)
- [Bulk Domain Availability Checker](https://apify.com/hillcountrybots/domain-availability-checker)
- [Site Health Kit for Google Sheets](https://hillcountrybots.com/site-health-kit)

## Support

Hill Country Bots, Bee Cave, Texas. [hillcountrybots@proton.me](mailto:hillcountrybots@proton.me)

If a run fails, open an issue on the Actor's Issues tab. We reply within 2 business days (US Central).

## License

The examples and documentation in this repository are [MIT](LICENSE). The hosted Actor is a paid product on Apify and its source is not included here.
