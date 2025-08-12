#!/bin/bash
set -e

# ==============================
# CONFIG
# ==============================
REPO="yadav-angad/mfe-shell-book-store"
DEPLOY_DIR="dist"

# ==============================
# CLEANUP
# ==============================
rm -rf $DEPLOY_DIR
mkdir $DEPLOY_DIR

# ==============================
# BUILD MFEs
# ==============================
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

# Shared (only if it has a build step)
echo "📦 Building Shared Context..."
yarn workspace shared build

# ==============================
# BUILD HOST (after MFEs)
# ==============================
echo "📦 Building Host..."
yarn workspace host build

# ==============================
# COPY BUILDS TO DEPLOY DIR
# ==============================
echo "📂 Copying builds..."
mkdir -p $DEPLOY_DIR/host
mkdir -p $DEPLOY_DIR/mfe-book-genres
mkdir -p $DEPLOY_DIR/mfe-book-list
mkdir -p $DEPLOY_DIR/mfe-checkout
mkdir -p $DEPLOY_DIR/mfe-header
mkdir -p $DEPLOY_DIR/mfe-user

cp -R host/dist/* $DEPLOY_DIR/host/
cp -R mfe-book-genres/dist/* $DEPLOY_DIR/mfe-book-genres/
cp -R mfe-book-list/dist/* $DEPLOY_DIR/mfe-book-list/
cp -R mfe-checkout/dist/* $DEPLOY_DIR/mfe-checkout/
cp -R mfe-header/dist/* $DEPLOY_DIR/mfe-header/
cp -R mfe-user/dist/* $DEPLOY_DIR/mfe-user/

# ==============================
# DEPLOY TO GH PAGES
# ==============================
echo "🚀 Deploying to GitHub Pages..."
npx gh-pages -d $DEPLOY_DIR -r https://x-access-token:${GITHUB_TOKEN}@github.com/$REPO.git

echo "✅ Deployment complete!"
