#!/usr/bin/env bash
# Call Bulk PageSpeed Insights and print the dataset as JSON.
# Usage: export APIFY_TOKEN=your_token   (never commit a token)
#        ./run_curl.sh

set -euo pipefail

if [[ -z "${APIFY_TOKEN:-}" ]]; then
  echo "Set APIFY_TOKEN in your environment. Do not hard-code it." >&2
  exit 1
fi

curl -sS -X POST \
  "https://api.apify.com/v2/acts/hillcountrybots~bulk-pagespeed-checker/run-sync-get-dataset-items?token=${APIFY_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"urls":["https://www.wikipedia.org/","https://web.dev/"],"strategy":"mobile"}'
