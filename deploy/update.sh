#!/bin/bash
# Redeploy after a code change: pull latest, rebuild, restart.
set -e
cd "$(dirname "$0")/.."
git pull
npm ci
npm run build
pm2 restart trackdots
echo "==> Updated and restarted."
