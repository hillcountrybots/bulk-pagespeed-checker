#!/usr/bin/env python3
"""Call Bulk PageSpeed Insights on Apify and print each dataset row.

Install:  pip install apify-client
Usage:    export APIFY_TOKEN=your_token   (never commit a token)
          python run_python.py
"""

import os
import sys

from apify_client import ApifyClient

TOKEN = os.environ.get("APIFY_TOKEN")
if not TOKEN:
    sys.exit("Set APIFY_TOKEN in your environment. Do not hard-code it.")

client = ApifyClient(TOKEN)

run = client.actor("hillcountrybots/bulk-pagespeed-checker").call(run_input={"urls": ["https://www.wikipedia.org/", "https://web.dev/"], "strategy": "mobile"})

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
