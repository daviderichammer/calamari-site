#!/bin/bash
# Calamari Trading - Production Deployment Script
# Handles Next.js standalone output correctly

set -e

SITE_DIR="/var/www/calamaritrading.ai"

echo "=== Calamari Trading Deployment ==="
echo "Working directory: $SITE_DIR"
cd "$SITE_DIR"

# Pull latest changes
echo "--- Pulling latest code ---"
git pull origin main

# Install dependencies
echo "--- Installing dependencies ---"
npm ci --production=false

# Build
echo "--- Building Next.js app ---"
npm run build

# Copy static assets to standalone output (REQUIRED for standalone mode)
echo "--- Copying static assets to standalone output ---"
cp -r .next/static .next/standalone/.next/static

# Copy public folder to standalone output (REQUIRED for standalone mode)
echo "--- Copying public folder to standalone output ---"
cp -r public .next/standalone/public

echo "--- Restarting service ---"
systemctl restart calamari-site

echo "--- Waiting for service to start ---"
sleep 3

echo "--- Service status ---"
systemctl status calamari-site --no-pager | head -20

echo "=== Deployment complete ==="
