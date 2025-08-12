#!/bin/bash
set -e

# Cleanup
rm -rf dist
mkdir dist

# Build each package
echo "📦 Building MFE-BOOK-GENRES..."
yarn workspace mfe-book-genres build

echo "📦 Building MFE-BOOK-LIST..."
yarn workspace mfe-book-list build

echo "📦 Building MFE-CHECKOUT..."
yarn workspace mfe-checkout build

echo "📦 Building MFE-HEADER..."
yarn workspace mfe-header build

echo "📦 Building MFE-USER..."
yarn workspace mfe-user build

echo "📦 Building Shared Context..."
yarn workspace shared build

echo "📦 Building Host..."
yarn workspace host build

# Copy builds to correct subfolders
echo "📂 Copying builds..."
mkdir -p dist/mfe-book-genres
mkdir -p dist/mfe-book-list
mkdir -p dist/mfe-header
mkdir -p dist/mfe-user
mkdir -p dist/shared

cp -R packages/host/dist/* dist/
cp -R packages/mfe-book-genres/dist/* dist/mfe-book-genres/
cp -R packages/mfe-book-list/dist/* dist/mfe-book-list/
cp -R packages/mfe-header/dist/* dist/mfe-header/
cp -R packages/mfe-user/dist/* dist/mfe-user/
cp -R packages/shared/dist/* dist/shared/

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npx gh-pages -d dist -r https://x-access-token:${GH_TOKEN}@github.com/yadav-angad/mfe-shell-book-store.git

echo "✅ Deployment complete!"
