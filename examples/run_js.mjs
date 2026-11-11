#!/usr/bin/env node
/**
 * Call Bulk PageSpeed Insights on Apify and print each dataset row.
 *
 * Install:  npm install apify-client
 * Usage:    export APIFY_TOKEN=your_token   (never commit a token)
 *           node run_js.mjs
 */

import { ApifyClient } from "apify-client";

const token = process.env.APIFY_TOKEN;
if (!token) {
  console.error("Set APIFY_TOKEN in your environment. Do not hard-code it.");
  process.exit(1);
}

const client = new ApifyClient({ token });

const run = await client.actor("hillcountrybots/bulk-pagespeed-checker").call({ urls: ["https://www.wikipedia.org/", "https://web.dev/"], strategy: "mobile" });

const { items } = await client.dataset(run.defaultDatasetId).listItems();
for (const item of items) {
  console.log(item);
}
