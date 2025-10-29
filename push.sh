#!/usr/bin/env bash
set -e
REPO_URL="${1:-https://github.com/Linus51/dprw.git}"
git remote remove origin 2>/dev/null || true
git remote add origin "$REPO_URL"
git fetch origin || true
git branch -M main
git push -u origin main
echo "Pushed to $REPO_URL"
